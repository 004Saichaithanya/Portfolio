import React from 'react';
import { Box, IconButton, Typography, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{ py: 3, textAlign: 'center', backgroundColor: '#0a192f', color: '#64ffda' }}>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 1 }}>
        <IconButton
          component="a"
           href="https://github.com/004Saichaithanya"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#64ffda' }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          component="a"
         href="https://www.linkedin.com/in/poloju-sai-chaithanya-554287292/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#64ffda' }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:004polojusaichaithanya@gmail.com"
          sx={{ color: '#64ffda' }}
        >
          <Email />
        </IconButton>
      </Stack>
      <Typography variant="body2" sx={{ color: '#8892b0' }}>
        © {new Date().getFullYear()} Poloju Sai Chaithanya. All rights reserved.
      </Typography>
    </Box>
  );
}
