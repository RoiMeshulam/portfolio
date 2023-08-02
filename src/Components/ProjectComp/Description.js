import React, { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const Description = ({ text, index, setIndex }) => {

 
  return (
    <Box width="70%" margin="0 auto">
      <Typography
        variant="body1"
        style={{
          fontSize: "16px",
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {text[index]}
      </Typography>
      
    </Box>
  );
};

export default Description;
