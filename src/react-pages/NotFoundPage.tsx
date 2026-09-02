import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

const NotFoundPage: React.FC = () => (
  <Layout currentPath="/404/">
    <Container section>
      <TitleSection title="404" subtitle="Page not found" headingLevel="h1" center />
      <p className="mt-4 text-center w-full">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
