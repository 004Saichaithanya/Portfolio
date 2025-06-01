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
  Translate,
  Healing,
  Group,
} from '@mui/icons-material';

const projects = [
  {
    title: 'AIHealthPro: Disease Prediction System',
    description: 'Used ML algorithms to predict diseases like diabetes, lung, liver, and BP. Built with Flask and a user-friendly UI.',
    link: 'https://github.com/004Saichaithanya/AIHealthpro',
    icon: <Science sx={{ color: '#64ffda', fontSize: 40 }} />,  // Larger icon
  },
  {
    title: 'Language Detection',
    description: 'Detected 25 Indian languages using ML. Flask-based web app for real-time detection.',
    link: 'https://github.com/004Saichaithanya/LangDetection_ML',
    icon: <Translate sx={{ color: '#64ffda', fontSize: 40 }} />,  // Larger icon
  },
  {
    title: 'Skin Cancer Detection',
    description: 'Deep learning multiclass classifier for skin cancer detection using transfer learning.',
    link: 'https://github.com/004Saichaithanya/Skin_Cancer_DL',
    icon: <Healing sx={{ color: '#64ffda', fontSize: 40 }} />,  // Larger icon
  },
  {
    title: 'Social Media Platform',
    description: 'Django-based full-stack project with authentication, profiles, and real-time interactions.',
    link: 'https://github.com/004Saichaithanya/CODETECH-TASK2',
    icon: <Group sx={{ color: '#64ffda', fontSize: 40 }} />,  // Larger icon
  },
];

export default function Projects() {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 8 }}>
      <Typography variant="h4" sx={{ mb: 5, color: '#64ffda', textAlign: 'left' }}>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((proj, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              sx={{
                height: '100%',
                minWidth: 280,
                maxWidth: 360,
                backgroundColor: '#112240',
                borderLeft: '4px solid #64ffda',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0 0 10px #64ffda',
                  cursor: 'pointer',
                },
              }}
              onClick={() => window.open(proj.link, '_blank')}
            >
              <CardActionArea sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar
                    sx={{
                      bgcolor: 'transparent',
                      margin: '0 auto 10px',
                      width: 80,
                      height: 80,
                    }}
                  >
                    {proj.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ color: '#ccd6f6', mb: 1 }}>
                    {proj.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#8892b0' }}>
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
