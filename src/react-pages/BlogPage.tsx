import React from 'react';

import Layout from 'components/Layout';
import Posts from 'components/Posts';

interface Props {
  activeTopic?: string;
  currentPath: string;
  introduction?: string;
  posts: React.ComponentProps<typeof Posts>['posts'];
  sectionTitle: React.ComponentProps<typeof Posts>['sectionTitle'];
  topics?: React.ComponentProps<typeof Posts>['topics'];
}

const BlogPage: React.FC<Props> = ({ activeTopic, currentPath, introduction, posts, sectionTitle, topics }) => {
  return (
    <Layout currentPath={currentPath}>
      <Posts
        activeTopic={activeTopic}
        introduction={introduction}
        posts={posts}
        sectionTitle={sectionTitle}
        topics={topics}
      />
    </Layout>
  );
};

export default BlogPage;
