import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-me">
        <p>
          Hi there, Let's skip the name part, since you already know that. I’m
          an enthusiastic software developer specializing in web design and
          development, graphic design, mobile app development and also content
          development. Over the years I have found a new love for anything
          digital and making technology easy to use and accessible to everyone
          (feels good to do good right?).
          <span role="img" aria-label="happy">
            🙌
          </span>{" "}
          I've worked and mastered libraries and frameworks like bootstrap and
          react respectively. I’ve had the privilege to work on some fantastic
          projects , one being the UNESCO YouthMobile project while working at
          the McAnderson Institute of Technology MIT. Also Alongside 19 bright
          developers, I was part of training 2000 NPower Tech beneficiaries on
          digital marketing and full stack software development using html, css,
          bootstrap, javascript, php, mysql and wordpress. However, when I’m not
          behind my pc, you could find me in a cocktail bar, chilling with
          friends. <br /> Feel free to <Link to="/contact">contact</Link> me.
        </p>
      </div>
    );
  }
}

export default About;
