import React from "react";
import "./project-card.css";

const ProjectCard = ({project}) => (
  <div className="project-card">
    <h3>{project.name}</h3>
    <div class="project-card-thumb" style={{backgroundImage: `url(${project.screenshot})`}} />
    {/* {project.screenshot && <img src={project.screenshot} alt={project.name}/> } */}
    <a href={project.url} target="_blank" rel="noopener noreferrer">
     Link to GitHub
    </a>
  </div>
);

export default ProjectCard;
