import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ProfilePicture from "../img/profile_picture.jpg";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={ProfilePicture}
              className="profile-image"
              alt="Ezeokafor Tochukwu profile pics"
            />

            <div className="banner-text">
              <h1>Software Developer</h1>
              <h3>Ezeokafor Tochukwu</h3>
              <hr />
              <p>
                HTML | CSS | Bootstrap | Wordpress | Javascript | React | React
                Native
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/ezeokafor-tochukwu-john-51b9a510b/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>

                {/* github */}
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/JayHansea"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
                {/* Facebook */}
                <a
                  rel="noopener noreferrer"
                  href="https://web.facebook.com/profile.php?id=100008704512571"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
                {/* LinkedIn */}
                <a
                  rel="noopener noreferrer"
                  href="https://twitter.com/Jayhansea"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
