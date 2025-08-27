import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
    },
    primary: { main: '#64ffda' },
  },
  typography: {
    fontFamily: ['Inter', 'Fira Code', 'monospace'].join(','),
  },
});
export default theme;
