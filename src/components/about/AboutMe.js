import React, { forwardRef } from 'react';
import HeaderSection from '../styleComponents/HeaderSection'
import { Typography, Box } from '@mui/material'

const AboutMe = forwardRef((props, ref) => {

    const text = "I am a self-taught and highly motivated full-stack developer specializing in both web and mobile applications. I have experience building end-to-end solutions, from designing intuitive user interfaces to implementing scalable backends. Previously, I worked as a full-stack developer at Melamedia, creating web applications for businesses. Now, as an independent developer, I continue to develop web and mobile applications for Android and iOS, integrating advanced technologies like Firebase, cloud services, and API automation. Always eager to learn and take on new challenges, I thrive in dynamic environments where I can drive impactful solutions.";

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
