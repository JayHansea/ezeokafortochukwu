import React from "react";
import { projectList } from "./projectList";
import Project from "./project";
import { Grid } from "react-mdl";

const Projects = () => {
  return (
    <div className="project-grid">
      <Grid className="demo-grid-ruler grid">
        {projectList.map((user, i) => {
          return (
            <Project
              key={i}
              id={projectList[i].id}
              technology={projectList[i].technology}
              projectName={projectList[i].projectName}
              description={projectList[i].description}
              image={projectList[i].image}
              link={projectList[i].link}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Projects;
