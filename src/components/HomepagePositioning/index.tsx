import React from 'react';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const steps = [
  { title: 'Attack', description: 'How does the attacker actually succeed?' },
  { title: 'Assumption', description: 'What did we assume that turned out not to be true?' },
  { title: 'System', description: 'What in the system allowed that failure to matter?' },
  { title: 'Engineer', description: 'What should we change?' },
  { title: 'Validate', description: 'Did we actually break the attack path?' },
  { title: 'Resilience', description: 'What happens if prevention fails anyway?' },
];

const HomepagePositioning: React.FC = () => (
  <>
    <section aria-label="Core thesis">
      <Container section>
        <TitleSection
          title="The core belief"
          subtitle="You cannot engineer security effectively if you don’t understand how attackers actually succeed."
        />
        <Styled.Copy>
          <p>
            Security problems are not just bugs in code. Sometimes an attacker does not need
            a bug at all. A stolen password, a valid token, too much privilege, a bad default
            or a wrong assumption about what we can trust may be enough.
          </p>
          <p>
            When that happens, fixing the finding is only part of the job. I want to understand
            why the attack worked in the first place. What did we assume? What made that
            assumption dangerous? Then we change the system so that the same class of problem
            is harder to repeat.
          </p>
          <p>
            But not every possible attack deserves the same attention. I start from attacks
            that are real, or at least have a credible path to impact, and then look at the
            actual risk. That is what tells us where the engineering effort should go.
          </p>
        </Styled.Copy>
      </Container>
    </section>
    <Styled.Model aria-label="Attack-to-Resilience model">
      <Container section>
        <TitleSection title="Attack-to-Resilience model" />
        <Styled.Steps role="list">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Styled.StepHeading>
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                {index < steps.length - 1 && <Styled.Arrow aria-hidden="true">→</Styled.Arrow>}
              </Styled.StepHeading>
              <p>{step.description}</p>
            </li>
          ))}
        </Styled.Steps>
      </Container>
    </Styled.Model>
  </>
);

export default HomepagePositioning;
