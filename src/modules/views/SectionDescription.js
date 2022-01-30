import React from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

export default function SectionDescription() {
  return (
    <Container component="section" sx={{ mt: 15, mb: 20, position: 'relative' }}>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '30vh' }}
      >
        <Grid item xs={6}>
          <Typography align="center" variant="h5">
            {
              'I am a dedicated and detail-oriented software engineer and electrical engineer with over twenty years of experience.  '
            }
            {
              'I am currently a software developer at '
            }
            <Link href="https://revacomm.com" target="_blank" rel="noopener noreferrer">RevaComm Inc.</Link>
            {
              ' in Honolulu, Hawaii.'
            }
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={5}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={4}>
          <Box sx={item}>
            <Icon
              color="secondary"
              sx={{ fontSize: 60 }}
            >
              important_devices
            </Icon>

            <Typography variant="h6" sx={{ my: 5 }}>
              Developer
            </Typography>
            <Typography align="center" variant="h5">
              {
                'Software Developer / Full Stack Developer '
              }
              {
                'who focuses on writing clean, robust, and efficient code.'
              }
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={item}>
            <Icon
              color="success"
              sx={{ fontSize: 60 }}
            >
              view_list
            </Icon>

            <Typography variant="h6" sx={{ my: 5 }}>
              Multi-Disciplined
            </Typography>
            <Typography align="center" variant="h5">
              {
                'Experience in hardware design, Information Technology (IT), '
              }
              {
                'project management and leadership.'
              }
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
