import React from 'react';

import Icon, { type IconProps } from 'components/ui/Icon';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
  content: React.ReactNode;
  headingLevel?: 'h2' | 'h3';
  icon: IconProps;
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, center, headingLevel = 'h3' }) => (
  <Styled.InfoBlock $center={center}>
    <Styled.Icon>
      <Icon icon={icon} />
    </Styled.Icon>
    <Styled.Wrapper $center={center}>
      <Styled.Title as={headingLevel}>{title}</Styled.Title>
      <Styled.Content>{content}</Styled.Content>
    </Styled.Wrapper>
  </Styled.InfoBlock>
);

export default InfoBlock;
