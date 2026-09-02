import { styled } from 'styled-components';
import tw from 'lib/tw';

export const Posts = styled.div`
  ${tw`w-full flex flex-wrap`};
`;

export const Post = styled.div`
  ${tw`w-full sm:w-1/2 p-3`};
`;

export const Card = styled.div`
  ${tw`w-full h-full rounded-lg flex flex-col overflow-hidden border border-gray-300`};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgb(49 46 129 / 0.12);
  }
`;

export const PostLink = styled.a`
  display: flex;
  flex-direction: column;
  color: #3c366b;

  &:hover {
    color: #3c366b;
  }
`;

export const Content = styled.div`
  ${tw`p-4 text-indigo-900`};
`;

export const Image = styled.figure`
  ${tw`w-full`};
`;

export const Title = styled.h2`
  ${tw`font-semibold mb-4`};
`;

export const Description = styled.p``;

export const Date = styled.time`
  ${tw`text-xs text-indigo-500`};
`;

export const Tags = styled.div`
  ${tw`p-4 pt-2 mt-auto`}
`;

export const Tag = styled.span`
  ${tw`text-xs text-indigo-900 border border-teal-400 rounded-full px-2 py-1 mr-2`}
`;

export const TagLink = styled.a`
  ${tw`text-xs text-indigo-900 border border-teal-400 rounded-full px-2 py-1 mr-2`}
`;

export const TopicNavigation = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  gap: 0.5rem;

  span {
    ${tw`font-semibold`};
  }

  a {
    color: #3c366b;
    border-bottom: 1px solid #4fd1c5;
  }

  a[aria-current='page'] {
    ${tw`font-semibold`};
  }
`;
