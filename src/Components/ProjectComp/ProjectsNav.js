import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { styled } from "@mui/system";

const ArrowLeft = styled(KeyboardArrowLeft)(({ theme, disabled }) => ({
  color: disabled ? "#424242" : "black",
}));

const ArrowRight = styled(KeyboardArrowRight)(({ theme, disabled }) => ({
  color: disabled ? "#424242" : "black",
}));


const ProjectsNav = ({ projects, index , setIndex }) => {
  
  const handlePrevProject = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNextProject = () => {
    setIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  console.log(index);
  console.log(projects.length-1);

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <IconButton onClick={handlePrevProject}  >
        <ArrowLeft disabled={index === 0}/>
      </IconButton>

      <Box>{index + 1}</Box>

      <IconButton onClick={handleNextProject} >
        <ArrowRight disabled={index === projects.length-1}/>
      </IconButton>
    </Box>
  );
};

export default ProjectsNav;
