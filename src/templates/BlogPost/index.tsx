import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import type { LegacyBlogPost as BlogPostData } from 'lib/content';
import { topicSlug } from 'lib/content';

import * as Styled from './styles';

interface SiblingLink {
  fields: { slug: string };
  frontmatter: { title: string };
}

interface Props {
  data: {
    markdownRemark: BlogPostData;
  };
  pageContext: {
    slug: string;
    next: SiblingLink | null;
    previous: SiblingLink | null;
  };
  indexedTopics?: string[];
  children?: React.ReactNode;
}

const BlogPost: React.FC<Props> = ({ data, pageContext, indexedTopics, children }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  const indexedTopicSlugs = new Set(indexedTopics ?? []);
  const formattedUpdatedDate = post.frontmatter.updated
    ? new Intl.DateTimeFormat('en', { day: '2-digit', month: 'short', timeZone: 'UTC', year: 'numeric' }).format(
      new Date(`${post.frontmatter.updated}T00:00:00Z`)
    )
    : undefined;

  return (
    <Layout currentPath={pageContext.slug}>
      <Container section>
        <Styled.Breadcrumbs aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/blog/">Blog</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{post.frontmatter.title}</span>
        </Styled.Breadcrumbs>
        <TitleSection
          title={<time dateTime={post.frontmatter.date}>{post.frontmatter.formattedDate}</time>}
          subtitle={post.frontmatter.title}
          headingLevel="h1"
        />
        <Styled.Byline>
          By <a href="/about/">Riccardo Sirigu</a>
          {post.frontmatter.updated && formattedUpdatedDate && (
            <>
              {' · '}
              Reviewed and updated <time dateTime={post.frontmatter.updated}>{formattedUpdatedDate}</time>
            </>
          )}
        </Styled.Byline>
        {post.headings.length >= 2 && (
          <Styled.TableOfContents aria-labelledby="table-of-contents-title">
            <h2 id="table-of-contents-title">Table of contents</h2>
            <ol>
              {post.headings.map((heading) => (
                <li key={heading.id} className={heading.depth === 3 ? 'nested' : undefined}>
                  <a href={`#${heading.id}`}>{heading.text}</a>
                </li>
              ))}
            </ol>
          </Styled.TableOfContents>
        )}
        <article className="format-html prose lg:prose-lg xl:prose-lg">
          {children as React.ReactElement}
        </article>
        <Styled.Topics aria-label="Article topics">
          <strong>Topics:</strong>
          {post.frontmatter.tags.map((tag) =>
            indexedTopicSlugs.has(topicSlug(tag)) ? (
              <a key={tag} href={`/blog/topics/${topicSlug(tag)}/`}>
                {tag}
              </a>
            ) : (
              <span key={tag}>{tag}</span>
            )
          )}
        </Styled.Topics>
        <Styled.Author>
          <h2>About the author</h2>
          <p>
            <a href="/about/">Riccardo Sirigu</a> is a CISSP and Offensive Security Director working at the intersection of offensive security, 
            security engineering and cyber resilience. He also contributes to European cybersecurity standardization, 
            including work related to the Cyber Resilience Act.
          </p>
        </Styled.Author>
        <Styled.Links>
          <span>
            {previous && (
              <a href={previous.fields.slug} rel="previous">
                ← {previous.frontmatter.title}
              </a>
            )}
          </span>
          <span>
            {next && (
              <a href={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </a>
            )}
          </span>
        </Styled.Links>
      </Container>
    </Layout>
  );
};

export default BlogPost;
