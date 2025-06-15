import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyProject from './pages/MyProject';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import WebProjects from './pages/webProjects';
import EmbeddedProjects from './pages/Embedded';
import CrystalBall from './pages/CrystalBall';
import SocialRing from './pages/SocialRing';
import EarthKeepers from './pages/EarthKeepers';
import Aqualumina from './pages/Aqualumina';
import VibeGrow from './pages/Vibegrow';
import MusicPlayer from './components/MusicPlayer';
import { AudioProvider } from './context/AudioContext';
import Navigation from './components/Navigation';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton'
import ThemeTransition from './components/ThemeTransition';


function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <Router>
          <ThemeTransition>
            <MusicPlayer />
            <Navigation />
            <ThemeToggleButton />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/myProject" element={<MyProject />} />
              <Route path="/aboutMe" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/webProjects" element={<WebProjects />} />
              <Route path="/embeddedProjects" element={<EmbeddedProjects />} />
              <Route path="/projects/crystalball" element={<CrystalBall />} />
              <Route path="/projects/socialring" element={<SocialRing />} />
              <Route path="/projects/earthkeepers" element={<EarthKeepers />} />
              <Route path="/projects/aqualumina" element={<Aqualumina />} />
              <Route path="/projects/vibegrow" element={<VibeGrow />} />
            </Routes>
          </ThemeTransition>
        </Router>
      </AudioProvider>
      </ThemeProvider>
  );
}

export default App
