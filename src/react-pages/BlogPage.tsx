import React from 'react';

import Layout from 'components/Layout';
import Posts from 'components/Posts';

interface Props {
  currentPath: string;
  posts: React.ComponentProps<typeof Posts>['posts'];
  sectionTitle: React.ComponentProps<typeof Posts>['sectionTitle'];
}

const BlogPage: React.FC<Props> = ({ currentPath, posts, sectionTitle }) => {
  return (
    <Layout currentPath={currentPath}>
      <Posts posts={posts} sectionTitle={sectionTitle} />
    </Layout>
  );
};

export default BlogPage;
