import React from 'react';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
}

const Banner: React.FC<Props> = ({ title, subtitle, content, linkTo, linkText }) => (
  <Styled.Banner id="about">
    <Container section>
      <TitleSection title={title} subtitle={subtitle} headingLevel="h1" />
      <Styled.Content>{content}</Styled.Content>
      <Button primary name="Riccardo Sirigu profile" href={linkTo}>
        {linkText}
      </Button>
    </Container>
  </Styled.Banner>
);

export default Banner;
