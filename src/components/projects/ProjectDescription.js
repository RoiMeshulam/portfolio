import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { headerColor } from '../../Color'
import DesignButton from '../styleComponents/DesignButton'


const ProjectDescription = ({ projectName, technologies, description, githubLink }) => {

    const handleClick = () =>{
        window.location.href = githubLink;
    }

    return (
        <Box flex={1} padding={5} >
            <Typography variant='h4' color={'black'} fontWeight={'bold'}>{projectName}</Typography>
            <Typography variant='h5' color={'rgb(100, 161, 246)'}>{technologies}</Typography>
            <Typography variant='h6'>{description}</Typography>
            <Box marginTop={"2%"}>
                <DesignButton text={'Check it out'} onClick={handleClick}/>
            </Box>

        </Box>

    )
}

export default ProjectDescription
