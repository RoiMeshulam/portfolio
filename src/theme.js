// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  
  typography: {
    h1: {
      fontSize: '10rem',
      '@media (max-width:1000px)': {
        fontSize: '9rem',
      },
      '@media (max-width:840px)': {
        fontSize: '7rem',
      },
      '@media (max-width:700px)': {
        fontSize: '5rem',
      },
      '@media (max-width:400px)': {
        fontSize: '3rem',
      },
    },
    h2: {
        fontSize: '5.5rem',
      '@media (max-width:1000px)': {
        fontSize: '5rem',
      },
      '@media (max-width:840px)': {
        fontSize: '4rem',
      },
      '@media (max-width:700px)': {
        fontSize: '3rem',
      },
      '@media (max-width:400px)': {
        fontSize: '2rem',
      },
    },
    h3: {
        fontSize: '2rem',
      '@media (max-width:1200px)': {
        fontSize: '1.5rem',
      },
   
     
    },
    h4: {
        fontSize: '1.5rem',
      '@media (max-width:1200px)': {
        fontSize: '1.3rem',
      },
      '@media (max-width:860px)': {
        fontSize: '0.9rem',
      },
     
    },
    h5: {
        fontSize: '1.0rem',
      '@media (max-width:1200px)': {
        fontSize: '1rem',
      },
      '@media (max-width:500px)': {
        fontSize: '0.7rem',
      },
    },
    h6: {
        fontSize: '0.9rem',
      '@media (max-width:1200px)': {
        fontSize: '0.7rem',
      },
      '@media (max-width:500px)': {
        fontSize: '0.7rem',
      },
     
    },
    body1: {
      fontSize: '1rem',
      '@media (max-width:960px)': {
        fontSize: '0.875rem',
      },
  
     
    },
    // Add more typography settings as needed
  },
});

export default theme;
