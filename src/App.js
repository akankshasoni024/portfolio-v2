import React, { useState, useEffect } from 'react';
import './App.css';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import WelcomeAnimation from './components/WelcomeAnimation';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [showAppContent, setShowAppContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAppContent(true);
    }, 6000); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="App">
      {!showAppContent && <WelcomeAnimation />}  
      {showAppContent &&     <>               
          <Navbar />
          <Header />
          <AboutComponent />
          <Skills />
          {/* <ProjectDetails/> */}
          <Timeline />
          <ContactComponent />
          </> 
      }
    </div>
  );
}

export default App;
