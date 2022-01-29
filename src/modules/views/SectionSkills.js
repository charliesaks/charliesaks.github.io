import React from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

// library used for cool animations
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const image = {
  display: "flex",
  height: 60,
  my: 4,
  margin: "auto",
  justifyContent: "center",
  alignItems: "center",
};

export default function SectionSkills() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container component="section" sx={{ mt: 15, mb: 30, position: 'relative' }}>
        <Typography variant="h4" marked="center" align="center" component="h2">
          Skills
        </Typography>

        <AnimationOnScroll animateIn="animate__slideInLeft">
          <Card>
            <CardContent>
              <Typography variant="h6">Languages</Typography>
              <hr />
              <Grid container direction="row" alignItems="center" justifyContent="center" pt={2} pb={2}>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/javascript-icon.png"
                    alt="Javascript"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    Javascript
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/c++-icon.png"
                    alt="C++"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    C/C++
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/python-icon.png"
                    alt="Python"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    Python
                  </Typography>
                </Grid>

              </Grid>
            </CardContent>
          </Card>
        </AnimationOnScroll>

        <br />

        <AnimationOnScroll animateIn="animate__slideInRight">
          <Card>
            <CardContent>
              <Typography variant="h6">Web Technologies</Typography>
              <hr />
              <Grid container direction="row" alignItems="center" justifyContent="center" pt={2} pb={2}>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/html5-icon.png"
                    alt="HTML5"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    HTML5
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/css3-icon.png"
                    alt="CSS3"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    CSS3
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/express-icon.png"
                    alt="Express"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    Express
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/bootstrap-icon.png"
                    alt="Bootstrap"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    Bootstrap
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/react-icon.png"
                    alt="React"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    React
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/nodejs-icon.png"
                    alt="Node js"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    Node js
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/mongodb-icon.svg"
                    alt="MongoDB"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    MongoDB
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/mysql-icon.png"
                    alt="MySQL"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    MySQL
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/wordpress-icon.png"
                    alt="Wordpress"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    Wordpress
                  </Typography>
                </Grid>

              </Grid>
            </CardContent>
          </Card>
        </AnimationOnScroll>

        <br />

        <AnimationOnScroll animateIn="animate__slideInLeft">
          <Card>
            <CardContent>
              <Typography variant="h6">Web Technologies</Typography>
              <hr />
              <Grid container direction="row" alignItems="center" justifyContent="center" pt={2} pb={2}>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/xcode-icon.png"
                    alt="Xcode"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    Xcode
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/gcc-icon.png"
                    alt="gcc"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    gcc/g++
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/gdb-icon.png"
                    alt="gdb"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    gdb
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/git-icon.png"
                    alt="git"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    git
                  </Typography>
                </Grid>

              </Grid>
            </CardContent>
          </Card>
        </AnimationOnScroll>

        <br />

        <AnimationOnScroll animateIn="animate__slideInRight">
          <Card>
            <CardContent>
              <Typography variant="h6">Operating Systems</Typography>
              <hr />
              <Grid container direction="row" alignItems="center" justifyContent="center" pt={2} pb={2}>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/apple-icon.png"
                    alt="iOS"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    iOS
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/apple-icon.png"
                    alt="macOS"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    macOS
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/linux-icon.png"
                    alt="Linux"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    Linux
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/unix-icon.gif"
                    alt="UNIX"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    UNIX
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Box
                    component="img"
                    src="./icons/windows-icon.png"
                    alt="Windows"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    Windows
                  </Typography>
                </Grid>

              </Grid>
            </CardContent>
          </Card>
        </AnimationOnScroll>

        <br />

      </Container>
    </Box>

  );
}
