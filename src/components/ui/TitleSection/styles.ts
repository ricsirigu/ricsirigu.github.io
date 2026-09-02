import { styled } from 'styled-components';
import tw from 'lib/tw';

export interface StyledProps {
  center?: boolean;
}

interface TransientStyledProps {
  $center?: boolean;
}

export const TitleSection = styled.div`
  ${tw`flex flex-col w-full`};
`;

export const Title = styled.h2<TransientStyledProps>`
  ${tw`uppercase mb-4 text-lg font-bold w-full text-left`};
  ${({ $center }) => $center && tw`text-center`};
`;

export const SubTitle = styled.p<TransientStyledProps>`
  ${tw`text-xs text-indigo-600 w-full text-left`};
  ${({ $center }) => $center && tw`text-center`};
`;

export const Separator = styled.div<TransientStyledProps>`
  ${tw`relative w-2 h-8 mb-6 -mt-2`};
  ${({ $center }) => $center && tw`mx-auto`};

  &:before {
    content: '';
    ${tw`bg-indigo-500 h-full w-px absolute left-0`};
  }

  &:after {
    content: '';
    ${tw`bg-teal-400 h-6 w-px absolute ml-1`};
  }
`;
