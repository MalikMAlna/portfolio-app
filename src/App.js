import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "./images/profile.jpeg";

class App extends Component {
  state = { displayBio: false };
  // No longer needed with state at the top.

  // constructor() {
  //   super();
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    const { displayBio = false } = this.state;
    return (
      <div>
        <img src={profile} alt="profile" className="profile"/>
        <h1>Hello!</h1>
        <p>My name is Mike, and I'm a Software Engineer.</p>
        <p>I'm always looking forward to working on meaningful projects.</p>

        {displayBio ? (
          <div>
            <p>
              I live in Indianapolis, and I try to code as often as possible.
            </p>
            <p>
              My strongest language at this time is Javascript, and I think
              React.js is pretty neat.
            </p>
            <p>
              Besides coding my hobbies include learning human languages and
              studying finance.
            </p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
