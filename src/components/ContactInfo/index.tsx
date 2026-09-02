import React from 'react';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import type { IconProps } from 'components/ui/Icon';

import type { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Contact {
  node: {
    id: string;
    frontmatter: {
      title: string;
      content: string;
      icon: IconProps;
    };
  };
}

interface Props {
  contacts: Contact[];
  sectionTitle: SectionTitle;
}

const ConctactInfo: React.FC<Props> = ({ contacts, sectionTitle }) => {
  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      {contacts.map((item) => {
        const {
          id,
          frontmatter: { title, icon, content }
        } = item.node;

        return (
          <Styled.ContactInfoItem key={id}>
            <InfoBlock icon={icon} title={title} content={content} center />
          </Styled.ContactInfoItem>
        );
      })}
    </Container>
  );
};

export default ConctactInfo;
