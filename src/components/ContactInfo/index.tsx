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
      href?: string;
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
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} headingLevel="h1" center />
      {contacts.map((item) => {
        const {
          id,
          frontmatter: { title, icon, content, href }
        } = item.node;

        return (
          <Styled.ContactInfoItem key={id}>
            <InfoBlock
              icon={icon}
              title={title}
              content={href ? (
                <Styled.ContactLink
                  href={href}
                  target={href.startsWith('https://') ? '_blank' : undefined}
                  rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </Styled.ContactLink>
              ) : content}
              headingLevel="h2"
              center
            />
          </Styled.ContactInfoItem>
        );
      })}
    </Container>
  );
};

export default ConctactInfo;
