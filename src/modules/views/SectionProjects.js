import React from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '../components/Typography';

// library used for cool animations
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function SectionProjects() {
  return (
    <Box
      id="projects"
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'primary.light' }}
    >
      <Container component="section" sx={{ mt: 15, mb: 20, position: 'relative' }}>
        <Typography variant="h4" marked="center" align="center" component="h2">
          Recent Projects
        </Typography>

        <Grid container direction="row" alignItems="center" justifyContent="center">

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__slideInLeft">
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <Button
                    href="https://charlies-covid-tracker.surge.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardMedia
                      component="img"
                      image="./images/charlies-covid-tracker.jpg"
                      alt="U.S. Covid Tracker"
                    />
                  </Button>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      U.S. Covid Tracker
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                      <ul>
                        <li>Covid Tracker web app</li>
                        <li>Full-stack web app using Gatsby, React, Leaflet, Bootstrap, vx, D3</li>
                      </ul>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__slideInRight">
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <Button
                    href="https://www.jeannettetrevias.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardMedia
                      component="img"
                      image="./images/jeannette-trevias.jpg"
                      alt="Jeannette Trevias Website"
                    />
                  </Button>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Jeannette Trevias
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                      <ul>
                        <li>Website for local musician</li>
                        <li>Made using WordPress</li>
                      </ul>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item xs={12} md={5} p={2} m={2}>
            <AnimationOnScroll animateIn="animate__slideInRight">
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <Button
                    href="https://www.melisaskitchen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardMedia
                      component="img"
                      image="./images/melisas-kitchen.jpg"
                      alt="Melisa's Kitchen Website"
                    />
                  </Button>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Melisa's Kitchen
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                      <ul>
                        <li>Cooking blog website</li>
                        <li>Made using WordPress</li>
                      </ul>
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
