import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingLayout from './pages/LandingLayout';
import Porfolio from './pages/Porfolio';
import NavBar from './pages/NavBar';
import Blogs from './pages/Blogs';
import AnimatedCursor from 'react-animated-cursor';
import About from './pages/About.js';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div>
      <ParallaxProvider>
        <AnimatedCursor
          innerSize={8}
          outerSize={32}
          color="79, 174, 221"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
        <div className="divider"></div>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingLayout />} />
          <Route path="/portfolio" element={<Porfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ParallaxProvider>
    </div>
  );
}

export default App;
