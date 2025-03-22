import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import swiggy from "../../Assets/Projects/swiggy.png";
import restaurant from "../../Assets/Projects/restaurant.png";
import weather from "../../Assets/Projects/weather.png";
import fullscreen from "../../Assets/Projects/fullscreen-timer.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swiggy}
              isBlog={false}
              title="Swiggy Clone"
              description="A swiggy clone made using reactJS, Nodejs, MongoDb, and RazorPay Payment Gateway."
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A weather App using Reactjs by connecting to a weather API Key."
              demoLink="https://weatherappusingapi.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant Finder"
              description="A Restaurant Finder App which finds nearby restaurants and shows their menus made using ReactJS, Zomato API .But zomato ApI beign disabled after swiggy aquired it so it is not working now."
              demoLink="#"
            />
          </Col>
                <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fullscreen}
              isBlog={false}
              title="To-Do- Application"
              description="A todo application Which helps managing your todo list which is built using Reactjs,Nodejs and mongoDb as database "
              demoLink="#"
            />
          </Col>
          // <Col md={4} className="project-card">
          //   <ProjectCard
          //     imgPath={fullscreen}
          //     isBlog={false}
          //     title="FullScreen-Timer"
          //     description="A FullScreen Timer for Desktop while Doing meditation or Reading Books Or anyother Work. "
          //     demoLink="https://fullscreen-timer-vishalchennuri.vercel.app/"
          //   />
          // </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
