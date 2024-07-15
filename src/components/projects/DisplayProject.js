import React, { useEffect, useState } from 'react';
import ProjectDescription from './ProjectDescription';
import Gallery from './Gallery';
import { Box } from '@mui/material';

const DisplayProject = ({ project, index }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1200);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isSmallScreen) {
        return (
            <Box display="flex" flexDirection="column" width="80%" marginTop="2%" textAlign={'center'}>
                <ProjectDescription projectName={project.projectName} technologies={project.technologies} description={project.explaination} githubLink={project.githubLink} />
                <Gallery media={project.media} />
            </Box>
        );
    } else {
        return (
            <Box display="flex" width="80%" marginTop="2%">
                {index % 2 === 0 ? (
                    <>
                        <ProjectDescription projectName={project.projectName} technologies={project.technologies} description={project.explaination} githubLink={project.githubLink} />
                        <Gallery media={project.media} />
                    </>
                ) : (
                    <>
                        <Gallery media={project.media} />
                        <ProjectDescription projectName={project.projectName} technologies={project.technologies} description={project.explaination} githubLink={project.githubLink} />
                    </>
                )}
            </Box>
        );
    }
};

export default DisplayProject;
