import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Box,
  Avatar,
} from '@mui/material';

import {
  Science,
  Healing,
  Group,
  Dashboard,
} from '@mui/icons-material';


const projects = [
  {
    title: 'Crowd Detection System',
    description: 'Real-time crowd detection and heatmap-based counting using a custom-trained YOLO model with threshold-triggered alerts. Built using Flask APIs and React (Vite).',
    link: 'https://github.com/004Saichaithanya/HTF25-Team-144',
    icon: <Group sx={{ color: '#64ffda', fontSize: 40 }} />,
  },
  {
    title: 'Skin Cancer Detection',
    description: 'Deep learning multiclass classifier for skin cancer detection using transfer learning and medical image analysis.',
    link: 'https://github.com/004Saichaithanya/Skin_Cancer_DL',
    icon: <Healing sx={{ color: '#64ffda', fontSize: 40 }} />,
  },
  {
    title: 'Ayursutra Web Application',
    description: 'AI-driven Ayurvedic dashboard built using React, FastAPI, and Firebase with real-time analytics and an integrated AI chatbot.',
    link: 'https://github.com/004Saichaithanya/ayursutra-panchakarma-app',
    icon: <Dashboard sx={{ color: '#64ffda', fontSize: 40 }} />,
  },
    {
    title: 'AIHealthPro: Disease Prediction System',
    description: 'ML-based disease prediction system for diabetes, lung, liver, and BP using Flask and a user-friendly UI.',
    link: 'https://github.com/004Saichaithanya/AIHealthpro',
    icon: <Science sx={{ color: '#64ffda', fontSize: 40 }} />,
  },
];


export default function Projects() {
  return (
    <Box sx={{
  px: { xs: 2, md: 10 },
  py: { xs: 5, md: 8 },
  background: 'linear-gradient(135deg,#0a192f 82%,#112240 100%)',
  borderRadius: 8,
  minHeight: '100vh',
}}>
      <Typography variant="h4" sx={{ mb: 5,color: '#64ffda', textAlign: 'center' }}>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((proj, idx) => (
          <Grid item xs={12} sm={12} md={6}  key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card
          sx={{
            backgroundColor: '#1c2742',
            color: '#ccd6f6',
            borderRadius: 5,
            boxShadow: '0 4px 32px #64ffda18',
            border: '2px solid #112240',
            px: { xs: 2, md: 8 },
            py: { xs: 5, md: 6 },
            mb: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 900,
            margin: '0 auto',
            transition: 'box-shadow 0.2s, border-color 0.2s, transform 0.2s',
            '&:hover': {
              boxShadow: '0 0 32px #64ffda63',
              borderColor: '#64ffda',
              transform: 'scale(1.03) translateY(-5px)',
            },
          }}
              onClick={() => window.open(proj.link, '_blank')}
            >
              <CardActionArea sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar
                sx={{
                  bgcolor: '#0a192f',
                  boxShadow: '0 2px 12px #64ffda33',
                  width: 80,
                  height: 80,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                  >
                    {proj.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{
  color: '#64ffda',
  fontFamily: 'Fira Code',
  textAlign: 'center',
  mb: 2,
  fontWeight: 700,
  fontSize: { xs: '1.1rem', md: '1.25rem' },
  letterSpacing: 1.5,
}}>
                    {proj.title}
                  </Typography>
                  <Typography variant="body2" sx={{
  color: '#8892b0',
  fontFamily: 'Inter, Fira Code, monospace',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 1.6,
}}>
                    {proj.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
