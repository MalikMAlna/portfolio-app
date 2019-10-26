import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: true };
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Mike, and I'm a Software Engineer.</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        
        {this.state.displayBio ? (
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
          </div>
        ) : null}
        
      </div>
    );
  }
}

export default App;
