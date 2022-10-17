import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Typography from "../components/Typography";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function SectionContact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        background:
          "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(images/charlie/Diamond-head-top-pano.jpg)",
        backgroundPosition: "50%",
        backgroundSize: "cover",
      }}
    >
      <Container
        component="section"
        sx={{ mt: 15, mb: 20, position: "relative" }}
      >
        <Typography
          color="white"
          gutterBottom
          variant="h3"
          marked="center"
          align="center"
        >
          Get In Touch
        </Typography>

        <Typography
          color="white"
          variant="h6"
          marked="center"
          align="center"
          component="h2"
          sx={{ mb: 10 }}
        >
          Have a question or want to chat?
        </Typography>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={6} md={3} p={2} m={2} align="center">
            <Button
              href="mailto:charliesakamaki@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              color="success"
            >
              <Icon sx={{ color: "white" }}>mail_outline</Icon>
              &nbsp;
              <Typography color="white" variant="h6">
                Email
              </Typography>
            </Button>
          </Grid>

          <Grid item xs={6} md={3} p={2} m={2} align="center">
            <Button
              href="https://linkedin.com/in/charlie-sakamaki"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              color="info"
            >
              <LinkedInIcon sx={{ color: "white" }} />
              &nbsp;
              <Typography color="white" variant="h6">
                LinkedIn
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
