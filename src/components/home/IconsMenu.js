import React from 'react';
import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import { headerColor } from '../../Color';

const IconsMenu = () => {
  const iconButtonStyle = {
    borderRadius: '50%', // Create a circular border
    border: `2px solid ${headerColor}`, // Add a border around the circle
    padding: '8px', // Adjust padding as needed
    margin: '5px', // Adjust margin as needed
    color: `#D9D9D9`
  };

  const handleClick = (action) => {
    switch(action) {
      case 'linkedin':
        window.location.href = "https://www.linkedin.com/in/roi-meshulam-365273240";
        break;
      case 'email':
        window.location.href = "mailto:rohimesh21@gmail.com";
        break;
      case 'resume':
        // Assuming your resume PDF file is hosted at this URL
        window.location.href = "https://example.com/your-resume.pdf";
        break;
      case 'github':
        window.location.href = "https://github.com/RoiMeshulam";
        break;
      case 'phone':
        window.location.href = "tel:+972524564357"; // Replace with your phone number
        break;
      default:
        break;
    }
  };

  return (
    <Box marginTop={'10px'}>
      <IconButton style={iconButtonStyle} onClick={() => handleClick('linkedin')}>
        <LinkedInIcon fontSize="large"  />
      </IconButton>
      <IconButton style={iconButtonStyle} onClick={() => handleClick('email')}>
        <EmailIcon fontSize="large" />
      </IconButton>
      <IconButton style={iconButtonStyle} onClick={() => handleClick('resume')}>
        <DescriptionIcon fontSize="large" />
      </IconButton>
      <IconButton style={iconButtonStyle} onClick={() => handleClick('github')}>
        <GitHubIcon fontSize="large" />
      </IconButton>
      <IconButton style={iconButtonStyle} onClick={() => handleClick('phone')}>
        <PhoneIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default IconsMenu;
