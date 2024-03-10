import React, { forwardRef } from 'react';
import HeaderSection from '../styleComponents/HeaderSection';
import DisplayProject from './DisplayProject';
import { Box } from '@mui/material';
import { ProjectList } from './AllProjects';


const Projects = forwardRef((props, ref) => {
  console.log(ProjectList);

  return (
    <Box width={'100vw'} ref={ref}>
      <HeaderSection text={'projects'} />
      {ProjectList.map((project, index) => (
      <Box display={'flex'} justifyContent={'center'}>      
          <DisplayProject key={index} project={project} index={index} />
      </Box>
       ))}
    </Box>
  );
});

export default Projects;
