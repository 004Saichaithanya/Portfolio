import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const categorizedSkills = {
  Languages: ['Python', 'Java (DSA)', 'C', 'C++', 'HTML', 'CSS', 'JavaScript'],
  WebDevelopment: ['Python (Flask)', 'React.js', 'Express.js'],
  Databases: ['SQL', 'MongoDB'],
  MLDL: ['TensorFlow', 'ML/DL algorithms'],
  Tools: ['VS Code', 'Jupyter', 'GitHub'],
  SoftSkills: ['Adaptability', 'Teamwork', 'Communication'],
  Other: ['Debugging', 'Performance Tuning']
};

const allSkills = [
  ...categorizedSkills.Languages,
  ...categorizedSkills.WebDevelopment,
  ...categorizedSkills.Databases,
  ...categorizedSkills.MLDL,
  ...categorizedSkills.Tools,
  ...categorizedSkills.SoftSkills,
  ...categorizedSkills.Other
];


export default function Skills() {
  return (
    <Box id="Skills" sx={{ mt: 8 }}>
      <Typography
        variant="h4"
        sx={{
          color: '#64ffda',
          fontFamily: 'Fira Code',
          textAlign: 'center',
          mb: 4,
        }}
      >
        Skills
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {allSkills.map((skill, idx) => (
          <Grid item key={idx}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Paper
                elevation={6}
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: 2,
                  backgroundColor: '#112240',
                  color: '#64ffda',
                  fontFamily: 'Fira Code',
                  fontSize: '1rem',
                  textAlign: 'center',
                  minWidth: 120,
                }}
              >
                {skill}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
