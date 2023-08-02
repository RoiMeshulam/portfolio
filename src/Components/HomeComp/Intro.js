import React from 'react';
import { Grid, Typography, Box, Button, Link } from '@mui/material';
import { NavLink } from "react-router-dom";
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
        color: 'white',
        fontFamily: 'Paytone One',
        fontWeight: 400,

      }}
      onMouseEnter={(e) => {
        e.target.style.color = 'yellow';
        e.target.style.fontSize = '72px';
      }}
      onMouseLeave={(e) => {
        e.target.style.color = 'white';
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

const Intro = () => {
  return (
    // <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Box textAlign="center">
          <Typography>
            <Letter>H</Letter>
            <Letter>i</Letter>,<br /> 
            <Letter>I</Letter>
            <Letter>'</Letter>
            <Letter>m</Letter> <Letter>R</Letter>
            <Letter>o</Letter>
            <Letter>i</Letter> <Letter>M</Letter>
            <Letter>e</Letter>
            <Letter>s</Letter>
            <Letter>h</Letter>
            <Letter>u</Letter>
            <Letter>l</Letter>
            <Letter>a</Letter>
            <Letter>m</Letter>
            <br />
            <Letter>W</Letter>
            <Letter>e</Letter>
            <Letter>b</Letter>  <Letter>D</Letter>
            <Letter>e</Letter>
            <Letter>v</Letter>
            <Letter>e</Letter>
            <Letter>l</Letter>
            <Letter>o</Letter>
            <Letter>p</Letter>
            <Letter>e</Letter>
            <Letter>r</Letter>
          </Typography>
        </Box>
      {/* </Grid> */}
      <Box display={'flex'} justifyContent={'center'} marginTop={'1%'}>
         <Typography fontWeight={700} fontSize={'13px'} color={'black'}>Fronted Developer / JavaScript Expert</Typography>
      </Box>
      <Box display={'flex'} justifyContent={'center'} marginTop={'1%'}>
        <NavLink to="/projects">
         <FlatButton>Projects</FlatButton>
         </NavLink>
      </Box>
    </Grid>
  );
};

export default Intro;
