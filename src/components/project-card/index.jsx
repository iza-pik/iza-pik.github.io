import React, { Component } from "react";
import "./project-card.css";

const ProjectCard = props => (
  <div className="project-card">
    <a href={props.project.url}>{props.project.name}</a>
  </div>
);

export default ProjectCard;
