import React from 'react'
import ProjectDescription from './ProjectDescription'
import Gallery from './Gallery'
import { Box } from '@mui/material'

const DisplayProject = ({ project, index }) => {
    
    if (index % 2 === 0) {
        return (
            <Box display={'flex'} width={'80%'} marginTop={'2%'} >
                <ProjectDescription projectName={project.projectName} technologies={project.technologies} description={project.explaination} githubLink={project.githubLink}/>
                <Gallery media={project.media}/>
            </Box>
        )

    } else {
        return (
            <Box display={'flex'} width={'80%'} marginTop={'2%'} >
                <Gallery media={project.media}/>
                <ProjectDescription projectName={project.projectName} technologies={project.technologies} description={project.explaination} githubLink={project.githubLink}/>

            </Box>
        )
    }

}

export default DisplayProject
