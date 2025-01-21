import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Project.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <Link to={`/projects/${project.id}`}>
        <img src={project.image} alt={project.name} className="project-card-img" />
        <h3>{project.name}</h3>
      </Link>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
