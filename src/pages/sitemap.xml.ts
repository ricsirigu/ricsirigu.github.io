import type { APIRoute } from 'astro';

import { getBlogTopics, getPublishedBlogPosts } from 'lib/content';
import { siteMetadata } from 'lib/site';

export const prerender = true;

interface SitemapItem {
  image?: string;
  imageTitle?: string;
  lastModified?: string;
  path: string;
}

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = () => {
  const posts = getPublishedBlogPosts();
  const staticUrls: SitemapItem[] = ['/', '/blog/', '/contact/', '/resume/'].map((path) => ({ path }));
  const topicUrls: SitemapItem[] = getBlogTopics().map((topic) => {
    const topicPosts = posts.filter((post) =>
      post.frontmatter.tags.some((tag) => tag.toLowerCase() === topic.name.toLowerCase())
    );
    const lastModified = topicPosts
      .map((post) => post.frontmatter.updated || post.frontmatter.date)
      .sort()
      .at(-1);
    return { path: `/blog/topics/${topic.slug}/`, lastModified };
  });
  const articleUrls: SitemapItem[] = posts.map((post) => ({
    path: post.fields.slug,
    lastModified: post.frontmatter.updated || post.frontmatter.date,
    image: post.frontmatter.coverUrl,
    imageTitle: post.frontmatter.title
  }));

  const urls = [...staticUrls, ...topicUrls, ...articleUrls].map((item) => {
    const location = new URL(item.path, siteMetadata.siteUrl).href;
    const image = item.image
      ? `<image:image><image:loc>${escapeXml(new URL(item.image, siteMetadata.siteUrl).href)}</image:loc><image:title>${escapeXml(item.imageTitle || '')}</image:title></image:image>`
      : '';
    const lastModified = item.lastModified ? `<lastmod>${item.lastModified}</lastmod>` : '';
    return `<url><loc>${escapeXml(location)}</loc>${lastModified}${image}</url>`;
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join('\n')}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
