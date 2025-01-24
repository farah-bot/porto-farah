import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Project.css';

const ProjectCard = ({ project }) => {
  return (
    <div
      className="project-card"
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <Link to={`/projects/${project.id}`}>
        <h3>{project.name}</h3>
        <div className="project-card-hover">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
