import React, { useRef } from 'react';
import './App.css';
import HomeScreen from './components/home/HomeScreen';
import Projects from './components/projects/Projects'
import AboutMe from './components/about/AboutMe';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Footer from './components/Footer';


function App() {
  const projectsRef = useRef(null);
  const aboutMeRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <ThemeProvider theme={theme}>
      <HomeScreen aboutClick={scrollToAboutMe} projectClick={scrollToProjects} />
      <AboutMe ref={aboutMeRef}/>
      <Projects ref={projectsRef}/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
