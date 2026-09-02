import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const output = path.join(root, 'dist');
const baseline = process.env.GATSBY_BASELINE;
const failures = [];
let summary = 'SEO build verification completed.';
const packageJson = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'));

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

function relativeFiles(directory) {
  return walk(directory).map((file) => path.relative(directory, file).replaceAll(path.sep, '/'));
}

function htmlAttribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, 'i'))?.[1];
}

function decodeEntities(value) {
  return value
    ?.replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function metadata(html) {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  const value = (key) => {
    const tag = tags.find((candidate) =>
      [htmlAttribute(candidate, 'name'), htmlAttribute(candidate, 'property')].includes(key)
    );
    return tag ? decodeEntities(htmlAttribute(tag, 'content')) : undefined;
  };

  return {
    canonical: decodeEntities(html.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1]),
    title: decodeEntities(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]),
    description: value('description'),
    ogTitle: value('og:title'),
    ogDescription: value('og:description'),
    ogImage: value('og:image'),
    ogType: value('og:type'),
    ogUrl: value('og:url'),
    robots: value('robots'),
    twitterTitle: value('twitter:title'),
    twitterDescription: value('twitter:description'),
    twitterImage: value('twitter:image')
  };
}

function topicSlug(value) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

const voidElements = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
]);

