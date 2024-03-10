import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import pic from '../projects/projectAssets/BigDataHomePage.JPG';
import { IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

const Gallery = ({ media }) => {
    const [mediaToShow, setMediaToShow] = useState(media ? media[0] : null);
    const [index, setIndex] = useState(0);

    

    const handleClick = (direction) => {
        if (direction === 'left') {
            setIndex(index - 1);
            setMediaToShow(media[index-1]);
        } else if (direction === 'right') {
            setIndex(index + 1);
            setMediaToShow(media[index+1])
        }
    };

    if (media) {
        return (
            <Box flex={1} height={'420px'} width={'100%'}>
                <Box height={'80%'}>
                    {media[index].endsWith(".mp4") ? (
                        <video controls width="100%" height="100%">
                            <source src={media[index]} type="video/mp4" />
                        </video>
                    ) : (
                        <img src={mediaToShow} height={'100%'} width={'100%'} />
                    )}
                </Box>
                <Box display={'flex'} justifyContent={'center'} height={'80px'} sx={{ background: 'white' }} width={'100%'}>
                    <Box alignSelf={'center'}>
                        {index !== 0 &&
                            <IconButton onClick={() => handleClick('left')}>
                                <ArrowLeft fontSize='large' />
                            </IconButton>
                        }
                        {index !== media.length - 1 &&
                            <IconButton onClick={() => handleClick('right')}>
                                <ArrowRight fontSize='large' />
                            </IconButton>
                        }
                    </Box>
                </Box>
            </Box>
        );
    } else {
        return null;
    }
};

export default Gallery;
