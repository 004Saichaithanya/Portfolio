import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Stack,
  Avatar,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

// Avatars for icons - for modern circular icon backgrounds!
const iconMap = {
  School: <Avatar sx={{ bgcolor: "#64ffda", mr: 1, width: 40, height: 40 }}><SchoolIcon sx={{ color: "#0a192f" }} /></Avatar>,
  EmojiEvents: <Avatar sx={{ bgcolor: "#ff80ab", mr: 1, width: 40, height: 40 }}><EmojiEventsIcon sx={{ color: "#fff" }} /></Avatar>,
  WorkspacePremium: <Avatar sx={{ bgcolor: "#69f0ae", mr: 1, width: 40, height: 40 }}><WorkspacePremiumIcon sx={{ color: "#0a192f" }} /></Avatar>,
};

const achievements = [
  {
    year: '2025',
    title: 'IBM SkillsBuild Internship – AI & Cloud',
    description: '4-week AICTE–Edunet internship covering Cloud, AI, Data Analytics, Chatbots, and AutoAI.',
    icon: iconMap.School,
    link: 'https://drive.google.com/file/d/1Wi3zpZ338HmlR2X-cFS9vGa7e3pRJ2NN/view?usp=sharing', // local resume path (certificate/reference)
  },
  {
    year: '2025',
    title: 'Deep Learning Certification - CBIT Winter Upskilling',
    description: 'Successfully completed a certification program on Deep Learning as part of CBIT’s Winter Upskilling initiative.',
    icon: iconMap.School,
    link: 'https://drive.google.com/file/d/1v3q4c1A0dXv9OfIy1Fju47eu-0B2a9z2/view?usp=sharing',
  },
  {
    year: '2024',
    title: 'Special Mention in CBIT Hacktober Fest',
    description: 'Contributed to an AI PDF Assistant project and earned special mention for key development work.',
    icon: iconMap.EmojiEvents,
    link: 'https://drive.google.com/file/d/19Sp2dEXZwFjdr51uleApQtKnVG4x9acP/view?usp=sharing',
  },
  {
    year: '2024',
    title: 'Internship Certification from CODTECH IT',
    description: 'Worked on a Social Media Platform and Portfolio Website with front-end and back-end development.',
    icon: iconMap.WorkspacePremium,
    link: 'https://drive.google.com/file/d/11Ak0jpHb2Q3xZswbKnKf_6FUbLY87ktB/view?usp=sharing',
  },
  {
    year: '2023',
    title: 'Machine Learning with Python - Great Learning',
    description: 'Learned foundational ML concepts using Pandas, NumPy, and implemented supervised algorithms.',
    icon: iconMap.School,
    link: 'https://drive.google.com/file/d/1WnyQYXaW6y-4QyBeIyMx4vnBh1OQZ_xM/view?usp=sharing',
  },
];

export default function Achievements() {
  return (
    <Box sx={{
      mt: { xs: 6, md: 10 },
      px: { xs: 1, md: 8},
      py: { xs: 3, md: 5 },
      background: 'linear-gradient(135deg,#0a192f 80%,#112240 100%)',
      borderRadius: 5,
      boxShadow: '0 4px 24px #64ffda15',
    }}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 5 },
          color: '#64ffda',
          textAlign: 'center',
          letterSpacing: 2,
          fontFamily: 'Fira Code',
        }}
      >
        Achievements & Certifications
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {achievements.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index} sx={{ display: "flex" }}>
            <Card
              elevation={8}
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: { xs: 240, md: 300 },
                backgroundColor: '#112240',
                color: '#ccd6f6',
                borderRadius: 4,
                border: '1.5px solid #112240',
                boxShadow: '0 2px 18px #64ffda20',
                transition: 'box-shadow 0.2s, transform 0.2s, border-color 0.2s',
                '&:hover': {
                  boxShadow: '0 0 32px #64ffda68',
                  borderColor: '#64ffda',
                  transform: 'translateY(-6px) scale(1.03)',
                },
              }}
            >
              <CardContent>
                <Stack direction="row" alignItems="center">
                  {item.icon}
                  <Box>
                    <Typography variant="h6" sx={{
                      color: '#64ffda',
                      fontWeight: 700,
                      fontSize: { xs: '1.1rem', md: '1.2rem' },
                      fontFamily: 'Fira Code'
                    }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{
                      color: '#8892b0',
                      mt: 1,
                      fontFamily: 'Inter, Fira Code, monospace',
                      fontSize: '0.98rem',
                    }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
              <CardActions sx={{ px: 3, pb: 2 }}>
                <Button
                  size="medium"
                  href={item.link}
                  target="_blank"
                  sx={{
                    color: '#64ffda',
                    fontFamily: 'Fira Code',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#0a192f', backgroundColor: '#64ffda' }
                  }}
                >
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
