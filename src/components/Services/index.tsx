import React from 'react';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import type { IconProps } from 'components/ui/Icon';

import type { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Service {
  node: {
    id: string;
    frontmatter: {
      title: string;
      icon: IconProps;
      description: string;
      linkTo?: string;
    };
  };
}

interface Props {
  sectionTitle: SectionTitle;
  services: Service[];
}

const Services: React.FC<Props> = ({ sectionTitle, services }) => {
  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Services>
        {services.map((item) => {
          const {
            id,
            frontmatter: { title, icon, description, linkTo }
          } = item.node;

          return (
            <Styled.ServiceItem key={id}>
              <InfoBlock icon={icon} title={title} content={description} linkTo={linkTo} />
            </Styled.ServiceItem>
          );
        })}
      </Styled.Services>
    </Container>
  );
};

export default Services;
