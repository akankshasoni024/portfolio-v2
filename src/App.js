import React, { useState, useEffect } from 'react';
import './App.css';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import WelcomeAnimation from './components/WelcomeAnimation'; // Import the animation component

function App() {
  const [showAppContent, setShowAppContent] = useState(false);

  useEffect(() => {
    // Show the app content after the welcome animation is done (6 seconds total)
    const timer = setTimeout(() => {
      setShowAppContent(true);
    }, 6000); // Adjust this based on animation timing
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="App">
      {!showAppContent && <WelcomeAnimation />}  {/* Show animation */}
      {showAppContent &&     <>               {/* Show app content after animation */}
       
          <Navbar />
          <Header />
          <AboutComponent />
          <Skills />
          <Timeline />
          <ContactComponent />
          </> 
      }
    </div>
  );
}

export default App;
