import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

const Gallery = ({ media }) => {
    const [index, setIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === 'left' && index > 0) {
            setIndex(index - 1);
        } else if (direction === 'right' && index < media.length - 1) {
            setIndex(index + 1);
        }
    };

    if (!media || media.length === 0) {
        return null;
    }

    const mediaToShow = media[index];
    console.log(media);

    return (
        <Box flex={1} height={'420px'} width={'100%'}>
            <Box height={'80%'}>
                {mediaToShow.endsWith(".mp4") ? (
                    <video controls width="100%" height="100%">
                        <source src={mediaToShow} type="video/mp4" />
                    </video>
                ) : (
                    <img src={mediaToShow} height={'100%'} width={'100%'} alt="Gallery content" />
                )}
            </Box>
            {media.length>1?<Box display={'flex'} justifyContent={'center'} height={'80px'} sx={{ background: 'white' }} width={'100%'}>
                <Box alignSelf="center">
                    <IconButton
                        onClick={() => handleClick('left')}
                        disabled={index === 0}
                        color={index === 0 ? 'default' : 'inherit'}
                    >
                        <ArrowLeft fontSize="large" />
                    </IconButton>
                    <IconButton
                        onClick={() => handleClick('right')}
                        disabled={index === media.length - 1}
                        color={index === media.length - 1 ? 'default' : 'inherit'}
                    >
                        <ArrowRight fontSize="large" />
                    </IconButton>
                </Box>
            </Box>:<></>}
            
        </Box>
    );
};

export default Gallery;
