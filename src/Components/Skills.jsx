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
  // Languages
  { name: "Python", icon: <FaPython color='#64ffda' size={26} /> },
  { name: "Java", icon: <FaJava color='#64ffda' size={26} /> },
  { name: "C", icon: <CodeIcon sx={{ color: '#64ffda' }} /> },
  { name: "C++", icon: <CodeIcon sx={{ color: '#64ffda' }} /> },
  { name: "JavaScript", icon: <CodeIcon sx={{ color: '#64ffda' }} /> },
  { name: "HTML", icon: <HtmlIcon sx={{ color: '#64ffda' }} /> },
  { name: "CSS", icon: <CssIcon sx={{ color: '#64ffda' }} /> },

  // Web Dev & APIs
  { name: "Flask", icon: <BiLogoFlask color='#64ffda' size={26} /> },
  { name: "FastAPI", icon: <BuildIcon sx={{ color: '#64ffda' }} /> },
  { name: "React.js", icon: <FaReact color='#64ffda' size={26} /> },
  { name: "Node.js / Express.js", icon: <FaNodeJs color='#64ffda' size={26} /> },
  { name: "REST API Development", icon: <BuildIcon sx={{ color: '#64ffda' }} /> },

  // Databases
  { name: "MySQL", icon: <FaDatabase color='#64ffda' size={26} /> },
  { name: "MongoDB", icon: <SiMongodb color='#64ffda' size={26} /> },
  { name: "NoSQL Databases", icon: <SiMongodb color='#64ffda' size={26} /> },

  // Cloud & Deployment
  { name: "Firebase", icon: <VscDebugAll color='#64ffda' size={26} /> },
  { name: "Google Cloud", icon: <SiJupyter color='#64ffda' size={26} /> },
  { name: "IBM Cloud", icon: <VscVscode color='#64ffda' size={26} /> },

  // ML / DL
  { name: "Scikit-learn", icon: <FaRobot color='#64ffda' size={26} /> },
  { name: "TensorFlow", icon: <SiTensorflow color='#64ffda' size={26} /> },
  { name: "Computer Vision", icon: <VisibilityIcon sx={{ color: '#64ffda' }} /> },
  { name: "LLM's (LangChain, GenAI)", icon: <EmojiObjectsIcon sx={{ color: '#64ffda' }} /> },

  // Tools & OS
  { name: "Git / GitHub", icon: <GitHubIcon sx={{ color: '#64ffda' }} /> },
  { name: "VS Code", icon: <VscVscode color='#64ffda' size={26} /> },
  { name: "Jupyter Notebook", icon: <SiJupyter color='#64ffda' size={26} /> },
  { name: "Google Colab", icon: <SiJupyter color='#64ffda' size={26} /> },
  { name: "Kaggle", icon: <FaDatabase color='#64ffda' size={26} /> },
  { name: "Linux / Unix", icon: <VscDebugAll color='#64ffda' size={26} /> },
  { name: "Bash Scripting", icon: <VscDebugAll color='#64ffda' size={26} /> },

  // Soft Skills
  { name: "Problem-solving", icon: <EmojiObjectsIcon sx={{ color: '#64ffda' }} /> },
  { name: "Teamwork", icon: <GroupIcon sx={{ color: '#64ffda' }} /> },
  { name: "Adaptability", icon: <EmojiObjectsIcon sx={{ color: '#64ffda' }} /> },
  { name: "Communication", icon: <HiSpeakerphone color='#64ffda' size={26} /> },
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
