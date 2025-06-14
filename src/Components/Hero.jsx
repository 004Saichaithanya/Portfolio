import React from 'react';
import { Typography, Box, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <Box sx={{ mt: 10, mb: 10, textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" sx={{ color: '#64ffda', fontFamily: 'Fira Code' }}>
          Hi, I'm
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, fontWeight: 'bold' }}
        >
          Poloju Sai Chaithanya
        </Typography>
        <Typography variant="h6" sx={{ color: '#64ffda', mt: 1 }}>
          <span>
            <Typewriter
              words={[
                'Aspiring Software Engineer',
                'AI & Web Development Enthusiast',
                "Student at CBIT'27",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>
        </Typography>
        <Typography variant="h5" sx={{ color: '#8892b0', mt: 2 }}>
          I build intelligent software solutions.
        </Typography>

        {/* Social icons */}
        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 3 }}>
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
      </motion.div>
    </Box>
  );
}
