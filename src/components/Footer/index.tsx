import React from 'react';

import Container from 'components/ui/Container';

import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link
          href="mailto:me@riccardosirigu.com"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </Styled.Link>
        <Styled.Link
          href="https://github.com/ricsirigu"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Styled.Link>
        <Styled.Link
          href="https://twitter.com/ricsirigu"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/riccardosirigu"
          rel="noreferrer noopener"
          target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Styled.Link>
        <Styled.Link href="https://www.facebook.com/riccardo.sirigu"
          rel="noreferrer noopener"
          target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </Styled.Link>
        <Styled.Link href="https://www.instagram.com/ricsirigu"
          rel="noreferrer noopener"
          target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Styled.Link>
      </Styled.Links>
    </Container>
    <Container>
      <Styled.Links style={{"font-size": "small"}}>
        P.IVA 03780110924
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
