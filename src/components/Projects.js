import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Responsive Website for Subcon PL</h3>
        <p>
          Developed and deployed a responsive website for Subcon PL using React, JavaScript, HTML, and CSS,
          hosted on GitHub Pages with a custom domain.
        </p>
        <a href="https://somilror200.github.io/Subcon/" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
      </div>
      <div className="project">
        <h3>Personal Resume Website</h3>
        <p>
          Created a personal resume website using React.
        </p>
        <a href="https://somilror200.github.io/resume" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
      </div>
      <div className="project">
        <h3>Guess the word game using react</h3>
        <p>
        This interactive web application was built using React for dynamic user interfaces and state management. 
        It leverages CSS for custom styling and user experience enhancements. The game involves guessing letters to reveal 
        a hidden word, with features including hint functionality and incorrect guess tracking. The application demonstrates 
        skills in frontend development and responsive design.
        </p>
        <a href="https://github.com/somilror200/guess-the-word" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
      </div>
      <div className="project">
        <h3>Weather tracking app using Vue.js and OpenWeatherMap API</h3>
        <p>
        This Vue.js application provides real-time weather information for predefined cities and user-specified locations. The 
        app fetches data from the OpenWeatherMap API and displays current temperatures and weather conditions. It includes features 
        for viewing weather data for predefined cities, searching for weather by city name, and handling loading states and errors. The 
        user interface is styled with custom CSS for a responsive and engaging experience.
        </p>
        <a href="https://github.com/somilror200/weather-tracker" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
      </div>
      <div className="project">
        <h3>Kotlin Android Apps collection</h3>
        <p>
        This collection features a series of Kotlin-based Android applications developed during an Udemy course. It includes 
        a variety of tools such as an Age in Minutes Calculator, Calendar Account Manager, Drawing App, and Quiz App, each 
        demonstrating practical functionality and engaging user experiences in areas like time calculation, event management, 
        digital art, and interactive quizzes.
        </p>
        <a href="https://github.com/somilror200/QuizApp" target="_blank" rel="noopener noreferrer">
          <button>View Quizz App</button>
        </a>
        <a href="https://github.com/somilror200/DrawingApp" target="_blank" rel="noopener noreferrer">
          <button>View Drawing App</button>
        </a>
        <a href="https://github.com/somilror200/calendar-account-manager" target="_blank" rel="noopener noreferrer">
          <button>View Calender Accound Manager</button>
        </a>
        <a href="https://github.com/somilror200/AgeInMinuteCalculator" target="_blank" rel="noopener noreferrer">
          <button>View Age in Min Calcu</button>
        </a>
      </div>
      <div className="project">
        <h3>Contributed to instagram clone app in open source</h3>
        <p>
        Description from the creater: This is basically Instagram clone app in which I develop various types of functionalities of real instagram , and for 
        storage purpose I used Firebase , and I'll add more functionalities in my Instagram Clone .
        </p>
        <a href="https://github.com/somilror200/Instagram-Clone" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
      </div>
    
    </div>
  );
}

export default Projects;



