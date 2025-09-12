import React from 'react';

import Container from 'components/ui/Container';

import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import {
  faXTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
  faSquareBluesky
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
          aria-label="email riccardo sirigu"
          target="_blank"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </Styled.Link>
        <Styled.Link
          href="https://github.com/ricsirigu"
          rel="noreferrer noopener"
          aria-label="github riccardo sirigu"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Styled.Link>
        <Styled.Link
          href="https://twitter.com/ricsirigu"
          rel="noreferrer noopener"
          aria-label="twitter riccardo sirigu"
          target="_blank"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/riccardosirigu"
          rel="noreferrer noopener"
          aria-label="linkedin riccardo sirigu"
          target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Styled.Link>
        <Styled.Link href="https://www.facebook.com/riccardo.sirigu"
          rel="noreferrer noopener"
          aria-label="facebook riccardo sirigu"
          target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </Styled.Link>
        <Styled.Link href="https://www.instagram.com/ricsirigu"
          rel="noreferrer noopener"
          aria-label="instagram riccardo sirigu"
          target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Styled.Link>
        <Styled.Link href="https://bsky.app/profile/riccardosirigu.com"
          rel="noreferrer noopener"
          aria-label="bluesky riccardo sirigu"
          target="_blank">
          <FontAwesomeIcon icon={faSquareBluesky} />
        </Styled.Link>
      </Styled.Links>
    </Container>
    <Container>
      <Styled.Links style={{"fontSize": "small"}}>
        P.IVA 03780110924
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
