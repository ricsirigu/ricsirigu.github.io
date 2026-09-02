import { styled } from 'styled-components';
import tw from 'lib/tw';

export const MainNav = styled.nav`
  ${tw`sm:flex flex-col sm:flex-row sm:w-auto w-full order-last sm:order-none my-4 sm:my-0 hidden`};

  &.is-open {
    ${tw`flex`};
  }
`;

export const MainNavItem = styled.a`
  ${tw`relative text-indigo-900 border-b border-transparent hover:text-indigo-900 ml-0 sm:ml-8 mt-3 sm:mt-0`};
  width: max-content;

  &.active {
    ${tw`border-teal-400`};
  }

  &:before {
    ${tw`absolute w-full bg-teal-400 h-px left-0 invisible`};
    content: '';
    bottom: -1px;
    transform: scaleX(0);
    transition: 0.2s;
  }

  &:hover:before {
    ${tw`visible`};
    transform: scaleX(1);
  }
`;

export const ToggleMainNav = styled.button`
  ${tw`flex flex-col items-end justify-center cursor-pointer w-6 h-5 sm:hidden`};
  outline: none !important;

  span {
    ${tw`bg-indigo-500 inline-block w-6 h-px`};
    transition: 0.2s;

    &:first-child {
      ${tw`mb-1`};
    }

    &:last-child {
      ${tw`mt-1`};
    }

    &:nth-child(2) {
      ${tw`bg-teal-400 inline-block w-8 h-px`};

      ${tw`opacity-1`};
    }
  }

  &.is-open span:first-child {
    ${tw`-mb-px`};
    transform: rotate(45deg);
  }

  &.is-open span:last-child {
    ${tw`-mt-px`};
    transform: rotate(-45deg);
  }

  &.is-open span:nth-child(2) {
    ${tw`opacity-0`};
    transform: translate(20px);
  }
`;
