import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import psMessenger from "../../Assets/Projects/ps-messengerHome.png";
import portfolioSS from "../../Assets/Projects/portfolioSS.png";

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
              imgPath={psMessenger}
              isBlog={false}
              title="PS-Messenger"
              description="A One-on-One chatting app made using MERN Stack. Personal as well as Group Chatting, with realtime chatting animations usng Socket.io. "
              link="https://github.com/pstricks01/ps-messenger"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioSS}
              isBlog={false}
              title="Personal Portfolio Website"
              description="React.js and Node.js were used to create a fully responsive multi-page website with elegant animations. Styled with React-Bootstrap and CSS for an easy-to-customize style. Hosting my resume and my other projects."
              link="https://github.com/pstricks01/pratik-s-portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
