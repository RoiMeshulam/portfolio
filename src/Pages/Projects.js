import React from "react";
import { Box, Button, Select, Typography, Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactJs from "../Components/ProjectComp/ReactJS/ReactJs";
import NavButtons from "../Components/ProjectComp/NavButtons";
import PythonInfo from "../Components/ProjectComp/Python/PythonInfo";
import JavaInfo from "../Components/ProjectComp/Java/JavaInfo";
import CInfo from "../Components/ProjectComp/C/CInfo";

const Projects = () => {
  return (
    <Box height={"100vh"} width={"100vw"}>
       <Grid container height={"100%"} width={"100%"}>
         <Grid item xs={12} height={'10%'}>
          <NavButtons/>
         </Grid>
         <Routes>
         <Route path="/react" element={<ReactJs />} />
         <Route path="/python" element={<PythonInfo />} />
         <Route path="/java" element={<JavaInfo />} />
         <Route path="/c" element={<CInfo />} />
      </Routes>
       </Grid>
   
    </Box>


  );
};

export default Projects;
