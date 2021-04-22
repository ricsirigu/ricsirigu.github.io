import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import * as Styled from './styles';

const Logo: React.FC = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const logoTitle: string = site.siteMetadata.title;

  return (
    <Styled.Logo to="/">
      <Styled.Image>
        <StaticImage
          src="../../../assets/images/riccardo-sirigu.jpg"
          alt={logoTitle}
          width={80}
          placeholder="blurred"
        />
      </Styled.Image>
      <Styled.Text>{logoTitle}</Styled.Text>
    </Styled.Logo>
  );
};

export default Logo;
