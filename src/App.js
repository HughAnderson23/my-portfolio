import React from 'react';
import './App.css';
import { Github, ExternalLink, Mail } from 'lucide-react';
import burgerThumbnail from './thumbnails/burger.PNG';
import multiplayerThumbnail from './thumbnails/multiplayer.PNG';

const Portfolio = () => {
  const projects = [
    {
      title: "Burger Builder Web App",
      description: "An app where users can make and purchase hamburgers.",
      githubLink: "https://github.com/HughAnderson23/Burger-Builder",
      liveLink: "https://my-first-fstack-c4007ac93293.herokuapp.com/home",
      tags: ["JavaScript", "React.js", "Flask", "Python", "PostgreSQL", "sqlAlchemy", "Restful APIs", "Heroku"],
      thumbnail: burgerThumbnail // Thumbnail for this project
    },
    {
      title: "Multiplayer Web-Based Physics Game",
      description: "Real-time 20 player web game with seamless state synchronization. Has physics based character movement and interactions.",
      githubLink: "https://github.com/HughAnderson23/my-pelican-game-master",
      liveLink: "https://my-pelican-game-master-e2eee1009e58.herokuapp.com/",
      tags: ["Node.js", "THREE.js", "Express", "Socket.io", "WebGL", "Heroku"],
      thumbnail: multiplayerThumbnail // Thumbnail for this project
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Nav */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Hugh Alex Anderson</h1>
          <div className="flex gap-4">
            <a href="https://github.com/HughAnderson23" className="text-gray-600 hover:text-gray-900">
              <Github size={24} />
            </a>
            <a href="mailto:hughabcanderson@gmail.com" className="text-gray-600 hover:text-gray-900">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to My Portfolio</h2>
          <p className="text-xl text-gray-600">
          Experienced full stack web developer proficient in front-end technologies such as HTML, CSS, JavaScript (React, Angular, Vue), and back-end development using Node.js, Python, or PHP. Skilled in working with databases like MySQL, MongoDB, and PostgreSQL, with a solid understanding of RESTful APIs, web services, and cloud platforms like AWS and Heroku.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">My Projects</h3>
        {/* Individual Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <img src={project.thumbnail} alt={project.title} className="mb-4 w-full h-auto object-cover rounded" />
              </a>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.githubLink} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Github size={20} />
                  Code
                </a>
                <a href={project.liveLink} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;