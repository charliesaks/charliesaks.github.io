import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@mui/styles";

import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from './modules/components/Typography';

import withRoot from './modules/withRoot';
import SectionDescription from './modules/views/SectionDescription';
import SectionServices from './modules/views/SectionServices';
import SectionSkills from './modules/views/SectionSkills';
import SectionExperience from './modules/views/SectionExperience';
import SectionProjects from './modules/views/SectionProjects';
import SectionEducation from './modules/views/SectionEducation';
import SectionPatents from './modules/views/SectionPatents';
import SectionCertificates from './modules/views/SectionCertificates';
import SectionContact from './modules/views/SectionContact';

import Header from './modules/components/Header';
import Parallax from './modules/components/Parallax';

import presentationStyle from "./modules/assets/jss/presentationStyle.js";

const useStyles = makeStyles(presentationStyle);

function Index() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <React.Fragment>

      <Header
        brand="Charlie Sakamaki"
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
      />

      <Parallax image="/images/charlie/Laie-point.jpg" className={classes.parallax}>
        <Container component="section" sx={{ mt: 15, mb: 30, position: 'relative' }}>
          <Grid container direction="column" alignItems="center" justifyContent="center">
            &nbsp;
            <br />
            &nbsp;
            <br />
            &nbsp;
            <br />
            &nbsp;
            <br />
            &nbsp;
            <Grid item xs={12}>
              <Avatar alt="Charlie Sakamaki" src="/images/Charlie_Sakamaki_face.jpg" sx={{ width: 128, height: 128 }} />
            </Grid>
            &nbsp;
            <br />
            &nbsp;
            <br />
            &nbsp;
            <Grid item xs={12}>
              <Typography align="center" color="white" variant="h1">
                Charlie Sakamaki
              </Typography>
              &nbsp;
              <br />
              &nbsp;
              <Typography align="center" color="white" variant="h6">
                Software Engineer, Electrical Engineer, and Full Stack Developer
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
        <SectionServices />
        <SectionSkills />
        <SectionExperience />
        <SectionProjects />
        <SectionEducation />
        <SectionPatents />
        <SectionCertificates />
        <SectionContact />
      </div>
    </React.Fragment>
  );
}

export default withRoot(Index);
