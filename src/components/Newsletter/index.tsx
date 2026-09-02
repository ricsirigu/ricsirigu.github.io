import React from 'react';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import type { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Newsletter extends SectionTitle {
  namePlaceholder: string;
  emailPlaceholder: string;
  submitPlaceholder: string;
}

interface Props {
  newsletter: Newsletter;
}

const Newsletter: React.FC<Props> = ({ newsletter }) => {
  return (
    <Styled.Newsletter>
      <Container section>
        <TitleSection title={newsletter.title} subtitle={newsletter.subtitle} center />
        <Styled.Form>
          <Styled.Input type="text" placeholder={newsletter.namePlaceholder} />
          <Styled.Input type="email" placeholder={newsletter.emailPlaceholder} />
          <Button primary block name="newsletter">
            {newsletter.submitPlaceholder}
          </Button>
        </Styled.Form>
      </Container>
    </Styled.Newsletter>
  );
};

export default Newsletter;
