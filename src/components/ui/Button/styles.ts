import { css, styled } from 'styled-components';
import tw from 'lib/tw';

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

interface TransientStyledProps {
  $primary?: boolean;
  $block?: boolean;
}

const buttonStyles = css<TransientStyledProps>`
  outline: none !important;
  ${tw`py-2 px-8 rounded-full border border-teal-300 text-indigo-900`};
  transition: transform 0.2s ease;

  ${({ $primary }) => ($primary ? tw`bg-teal-300` : tw`text-indigo-600`)};

  ${({ $block }) => $block && tw`w-full`};

  &:hover {
    transform: scale(1.05);
  }
`;

export const Button = styled.button<TransientStyledProps>`
  ${buttonStyles};
`;

export const ButtonLink = styled.a<TransientStyledProps>`
  ${buttonStyles};
  display: inline-block;

  &:hover {
    color: #3c366b;
  }
`;
