import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';

import { getCollection, type CollectionEntry } from 'astro:content';

loadLanguages(['graphql', 'javascript', 'markup', 'scala']);

export interface Frontmatter {
  category: string;
  [key: string]: unknown;
}

export interface ContentRecord<T = Frontmatter> {
  headings?: BlogHeading[];
  id: string;
  html: string;
  frontmatter: T;
  sourcePath: string;
}

export interface BlogHeading {
  depth: number;
  id: string;
  text: string;
}

export type BlogPost = CollectionEntry<'blog'> & {
  fields: { slug: string };
  formattedDate: string;
};

export interface LegacyBlogPost {
  excerpt: string;
  fields: { slug: string };
  frontmatter: {
    title: string;
    description: string;
    date: string;
    formattedDate: string;
    seoTitle?: string;
    updated?: string;
    tags: string[];
    published: boolean;
  };
  html: string;
  headings: BlogHeading[];
  id: string;
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
  typographer: false
});

function slugify(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function stripLegacyArticleWrapper(html: string): string {
  return html
    .replace(/^\s*<article\b[^>]*>/i, '')
    .replace(/<\/article>\s*$/i, '')
    .trim();
}

markdown.renderer.rules.fence = (tokens: Array<{ content: string; info: string }>, index: number) => {
  const language = tokens[index].info.trim().split(/\s+/)[0] || '';
  return renderCode(tokens[index].content.replace(/\n$/, ''), language);
};

markdown.renderer.rules.code_inline = (tokens: Array<{ content: string }>, index: number) =>
  `<code class="language-text">${markdown.utils.escapeHtml(tokens[index].content)}</code>`;

const dataRoot = path.resolve(process.cwd(), 'src/data');

function markdownFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? markdownFiles(entryPath) : entryPath.endsWith('.md') ? [entryPath] : [];
  });
}

function loadRecords(): ContentRecord[] {
  return markdownFiles(dataRoot).map((sourcePath) => {
    const source = fs.readFileSync(sourcePath, 'utf8');
    const parsed = matter(source);
    const relativePath = path.relative(dataRoot, sourcePath);
    const id = relativePath.replace(/\/index\.md$/, '').replace(/\\/g, '/');
    const frontmatter = parsed.data as Frontmatter;
    const renderedHtml = markdown.render(parsed.content);

    return {
      id,
      html: renderedHtml,
      frontmatter,
      headings: [],
      sourcePath
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
    .sort(
      (left, right) => left.sourcePath.localeCompare(right.sourcePath) * (order === 'asc' ? 1 : -1)
    ) as ContentRecord<T>[];
}

export function formatDate(date: string | Date): string {
  const value = date instanceof Date ? date.toISOString().slice(0, 10) : date;
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    timeZone: 'UTC',
    year: 'numeric'
  }).format(new Date(`${value}T00:00:00Z`));
}

export function blogSlug(post: Pick<BlogPost, 'id'>): string {
  return `/blog/${post.id.split('/').at(-1)}/`;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog');

  return posts
    .map((post) => ({
      ...post,
      fields: { slug: blogSlug(post) },
      formattedDate: formatDate(post.data.date)
    }))
    .sort((left, right) => right.data.date.getTime() - left.data.date.getTime());
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const posts = await getBlogPosts();

  return posts.filter((post) => post.data.published);
}

export function toLegacyBlogPost(post: BlogPost, html: string, headings: BlogHeading[]): LegacyBlogPost {
  const plainText = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return {
    excerpt: plainText.slice(0, 160),
    fields: { slug: post.fields.slug },
    frontmatter: {
      title: post.data.title,
      description: post.data.description,
      date: post.data.date.toISOString().slice(0, 10),
      formattedDate: post.formattedDate,
      seoTitle: post.data.seoTitle,
      updated: post.data.updated?.toISOString().slice(0, 10),
      tags: post.data.tags,
      published: post.data.published
    },
    html,
    headings,
    id: post.id
  };
}

export function topicSlug(topic: string): string {
  return slugify(topic);
}

export async function getBlogTopics(): Promise<Array<{ count: number; name: string; slug: string }>> {
  const posts = await getPublishedBlogPosts();
  const counts = new Map<string, { count: number; name: string }>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = topicSlug(tag);
      const current = counts.get(slug);
      counts.set(slug, { count: (current?.count || 0) + 1, name: current?.name || tag });
    }
  }

  return [...counts.entries()]
    .map(([slug, value]) => ({ ...value, slug }))
    .filter((topic) => topic.count >= 2)
    .sort((left, right) => left.name.localeCompare(right.name));
}