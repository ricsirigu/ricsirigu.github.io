import { styled } from 'styled-components';

export const Copy = styled.div`
  width: 100%;
  color: #4a5568;
  line-height: 1.75;
`;

export const Model = styled.section`
  background: #f7fafc;
  border-top: 1px solid #ebf4ff;
  border-bottom: 1px solid #ebf4ff;
`;

export const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem 1.5rem;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    border-top: 1px solid #cbd5e0;
    padding-top: 1rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    margin-top: 0.5rem;
    color: #4a5568;
    font-size: 0.875rem;
    line-height: 1.6;
  }

  @media (max-width: 639px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const StepHeading = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;

  > span {
    color: #5a67d8;
    font-size: 0.75rem;
  }
`;

export const RiskLens = styled.p`
  width: 100%;
  margin-top: 2rem;
  color: #4a5568;
  font-size: 0.875rem;
  line-height: 1.6;
`;

export const Arrow = styled.span`
  margin-left: auto;

  @media (max-width: 639px) {
    transform: rotate(90deg);
  }
`;
