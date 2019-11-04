import React, { Component } from "react";

class Project extends Component {
  render() {
    const { title, image, description, link } = this.props.project; // Can also be object and not project
    return (
      <div style={{display: "inline-block", width: 300, margin: 10}}>
        <h3>{title}</h3>
        <img src={image} alt="application" style={{width: 200, height: 120}}/>
        <p>{description}</p>
        <a href={link}>{link}</a>
      </div>
    );
  }
}

export default Project;
