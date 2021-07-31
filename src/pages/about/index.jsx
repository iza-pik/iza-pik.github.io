import React, { Component } from "react";
import "./about.css";
import MyPhoto from "../../assets/images/MyPhoto.jpg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <img src={MyPhoto} className="photo" alt="This is me!" />
        <div className="about-me">
          <p>Hello, World! My name is Iza.</p>
          <p>
            {" "}
            I am a self-taught web developer and a professional translator with
            a passion for both human and programming languages.
          </p>
          <p>
            I have a good grasp of <span>HTML5</span> and <span>CSS3</span>,{" "}
            <span>JavaScript</span>, <span>React.js</span> and <span>Git</span>{" "}
            and I am currently learning to create mobile apps using{" "}
            <span>React Native</span> and <span>Flutter</span>.
          </p>
          <p>
            I am a creative problem-solver with an excellent eye for detail. I
            love learning and tackling new challenges.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
