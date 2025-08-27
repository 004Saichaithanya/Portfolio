import React from 'react';
import { Box, IconButton, Typography, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{
      py: { xs: 2, md: 4 },
      textAlign: 'center',
      backgroundColor: '#0a192f',
      color: '#64ffda',
      borderTop: "2px solid #112240"
    }}>
      <Stack direction="row" justifyContent="center" spacing={3} sx={{ mb: 1 }}>
        <IconButton
          component="a"
          href="https://github.com/004Saichaithanya"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#64ffda',
            p: 1,
            fontSize: { xs: 24, md: 32 },
            transition: 'background 0.2s',
            '&:hover': { background: '#112240', color: '#fff' }
          }}
        >
          <GitHub fontSize="inherit" />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/poloju-sai-chaithanya-554287292/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#64ffda',
            p: 1,
            fontSize: { xs: 24, md: 32 },
            transition: 'background 0.2s',
            '&:hover': { background: '#112240', color: '#fff' }
          }}
        >
          <LinkedIn fontSize="inherit" />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:004polojusaichaithanya@gmail.com"
          sx={{
            color: '#64ffda',
            p: 1,
            fontSize: { xs: 24, md: 32 },
            transition: 'background 0.2s',
            '&:hover': { background: '#112240', color: '#fff' }
          }}
        >
          <Email fontSize="inherit" />
        </IconButton>
      </Stack>
      <Typography
        variant="body2"
        sx={{
          color: '#8892b0',
          fontFamily: 'Fira Code',
          fontSize: { xs: '0.92rem', md: '1rem' },
        }}>
        © {new Date().getFullYear()} Poloju Sai Chaithanya. All rights reserved.
      </Typography>
    </Box>
  );
}
