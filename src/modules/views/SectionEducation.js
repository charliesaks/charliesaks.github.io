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

// // nodejs library that concatenates classes
// import classNames from "classnames";
// // core components
// import GridContainer from "../../../components/Grid/GridContainer.js";
// import GridItem from "../../../components/Grid/GridItem.js";
// import Card from "../../../components/Card/Card.js";
// import CardBody from "../../../components/Card/CardBody.js";
// import CardFooter from "../../../components/Card/CardFooter.js";
// // @material-ui/core components
// import { makeStyles } from "@mui/styles";

// library used for cool animations
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

// import examplesStyle from "../../../assets/jss/material-kit-pro-react/views/presentationSections/examplesStyle.js";
// import imagesStyles from "../../../assets/jss/material-kit-pro-react/imagesStyles.js";

// const styles = {
//   ...examplesStyle,
//   ...imagesStyles,
//   textCenter: {
//     textAlign: "center"
//   },
// };

// const useStyles = makeStyles(styles);

export default function SectionEducation() {
  // const classes = useStyles();
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container component="section" sx={{ mt: 15, mb: 30, position: 'relative' }}>
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
