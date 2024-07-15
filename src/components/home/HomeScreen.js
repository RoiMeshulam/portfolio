import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import backgroundImage from "../../assets/BackgroundShell.jpg";
import IconsMenu from './IconsMenu';
import { headerFont } from '../../fonts/Fonts';
import ButtonsMenu from './ButtonsMenu';

const HomeScreen = ({ aboutClick, projectClick }) => {
    const isMobile = useMediaQuery('(max-width: 600px)'); // Adjust the breakpoint as needed

    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                height: '100vh',
                width: '100vw',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column', // Center content vertically on mobile
               
            }}
        >
            <Typography
                variant='h1'
                color='white'
                fontFamily={headerFont}
                textAlign='center'
                
            >
                Roi Meshulam
            </Typography>
            <Typography
                variant='h2'
                color='rgb(100, 161, 246)'
                fontFamily={headerFont}
                textAlign='center'
            
            >
                Software developer
            </Typography>
            <IconsMenu />
            <ButtonsMenu aboutClick={aboutClick} projectClick={projectClick} />
        </Box>
    );
};

export default HomeScreen;
