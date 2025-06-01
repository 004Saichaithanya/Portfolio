import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00e676' },
    secondary: { main: '#ff4081' },
    background: { default: '#0a192f', paper: '#112240' },
    text: { primary: '#ccd6f6', secondary: '#8892b0' },
  },
  typography: { fontFamily: `'Fira Code', monospace` },
});

export default theme;