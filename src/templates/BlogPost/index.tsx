import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';
import type { BlogPost as BlogPostData } from 'lib/content';

import * as Styled from './styles';

interface Props {
  data: {
    markdownRemark: BlogPostData;
  };
  pageContext: {
    slug: string;
    next: BlogPostData | null;
    previous: BlogPostData | null;
  };
}

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout currentPath={pageContext.slug}>
      <Container section>
        <TitleSection title={post.frontmatter.formattedDate} subtitle={post.frontmatter.title} />
        <FormatHtml content={post.html} />
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
