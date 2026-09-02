import React from 'react';

import Banner from 'components/ui/Banner';

import type { SectionTitle } from 'helpers/definitions';

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
}

interface Props {
  heroBanner: SectionHeroBanner;
}

const HeroBanner: React.FC<Props> = ({ heroBanner }) => {
  return (
    <Banner
      title={heroBanner.title}
      subtitle={heroBanner.subtitle}
      content={heroBanner.content}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
    />
  );
};

export default HeroBanner;
