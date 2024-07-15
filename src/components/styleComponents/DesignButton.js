import React from 'react';
import { Button } from '@mui/material';

const DesignButton = ({ text, onClick }) => {
    return (
        <Button
            variant="contained"
            sx={{
                bgcolor: 'rgb(180, 70, 67)',
                color: 'white',
                padding: {
                    xs: '8px 16px', // Small screens
                    sm: '10px 20px', // Small to medium screens
                    md: '12px 24px', // Medium screens
                    lg: '10px 13px' // Large screens
                },
                fontSize: {
                    xs: '0.75rem',
                    sm: '0.785rem',
                    md: '0.8rem',
                    lg: '0.9rem'
                }
            }}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default DesignButton;
