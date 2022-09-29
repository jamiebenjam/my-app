import './App.css';
import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LandingLayout from './LandingLayout';
import Porfolio from './Porfolio';
import NavBar from './NavBar';
import Blogs from './Blogs';
import AnimatedCursor from 'react-animated-cursor';
import About from './About';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
