import React from "react";
import "./project-card.css";

const ProjectCard = ({project}) => (
  <div className="project-card">
    <h3>{project.name}</h3>
    <a href={project.githubUrl}>
    <div class="project-card-thumb" style={{backgroundImage: `url(${project.screenshot})`}} /></a>
    <a href={project.url} target="_blank" rel="noopener noreferrer">
     See GitHub repo
    </a>
  </div>
);

export default ProjectCard;
