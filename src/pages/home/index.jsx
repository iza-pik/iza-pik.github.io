import React, { Component } from "react";
import Button from "../../components/button";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <main className="App-main">
        <p>Translator</p>
        <p>Proofreader</p>
        <p>Project Manager</p>
        <p>Aspiring software developer</p>
        <p>Hobbyist photographer and painter</p>
        <img
          src="https://bit.ly/2UPFGCB"
          className="App-icon"
          alt="Curly brackets icon"
        />
        <Button className="btn-style">Download my CV</Button>
      </main>
    );
  }
}

export default Home;
