import * as React from 'react';
import withRoot from './modules/withRoot';
import SectionDescription from './modules/views/SectionDescription';
import SectionServices from './modules/views/SectionServices';
import SectionSkills from './modules/views/SectionSkills';
import SectionProjects from './modules/views/SectionProjects';
import SectionEducation from './modules/views/SectionEducation';
import SectionPatents from './modules/views/SectionPatents';
import SectionCertificates from './modules/views/SectionCertificates';
import SectionContact from './modules/views/SectionContact';

function Index() {
  return (
    <React.Fragment>
      <SectionDescription />
      <SectionServices />
      <SectionSkills />
      <SectionProjects />
      <SectionEducation />
      <SectionPatents />
      <SectionCertificates />
      <SectionContact />
    </React.Fragment>
  );
}

export default withRoot(Index);
