import React, {useState} from "react";
import { Box, Link } from "@mui/material";
import Logo from "../../pic/Logo.png";
import { faHome, faUser, faEnvelope, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/system";
import NavItem from "./NavItem";
import Sticky from 'react-stickynode';

const StyledGitHubIcon = styled(GitHubIcon)({
  color: "grey",
});

const StyledLinkedInIcon = styled(LinkedInIcon)({
  color: "grey",
});

const StickySidebar = styled(Box)({
  position: "sticky",
  top: 0,
  height: "100vh",
  width: "80px",
  backgroundColor: "black",
});

const Sidebar = () => {
  const [homeFlag,setHomeFlag] = useState(true);
  const [aboutFlag,setAboutFlag] = useState(false);
  const [contactFlag,setContactFlag] = useState(false);
  const [projectFlag,setProjectsFlag] = useState(false);

  const onClick = (index) =>{
    if(index==0){
      setHomeFlag(true);
      setAboutFlag(false);
      setContactFlag(false);
      setProjectsFlag(false);
    }else if(index==1){
      setHomeFlag(false);
      setAboutFlag(true);
      setContactFlag(false);
      setProjectsFlag(false);
    }else if(index==2){
      setHomeFlag(false);
      setAboutFlag(false);
      setContactFlag(true);
      setProjectsFlag(false);
    }else{
      setHomeFlag(false);
      setAboutFlag(false);
      setContactFlag(false);
      setProjectsFlag(true);
    }


  }


  return (
    <Sticky>
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      sx={{ background: "black", width: "80px", height: "100vh" }}
    >
      <Box display={"flex"} justifyContent={"center"} marginTop={'30%'}>
        <img src={Logo} alt="logo" width={"80%"} height={"100%"} />
      </Box>

      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <NavItem icon={faHome} flag={homeFlag} onClick={onClick} index={0} path={'/'} label={"HOME"}/>
        <NavItem icon={faUser} flag={aboutFlag} onClick={onClick} index={1} path={'/about'} label={"ABOUT"}/>
        <NavItem icon={faEnvelope} flag={contactFlag} onClick={onClick} index={2} path={'/contact'} label={"CONTACT"}/>
        <NavItem icon={faSuitcase} flag={projectFlag} onClick={onClick} index={3} path={'/projects'} label={"PROJECTS"}/>
      </Box>

      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Link
          href="https://github.com/RoiMeshulam"
          target="_blank"
          rel="noopener noreferrer"
          style={{margin:'10%'}}
        >
          <StyledGitHubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/roi-meshulam-365273240/"
          target="_blank"
          rel="noopener noreferrer"
          style={{margin:'10%'}}
        >
          <StyledLinkedInIcon />
        </Link>
      </Box>
    </Box>
    </Sticky>
  );
};

export default Sidebar;
