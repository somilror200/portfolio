import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to My Portfolio</h2>
      <p>Hi, I'm Somil Garak, a Computer Science student at Deakin University.</p>
      <div className="buttons">
        <a href="https://somilror200.github.io/resume/" target="_blank" rel="noopener noreferrer">
          <button>View My Resume</button>
        </a>
        <a href="https://www.linkedin.com/in/somil-garak-200" target="_blank" rel="noopener noreferrer">
          <button>LinkedIn</button>
        </a>
        <a href="https://github.com/somilror200" target="_blank" rel="noopener noreferrer">
          <button>GitHub</button>
        </a>
      </div>
    </div>
  );
}

export default Home;


