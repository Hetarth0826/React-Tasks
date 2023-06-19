import React from "react";
import "./Projects.css";

const projects = require("../../projects.json");

const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      {projects.projects.map((project, index) => (
        <div key={index}>
          <h1>{project.name}</h1>
          <p>{project.desc}</p>
          <p>{project.stack} Project</p>
          <a href={project.URL}>Link</a>
          <a href={project.src}>Code</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