function validateEmbeddedHtml(source, file) {
  const html = source
    .replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[ \t]*$/gm, '')
    .replace(/`[^`\n]*`/g, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  const stack = [];

  for (const match of html.matchAll(/<\/?([a-z][\w:-]*)\b[^>]*>/gi)) {
    const tag = match[1].toLowerCase();
    const closing = match[0].startsWith('</');
    const selfClosing = match[0].endsWith('/>') || voidElements.has(tag);
    const line = html.slice(0, match.index).split('\n').length;

    if (closing) {
      const open = stack.pop();
      assert(Boolean(open), `${file}:${line}: unexpected closing </${tag}>`);
      if (open) assert(open.tag === tag, `${file}:${line}: expected </${open.tag}>, found </${tag}>`);
    } else if (!selfClosing) {
      stack.push({ line, tag });
    }
  }

  for (const open of stack) {
    assert(false, `${file}:${open.line}: unclosed <${open.tag}>`);
  }
}

assert(existsSync(output), 'dist/ is missing; run npm run build first');
assert(
  packageJson.scripts?.deploy?.includes('--nojekyll'),
  'deploy must pass --nojekyll so GitHub Pages serves the _astro directory'
);

if (existsSync(output)) {
  const blogDirectories = readdirSync(path.join(root, 'src/data/blog'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  const blogRecords = blogDirectories.map((slug) => ({
    slug,
    frontmatter: matter(readFileSync(path.join(root, `src/data/blog/${slug}/index.md`), 'utf8')).data
  }));
  const publishedBlogs = blogRecords.filter((record) => record.frontmatter.published === true);
  const topicCounts = new Map();
  for (const tag of publishedBlogs.flatMap((record) => record.frontmatter.tags || [])) {
    const slug = topicSlug(tag);
    topicCounts.set(slug, (topicCounts.get(slug) || 0) + 1);
  }
  const topicSlugs = [...topicCounts.entries()]
    .filter(([, count]) => count >= 2)
    .map(([slug]) => slug)
    .sort();

  for (const slug of blogDirectories) {
    const relativeSource = `src/data/blog/${slug}/index.md`;
    validateEmbeddedHtml(readFileSync(path.join(root, relativeSource), 'utf8'), relativeSource);
  }

  const expectedHtml = [
    '404.html',
    'about/index.html',
    'blog/index.html',
    'contact/index.html',
    'expertise/cyber-resilience-act/index.html',
    'expertise/index.html',
    'expertise/offensive-security/index.html',
    'expertise/secure-by-design/index.html',
    'index.html',
    'resume/index.html',
    'speaking-contributions/index.html',
    ...publishedBlogs.map((record) => `blog/${record.slug}/index.html`),
    ...topicSlugs.map((slug) => `blog/topics/${slug}/index.html`)
  ].sort();
  const actualHtml = relativeFiles(output)
    .filter((file) => file.endsWith('.html'))
    .sort();
  summary = `Verification passed: ${actualHtml.length} HTML routes, ${publishedBlogs.length} published articles, ${topicSlugs.length} topic pages, static rendering, SEO metadata, sitemap, feeds, CNAME and local links.`;

  assert(
    JSON.stringify(actualHtml) === JSON.stringify(expectedHtml),
    `HTML route set differs. Expected ${expectedHtml.length}, found ${actualHtml.length}`
  );
  assert(readFileSync(path.join(output, 'CNAME'), 'utf8').trim() === 'www.riccardosirigu.com', 'CNAME differs');
  assert(existsSync(path.join(output, 'manifest.webmanifest')), 'manifest.webmanifest is missing');
  assert(existsSync(path.join(output, 'sitemap.xml')), 'sitemap.xml is missing');
  assert(existsSync(path.join(output, 'rss.xml')), 'rss.xml is missing');
  assert(existsSync(path.join(output, 'llms.txt')), 'llms.txt is missing');
  assert(existsSync(path.join(output, 'robots.txt')), 'robots.txt is missing');
  assert(!existsSync(path.join(output, '404', 'index.html')), '404/index.html must not be generated');

  const robots = readFileSync(path.join(output, 'robots.txt'), 'utf8');
  assert(robots.includes('User-agent: OAI-SearchBot'), 'robots.txt must define OAI-SearchBot');
  assert(robots.includes('User-agent: GPTBot\nDisallow: /'), 'robots.txt must preserve the GPTBot training opt-out');
  assert(
    robots.includes('Sitemap: https://www.riccardosirigu.com/sitemap.xml'),
    'robots.txt must advertise sitemap.xml'
  );

  const rss = readFileSync(path.join(output, 'rss.xml'), 'utf8');
  assert((rss.match(/<item>/g) || []).length === publishedBlogs.length, 'RSS must contain every published article');

  const llms = readFileSync(path.join(output, 'llms.txt'), 'utf8');
  for (const authorityRoute of [
    '/about/',
    '/expertise/',
    '/expertise/cyber-resilience-act/',
    '/expertise/offensive-security/',
    '/expertise/secure-by-design/',
    '/speaking-contributions/'
  ]) {
    assert(llms.includes(authorityRoute), `llms.txt must include ${authorityRoute}`);
  }
  for (const record of blogRecords.filter((item) => !item.frontmatter.published)) {
    assert(!llms.includes(`/blog/${record.slug}/`), `Draft article ${record.slug} must not appear in llms.txt`);
  }

  const sitemap = readFileSync(path.join(output, 'sitemap.xml'), 'utf8');
  const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert(
    sitemapUrls.length === expectedHtml.length - 1,
    `Sitemap should contain ${expectedHtml.length - 1} URLs, found ${sitemapUrls.length}`
  );
  assert(!sitemap.includes('/404/'), 'Sitemap must not contain the 404 route');
  assert(!/<(?:changefreq|priority)>/i.test(sitemap), 'Sitemap must not contain ignored changefreq or priority values');
  for (const record of blogRecords.filter((item) => !item.frontmatter.published)) {
    assert(!sitemap.includes(`/blog/${record.slug}/`), `Draft article ${record.slug} must not appear in sitemap`);
  }

  for (const relativeHtml of actualHtml) {
    const file = path.join(output, relativeHtml);
    const html = readFileSync(file, 'utf8');
    const meta = metadata(html);

    for (const [key, value] of Object.entries(meta)) {
      assert(Boolean(value), `${relativeHtml}: missing ${key}`);
    }
    assert(meta.canonical === meta.ogUrl, `${relativeHtml}: canonical and og:url must match`);
    const h1Count = (html.match(/<h1\b/gi) || []).length;
    assert(h1Count === 1, `${relativeHtml}: expected exactly one h1, found ${h1Count}`);
    assert(!/<astro-island\b/i.test(html), `${relativeHtml}: static page should not contain hydrated Astro islands`);
    assert(/<script[^>]+application\/ld\+json/i.test(html), `${relativeHtml}: missing JSON-LD`);
    const jsonLdSources = [...html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)];
    const graphEntries = [];
    for (const source of jsonLdSources) {
      try {
        const jsonLd = JSON.parse(source[1]);
        graphEntries.push(...(jsonLd['@graph'] || []));
        assert(jsonLd['@context'] === 'https://schema.org', `${relativeHtml}: JSON-LD must use https://schema.org`);
        if (
          relativeHtml.startsWith('blog/') &&
          !relativeHtml.startsWith('blog/topics/') &&
          relativeHtml !== 'blog/index.html'
        ) {
          assert(
            jsonLd['@graph']?.some((entry) => entry['@type'] === 'BlogPosting'),
            `${relativeHtml}: missing BlogPosting schema`
          );
          assert(meta.ogType === 'article', `${relativeHtml}: article must use og:type=article`);
        }
      } catch (error) {
        assert(false, `${relativeHtml}: invalid JSON-LD (${error.message})`);
      }
    }
    if (
      relativeHtml === 'about/index.html' ||
      relativeHtml === 'expertise/index.html' ||
      relativeHtml.startsWith('expertise/') ||
      relativeHtml === 'speaking-contributions/index.html'
    ) {
      assert(
        graphEntries.some((entry) => entry['@type'] === 'BreadcrumbList'),
        `${relativeHtml}: authority page must include BreadcrumbList schema`
      );
    }
    if (relativeHtml === 'about/index.html') {
      const person = graphEntries.find((entry) => entry['@type'] === 'Person');
      const profile = graphEntries.find((entry) => entry['@type'] === 'ProfilePage');
      assert(Boolean(profile?.mainEntity?.['@id']), 'about/index.html: ProfilePage must identify its main person');
      assert(person?.url === 'https://www.riccardosirigu.com/about/', 'about/index.html: Person must use the About URL');
      assert(person?.worksFor?.name === 'Abissi', 'about/index.html: Person must identify the current organization');
      assert(person?.knowsAbout?.length >= 5, 'about/index.html: Person must include core expertise areas');
      assert(
        person?.sameAs?.includes('https://genai.owasp.org/team/riccardo-sirigu/'),
        'about/index.html: Person must include independent professional profiles'
      );
    }
    assert(/rel=["']manifest["'][^>]+\/manifest\.webmanifest/i.test(html), `${relativeHtml}: missing manifest link`);

    const localReferences = [...html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)]
      .map((match) => match[1])
      .filter((reference) => reference.startsWith('/') && !reference.startsWith('//'));

    for (const reference of localReferences) {
      const pathname = decodeURIComponent(reference.split(/[?#]/)[0]);
      if (!pathname || pathname === '/') continue;
      const target = path.join(output, pathname);
      const candidates = pathname.endsWith('/')
        ? [path.join(target, 'index.html')]
        : [target, `${target}.html`, path.join(target, 'index.html')];
      assert(candidates.some(existsSync), `${relativeHtml}: broken local reference ${reference}`);
    }

    if (baseline) {
      const baselineFile = path.join(baseline, relativeHtml);
      if (existsSync(baselineFile) && statSync(baselineFile).isFile()) {
        const oldMeta = metadata(readFileSync(baselineFile, 'utf8'));
        for (const key of ['title', 'description', 'ogTitle', 'ogDescription', 'twitterTitle', 'twitterDescription']) {
          assert(meta[key] === oldMeta[key], `${relativeHtml}: ${key} differs from Gatsby`);
        }
      }
    }
  }
}

if (failures.length) {
  console.error(`Verification failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(summary);
  if (baseline) console.log(`Gatsby metadata parity passed against ${baseline}.`);
}
