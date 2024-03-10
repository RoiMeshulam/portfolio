import React, { useRef } from 'react';
import './App.css';
import HomeScreen from './components/home/HomeScreen';
import Projects from './components/projects/Projects'
import AboutMe from './components/about/AboutMe';



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
    <>
      <HomeScreen aboutClick={scrollToAboutMe} projectClick={scrollToProjects} />
      <AboutMe ref={aboutMeRef}/>
      <Projects ref={projectsRef}/>
    </>
  );
}

export default App;
