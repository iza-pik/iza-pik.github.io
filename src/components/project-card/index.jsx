import React from "react";
import "./project-card.css";

const ProjectCard = props => (
  <div className="project-card">
    <h3>{props.project.name}</h3>
    <a href={props.project.url} target="_blank" rel="noopener noreferrer">
      <iframe
        scrolling="no"
        title={props.project.name}
        height="60%"
        width="95%"
        src={props.project.url}
      />
    </a>
  </div>
);

export default ProjectCard;
