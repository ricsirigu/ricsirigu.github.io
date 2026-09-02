import React from 'react';

import Layout from 'components/Layout';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';

interface Props {
  currentPath: string;
  heroBanner: React.ComponentProps<typeof HeroBanner>['heroBanner'];
  sectionTitle: React.ComponentProps<typeof Services>['sectionTitle'];
  services: React.ComponentProps<typeof Services>['services'];
}

const IndexPage: React.FC<Props> = ({ currentPath, heroBanner, sectionTitle, services }) => {
  return (
    <Layout currentPath={currentPath}>
      <HeroBanner heroBanner={heroBanner} />
      <Services sectionTitle={sectionTitle} services={services} />
      <hr />
      {/* <Testimonials /> */}
    </Layout>
  );
};

export default IndexPage;
