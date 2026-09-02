import React from 'react';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import ProgressBar from 'components/ui/ProgressBar';

import type { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Skill {
  node: {
    id: string;
    frontmatter: {
      title: string;
      percentage: number;
    };
  };
}

interface Props {
  sectionTitle: SectionTitle;
  skills: Skill[];
}

const Skills: React.FC<Props> = ({ sectionTitle, skills }) => {
  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Skills>
        {skills.map((item) => {
          const {
            id,
            frontmatter: { title, percentage }
          } = item.node;

          return (
            <Styled.Skill key={id}>
              <ProgressBar title={title} percentage={percentage} />
            </Styled.Skill>
          );
        })}
      </Styled.Skills>
    </Container>
  );
};

export default Skills;
