import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import backgroundImage from "../../assets/BackgroundShell.jpg"
import IconsMenu from './IconsMenu';
import { headerFont } from '../../fonts/Fonts';
import ButtonsMenu from './ButtonsMenu';

const HomeScreen = ({aboutClick, projectClick}) => {
    


    return (
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`, 
            height: '100vh', 
            width:'100vw',
            backgroundSize: 'cover',
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box textAlign={'center'}>
                <Typography variant='h1' color={'white'} fontFamily={headerFont} fontSize={'140px'}>Roi Meshulam</Typography>
                <Typography variant='h3' color={'rgb(100, 161, 246)'} fontFamily={headerFont} fontSize={'70px'}>Software developer</Typography>
                <IconsMenu/>
                <ButtonsMenu aboutClick={aboutClick} projectClick={projectClick}/>
            </Box>
        </Box>


        
    )
}

export default HomeScreen
