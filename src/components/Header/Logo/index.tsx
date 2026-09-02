import React from 'react';

import { logoImage } from 'lib/imageManifest';

import * as Styled from './styles';

interface Props {
  siteTitle: string;
}

const Logo: React.FC<Props> = ({ siteTitle }) => {
  return (
    <Styled.Logo href="/">
      <Styled.Image>
        <img
          src={logoImage}
          srcSet="/static/6716eff14ad2af05b485ed7fcbddcf80/264f2/riccardo-sirigu.webp 20w, /static/6716eff14ad2af05b485ed7fcbddcf80/e73fe/riccardo-sirigu.webp 40w, /static/6716eff14ad2af05b485ed7fcbddcf80/61ca6/riccardo-sirigu.webp 80w, /static/6716eff14ad2af05b485ed7fcbddcf80/60b4d/riccardo-sirigu.webp 160w"
          sizes="(min-width: 80px) 80px, 100vw"
          alt={siteTitle}
          width={80}
          height={80}
          loading="lazy"
          decoding="async"
        />
      </Styled.Image>
      <Styled.Text>{siteTitle}</Styled.Text>
    </Styled.Logo>
  );
};

export default Logo;
