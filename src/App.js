import Sidebar from "./Components/Navbar/Sidebar";
import { Box, Typography } from "@mui/material";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Box display={"flex"}>
        <Sidebar />

        {/* <Box width={'100%'}>
          <Box sx={{ position: "absolute", top: 0, left: 90 }}>
            <Typography fontFamily={"Parisienne"}
              color={"yellow"}>{"<html>"}</Typography>
          </Box>
          <Box sx={{ position: "absolute", top: "5%", left: 110 }}>
            <Typography fontFamily={"Parisienne"}
              color={"yellow"}>&lt;body&gt;</Typography>
          </Box> */}

          <Routes>
            {/* Route definitions */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/*" element={<Projects />} />
          </Routes>
          {/* <Box sx={{ position: "absolute", buttom: 10, left: 90 }}>
            <Typography
              fontFamily={"Parisienne"}
              color={"yellow"}
              marginLeft={"6%"}
            >
              {"</body>"}
            </Typography>
            <Typography
              fontFamily={"Parisienne"}
              color={"yellow"}
              marginLeft={"4%"}
            >
              {"</html>"}
            </Typography>
          </Box>
        </Box> */}
      </Box>
    </Router>
  );
}

export default App;
