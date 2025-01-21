import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Portfolio Website',
      url: 'https://example.com/portfolio',
      description: 'lorem ipsum blalalalalalaalalalala',
    },
    {
      id: 2,
      name: 'React Dashboard',
      url: 'https://example.com/react-dashboard',
      description: 'lorem ipsum blalalalalalaalalalala',
    },
    {
      id: 3,
      name: 'E-commerce App',
      url: 'https://example.com/ecommerce',
      description: 'lorem ipsum blalalalalalaalalalala',
    },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
};

export default Projects;
