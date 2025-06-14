<<<<<<< HEAD
import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const achievements = [
  {
    year: '2025',
    title: 'Deep Learning Certification - CBIT Winter Upskilling',
    description: 'Successfully completed a certification program on Deep Learning as part of CBIT’s Winter Upskilling initiative.',
    icon: <SchoolIcon color="primary" />,
    link: 'https://drive.google.com/file/d/1v3q4c1A0dXv9OfIy1Fju47eu-0B2a9z2/view?usp=sharing',
  },
  {
    year: '2024',
    title: 'Special Mention in CBIT Hacktober Fest',
    description: 'Contributed to an AI PDF Assistant project and earned special mention for key development work.',
    icon: <EmojiEventsIcon color="secondary" />,
    link: 'https://drive.google.com/file/d/19Sp2dEXZwFjdr51uleApQtKnVG4x9acP/view?usp=sharing',
  },
  {
    year: '2024',
    title: 'Internship Certification from CODTECH IT',
    description: 'Worked on a Social Media Platform and Portfolio Website with front-end and back-end development.',
    icon: <WorkspacePremiumIcon color="success" />,
    link: 'https://drive.google.com/file/d/11Ak0jpHb2Q3xZswbKnKf_6FUbLY87ktB/view?usp=sharing',
  },
  {
    year: '2023',
    title: 'Machine Learning with Python - Great Learning',
    description: 'Learned foundational ML concepts using Pandas, NumPy, and implemented supervised algorithms.',
    icon: <SchoolIcon color="info" />,
    link: 'https://drive.google.com/file/d/1WnyQYXaW6y-4QyBeIyMx4vnBh1OQZ_xM/view?usp=sharing',
  },
];

export default function Achievements() {
  return (
    <Box sx={{ mt: 10, px: 3 }}>
      <Typography variant="h4" sx={{ mb: 4, color: '#64ffda', textAlign: 'center' }}>
        Achievements & Certifications
      </Typography>
      <Grid container spacing={3}>
        {achievements.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
             <Card   sx={{
                backgroundColor: '#112240',
                color: '#ccd6f6',
                minHeight: 220,
                transition: '0.3s ease-in-out',
                border: '1px solid #0a192f',
                boxShadow: '0 0 0px #64ffda',
                '&:hover': {
                boxShadow: '0 0 5px #64ffda, 0 0 20px #64ffda, 0 0 20px #64ffda',
                transform: 'translateY(-5px)',
                border: '1px solid #64ffda',
                },
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  {item.icon}
                  <Typography variant="h6" sx={{ ml: 1 }}>{item.title}</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#8892b0' }}>
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={item.link} target="_blank" sx={{ color: '#64ffda' }}>
                  View Certificate
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
=======
import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const achievements = [
  {
    year: '2025',
    title: 'Deep Learning Certification - CBIT Winter Upskilling',
    description: 'Successfully completed a certification program on Deep Learning as part of CBIT’s Winter Upskilling initiative.',
    icon: <SchoolIcon color="primary" />,
    link: 'https://drive.google.com/file/d/1v3q4c1A0dXv9OfIy1Fju47eu-0B2a9z2/view?usp=sharing',
  },
  {
    year: '2024',
    title: 'Special Mention in CBIT Hacktober Fest',
    description: 'Contributed to an AI PDF Assistant project and earned special mention for key development work.',
    icon: <EmojiEventsIcon color="secondary" />,
    link: 'https://drive.google.com/file/d/19Sp2dEXZwFjdr51uleApQtKnVG4x9acP/view?usp=sharing',
  },
  {
    year: '2024',
    title: 'Internship Certification from CODTECH IT',
    description: 'Worked on a Social Media Platform and Portfolio Website with front-end and back-end development.',
    icon: <WorkspacePremiumIcon color="success" />,
    link: 'https://drive.google.com/file/d/11Ak0jpHb2Q3xZswbKnKf_6FUbLY87ktB/view?usp=sharing',
  },
  {
    year: '2023',
    title: 'Machine Learning with Python - Great Learning',
    description: 'Learned foundational ML concepts using Pandas, NumPy, and implemented supervised algorithms.',
    icon: <SchoolIcon color="info" />,
    link: 'https://drive.google.com/file/d/1WnyQYXaW6y-4QyBeIyMx4vnBh1OQZ_xM/view?usp=sharing',
  },
];

export default function Achievements() {
  return (
    <Box sx={{ mt: 10, px: 3 }}>
      <Typography variant="h4" sx={{ mb: 4, color: '#64ffda', textAlign: 'center' }}>
        Achievements & Certifications
      </Typography>
      <Grid container spacing={3}>
        {achievements.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
             <Card   sx={{
                backgroundColor: '#112240',
                color: '#ccd6f6',
                minHeight: 220,
                transition: '0.3s ease-in-out',
                border: '1px solid #0a192f',
                boxShadow: '0 0 0px #64ffda',
                '&:hover': {
                boxShadow: '0 0 5px #64ffda, 0 0 20px #64ffda, 0 0 20px #64ffda',
                transform: 'translateY(-5px)',
                border: '1px solid #64ffda',
                },
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  {item.icon}
                  <Typography variant="h6" sx={{ ml: 1 }}>{item.title}</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#8892b0' }}>
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={item.link} target="_blank" sx={{ color: '#64ffda' }}>
                  View Certificate
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
>>>>>>> 00aafdd (Your commit message here)
