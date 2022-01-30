import React from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '../components/Typography';

// library used for cool animations
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function SectionCertificates() {
  return (
    <Box
      id="certificates"
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container component="section" sx={{ mt: 15, mb: 20, position: 'relative' }}>
        <Typography gutterBottom variant="h4" marked="center" align="center" component="h2">
          Certificates
        </Typography>

        <Grid container direction="row" alignItems="center" justifyContent="center">

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Card sx={{ maxWidth: 500 }}>
                <Button
                  href="http://ude.my/UC-YF1J7543"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    image="./images/certificate_01.jpg"
                    alt="Charlie Sakamaki's Web Developer Bootcamp Certificate"
                  />
                </Button>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <Card sx={{ maxWidth: 500 }}>
                <Button
                  href="http://ude.my/UC-c30c50c4-acdd-4e6e-b03e-06113e590b3a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <CardMedia
                  component="img"
                  image="./images/certificate_02.jpg"
                  alt="Charlie Sakamaki's React with Redux 2020 Certificate"
                />
                </Button>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Card sx={{ maxWidth: 500 }}>
                <Button
                  href="http://ude.my/UC-92e3539a-bad4-46be-ab76-59721867457a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <CardMedia
                  component="img"
                  image="./images/certificate_03.jpg"
                  alt="Charlie Sakamaki's Bootstrap 4 Bootcamp Certificate"
                />
                </Button>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <Card sx={{ maxWidth: 500 }}>
                <Button
                  href="http://ude.my/UC-e6c7342f-1a00-4cfb-bebf-ef39a77e2d4e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <CardMedia
                  component="img"
                  image="./images/certificate_04.jpg"
                  alt="Charlie Sakamaki's GraphQL with React Certificate"
                />
                </Button>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Card sx={{ maxWidth: 500 }}>
                <Button
                  href="http://ude.my/UC-7fa67b4e-05dc-4071-bb72-dc5ea3f2f3dc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <CardMedia
                  component="img"
                  image="./images/certificate_03.jpg"
                  alt="Charlie Sakamaki's Webpack Developer's Guide Certificate"
                />
                </Button>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <Card sx={{ maxWidth: 500 }}>
                <Button
                  href="http://ude.my/UC-d30200b4-f572-4658-9bab-7f935d44f9fd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <CardMedia
                  component="img"
                  image="./images/certificate_04.jpg"
                  alt="Charlie Sakamaki's Webpack Developer's Guide Certificate"
                />
                </Button>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Card sx={{ maxWidth: 500 }}>
                <Button
                  href="http://ude.my/UC-7fa67b4e-05dc-4071-bb72-dc5ea3f2f3dc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <CardMedia
                  component="img"
                  image="./images/certificate_05.jpg"
                  alt="Charlie Sakamaki's Webpack Developer's Guide Certificate"
                />
                </Button>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <Card sx={{ maxWidth: 500 }}>
                <Button
                  href="http://ude.my/UC-d30200b4-f572-4658-9bab-7f935d44f9fd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <CardMedia
                  component="img"
                  image="./images/certificate_06.jpg"
                  alt="Charlie Sakamaki's Complete Developer's Guide to MongoDB Certificate"
                />
                </Button>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Card sx={{ maxWidth: 500 }}>
                <Button
                  href="http://ude.my/UC-bb379237-5c25-4275-982f-b7c83934c3e1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <CardMedia
                  component="img"
                  image="./images/certificate_07.jpg"
                  alt="Charlie Sakamaki's Advanced React and Redux Certificate"
                />
                </Button>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <Card sx={{ maxWidth: 500 }}>
                <Button
                  href="http://ude.my/UC-d2e6b560-4126-4ee1-853a-fcd1f49861a3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <CardMedia
                  component="img"
                  image="./images/certificate_08.jpg"
                  alt="Charlie Sakamaki's Modern Javascript Bootcamp Course (2020) Certificate"
                />
                </Button>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Card sx={{ maxWidth: 500 }}>
                <Button
                  href="http://ude.my/UC-03403a80-ccd0-495d-93c1-d7edbc3f681b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <CardMedia
                  component="img"
                  image="./images/certificate_09.jpg"
                  alt="Charlie Sakamaki's Node with React: Fullstack Web Development Certificate"
                />
                </Button>
              </Card>
            </AnimationOnScroll>
          </Grid>

        </Grid>
      </Container>
    </Box>

  );
}
