// App.jsx
import React from 'react';
import { CssBaseline, Container } from '@mui/material';
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
        <section  id='Home'>
        <Hero />
        </section>

        <section id='Projects'>
        <Projects/>
        </section>

        <section id='Skills'>
        <Skills/>
        </section>
        <section id='Resume'>
        <Resume/>
        </section>

        <section id='Contacts'>
        <Contact/>
        </section>
      </Container>
      <Footer />
    </ThemeProvider>
  );  
}

export default App;
