import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingPage";
import Resume from "./resume";
import AboutMe from "./aboutMe";
import Contact from "./contact";
import Project from "./projects";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Project} />
    </Switch>
  );
};

export default Main;
