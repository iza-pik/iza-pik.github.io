import React, { Component } from "react";
import "./about.css";
import MyPhoto from "../../assets/images/MyPhoto.jpg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <img src={MyPhoto} className="photo" alt="This is me!" />
        <p>
          Hello! My name is Izabela. I am a self-taught front-end developer and
          a professional translator with a passion for both human and
          programming languages.
        </p>
        <p>
          I have worked on several projects in a team of React developers and
          contributed to project code bases on GitHub. I have good grasp of
          HTML5 and CSS3, knowledge of JavaScript, React.js and Git, among other
          skills.
        </p>
        <p>
          I am a creative problem-solver with an excellent eye for detail. I
          love learning and tackling new challenges.
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default About;
