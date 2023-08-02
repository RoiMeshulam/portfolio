import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import LawyerFixVid from './ReactJS/media/LawyerFixVid.mp4'
import NewCase from './ReactJS/media/NewCase.PNG'
import AdminDash from './ReactJS/media/AdminDash.PNG'
import { styled } from "@mui/system";

const ArrowLeft = styled(KeyboardArrowLeft)(({ theme, disabled }) => ({
  color: disabled ? "#424242" : "black",
}));

const ArrowRight = styled(KeyboardArrowRight)(({ theme, disabled }) => ({
  color: disabled ? "#424242" : "black",
}));

const ProjectCarousel = ({ media, index, setIndex }) => {
  
  

  const handlePrevProject = () => {
    if(index > 0){
      const temp=index-1;
      setIndex(temp);
    }
  };

  const handleNextProject = () => {
    if(index < media.length - 1){
      const temp = index +1;
      setIndex(temp);
    }
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" height="100%" flexDirection="column" marginTop={'5%'}>
        {media[index].endsWith(".mp4") ? (
          <Box width="80%">
            <video controls width="100%" height="100%">
              <source src={media[index]} type="video/mp4" />
            </video>
          </Box>
        ) : (
          <Box width="80%">
            <img src={media[index]} alt="project" width="100%" height="100%" />
          </Box>
        )}

        <Box marginTop="2%" marginLeft="1%">
          <IconButton onClick={handlePrevProject} disabled={index === 0}>
            <ArrowLeft disabled={index === 0} />
          </IconButton>
          <IconButton onClick={handleNextProject} disabled={index === media.length-1}>
            <ArrowRight disabled={index === media.length-1} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default ProjectCarousel;
