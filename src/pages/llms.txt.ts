import type { APIRoute } from 'astro';

import { getBlogTopics, getPublishedBlogPosts } from 'lib/content';
import { siteMetadata } from 'lib/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const topics = getBlogTopics()
    .map(
      (topic) =>
        `- [${topic.name}](${siteMetadata.siteUrl}/blog/topics/${topic.slug}/): ${topic.count} article${topic.count === 1 ? '' : 's'}.`
    )
    .join('\n');
  const articles = getPublishedBlogPosts()
    .map(
      (post) =>
        `- [${post.frontmatter.title}](${siteMetadata.siteUrl}${post.fields.slug}): ${post.frontmatter.description || post.excerpt}`
    )
    .join('\n');

  const body = `# Riccardo Sirigu

> Riccardo Sirigu is a CISSP and Offensive Security Director writing about secure-by-design engineering, product security, European cybersecurity regulation, and software development.

The canonical website is ${siteMetadata.siteUrl}. Content may be used for search and reference. Automated training access is governed by robots.txt.

## Key pages

- [About](${siteMetadata.siteUrl}/): Professional profile and services.
- [Resume](${siteMetadata.siteUrl}/resume/): Experience and education.
- [Blog](${siteMetadata.siteUrl}/blog/): All published articles.
- [Contact](${siteMetadata.siteUrl}/contact/): Contact information.
- [RSS feed](${siteMetadata.siteUrl}/rss.xml): Full-content feed of published articles.

## Topics

${topics}

## Published articles

${articles}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
