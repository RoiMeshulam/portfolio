import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider, Box, Select } from "@mui/material";
import { yellow } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          "&.MuiSelect-select": {
            color: "yellow",
            display: "flex",
            justifyContent: "center",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "#424242", // Default background color
          color: "white", // Default text color
          "&:hover": {
            backgroundColor: "white",
            color:'#424242' // Updated background color on hover
          },
          "&.Mui-selected": {
            backgroundColor: "white",
            color:'#424242', // Updated background color when selected
          },
          "&.Mui-selected:hover": {
            backgroundColor: "white", // Updated background color when selected and hovered
          },
         
        },
      },
    },
  },
});

const NavButtons = () => {
  const [selected, setSelected] = useState("React JS");
  const navigate = useNavigate();
  const handleChange = (event) => {
    const selectedTemp = event.target.value;
    setSelected(selectedTemp);
    // Redirect to the correct path based on the selected value
    switch (selectedTemp) {
      case "React JS":
        navigate("./react");
        break;
      case "Python":
        navigate("./python");
        break;
      case "Java":
        navigate("./java");
        break;
      case "C":
        navigate("./c");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleChange({ target: { value: selected } });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box display={"flex"} justifyContent={"center"} marginTop={"2%"}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selected}
          onChange={handleChange}
          

        >
          <MenuItem value={"React JS"}>React JS</MenuItem>
          <MenuItem value={"Python"}>Python</MenuItem>
          <MenuItem value={"Java"}>Java</MenuItem>
          <MenuItem value={"C"}>C</MenuItem>
        </Select>
        {/* Content of the top middle item */}
      </Box>
    </ThemeProvider>
  );
};

export default NavButtons;
