import React, { Component } from "react";
import "./projects.css";
import ProjectCard from "../../components/project-card";
import { projects } from "../../constants";

class Projects extends Component {
  render() {
    return (
      <main>
        <div className="projects">
          {projects.map(project => (
            <ProjectCard project={project} />
          ))}
        </div>
      </main>
    );
  }
}

export default Projects;
