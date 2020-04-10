import React, { Component } from "react";

class Project extends Component {
  render() {
    const { title, image, description, link } = this.props.project; // Can also be object and not project
    return (
      <div
        style={{ marginTop: 10, marginBottom: 10 }}
        class="col-md-12 col-lg-4"
      >
        <h3>{title}</h3>
        <a href={link}>
          <img
            src={image}
            alt="application-pic"
            style={{ width: 300, height: 220 }}
          />
        </a>
        <h4 style={{ margin: 10 }}>{description}</h4>
      </div>
    );
  }
}

export default Project;
