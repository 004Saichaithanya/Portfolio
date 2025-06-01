// App.jsx
import React from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Contact from './Components/Contacts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Box
          component="section"
          id="Home"
          sx={{ py: { xs: 4, sm: 6, md: 8 } }}
        >
          <Hero />
        </Box>

        <Box
          component="section"
          id="Projects"
          sx={{ py: { xs: 4, sm: 6, md: 8 } }}
        >
          <Projects />
        </Box>

        <Box
          component="section"
          id="Skills"
          sx={{ py: { xs: 4, sm: 6, md: 8 } }}
        >
          <Skills />
        </Box>

        <Box
          component="section"
          id="Resume"
          sx={{ py: { xs: 4, sm: 6, md: 8 } }}
        >
          <Resume />
        </Box>

        <Box
          component="section"
          id="Contacts"
          sx={{ py: { xs: 4, sm: 6, md: 8 } }}
        >
          <Contact />
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
