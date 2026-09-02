import React from 'react';

import MainNav from './MainNav';
import Logo from './Logo';

import * as Styled from './styles';

interface Props {
  currentPath: string;
  siteTitle: string;
}

const Header: React.FC<Props> = ({ currentPath, siteTitle = '' }) => (
  <Styled.Header>
    <Styled.Wrapper>
      <Logo siteTitle={siteTitle} />
      <MainNav currentPath={currentPath} />
    </Styled.Wrapper>
  </Styled.Header>
);

export default Header;
