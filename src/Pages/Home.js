import React from "react";
import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import Intro from "../Components/HomeComp/Intro";
import WebFont from "webfontloader";
import Logo from "../pic/Logo.png";

WebFont.load({
  google: {
    families: ["Parisienne"],
  },
});

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 600px)"); // Breakpoint for xs
  const isDesktop = useMediaQuery("(min-width: 1280px)"); // Breakpoint for lg

  return (
    <Box sx={{ minHeight: "100vh", width: "100vw" }}>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Box
            height={isMobile ? "90vh" : "auto"}
            marginTop={isMobile ? "50%" : "25%"}
          >
            <Typography
              fontFamily={"Parisienne"}
              color={"yellow"}
              marginLeft={isMobile ? "0" : "8%"}
            >
              {"<h1>"}
            </Typography>
            <Intro />
            <Typography
              fontFamily={"Parisienne"}
              color={"yellow"}
              display={"flex"}
              justifyContent={isMobile ? "center" : "right"}
              marginRight={isMobile ? "0" : "8%"}
            >
              {"</h1>"}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} lg={6}>
          {isDesktop ?
           <Box display="flex" height="100vh" justifyContent={'center'}>
           <Box
             alignSelf={ "center" }
             justifyContent={ "center"}
             display="flex"
           >
             <img src={Logo} width={ "65%"} />
           </Box>
         </Box>
          :
          <></>
          }
          
        </Grid>
      </Grid>
    </Box>

  );
};

export default Home;
