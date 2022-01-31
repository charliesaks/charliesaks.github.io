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
      sx={{ display: 'flex', overflow: 'hidden', background: "url(images/img_bg1.jpg) no-repeat center", backgroundSize: "cover" }}
    >
      <Container component="section" sx={{ mt: 15, mb: 20, position: 'relative' }}>
        <Typography gutterBottom color="white" variant="h3" marked="center" align="center">
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
                      <li>Web Application Development</li>
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
                      <li>Desktop Application Development</li>
                      <li>Mobile Application Development</li>
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
                    <Typography color="white" variant="h6">DevOps</Typography>
                  </Grid>
                  <Typography variant="h5">
                    <ul>
                      <li>DevSecOps</li>
                      <li>K8s Cluster Creation</li>
                      <li>Pipeline creation and provisioning</li>
                      <li>Traditional IT administration</li>
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
                      <li>Project leadership</li>
                      <li>Management</li>
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
