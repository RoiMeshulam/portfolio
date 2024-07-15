import React, { forwardRef } from 'react';
import HeaderSection from '../styleComponents/HeaderSection'
import { Typography, Box } from '@mui/material'

const AboutMe = forwardRef((props, ref) => {

    const text = "I am a dedicated and self-motivated developer with a Bachelor's degree in Computer Science. With a proven ability to work under pressure and collaborate effectively, I excel at tackling complex code and developing sophisticated algorithms. I am passionate about continuous learning and improvement, always seeking opportunities to enhance my skills. \nI have two years of professional experience as a full-stack developer at Melamedia, where I successfully established websites and web applications for various businesses. Now, as an independent developer, I continue to create high-quality apps and websites for both businesses and private clients. I am eager to join a dynamic environment where I can further develop my expertise and drive innovative solutions."

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
