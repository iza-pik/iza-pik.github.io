import React, { Component } from "react";
import Button from "../../components/button";
import "./home.css";
import { Link } from "react-router-dom";
import myCV from "../../assets/docs/Izabela Pikula - CV - 2021.pdf";
import RjsIcon from "../../assets/images/Rjs.jpg";
import RNIcon from "../../assets/images/RN.jpg";
import ES6Icon from "../../assets/images/ES6.jpg";
import HTML5Icon from "../../assets/images/HTML5.jpg";
import CSS3Icon from "../../assets/images/CSS3.jpg";

class Home extends Component {
  render() {
    return (
      <main className="app">
        <p className="title1">Web Developer</p>
        <p className="title2">Project Manager</p>
        <p className="title3">Translator</p>
        <div className="image-box">
          <img src={HTML5Icon} className="app-icon" alt="HTML5 icon" />
          <img src={CSS3Icon} className="app-icon" alt="CSS3 icon" />
          <img src={ES6Icon} className="app-icon" alt="ES6 icon" />
          <img src={RjsIcon} className="app-icon" alt="React.js icon" />
          <img src={RNIcon} className="app-icon" alt="RN icon" />
        </div>
        <Link to={myCV} target="_blank" download>
          <Button className="btn-style">Download my CV</Button>
        </Link>
      </main>
    );
  }
}

export default Home;
