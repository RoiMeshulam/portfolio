import React, { forwardRef } from 'react';
import HeaderSection from '../styleComponents/HeaderSection'
import { Typography, Box } from '@mui/material'

const AboutMe = forwardRef((props, ref) => {

    const text = "Hi, I'm Roi Meshulam — a Full-Stack Developer specializing in modern JavaScript ecosystems, with hands-on experience building complete, production-ready systems from the ground up. ֿ\n I develop scalable backends using Node.js and modern cloud infrastructure, and craft clean, intuitive front-end experiences with React and React Native. \n Over the past few years, I've delivered full projects for real clients — including a WhatsApp-based delivery automation system and a smart recycling platform (KASA). \n I lead projects end-to-end: architecture, development, real-time communication, DevOps pipelines, cloud deployment, and product UX. \n I’m passionate about system design, real-time data, mobile development, cloud engineering, and writing clean, maintainable code. \n I’m constantly learning, improving, and building products that create real value.";

    return (
        <Box display={'flex'} justifyContent={'center'} ref={ref} >
            <Box width={'60%'} padding={'2%'}> 
                <HeaderSection text={"About me"} />
                <Typography textAlign={'center'} marginTop={'2%'} variant='h6'>{text}</Typography>
            </Box>
        </Box>
    )
})

export default AboutMe
