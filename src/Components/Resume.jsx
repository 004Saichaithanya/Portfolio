import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Download } from '@mui/icons-material';

export default function Resume() {
  return (
    <Box sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ color: '#64ffda', mb: 2 }}>Resume</Typography>

      {/* Embed the PDF resume */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '50vh',
          mb: 2,
        }}
      >
        <iframe
          src="/SaiChaithanya_Resume.pdf"
          width="80%"
          height="100%"
          style={{
            border: '2px solid #64ffda',
            borderRadius: '8px',
          }}
          title="Sai Chaitanya Resume"
        ></iframe>
      </Box>

      {/* Optional download button */}
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
