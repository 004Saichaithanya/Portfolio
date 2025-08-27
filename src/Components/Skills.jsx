import React from 'react';
import { Typography, Box, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';

// React-icons imports (official logos)
import { FaPython, FaJava, FaReact, FaNodeJs, FaDatabase, FaRobot } from "react-icons/fa6";
import { BiLogoFlask } from "react-icons/bi";
import { SiMongodb, SiTensorflow, SiJupyter } from "react-icons/si";
import { VscVscode, VscDebugAll } from "react-icons/vsc";
import { HiSpeakerphone } from "react-icons/hi";
import { GrOptimize } from "react-icons/gr";

// Material UI generic icons
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupIcon from '@mui/icons-material/Group';
import BuildIcon from '@mui/icons-material/Build';
import VisibilityIcon from '@mui/icons-material/Visibility';

const skills = [
  { name: "Python", icon: <FaPython color='#64ffda' size={26} />, category: "Languages" },
  { name: "Java (DSA)", icon: <FaJava color='#64ffda' size={26} />, category: "Languages" },
  { name: "C", icon: <CodeIcon sx={{ color: '#64ffda' }} />, category: "Languages" },
  { name: "C++", icon: <CodeIcon sx={{ color: '#64ffda' }} />, category: "Languages" },
  { name: "HTML", icon: <HtmlIcon sx={{ color: '#64ffda' }} />, category: "Languages" },
  { name: "CSS", icon: <CssIcon sx={{ color: '#64ffda' }} />, category: "Languages" },
  { name: "JavaScript", icon: <CodeIcon sx={{ color: '#64ffda' }} />, category: "Languages" },
  { name: "Python (Flask)", icon: <BiLogoFlask color='#64ffda' size={26} />, category: "Web" },
  { name: "React.js", icon: <FaReact color='#64ffda' size={26} />, category: "Web" },
  { name: "Express.js", icon: <FaNodeJs color='#64ffda' size={26} />, category: "Web" },
  { name: "SQL", icon: <FaDatabase color='#64ffda' size={26} />, category: "Database" },
  { name: "MongoDB", icon: <SiMongodb color='#64ffda' size={26} />, category: "Database" },
  { name: "TensorFlow", icon: <SiTensorflow color='#64ffda' size={26} />, category: "ML/DL" },
  { name: "ML/DL algorithms", icon: <FaRobot color='#64ffda' size={26} />, category: "ML/DL" },
  { name: "Computer Vision", icon: <VisibilityIcon sx={{ color: '#64ffda' }} />, category: "ML/DL" },
  { name: "VS Code", icon: <VscVscode color='#64ffda' size={26} />, category: "Tools" },
  { name: "Jupyter", icon: <SiJupyter color='#64ffda' size={26} />, category: "Tools" },
  { name: "GitHub", icon: <GitHubIcon sx={{ color: '#64ffda' }} />, category: "Tools" },
  { name: "Adaptability", icon: <EmojiObjectsIcon sx={{ color: '#64ffda' }} />, category: "SoftSkills" },
  { name: "Teamwork", icon: <GroupIcon sx={{ color: '#64ffda' }} />, category: "SoftSkills" },
  { name: "Communication", icon: <HiSpeakerphone color='#64ffda' size={26} />, category: "SoftSkills" },
  { name: "Debugging", icon: <VscDebugAll color='#64ffda' size={26} />, category: "Other" },
  { name: "Performance Tuning", icon: <GrOptimize color='#64ffda' size={26} />, category: "Other" },
];

export default function Skills() {
  return (
    <Box id="Skills" sx={{
      mt: { xs: 4, md: 8 },
      px: { xs: 2, md: 8 },
      py: { xs: 3, md: 6 },
      background: 'linear-gradient(135deg,#0a192f 80%,#112240 100%)',
      borderRadius: 4,
      boxShadow: '0 4px 24px 0 rgba(100,255,218,0.08)'
    }}>
      <Typography
        variant="h4"
        sx={{
          color: '#64ffda',
          fontFamily: 'Fira Code',
          textAlign: 'center',
          mb: { xs: 2, md: 4 },
          letterSpacing: '2px'
        }}
      >
        Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
            >
              <Paper
                elevation={8}
                sx={{
                  px: { xs: 2, md: 4 },
                  py: { xs: 3, md: 4 },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  borderRadius: 3,
                  backgroundColor: '#1c2742',
                  color: '#64ffda',
                  fontFamily: 'Fira Code',
                  fontSize: '1rem',
                  fontWeight: 500,
                  textAlign: 'left',
                  minWidth: 0,
                  boxShadow: '0 2px 10px #64ffda20',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: '0 0 20px #64ffda70',
                    transform: 'scale(1.08)'
                  }
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  {skill.icon}
                  <span style={{ color: '#ccd6f6' }}>{skill.name}</span>
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
