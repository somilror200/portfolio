import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/skills" element={<Skills />} />
          <Route path="/portfolio/experience" element={<Experience />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/education" element={<Education />} />
          <Route path="/portfolio/certifications" element={<Certifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




