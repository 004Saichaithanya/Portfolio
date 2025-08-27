import React from 'react';
import { Typography, Box, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';


export default function Hero() {
  return (
        <Box sx={{
  mt: { xs: '3rem', md: '7rem' },
  mb: { xs: '3rem', md: '7rem' },
  textAlign: 'center',
  px: { xs: '1rem', md: '6rem' },
  width: '100%',
  maxWidth: '900px',
  margin: '0 auto'
}}>
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
          sx={{
      fontSize: { xs: '2rem', sm: '2.8rem', md: '3.5rem' },
      lineHeight: 1.2,
      fontWeight: 700,
      color: '#64ffda'
    }}
        >
          Poloju Sai Chaithanya
        </Typography>
        <Typography variant="h6" sx={{ color: '#64ffda', mt: 1 }}>
          <span>
        <TypeAnimation
          sequence={[
            'Aspiring Software Engineer',
            1000,
            'AI & Web Development Enthusiast',
            1000,
            "Student at CBIT'27",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
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
