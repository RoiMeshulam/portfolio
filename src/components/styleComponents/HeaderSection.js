import React from 'react'
import { Box, Typography } from '@mui/material'

const HeaderSection = ({text}) => {
  return (
    <Box height={'15vh'} display={'flex'} justifyContent={'center'} alignItems={'end'}>
      <Typography variant='h3'>{text}</Typography>
    </Box>
  )
}

export default HeaderSection
