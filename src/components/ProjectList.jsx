import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const ProjectList = () => {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
