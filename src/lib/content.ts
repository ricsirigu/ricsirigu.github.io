import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';

import { coverImages, inlineImages } from './imageManifest';

loadLanguages(['graphql', 'javascript', 'markup', 'scala']);

export interface Frontmatter {
  category: string;
  [key: string]: unknown;
}

export interface ContentRecord<T = Frontmatter> {
  id: string;
  html: string;
  frontmatter: T;
  sourcePath: string;
}

export interface BlogFrontmatter extends Frontmatter {
  category: 'blog';
  cover: string;
  date: string;
  description: string;
  published: boolean;
  tags: string[];
  title: string;
}

export interface BlogPost {
  excerpt: string;
  fields: { slug: string };
  frontmatter: BlogFrontmatter & { coverImage?: ResponsiveImage; coverUrl?: string; formattedDate: string };
  html: string;
  id: string;
}

export interface ResponsiveImage {
  height: number;
  sizes: string;
  srcSet: string;
  url: string;
  webpSrcSet?: string;
  width: number;
}

function renderCode(code: string, language: string): string {
  const grammar = language && Prism.languages[language];
  const highlighted: string = grammar
    ? Prism.highlight(code, grammar, language)
    : code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const className = language ? `language-${language}` : '';

  return `<div class="gatsby-highlight" data-language="${language}"><pre class="${className}"><code class="${className}">${highlighted}</code></pre></div>`;
}

const markdown = new MarkdownIt({
  breaks: false,
  html: true,
  linkify: false,
  typographer: false,
});

markdown.renderer.rules.fence = (tokens: Array<{ content: string; info: string }>, index: number) => {
  const language = tokens[index].info.trim().split(/\s+/)[0] || '';
  return renderCode(tokens[index].content.replace(/\n$/, ''), language);
};

markdown.renderer.rules.code_inline = (tokens: Array<{ content: string }>, index: number) =>
  `<code class="language-text">${markdown.utils.escapeHtml(tokens[index].content)}</code>`;

const dataRoot = path.resolve(process.cwd(), 'src/data');
const legacyEmojiNames = new Set([
  'notebook_with_decorative_cover',
  'pencil2',
  'raised_hands',
  'simple_smile',
  'smile',
  'sunglasses',
  'sweat_smile',
]);

function replaceLegacyEmojis(source: string): string {
  return source.replace(/:([a-z0-9_+-]+):/gi, (match, name: string) => {
    if (!legacyEmojiNames.has(name)) return match;
    return `<img alt="emoji-${name}" data-icon="emoji-${name}" style="display: inline; margin: 0; margin-top: 1px; top: 5px; width: 25px" src="/emojis/emoji-${name}.png" title="emoji-${name}">`;
  });
}

function imageDimensions(file: string): { height: number; width: number } | undefined {
  const buffer = fs.readFileSync(file);

  if (buffer.toString('hex', 0, 8) === '89504e470d0a1a0a') {
    return { height: buffer.readUInt32BE(20), width: buffer.readUInt32BE(16) };
  }

  if (buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') {
    const format = buffer.toString('ascii', 12, 16);
    if (format === 'VP8 ') {
      return { height: buffer.readUInt16LE(28) & 0x3fff, width: buffer.readUInt16LE(26) & 0x3fff };
    }
    if (format === 'VP8L') {
      const bits = buffer.readUInt32LE(21);
      return { height: ((bits >> 14) & 0x3fff) + 1, width: (bits & 0x3fff) + 1 };
    }
  }

  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset < buffer.length - 9) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = buffer[offset + 1];
      if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
        return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
      }
      offset += 2 + buffer.readUInt16BE(offset + 2);
    }
  }

  return undefined;
}

