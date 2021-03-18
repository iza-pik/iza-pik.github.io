import React, { Component } from "react";
import Button from "../../components/button";
import "./home.css";
import { Link } from "react-router-dom";
import myCV from "../../assets/docs/Izabela Pikula - CV - 18-03-2021.pdf";
import RjsIcon from "../../assets/images/Rjs.jpg";
import RNIcon from "../../assets/images/RN.jpg";
import ES6Icon from "../../assets/images/ES6.jpg";
import HTML5Icon from "../../assets/images/HTML5.jpg";
import CSS3Icon from "../../assets/images/CSS3.jpg";

class Home extends Component {
  render() {
    return (
      <main className="App-main">
        <p className="title1">Web Developer</p>
        <p className="title2">Project Manager</p>
        <p className="title3">Translator</p>
        <p className="title4">Proofreader</p>
        <p>Photographer</p>
        <div className="image-box">
        <img src={HTML5Icon} className="App-icon" alt="HTML5 icon" />
        <img src={CSS3Icon} className="App-icon" alt="CSS3 icon" />
        <img src={ES6Icon} className="App-icon" alt="ES6 icon" />
        <img src={RjsIcon} className="App-icon" alt="React.js icon" />
        <img src={RNIcon} className="App-icon" alt="RN icon" />
        </div>
        <Link to={myCV} target="_blank" download>
          <Button className="btn-style">Download my CV</Button>
        </Link>
      </main>
    );
  }
}

export default Home;
