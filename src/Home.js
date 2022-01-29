import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import SectionDescription from './modules/views/SectionDescription';
import SectionServices from './modules/views/SectionServices';
import SectionSkills from './modules/views/SectionSkills';
import SectionProjects from './modules/views/SectionProjects';
import SectionEducation from './modules/views/SectionEducation';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <SectionDescription />
      <SectionServices />
      <SectionSkills />
      <SectionProjects />
      <SectionEducation />

      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
