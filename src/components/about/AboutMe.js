import React, { forwardRef } from 'react';
import HeaderSection from '../styleComponents/HeaderSection'
import { Typography, Box } from '@mui/material'

const AboutMe = forwardRef((props, ref) => {
    return (
        <Box display={'flex'} justifyContent={'center'} ref={ref} >
            <Box width={'60%'} padding={'2%'}> 
                <HeaderSection text={"About me"} />
                <Typography textAlign={'center'} marginTop={'2%'} variant='body1'>I'm a motivated self-learner with computer sience degree, adept at working under pressure and collaborating effectively. Skilled in tackling complex code and developing sophisticated algorithms, I'm passionate about continuous improvement. I am looking for environment that will give me the oppertunity to grow as a developer.</Typography>

            </Box>
        </Box>
    )
})

export default AboutMe
