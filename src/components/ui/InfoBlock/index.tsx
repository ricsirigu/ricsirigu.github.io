import React from 'react';

import Icon, { type IconProps } from 'components/ui/Icon';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
  content: React.ReactNode;
  headingLevel?: 'h2' | 'h3';
  icon: IconProps;
  linkTo?: string;
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, center, headingLevel = 'h3', linkTo }) => (
  <Styled.InfoBlock $center={center}>
    <Styled.Icon>
      <Icon icon={icon} />
    </Styled.Icon>
    <Styled.Wrapper $center={center}>
      <Styled.Title as={headingLevel}>{title}</Styled.Title>
      <Styled.Content>{content}</Styled.Content>
      {linkTo && <Styled.MoreLink href={linkTo}>Explore this area →</Styled.MoreLink>}
    </Styled.Wrapper>
  </Styled.InfoBlock>
);

export default InfoBlock;
