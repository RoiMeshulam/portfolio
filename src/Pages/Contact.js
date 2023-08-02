import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import WebFont from "webfontloader";
import Header from "../Components/ContactComp/Header";
import Fields from "../Components/ContactComp/Fields";
import mail from "../pic/mail.png"

WebFont.load({
  google: {
    families: ["Parisienne"],
  },
});

const Contact = () => {
  return (
    <Box sx={{ minHeight: "100vh", width: "100vw" }}>
      <Grid container>
        <Grid item xs={6}>

            <Header />
            <Fields />
            
        </Grid>

        <Grid item xs={6} height={'100vh'}>
          <Box height={'100%'} width={'100%'} display={'flex'} justifyContent={'center'}>
          <Box
             alignSelf={ "center" }
             justifyContent={ "center"}
             display="flex"
           >
             <img src={mail} width={ "100%"} />
           </Box>

          </Box>

        </Grid>
      </Grid>
    </Box>

    // <Grid container>
    //   <Grid item xs={6}>
    //     <Box height={"100vh"}>
    //       <Grid container direction="column" height="100%">
    //         <Grid item xs={7.5}>
    //           <Typography
    //             fontFamily={"Parisienne"}
    //             color={"yellow"}
    //             marginLeft={"8%"}
    //           >
    //             {"<h1>"}
    //           </Typography>
    //           <Header />
    //           <Typography
    //             fontFamily={"Parisienne"}
    //             color={"yellow"}
    //             display={"flex"}
    //             justifyContent={"right"}
    //             marginRight={"8%"}
    //           >
    //             {"</h1>"}
    //           </Typography>

    //           <Typography
    //             fontFamily={"Parisienne"}
    //             color={"yellow"}
    //             marginLeft={"8%"}
    //           >
    //             {"<p>"}
    //           </Typography>
    //           <Fields />
    //           <Typography
    //             fontFamily={"Parisienne"}
    //             color={"yellow"}
    //             display={"flex"}
    //             justifyContent={"right"}
    //             marginRight={"8%"}
    //           >
    //             {"</p>"}
    //           </Typography>
    //         </Grid>
    //       </Grid>
    //     </Box>
    //   </Grid>
    //   <Grid item xs={6}>
    //     <Box height={"100vh"}>
    //       <Grid container direction="column" height="100%">
    //         <Grid item xs={2}></Grid>
    //         <Grid item xs={6}>
    //           <Box display={"flex"} justifyContent={"center"}></Box>
    //         </Grid>
    //         <Grid item xs={4}></Grid>
    //       </Grid>
    //     </Box>
    //   </Grid>
    // </Grid>
  );
};

export default Contact;
