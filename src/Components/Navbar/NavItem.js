import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    navLink: {
      textDecoration: 'none',
      color: 'yellow',
      '&:visited': {
        color: 'inherit',
      },
    },
    typography: {
      fontSize: '9px',
      letterSpacing: '2px',
      transition: 'color 1s',
      color: 'inherit',
    },
  }));

const NavItem = ({ icon, flag, onClick, index, path, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  const color = flag ? "yellow" : "#4d4d4e";
  const classes = useStyles();
  
  const handleClick = () => {
    onClick(index);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <NavLink exact activeClassName="active" to={path} className={classes.navLink} style={{ margin: "10%" }} onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      {isHovered ? (
        <Typography variant="body2" className={classes.typography} onClick={handleClick}>
        {label}
      </Typography>
      ) : (
        <FontAwesomeIcon icon={icon} color={color}  />
      )}
    </NavLink>
  );
};

export default NavItem;
