import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Resume() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ mt: 8, textAlign: 'center', px: 2 }}>
      <Typography variant="h4" sx={{ color: '#64ffda', mb: 2 }}>Resume</Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <iframe
          src="/SaiChaithanya_Resume.pdf"
          width={isMobile ? '100%' : '80%'}
          height={isMobile ? '500px' : '80vh'}
          style={{
            border: '2px solid #64ffda',
            borderRadius: '8px',
          }}
          title="Sai Chaitanya Resume"
        ></iframe>
      </Box>

      <Button
        variant="outlined"
        startIcon={<Download />}
        sx={{ color: '#64ffda', borderColor: '#64ffda' }}
        href="/SaiChaithanya_Resume.pdf"
        download
      >
        Download CV
      </Button>
    </Box>
  );
}
