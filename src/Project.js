import React, { Component } from "react";

class Project extends Component {
  render() {
    const { title, image, description, link } = this.props.project; // Can also be object and not project
    return (
      <div>
        <h3>{title}</h3>
        <img src={image} alt="application"/>
        <p>{description}</p>
        <a href={link}>{link}</a>
      </div>
    );
  }
}

export default Project;
