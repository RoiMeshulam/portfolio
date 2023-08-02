import React from "react";
import WebFont from "webfontloader";
import { Grid, Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Header from "../Components/AboutComp/Header";
import Text from "../Components/AboutComp/Text";
import { styled } from "@mui/system";
import css from '../pic/css.svg';
import github from '../pic/github.png';
import html from '../pic/html.svg';
import javaLogo from '../pic/java.svg';
import python from '../pic/python.png';
import reactIcon from '../pic/reactIcon.png';
import C from '../pic/C.png';
import Cpp from '../pic/Cpp.png';
import Docker from '../pic/docker.png';

WebFont.load({
  google: {
    families: ["Parisienne"],
  },
});

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

const About = () => {
  return (
    <Box sx={{ minHeight: "100vh", width: "100vw" }}>
      <Grid container>
        <Grid item xs={7} height={'100%'}>
          <Header />

          <Box width="70%" margin="0 auto" marginTop={'5%'}>
            <Text />
          </Box>
          
          <Box display={'flex'} justifyContent={'center'}>
            <NavLink to={"/projects"}>
              <FlatButton>Projects</FlatButton>
            </NavLink>
          </Box>
        </Grid>

        <Grid item xs={5} height={'100%'}>
          <Box height={'100vh'} width={'100%'} display={'flex'} justifyContent={'center'} flexDirection={'column'}>
            <Box sx={{ height:'33%', width:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <img src={html} alt="Image 1" style={{ height: '60%', width: '30%', margin: '0 1%' }} />
              <img src={css} alt="Image 2" style={{ height: '60%', width: '30%', margin: '0 1%' }} />
              <img src={reactIcon} alt="Image 3" style={{ height: '60%', width: '30%', margin: '0 1%' }} />
            </Box>
            <Box sx={{ height:'33%', width:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <img src={javaLogo} alt="Image 4" style={{ height: '60%', width: '20%', margin: '0 1%' }} />
              <img src={python} alt="Image 5" style={{ height: '60%', width: '20%', margin: '0 1%' }} />
              <img src={C} alt="Image 6" style={{ height: '60%', width: '20%', margin: '0 1%' }} />
              <img src={Cpp} alt="Image 7" style={{ height: '60%', width: '20%', margin: '0 1%' }} />
            </Box>
            <Box sx={{ height:'33%', width:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <img src={github} alt="Image 8" style={{ height: '60%', width: '30%', margin: '0 1%' }} />
              <img src={Docker} alt="Image 9" style={{ height: '60%', width: '30%', margin: '0 1%' }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
