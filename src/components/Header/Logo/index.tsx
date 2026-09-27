import React from 'react';

import logo from 'assets/images/riccardo-sirigu.webp';

import * as Styled from './styles';

interface Props {
  siteTitle: string;
}

const Logo: React.FC<Props> = ({ siteTitle }) => {
  return (
    <Styled.Logo href="/">
      <Styled.Image>
        <img
          src={logo.src}
          alt={siteTitle}
          width={80}
          height={80}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </Styled.Image>
      <Styled.Text>{siteTitle}</Styled.Text>
    </Styled.Logo>
  );
};

export default Logo;