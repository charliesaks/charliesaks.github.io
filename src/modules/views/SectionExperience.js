import React from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '../components/Typography';

// library used for cool animations
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function SectionExperience() {
  // const classes = useStyles();
  return (
    <Box
      id="experience"
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'white' }}
    >
      <Container component="section" sx={{ mt: 15, mb: 20, position: 'relative' }}>
        <Typography gutterBottom variant="h4" marked="center" align="center" component="h2">
          Experience
        </Typography>

        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={5}>

          <Grid item xs={12}>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <Card>
                <CardContent>
                  <Typography align="center" color="white" gutterBottom variant="h4" sx={{ bgcolor: "red" }} p={2}>
                    Self Employed
                  </Typography>
                  <Typography align="center" variant="h6">
                    Developer
                  </Typography>
                  <Typography variant="h5">
                    <ul>
                      <li>Developed a full-stack web app used to control an audio/visual annunciation system for public transit.</li>
                      <li>Created websites using various full-stack methodologies.</li>
                      <li>Created a test platform to substantiate a reliable UDP algorithm.</li>
                      <li>Performed as guitarist, vocalist, and sound engineer for 808 Caravan.</li>
                    </ul>
                  </Typography>
                  <Typography align="center" variant="body1" sx={{ bgcolor: "lightgray" }} p={1}>
                    2013 - present | Honolulu, HI
                  </Typography>
                </CardContent>
              </Card>
            </AnimationOnScroll>
          </Grid>
        
          <Grid item xs={12}>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <Card>
                <CardContent>
                  <Typography align="center" color="white" gutterBottom variant="h4" sx={{ bgcolor: "blue" }} p={2}>
                    Qualcomm, Inc.
                  </Typography>
                  <Typography align="center" variant="h6">
                    Senior Staff Engineer/Manager
                  </Typography>
                  <Typography variant="h5">
                    <ul>
                      <li>Collaborated on the design of 5 generations of Mobile Station Modem (MSM) chips, with emphasis on the Qualcomm Digital Signal Processor (QDSP) and QDSP tools.</li>
                      <li>Worked on a team to design the 1st generation vocoder ASIC for the 1st CDMA chipset.</li>
                      <li>Participated in engineering the 1st and 2nd generation MSM ASICs for CDMA mobile phones.</li>
                      <li>Led the QDSP Tools team, where we provided a complete software development environment for the 2nd through 5th generations of DSP cores used in Qualcomm MSM ASICs.</li>
                      <li>Coded a fast, cycle-accurate simulator used for QDSP debugging and hardware verification.</li>
                      <li>Developed a lightweight RTOS for use in the 4th and 5th generation QDSPs.</li>
                      <li>Designed an optimizing C compiler for the QDSPs, used for prototyping assembly code.</li>
                      <li>Managed projects for 3 to 25 engineers. Personally managed 5 engineers.</li>
                    </ul>
                  </Typography>
                  <Typography align="center" variant="body1" sx={{ bgcolor: "lightgray" }} p={1}>
                    1991-1995, 1996-2004 | San Diego, CA
                  </Typography>
                </CardContent>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12}>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <Card>
                <CardContent>
                  <Typography align="center" color="white" gutterBottom variant="h4" sx={{ bgcolor: "orange" }} p={2}>
                    Big C Computing, Inc.
                  </Typography>
                  <Typography align="center" variant="h6">
                    President
                  </Typography>
                  <Typography variant="h5">
                    <ul>
                      <li>Implemented and managed all Information Technology (IT) for an accounting firm.</li>
                      <li>Developed a multi-client general ledger accounting program.</li>
                      <li>Created a database program used to track daily profit numbers for a chain of restaurants in Hawaii.</li>
                      <li>Wrote a timesheet tracking and billing program for an accounting firm.</li>
                    </ul>
                  </Typography>
                  <Typography align="center" variant="body1" sx={{ bgcolor: "lightgray" }} p={1}>
                    1995-1996, 2006-2012 | Honolulu, HI
                  </Typography>
                </CardContent>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12}>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <Card>
                <CardContent>
                  <Typography align="center" color="white" gutterBottom variant="h4" sx={{ bgcolor: "purple" }} p={2}>
                    Aumakua Biotech
                  </Typography>
                  <Typography align="center" variant="h6">
                    Co-Founder
                  </Typography>
                  <Typography variant="h5">
                    <ul>
                      <li>Co-founded a startup biotech company using virtual screening for cancer drug discovery.</li>
                      <li>Wrote an extensive business plan and garnered support.</li>
                    </ul>
                  </Typography>
                  <Typography align="center" variant="body1" sx={{ bgcolor: "lightgray" }} p={1}>
                    2004-2005 | Honolulu, HI
                  </Typography>
                </CardContent>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12}>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <Card>
                <CardContent>
                  <Typography align="center" color="white" gutterBottom variant="h4" sx={{ bgcolor: "green" }} p={2}>
                    Charles Stark Draper Laboratory
                  </Typography>
                  <Typography align="center" variant="h6">
                    Draper Fellow
                  </Typography>
                  <Typography variant="h5">
                    <ul>
                      <li>Developed Pascal programs for database management.</li>
                      <li>Designed and developed a high speed fiber-optic communication board.</li>
                      <li>Designed and documented a data path chipset that handled the communication, error detection/correction, and synchronization of a fault tolerant parallel processor.
                        &nbsp;
                        <a href="https://dspace.mit.edu/handle/1721.1/39961" target="_blank" rel="noopener noreferrer">View Thesis</a>
                      </li>
                    </ul>
                  </Typography>
                  <Typography align="center" variant="body1" sx={{ bgcolor: "lightgray" }} p={1}>
                    1987-1991 | Cambridge, MA
                  </Typography>
                </CardContent>
              </Card>
            </AnimationOnScroll>
          </Grid>

        </Grid>
      </Container>
    </Box>

  );
}
