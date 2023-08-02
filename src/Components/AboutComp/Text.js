import React from 'react';
import { Typography } from '@mui/material';

const Text = () => {
  return (
    <Typography
      variant="body1"
      style={{
        fontSize: '16px',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      }}
    >
      I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
      {/* <br /><br /> */}
      I'm quiet confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
      {/* <br /><br /> */}
      If I need to define myself in one sentence that would be a family person, father of a beautiful daughter, a sports fanatic, photography enthusiast, and tech-obsessed!!!
    </Typography>
  );
};

export default Text;
