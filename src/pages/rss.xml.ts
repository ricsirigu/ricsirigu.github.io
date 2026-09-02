import type { APIRoute } from 'astro';

import { getPublishedBlogPosts } from 'lib/content';
import { siteMetadata } from 'lib/site';

export const prerender = true;

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function cdata(value: string): string {
  return value.replaceAll(']]>', ']]]]><![CDATA[>');
}

function absoluteArticleHtml(html: string, articleUrl: string): string {
  return html
    .replace(/\b(href|src)=["']([^"']+)["']/gi, (match, attribute: string, value: string) => {
      if (/^(?:[a-z]+:|\/\/|data:|mailto:)/i.test(value)) return match;
      return `${attribute}="${new URL(value, articleUrl).href}"`;
    })
    .replace(/\bsrcset=["']([^"']+)["']/gi, (_match, value: string) => {
      const srcset = value
        .split(',')
        .map((candidate) => {
          const [url, descriptor] = candidate.trim().split(/\s+/, 2);
          return `${new URL(url, articleUrl).href}${descriptor ? ` ${descriptor}` : ''}`;
        })
        .join(', ');
      return `srcset="${srcset}"`;
    });
}

export const GET: APIRoute = () => {
  const items = getPublishedBlogPosts().map((post) => {
    const url = new URL(post.fields.slug, siteMetadata.siteUrl).href;
    return `<item>
  <title>${escapeXml(post.frontmatter.title)}</title>
  <link>${escapeXml(url)}</link>
  <guid isPermaLink="true">${escapeXml(url)}</guid>
  <pubDate>${new Date(`${post.frontmatter.date}T00:00:00Z`).toUTCString()}</pubDate>
  <description>${escapeXml(post.frontmatter.description || post.excerpt)}</description>
  <content:encoded><![CDATA[${cdata(absoluteArticleHtml(post.html, url))}]]></content:encoded>
</item>`;
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
  <title>${escapeXml(siteMetadata.title)} Blog</title>
  <link>${siteMetadata.siteUrl}/blog/</link>
  <description>${escapeXml(siteMetadata.description)}</description>
  <language>en</language>
  <atom:link href="${siteMetadata.siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${items.join('\n')}
</channel>
</rss>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  });
};
