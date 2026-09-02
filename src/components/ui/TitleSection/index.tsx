import React from 'react';

import * as Styled from './styles';
import type { StyledProps } from './styles';

interface Props extends StyledProps {
  headingLevel?: 'h1' | 'h2';
  title: React.ReactNode;
  subtitle?: string;
}

const TitleSection: React.FC<Props> = ({ center, headingLevel = 'h2', title, subtitle }) => (
  <Styled.TitleSection>
    {subtitle && <Styled.SubTitle $center={center}>{title}</Styled.SubTitle>}
    <Styled.Title as={headingLevel} $center={center}>
      {subtitle || title}
    </Styled.Title>
    <Styled.Separator $center={center} aria-hidden="true" />
  </Styled.TitleSection>
);

export default TitleSection;
