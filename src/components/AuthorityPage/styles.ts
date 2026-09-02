import { styled } from 'styled-components';

export const Content = styled.article`
  width: 100%;
`;

export const Breadcrumbs = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.75rem;
`;

export const Header = styled.header`
  max-width: 44rem;
  margin-bottom: 2rem;

  h1 {
    margin: 0.35rem 0 1rem;
    font-size: clamp(1.75rem, 5vw, 2.75rem);
    line-height: 1.12;
    letter-spacing: -0.025em;
  }
`;

export const Eyebrow = styled.p`
  color: #5a67d8;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Summary = styled.p`
  color: #4a5568;
  font-size: 1.125rem;
  line-height: 1.7;
`;

export const HighlightList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;
  margin: 0 0 2.5rem;
  padding: 0;
  list-style: none;

  li,
  a {
    height: 100%;
  }

  a {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding: 1rem;
    color: #3c366b;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    text-decoration: none;
  }

  a:hover,
  a:focus-visible {
    border-color: #4fd1c5;
  }

  span {
    color: #4a5568;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  @media (max-width: 639px) {
    grid-template-columns: 1fr;
  }
`;

export const Body = styled.div`
  max-width: 44rem;

  section + section {
    margin-top: 2.5rem;
  }

  h2 {
    margin-bottom: 0.75rem;
    font-size: 1.35rem;
    line-height: 1.3;
  }

  p,
  li {
    color: #4a5568;
    line-height: 1.75;
  }

  ul {
    margin-top: 0.75rem;
    padding-left: 1.25rem;
    list-style: disc;
  }

  li + li {
    margin-top: 0.45rem;
  }
`;

export const Related = styled.aside`
  width: 100%;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;

  > h2 {
    margin-bottom: 1rem;
    font-size: 1.35rem;
  }
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  a {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding: 1rem;
    color: #3c366b;
    background: #f7fafc;
    border: 1px solid #ebf4ff;
    border-radius: 0.5rem;
    text-decoration: none;
  }

  a:hover,
  a:focus-visible {
    border-color: #4fd1c5;
  }

  span {
    color: #4a5568;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  @media (max-width: 639px) {
    grid-template-columns: 1fr;
  }
`;
