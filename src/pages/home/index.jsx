import React, { Component } from "react";
import Button from "../../components/button";
import "./home.css";
import { Link } from "react-router-dom";
import myCV from "../../assets/docs/Izabela Pikula - CV - 16-07-2019.pdf";

class Home extends Component {
  render() {
    return (
      <main className="App-main">
        <p>Front-End Developer working with React.js</p>
        <p>Translator / Proofreader</p>
        <p>Project Manager</p>
        <p>Hobbyist photographer and painter</p>
        <img
          src="https://bit.ly/2UPFGCB"
          className="App-icon"
          alt="Curly brackets icon"
        />
        <Link to={myCV} target="_blank" download>
          <Button className="btn-style">Download my CV</Button>
        </Link>
      </main>
    );
  }
}

export default Home;
