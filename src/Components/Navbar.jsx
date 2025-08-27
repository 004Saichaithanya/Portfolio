// Add useMediaQuery to switch navigation style
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setDrawerOpen(false);
  };

  const navItems = ['Home', 'Projects', 'Skills','Achievements', 'Contact'];

  return (
    <AppBar position="sticky" sx={{ background: '#0a192f', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
        <Typography
          variant="h6"
          sx={{ fontFamily: 'Fira Code', color: '#64ffda', cursor: 'pointer'}}
          onClick={() => handleScroll('Home')}
        >
          &lt;/Poloju&gt;
        </Typography>
        {isMobile ? (
          <>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#64ffda' }}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{ sx: { backgroundColor: '#112240' } }}
            >
              <List>
                {navItems.map((item) => (
                  <ListItem button key={item} onClick={() => handleScroll(item)}>
                    <ListItemText sx={{ color: '#64ffda', '.MuiTypography-root': { fontFamily: 'Fira Code' } }} primary={item} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: '#ccd6f6',
                  fontFamily: 'Fira Code',
                  textTransform: 'none',
                  fontWeight: 500,
                  mx: 1,
                  '&:hover': { color: '#64ffda', background: 'rgba(100,255,218,0.05)' }
                }}
                onClick={() => handleScroll(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
