import React from 'react';
import ProjectList from '../components/ProjectList';

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <h1 className="hello-heading">My <span className="highlight">Projects</span></h1>
      <ProjectList />
    </div>
  );
};

export default Projects;
