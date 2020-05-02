import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="Ezeokafor Tochukwu" scroll>
          <Navigation>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/aboutme">About Me</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Navigation>
        </Header>
        <Drawer title="Ezeokafor Tochukwu">
          <Navigation>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/aboutme">About Me</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
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
