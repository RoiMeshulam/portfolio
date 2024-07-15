import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

// Import your SVG icons
import JavaIcon from './projects/projectAssets/Java.svg';
import PythonIcon from './projects/projectAssets/Python.svg';
import CIcon from './projects/projectAssets/C.svg';
import CSharpIcon from './projects/projectAssets/CS.svg';
import CPlusPlusIcon from './projects/projectAssets/CPP.svg';
import JavaScriptIcon from './projects/projectAssets/JavaScript.svg';
import HtmlIcon from './projects/projectAssets/HTML.svg';
import CssIcon from './projects/projectAssets/CSS.svg';

import RedisIcon from './projects/projectAssets/Redis.svg';
import MongoDBIcon from './projects/projectAssets/MongoDB.svg';
import ElasticsearchIcon from './projects/projectAssets/Elasticsearch.svg';
import MySQLIcon from './projects/projectAssets/MySQL.svg';
import PostgreSQLIcon from './projects/projectAssets/PostgreSQL.svg';

import NodeJsIcon from './projects/projectAssets/NodeJS.svg';
import ReactIcon from './projects/projectAssets/React.svg';
import DockerIcon from './projects/projectAssets/Docker.svg';
import FigmaIcon from './projects/projectAssets/Figma.svg';
import KafkaIcon from './projects/projectAssets/Kafka.svg';
import GitIcon from './projects/projectAssets/Git.svg';
import GitHubIcon from './projects/projectAssets/Github.svg';

import backgroundImage from "../assets/BackgroundShell.jpg";

const Footer = () => {
    const iconStyle = { width: '40px', marginRight: '10px', marginBottom: '10px' };
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box component="footer" sx={{  backgroundImage: `url(${backgroundImage})`, color: 'white', padding: '20px' }}>
            <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {/* Programming Languages */}
                <Box sx={{ marginBottom: isSmallScreen ? '20px' : '0' }}>
                    <Typography variant="h6" textAlign={'center'} fontWeight={'bold'}>Programming Languages</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                        <img src={JavaIcon} alt="Java" style={iconStyle} />
                        <img src={PythonIcon} alt="Python" style={iconStyle} />
                        <img src={CIcon} alt="C" style={iconStyle} />
                        <img src={CSharpIcon} alt="C#" style={iconStyle} />
                        <img src={CPlusPlusIcon} alt="C++" style={iconStyle} />
                        <img src={JavaScriptIcon} alt="JavaScript" style={iconStyle} />
                        <img src={HtmlIcon} alt="HTML" style={iconStyle} />
                        <img src={CssIcon} alt="CSS" style={iconStyle} />
                    </Box>
                </Box>

                {/* Databases */}
                <Box sx={{ marginBottom: isSmallScreen ? '20px' : '0' }}>
                    <Typography variant="h6" textAlign={'center'} fontWeight={'bold'}>Databases</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                        <img src={RedisIcon} alt="Redis" style={iconStyle} />
                        <img src={MongoDBIcon} alt="MongoDB" style={iconStyle} />
                        <img src={ElasticsearchIcon} alt="Elasticsearch" style={iconStyle} />
                        <img src={MySQLIcon} alt="MySQL" style={iconStyle} />
                        <img src={PostgreSQLIcon} alt="PostgreSQL" style={iconStyle} />
                    </Box>
                </Box>

                {/* Platforms/Tools/Frameworks */}
                <Box>
                    <Typography variant="h6" textAlign={'center'} fontWeight={'bold'}>Platforms & Tools</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                        <img src={NodeJsIcon} alt="Node.js" style={iconStyle} />
                        <img src={ReactIcon} alt="React" style={iconStyle} />
                        <img src={DockerIcon} alt="Docker" style={iconStyle} />
                        <img src={FigmaIcon} alt="Figma" style={iconStyle} />
                        <img src={KafkaIcon} alt="Kafka" style={iconStyle} />
                        <img src={GitIcon} alt="Git" style={iconStyle} />
                        <img src={GitHubIcon} alt="GitHub" style={iconStyle} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
