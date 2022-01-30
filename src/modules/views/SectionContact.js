import React from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import Typography from '../components/Typography';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SectionContact() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'primary.light' }}
    >
      <Container component="section" sx={{ mt: 15, mb: 20, position: 'relative' }}>
        <Typography variant="h4" marked="center" align="center" component="h2">
          Get In Touch
        </Typography>

        <Grid container direction="row" alignItems="center" justifyContent="center">

          <Grid item xs={12} p={2} m={2}>
            <Typography variant="h5" marked="center" align="center" component="h2">
              Have a question or want to chat?
            </Typography>
          </Grid>

          <Grid item xs={2} p={2} m={2}>
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
              <Typography color="white" variant="h6">Email</Typography>
            </Button>
          </Grid>

          <Grid item xs={2} p={2} m={2}>
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
              <Typography color="white" variant="h6">LinkedIn</Typography>
            </Button>
          </Grid>

        </Grid>
      </Container>
    </Box>

  );
}
