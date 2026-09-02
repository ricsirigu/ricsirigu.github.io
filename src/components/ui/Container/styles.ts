import { styled } from 'styled-components';
import tw from 'lib/tw';

export interface StyledProps {
  section?: boolean;
}

interface TransientStyledProps {
  $section?: boolean;
}

export const Container = styled.div<TransientStyledProps>`
  ${tw`flex flex-wrap max-w-screen-md w-full mx-auto p-5`};
  ${({ $section }) => $section && tw`py-8 sm:py-16`};
`;
