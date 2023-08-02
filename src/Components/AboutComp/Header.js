import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import WebFont from 'webfontloader';
import { styled } from "@mui/system";


const FlatButton = styled(Button)`
  color: #ffd700;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 4px;
  font-family: sans-serif;
  text-decoration: none;
  padding: 10px 18px;
  border: 1px solid #ffd700;
  margin-top: 25px;
  float: left;
  animation: fadeInAnimation 1s 1.8s backwards;
  white-space: nowrap;

  &:hover {
    background: #ffd700;
    color: #333;
  }
`;


WebFont.load({
    google: {
      families: ['Paytone One'],
    },
  });

const Letter = ({ children }) => {
  return (
    <Typography
      component="span"
      style={{
        display: 'inline-block',
        transition: 'color 0.3s, font-size 0.65s',
        fontSize: '56px',
        lineHeight: '53px',
        color: 'yellow',
        fontFamily: 'Paytone One',
        fontWeight: 400,

      }}
      onMouseEnter={(e) => {
        e.target.style.color = 'white';
        e.target.style.fontSize = '72px';
      }}
      onMouseLeave={(e) => {
        e.target.style.color = 'yellow';
        e.target.style.fontSize = '56px';
      }}
    >
      {children}
    </Typography>
  );
};

const handleClick = () => {
    // Handle button click
  };

const Header = () => {
  return (
    <Grid container direction="column" alignItems="center" spacing={2} marginTop={'20%'}>
      <Grid item>
        <Box textAlign="center">
          <Typography>
            <Letter>A</Letter>
            <Letter>b</Letter>
            <Letter>o</Letter>
            <Letter>u</Letter>
            <Letter>t</Letter> <Letter>m</Letter>
            <Letter>e</Letter>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
