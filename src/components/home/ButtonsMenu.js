import React from 'react'
import { Box } from '@mui/material'
import DesignButton from '../styleComponents/DesignButton'

const ButtonsMenu = ({aboutClick, projectClick}) => {
  return (
    <Box sx={{ display: 'flex', gap: '30px', justifyContent:'center', marginTop:'20px' }}>
      <DesignButton text={"About me"} onClick={aboutClick}/>
      <DesignButton text={"Projects"} onClick={projectClick}/>
    </Box>
  )
}

export default ButtonsMenu
