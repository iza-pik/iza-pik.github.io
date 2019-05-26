import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <img
          src="https://bit.ly/2FuBEdI"
          className="App-photo"
          alt="This is me!"
        />
        <p>Hello! My name is Izabela.</p>
        {this.props.children}
      </div>
    );
  }
}

export default About;
