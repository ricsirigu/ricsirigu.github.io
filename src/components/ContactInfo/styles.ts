import { styled } from 'styled-components';
import tw from 'lib/tw';

export const ContactInfoItem = styled.div`
  ${tw`w-full sm:w-1/2`};
`;

export const ContactLink = styled.a`
  color: inherit;
  text-decoration: underline;
  text-decoration-color: #81e6d9;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.25em;
  border-radius: 2px;
  overflow-wrap: anywhere;
  transition: color 160ms ease, text-decoration-color 160ms ease;

  &:hover {
    color: #5a67d8;
    text-decoration-color: currentColor;
  }

  &:focus-visible {
    outline: 2px solid #5a67d8;
    outline-offset: 5px;
    text-decoration-color: currentColor;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
