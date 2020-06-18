import React, { Component } from "react";
import PROJECTS from "./data/projects";
import Project from "./Project";

class Projects extends Component {
  render() {
    return (
      <div>
        <h1>Highlighted Projects</h1>
        <section class="row">
          {PROJECTS.map((PROJECT) => {
            return <Project key={PROJECT.id} project={PROJECT} />;
          })}
        </section>
      </div>
    );
  }
}

export default Projects;
