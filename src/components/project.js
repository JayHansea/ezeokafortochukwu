import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  Cell,
} from "react-mdl";

const Project = ({ image, technology, description, projectName, link }) => {
  return (
    <div>
      <Cell col={4}>
        <Card className="card" shadow={5}>
          <CardTitle
            expand
            style={{
              color: "#fff",
              background: `url(${image}) center / cover`,
            }}
          >
            {/* {technology} */}
          </CardTitle>
          <h6
            style={{
              textAlign: "center",
            }}
          >
            {projectName} {technology}
          </h6>
          <CardText>{description}</CardText>
          <CardActions border>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button colored>Goto page</Button>
            </a>
          </CardActions>
        </Card>
      </Cell>
    </div>
  );
};

export default Project;
