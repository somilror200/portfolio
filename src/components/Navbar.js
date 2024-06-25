import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/portfolio">Home</Link></li>
        <li><Link to="/portfolio/skills">Skills</Link></li>
        <li><Link to="/portfolio/experience">Experience</Link></li>
        <li><Link to="/portfolio/projects">Projects</Link></li>
        <li><Link to="/portfolio/education">Education</Link></li>
        <li><Link to="/portfolio/certifications">Certifications</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


