import { styled } from 'styled-components';
import tw from 'lib/tw';

export const Title = styled.h3`
  ${tw`font-semibold mb-4`};
`;

export const Image = styled.figure`
  ${tw`w-full rounded-lg overflow-hidden mt-4 mb-10`};
`;

export const Links = styled.div`
  ${tw`w-full flex justify-between mt-10`};
`;

export const Breadcrumbs = styled.nav`
  width: 100%;
  font-size: 0.75rem;
  margin-bottom: 1.5rem;

  span,
  a {
    margin-right: 0.5rem;
  }
`;

export const Byline = styled.p`
  width: 100%;
  font-size: 0.875rem;
  margin-top: -1rem;
  margin-bottom: 1.5rem;
  color: #5a67d8;
`;

export const TableOfContents = styled.nav`
  width: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 2rem;

  h2 {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  ol {
    list-style: decimal;
    padding-left: 1.25rem;
  }

`;

export const Topics = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 2rem;
  gap: 0.5rem;

  a,
  span {
    font-size: 0.75rem;
    color: #3c366b;
    border: 1px solid #4fd1c5;
    border-radius: 9999px;
    padding: 0.25rem 0.5rem;
  }
`;

export const Author = styled.aside`
  width: 100%;
  background: #f7fafc;
  border: 1px solid #ebf4ff;
  border-radius: 0.5rem;
  padding: 1.25rem;
  margin-top: 2rem;

  h2 {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;
