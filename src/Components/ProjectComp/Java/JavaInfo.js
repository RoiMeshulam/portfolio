import React, { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import ProjectInfo from "../ProjectInfo";
import { ProjectList } from "./ProjectList";
import ProjectsNav from "../ProjectsNav";
import ProjectCarousel from "../ProjectCarousel";

const Java = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [projectName, setProjectName] = useState(ProjectList[0].projectName);
  const [explaination, setExplaination] = useState(ProjectList[0].explaination);
  const [technologies, setTechnologies] = useState(ProjectList[0].Technologies);
  const [githubLink,setGithubLink] = useState(ProjectList[0].githubLink);
  const [media, setMedia] = useState(ProjectList[0].media);
  const [textIndex, setTextIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);

  useEffect(() => {
    setProjectName(ProjectList[projectIndex].projectName);
    setExplaination(ProjectList[projectIndex].explaination);
    setTechnologies(ProjectList[projectIndex].Technologies);
    setMedia(ProjectList[projectIndex].media);
    setGithubLink(ProjectList[projectIndex].githubLink)
    setTextIndex(0);
    setMediaIndex(0);
  }, [projectIndex]);

  return (
    <>
    <Grid item xs={12} lg={6}>
      <ProjectInfo
        projectName={projectName}
        technologies={technologies}
        text={explaination}
        indexText={textIndex}
        setIndexText={setTextIndex}
        githubLink={githubLink}
      />
    </Grid>
    <Grid item xs={12} lg={6}>
      <ProjectCarousel
        media={media}
        index={mediaIndex}
        setIndex={setMediaIndex}
      />
    </Grid>
    <Grid item xs={12}  marginTop={'2%'}>
      <Box>
        <ProjectsNav
          projects={ProjectList}
          index={projectIndex}
          setIndex={setProjectIndex}
        />
      </Box>
    </Grid>
  </>





    // <>
    //   <Grid container>
    //     <Grid item xs={6}>
    //       <Box height={"80vh"}>
    //         <ProjectInfo
    //           projectName={projectName}
    //           technologies={technologies}
    //           text={explaination}
    //           indexText={textIndex}
    //           setIndexText={setTextIndex}
    //         />
    //       </Box>
    //     </Grid>
    //     <Grid item xs={6}>
    //       <Box height={"80vh"}>
    //         <ProjectCarousel media={media} index={mediaIndex} setIndex={setMediaIndex} />
    //       </Box>
    //     </Grid>
    //   </Grid>

    //   <Box>
    //     <ProjectsNav
    //       projects={ProjectList}
    //       index={projectIndex}
    //       setIndex={setProjectIndex}
    //     />
    //   </Box>
    // </>
  );
};

export default Java