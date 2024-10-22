import React from 'react';
import { Github, ExternalLink, Mail } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Burger Builder Web App",
      description: "Description of your first project",
      githubLink: "https://github.com/yourusername/project1",
      liveLink: "https://project1-demo.com",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Multiplayer Web-Based Physics Game",
      description: "Description of your second project",
      githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://project2-demo.com",
      tags: ["Python", "Django", "PostgreSQL"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Nav */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Hugh Alex Anderson</h1>
          <div className="flex gap-4">
            <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900">
              <Github size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
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
            I'm a developer passionate about building amazing web applications.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <Github size={20} />
                  Code
                </a>
                <a
                  href={project.liveLink}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
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