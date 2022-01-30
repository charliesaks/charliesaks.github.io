import React from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '../components/Typography';

// library used for cool animations
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function SectionEducation() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container component="section" sx={{ mt: 15, mb: 20, position: 'relative' }}>
        <Typography variant="h4" marked="center" align="center" component="h2">
          Education
        </Typography>

        <Grid container direction="row" alignItems="center" justifyContent="center">

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__lightSpeedIn">
              <Card sx={{ minHeight: 300 }}>
                <CardActionArea>
                  <CardContent>
                    <a href="https://mit.edu" target="_blank" rel="noopener noreferrer"><img src="./icons/MIT-icon.png" alt="MIT"  width="100%" /></a>
                    &nbsp;
                    <Typography variant="h6" align="center" color="text.secondary">
                      Master of Science in Electrical Engineering and Computer Science
                    </Typography>
                    &nbsp;
                    <Typography variant="h5" align="center" color="text.secondary">
                      <a href="https://dspace.mit.edu/handle/1721.1/39961" target="_blank" rel="noopener noreferrer">{" "} View Thesis</a>
                    </Typography>
                    &nbsp;
                    <Typography variant="h5" align="center" color="text.secondary">
                      Cambridge, MA
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__lightSpeedIn">
              <Card sx={{ minHeight: 300 }}>
                <CardActionArea>
                  <CardContent>
                    <a href="https://mit.edu" target="_blank" rel="noopener noreferrer"><img src="./icons/MIT-icon.png" alt="MIT"  width="100%" /></a>
                    &nbsp;
                    <Typography variant="h6" align="center" color="text.secondary">
                      Bachelor of Science in Electrical Engineering
                    </Typography>
                    &nbsp;
                    <Typography variant="h5" align="center" color="text.secondary">
                      Cambridge, MA
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </AnimationOnScroll>
          </Grid>

        </Grid>

      </Container>
    </Box>

  );
}
