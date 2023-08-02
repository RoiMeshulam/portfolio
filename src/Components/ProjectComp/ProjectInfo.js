import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, IconButton, Button, useMediaQuery, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Description from "./Description";
import { styled } from "@mui/system";



const ArrowLeft = styled(ArrowBackIcon)(({ theme, disabled }) => ({
  color: disabled ? "#424242" : "black",
}));

const ArrowRight = styled(ArrowForwardIcon)(({ theme, disabled }) => ({
  color: disabled ? "#424242" : "black",
}));

const FlatButton = styled(Button)`
  color: #ffd700;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 2px;
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

const ProjectInfo = ({
  projectName,
  technologies,
  text,
  indexText,
  setIndexText,
  githubLink
}) => {

  const [description, setDescription] = useState([]);

  
  useEffect(() => {
    const splitTextIntoArray = (text) => {
      const words = text.split(' ');
      const result = [];
      let currentIndex = 0;

      while (currentIndex < words.length) {
        const chunk = words.slice(currentIndex, currentIndex + 64);
        const chunkString = chunk.join(' ');
        result.push(chunkString);
        currentIndex += 64;
      }

      return result;
    };

    setDescription(splitTextIntoArray(text));
  }, [text]);


  const handlePrev = () => {
    if (indexText > 0) {
      setIndexText(indexText - 1);
    }
  };

  const handleNext = () => {
    if (indexText < text.length - 1) {
      setIndexText(indexText + 1);
    }
  };

  const isDesktop = useMediaQuery("(min-width: 1280px)"); // Breakpoint for lg
  return (
    <Box textAlign={'center'} height={'50%'} marginTop={isDesktop? '10%':'20%'} >
        <Typography
          style={{
            fontSize: "56px",
            lineHeight: "53px",
            color: "white",
            fontFamily: "Paytone One",
            fontWeight: 400,
          }}
        >
          {projectName}
        </Typography>
      <Typography
        style={{
          fontSize: "20px",
          lineHeight: "53px",
          color: "yellow",
          fontFamily: "Paytone One",
          fontWeight: 400,
        }}
      >
        {technologies}
      </Typography>

      
        <Description text={description} index={indexText} setIndex={setIndexText} />
     
     
      {text.length > 1 ? (
        <Box display="flex" justifyContent="center" marginTop="1rem">
          <IconButton
            onClick={handlePrev}
            
            aria-label="previous"
          >
            <ArrowLeft disabled={indexText === 0}/>
          </IconButton>
          <IconButton
            onClick={handleNext}
           
            aria-label="next"
          >
            <ArrowRight  disabled={indexText === text.length - 1}/>
          </IconButton>
        </Box>
      ) : (
        <></>
      )}
      <Box display={'flex'} justifyContent={'center'}>
        <Link href={githubLink}>
        <FlatButton>Check it out</FlatButton>
        </Link>
      </Box>
      
        

      
    </Box>

    // <Grid container direction="column" height="100%">

    //   <Grid item lg={3}>
    //     <Typography
    //       fontFamily={"Parisienne"}
    //       color={"yellow"}
    //       marginLeft={"8%"}
    //     >
    //       {"<h1>"}
    //     </Typography>
    //     <Box textAlign={"center"}>
    // <Typography
    //   style={{
    //     fontSize: "56px",
    //     lineHeight: "53px",
    //     color: "white",
    //     fontFamily: "Paytone One",
    //     fontWeight: 400,
    //   }}
    // >
    //   {projectName}
    // </Typography>
    //     </Box>
    //     <Typography
    //       fontFamily={"Parisienne"}
    //       color={"yellow"}
    //       display={"flex"}
    //       justifyContent={"right"}
    //       marginRight={"8%"}
    //     >
    //       {"</h1>"}
    //     </Typography>

    //     <Typography
    //       fontFamily={"Parisienne"}
    //       color={"yellow"}
    //       marginLeft={"8%"}
    //     >
    //       {"<h2>"}
    //     </Typography>
    //     <Box textAlign={"center"}>
    //       <Typography
    //         style={{
    //           fontSize: "20px",
    //           lineHeight: "53px",
    //           color: "yellow",
    //           fontFamily: "Paytone One",
    //           fontWeight: 400,
    //         }}
    //       >
    //         {technologies}
    //       </Typography>
    //     </Box>
    //     <Typography
    //       fontFamily={"Parisienne"}
    //       color={"yellow"}
    //       display={"flex"}
    //       justifyContent={"right"}
    //       marginRight={"8%"}
    //     >
    //       {"</h2>"}
    //     </Typography>
    //   </Grid>
    //   <Grid item lg={6.5}>
    //      <Description text={text} index ={indexText} setIndex={setIndexText}/>
    //   </Grid>
    //   <Grid item lg={0.5}>
    //   {text.length > 1 ?

    //   <Box display="flex" justifyContent="center" marginTop="1rem">
    //   <IconButton
    //     onClick={handlePrev}
    //     disabled={indexText === 0}
    //     aria-label="previous"
    //   >
    //     <ArrowBackIcon />
    //   </IconButton>
    //   <IconButton
    //     onClick={handleNext}
    //     disabled={indexText === text.length - 1}
    //     aria-label="next"
    //   >
    //     <ArrowForwardIcon />
    //   </IconButton>

    // </Box>

    //   :
    //   <>
    //   </>
    //   }

    //   </Grid>
    // </Grid>
  );
};

export default ProjectInfo;
