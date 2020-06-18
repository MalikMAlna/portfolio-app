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
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <h3>My name is Mike, and I'm a Software Engineer.</h3>
        <h3>I'm always looking forward to working on meaningful projects.</h3>

        {displayBio ? (
          <div>
            <h3>
              I live in Indianapolis, and I try to code as often as possible.
            </h3>
            <h3>
              My strongest language at this time is Javascript, and I think
              React.js is pretty swell.
            </h3>
            <h3>
              Besides coding my hobbies include learning human languages and
              studying finance.
            </h3>
            <button
              style={{ width: 100, height: 50 }}
              onClick={this.toggleDisplayBio}
            >
              Show Less
            </button>
          </div>
        ) : (
          <div>
            <button
              style={{ width: 100, height: 50 }}
              onClick={this.toggleDisplayBio}
            >
              Read More
            </button>
          </div>
        )}
        <hr style={{ height: 10 }} />
        <Projects />
        <hr style={{ height: 10 }} />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
