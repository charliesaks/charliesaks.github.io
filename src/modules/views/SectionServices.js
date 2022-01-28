import React from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

// // nodejs library that concatenates classes
// import classNames from "classnames";
// // core components
// import GridContainer from "../../../components/Grid/GridContainer.js";
// import GridItem from "../../../components/Grid/GridItem.js";
// import Card from "../../../components/Card/Card.js";
// import CardHeader from "../../../components/Card/CardHeader.js";
// import CardBody from "../../../components/Card/CardBody.js";
// // @material-ui/core components
// import { makeStyles } from "@mui/styles";

// // library used for cool animations
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

// // Material UI icons
// import LanguageIcon from "@mui/icons-material/Language";
// import StorageIcon from "@mui/icons-material/Storage";
// import DesktopMacIcon from "@mui/icons-material/DesktopMac";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import MemoryIcon from "@mui/icons-material/Memory";

// import examplesStyle from "../../../assets/jss/material-kit-pro-react/views/presentationSections/examplesStyle.js";
// import imagesStyles from "../../../assets/jss/material-kit-pro-react/imagesStyles.js";
// import cardHeaderStyles from "../../../assets/jss/material-kit-pro-react/components/cardHeaderStyle.js";

// const styles = {
//   ...examplesStyle,
//   ...imagesStyles,
//   ...cardHeaderStyles
// };

// const useStyles = makeStyles(styles);

export default function SectionServices() {
  // const classes = useStyles();
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container component="section" sx={{ mt: 15, mb: 30, position: 'relative' }}>
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
                  <Typography>
                    <ul>
                      <li><h4>Full-stack Responsive Website Development</h4></li>
                      <li><h4>Wordpress Development</h4></li>
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
                  <Typography>
                    <ul>
                      <li><h4>Application Development</h4></li>
                      <li><h4>Operating System Design</h4></li>
                      <li><h4>Compiler Design</h4></li>
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
                  <Typography>
                    <ul>
                      <li><h4>Systems admninistration</h4></li>
                      <li><h4>Network admninistration</h4></li>
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
                  <Typography>
                    <ul>
                      <li><h4>Project leadership (25 engineers)</h4></li>
                      <li><h4>Management (5 engineers)</h4></li>
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
                  <Typography>
                    <ul>
                      <li><h4>Custom ASIC Design</h4></li>
                      <li><h4>Digital Hardware design</h4></li>
                      <li><h4>FPGA Design</h4></li>
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
