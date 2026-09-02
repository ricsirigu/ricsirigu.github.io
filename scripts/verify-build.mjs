import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const output = path.join(root, 'dist');
const baseline = process.env.GATSBY_BASELINE;
const failures = [];
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
      [htmlAttribute(candidate, 'name'), htmlAttribute(candidate, 'property')].includes(key),
    );
    return tag ? decodeEntities(htmlAttribute(tag, 'content')) : undefined;
  };

  return {
    title: decodeEntities(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]),
    description: value('description'),
    ogTitle: value('og:title'),
    ogDescription: value('og:description'),
    ogImage: value('og:image'),
    twitterTitle: value('twitter:title'),
    twitterDescription: value('twitter:description'),
    twitterImage: value('twitter:image'),
  };
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
  'wbr',
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
  'deploy must pass --nojekyll so GitHub Pages serves the _astro directory',
);

if (existsSync(output)) {
  const blogDirectories = readdirSync(path.join(root, 'src/data/blog'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  for (const slug of blogDirectories) {
    const relativeSource = `src/data/blog/${slug}/index.md`;
    validateEmbeddedHtml(readFileSync(path.join(root, relativeSource), 'utf8'), relativeSource);
  }

  const expectedHtml = [
    '404.html',
    '404/index.html',
    'blog/index.html',
    'contact/index.html',
    'index.html',
    'resume/index.html',
    ...blogDirectories.map((slug) => `blog/${slug}/index.html`),
  ].sort();
  const actualHtml = relativeFiles(output).filter((file) => file.endsWith('.html')).sort();

  assert(
    JSON.stringify(actualHtml) === JSON.stringify(expectedHtml),
    `HTML route set differs. Expected ${expectedHtml.length}, found ${actualHtml.length}`,
  );
  assert(readFileSync(path.join(output, 'CNAME'), 'utf8').trim() === 'www.riccardosirigu.com', 'CNAME differs');
  assert(existsSync(path.join(output, 'manifest.webmanifest')), 'manifest.webmanifest is missing');
  assert(existsSync(path.join(output, 'sitemap.xml')), 'sitemap.xml is missing');

  const sitemap = readFileSync(path.join(output, 'sitemap.xml'), 'utf8');
  const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert(sitemapUrls.length === expectedHtml.length - 2, `Sitemap should contain 24 URLs, found ${sitemapUrls.length}`);
  assert(!sitemap.includes('/404/'), 'Sitemap must not contain the 404 route');

  for (const relativeHtml of actualHtml) {
    const file = path.join(output, relativeHtml);
    const html = readFileSync(file, 'utf8');
    const meta = metadata(html);

    for (const [key, value] of Object.entries(meta)) {
      assert(Boolean(value), `${relativeHtml}: missing ${key}`);
    }
    assert(/<script[^>]+application\/ld\+json/i.test(html), `${relativeHtml}: missing JSON-LD`);
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
  console.log(
    `Verification passed: 25 routes, 26 HTML entry files, embedded article HTML, SEO metadata, sitemap, CNAME and local links.`,
  );
  if (baseline) console.log(`Gatsby metadata parity passed against ${baseline}.`);
}
