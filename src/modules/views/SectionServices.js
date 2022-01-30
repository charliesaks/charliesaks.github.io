import React from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

// library used for cool animations
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function SectionServices() {
  return (
    <Box
      id="services"
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'primary.light' }}
    >
      <Container component="section" sx={{ mt: 15, mb: 20, position: 'relative' }}>
        <Typography variant="h4" marked="center" align="center" component="h2">
          Services
        </Typography>

        <Grid
          container
          spacing={5}
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '40vh' }}
        >
          <Grid item xs={12} md={4}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Card variant="outlined">
                <CardContent>
                  <Grid container direction="column" alignItems="center" justifyContent="center" pt={2} pb={2} style={{ backgroundColor: "red" }}>
                    <Icon color="white" sx={{ color: "white" }}>language</Icon>
                    <Typography color="white" variant="h6">Website Design</Typography>
                  </Grid>
                  <Typography variant="h5">
                    <ul>
                      <li>Full-stack Responsive Website Development</li>
                      <li>Wordpress Development</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={4}>
            <AnimationOnScroll animateIn="animate__fadeInDown">
              <Card variant="outlined">
                <CardContent>
                  <Grid container direction="column" alignItems="center" justifyContent="center" pt={2} pb={2} style={{ backgroundColor: "blue" }}>
                    <Icon color="white" sx={{ color: "white" }}>desktop_mac</Icon>
                    <Typography color="white" variant="h6">Software Design</Typography>
                  </Grid>
                  <Typography variant="h5">
                    <ul>
                      <li>Application Development</li>
                      <li>Operating System Design</li>
                      <li>Compiler Design</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={4}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <Card variant="outlined">
                <CardContent>
                  <Grid container direction="column" alignItems="center" justifyContent="center" pt={2} pb={2} style={{ backgroundColor: "magenta" }}>
                    <Icon color="white" sx={{ color: "white" }}>storage</Icon>
                    <Typography color="white" variant="h6">Information Technology</Typography>
                  </Grid>
                  <Typography variant="h5">
                    <ul>
                      <li>Systems admninistration</li>
                      <li>Network admninistration</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={4}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Card variant="outlined">
                <CardContent>
                  <Grid container direction="column" alignItems="center" justifyContent="center" pt={2} pb={2} style={{ backgroundColor: "green" }}>
                    <Icon color="white" sx={{ color: "white" }}>trending_up</Icon>
                    <Typography color="white" variant="h6">Program Management</Typography>
                  </Grid>
                  <Typography variant="h5">
                    <ul>
                      <li>Project leadership (25 engineers)</li>
                      <li>Management (5 engineers)</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={4}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <Card variant="outlined">
                <CardContent>
                  <Grid container direction="column" alignItems="center" justifyContent="center" pt={2} pb={2} style={{ backgroundColor: "orange" }}>
                    <Icon color="white" sx={{ color: "white" }}>memory</Icon>
                    <Typography color="white" variant="h6">Hardware Design</Typography>
                  </Grid>
                  <Typography variant="h5">
                    <ul>
                      <li>Custom ASIC Design</li>
                      <li>Digital Hardware design</li>
                      <li>FPGA Design</li>
                    </ul>
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
