import React from 'react';

import Layout from 'components/Layout';
import Experience from 'components/Experience';
import Education from 'components/Education';

interface Props {
  currentPath: string;
  education: React.ComponentProps<typeof Education>['education'];
  educationSection: React.ComponentProps<typeof Education>['sectionTitle'];
  experiences: React.ComponentProps<typeof Experience>['experiences'];
  experienceSection: React.ComponentProps<typeof Experience>['sectionTitle'];
}

const ResumePage: React.FC<Props> = ({ currentPath, education, educationSection, experiences, experienceSection }) => (
  <Layout currentPath={currentPath}>
    <Experience experiences={experiences} sectionTitle={experienceSection} />
    <hr />
    <Education education={education} sectionTitle={educationSection} />
    <hr />
    {/* <Skills /> */}
  </Layout>
);

export default ResumePage;