function responsiveImage(url: string): ResponsiveImage {
  const sourceFile = path.join(process.cwd(), 'static', url.replace(/^\//, ''));
  const directory = path.dirname(path.dirname(sourceFile));
  const publicDirectory = path.posix.dirname(path.posix.dirname(url));
  const basename = path.basename(url, path.extname(url));
  const candidates = fs.readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== '47498')
    .flatMap((entry) => {
      const entryDirectory = path.join(directory, entry.name);
      return fs.readdirSync(entryDirectory)
        .filter((file) => path.basename(file, path.extname(file)) === basename)
        .map((file) => {
          const absolutePath = path.join(entryDirectory, file);
          return {
            extension: path.extname(file).toLowerCase(),
            url: `${publicDirectory}/${entry.name}/${file}`,
            width: imageDimensions(absolutePath)?.width,
          };
        });
    })
    .filter((candidate): candidate is { extension: string; url: string; width: number } => Boolean(candidate.width));

  const sourceDimensions = imageDimensions(sourceFile);
  const sourceWidth = sourceDimensions?.width || Math.max(...candidates.map((candidate) => candidate.width));
  const buildSrcSet = (extensions: string[]) => candidates
    .filter((candidate) => extensions.includes(candidate.extension))
    .sort((left, right) => left.width - right.width)
    .map((candidate) => `${candidate.url} ${candidate.width}w`)
    .join(', ');

  return {
    height: sourceDimensions?.height || sourceWidth,
    sizes: `(min-width: ${sourceWidth}px) ${sourceWidth}px, 100vw`,
    srcSet: buildSrcSet(['.jpg', '.jpeg', '.png']),
    url,
    webpSrcSet: buildSrcSet(['.webp']) || undefined,
    width: sourceWidth,
  };
}

function markdownFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? markdownFiles(entryPath) : entryPath.endsWith('.md') ? [entryPath] : [];
  });
}

function replaceLegacyImageUrls(html: string, route: string): string {
  const replacements = inlineImages[route];
  if (!replacements) return html;

  return html.replace(/(<img\b[^>]*\bsrc=["'])([^"']+)(["'])/gi, (match, before, source, after) => {
    const replacement = replacements[path.basename(source)];
    if (!replacement) return match;

    const image = responsiveImage(replacement);
    const originalFile = path.join(dataRoot, route.replace(/^\/|\/$/g, ''), path.basename(source));
    const originalDimensions = fs.existsSync(originalFile) ? imageDimensions(originalFile) : undefined;
    const legacyRatioWidth = 768;
    const legacyRatioHeight = originalDimensions
      ? Math.round((originalDimensions.height * legacyRatioWidth / originalDimensions.width) / 4) * 4
      : image.height;

    return `${before}${image.url}${after} class="gatsby-resp-image-image" srcset="${image.srcSet}" sizes="(max-width: ${image.width}px) 100vw, ${image.width}px" width="${image.width}" height="${image.height}" style="aspect-ratio: ${legacyRatioWidth} / ${legacyRatioHeight}"`;
  });
}

function loadRecords(): ContentRecord[] {
  return markdownFiles(dataRoot).map((sourcePath) => {
    const source = fs.readFileSync(sourcePath, 'utf8');
    const parsed = matter(source);
    const relativePath = path.relative(dataRoot, sourcePath);
    const id = relativePath.replace(/\/index\.md$/, '').replace(/\\/g, '/');
    const frontmatter = parsed.data as Frontmatter;
    const route = frontmatter.category === 'blog' ? `/blog/${path.basename(path.dirname(sourcePath))}/` : '';

    return {
      id,
      html: replaceLegacyImageUrls(markdown.render(replaceLegacyEmojis(parsed.content)), route),
      frontmatter,
      sourcePath,
    };
  });
}

const records = loadRecords();

export function getSection<T>(category: string): T {
  const record = records.find((item) => item.frontmatter.category === category);
  if (!record) throw new Error(`Missing Markdown section: ${category}`);
  return record.frontmatter as T;
}

export function getItems<T>(category: string, order: 'asc' | 'desc' = 'asc'): ContentRecord<T>[] {
  return records
    .filter((item) => item.frontmatter.category === category)
    .sort((left, right) => left.sourcePath.localeCompare(right.sourcePath) * (order === 'asc' ? 1 : -1)) as ContentRecord<T>[];
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00Z`));
}

export function getBlogPosts(): BlogPost[] {
  return getItems<BlogFrontmatter>('blog')
    .map((record) => {
      const slug = `/blog/${path.basename(path.dirname(record.sourcePath))}/`;
      const plainText = record.html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const coverUrl = coverImages[slug];

      return {
        excerpt: plainText.slice(0, 160),
        fields: { slug },
        frontmatter: {
          ...record.frontmatter,
          coverImage: coverUrl ? responsiveImage(coverUrl) : undefined,
          coverUrl,
          formattedDate: formatDate(record.frontmatter.date),
        },
        html: record.html,
        id: record.id,
      };
    })
    .sort((left, right) => right.frontmatter.date.localeCompare(left.frontmatter.date));
}
