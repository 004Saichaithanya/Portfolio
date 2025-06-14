<<<<<<< HEAD
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

export default function Navbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar position="sticky" color="black" sx={{color:'black',width:'100%'}} elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontFamily: 'Fira Code', color: '#64ffda', cursor: 'pointer' }}
          onClick={() => handleScroll('Home')}
        >
          &lt;/Poloju&gt;
        </Typography>
        <Box>
          {['Home', 'Projects', 'Skills', 'Resume', 'Contacts','Achievements'].map((item) => (
            <Button
              key={item}
              sx={{ color: '#ccd6f6', fontFamily: 'Fira Code', textTransform: 'none' }}
              onClick={() => handleScroll(item)}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
=======
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

export default function Navbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar position="sticky" color="black" sx={{color:'black',width:'100%'}} elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontFamily: 'Fira Code', color: '#64ffda', cursor: 'pointer' }}
          onClick={() => handleScroll('Home')}
        >
          &lt;/Poloju&gt;
        </Typography>
        <Box>
          {['Home', 'Projects', 'Skills', 'Resume', 'Contacts','Achievements'].map((item) => (
            <Button
              key={item}
              sx={{ color: '#ccd6f6', fontFamily: 'Fira Code', textTransform: 'none' }}
              onClick={() => handleScroll(item)}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
>>>>>>> 00aafdd (Your commit message here)
