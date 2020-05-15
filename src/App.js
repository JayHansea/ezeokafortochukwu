import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content, Button } from "react-mdl";
import Main from "./components/main";
import { NavLink } from "react-router-dom";
import CV from "./files/TochukwuCV.pdf";
import "./App.css";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Portfolio" scroll>
          <Navigation>
            <NavLink to="/">
              <span className="navlink">Home</span>
            </NavLink>
            <NavLink to="/projects">
              <span className="navlink">Projects</span>
            </NavLink>
            <NavLink to="/aboutme">
              <span className="navlink">About Me</span>
            </NavLink>
            <NavLink to="/contact">
              <span className="navlink">Contact</span>
            </NavLink>
            <NavLink className="button-cv" to={CV} target="_blank" download>
              <span className="navlink">Download CV</span>
            </NavLink>
          </Navigation>
        </Header>
        <Drawer title="Portfolio">
          <Navigation>
            <NavLink to="/">
              <span className="navlink2">Home</span>
            </NavLink>
            <NavLink to="/projects">
              <span className="navlink2">Projects</span>
            </NavLink>
            <NavLink to="/aboutme">
              <span className="navlink2">About Me</span>
            </NavLink>
            <NavLink to="/contact">
              <span className="navlink2">Contact</span>
            </NavLink>
            <NavLink className="button-cv" to={CV} target="_blank" download>
              <Button raised colored ripple className="navlink2">
                Download CV
              </Button>
            </NavLink>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
