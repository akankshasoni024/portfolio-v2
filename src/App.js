import './App.css';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutComponent />
      <Skills />
      <Timeline />
      <ContactComponent />
    </div>
  );
}

export default App;
