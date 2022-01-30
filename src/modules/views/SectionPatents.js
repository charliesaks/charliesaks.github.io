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

export default function SectionPatents() {
  return (
    <Box
      id="patents"
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'primary.light' }}
    >
      <Container component="section" sx={{ mt: 15, mb: 20, position: 'relative' }}>
        <Typography gutterBottom variant="h4" marked="center" align="center" component="h2">
          Patents
        </Typography>

        <Grid container direction="row" alignItems="center" justifyContent="center">

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom align="center" variant="h4" component="div">
                      <a href="https://patents.google.com/patent/US5727123" target="_blank" rel="noopener noreferrer">5,727,123</a>
                    </Typography>
                    <Typography gutterBottom align="center" variant="h6" component="div">
                      Block Normalization Processor
                    </Typography>
                    <Typography align="center" variant="h5" color="text.secondary">
                      March 10, 1998
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom align="center" variant="h4" component="div">
                      <a href="https://patents.google.com/patent/US5784532" target="_blank" rel="noopener noreferrer">5,784,532</a>
                    </Typography>
                    <Typography gutterBottom align="center" variant="h6" component="div">
                      Application Specific Integrated Circuit (ASIC) for Performing Rapid Speech Compression in a Mobile Telephone
                    </Typography>
                    <Typography align="center" variant="h5" color="text.secondary">
                      July 21, 1998
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom align="center" variant="h4" component="div">
                      <a href="https://patents.google.com/patent/US6615341" target="_blank" rel="noopener noreferrer">6,615,341</a>
                    </Typography>
                    <Typography gutterBottom align="center" variant="h6" component="div">
                      Multiple-data Bus Architecture For a Digital Signal Processor Using Variable-Length Instruction Set With Single Instruction Simultaneous Control
                    </Typography>
                    <Typography align="center" variant="h5" color="text.secondary">
                      September 2, 2003
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom align="center" variant="h4" component="div">
                      <a href="https://patents.google.com/patent/US20100235578" target="_blank" rel="noopener noreferrer">20100235578</a>
                    </Typography>
                    <Typography gutterBottom align="center" variant="h6" component="div">
                      Cached Memory System and Cache Controller for Embedded Digital Signal Processor
                    </Typography>
                    <Typography align="center" variant="h5" color="text.secondary">
                      November 20, 2012
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
