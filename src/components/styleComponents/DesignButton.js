import React from 'react'
import { Button } from '@mui/material'

const DesignButton = ({text, onClick}) => {
    return (
        <Button variant="contained" sx={{ bgcolor: 'rgb(180, 70, 67)', color: 'white' }} onClick={onClick}>
            {text}
        </Button>
    )
}

export default DesignButton
