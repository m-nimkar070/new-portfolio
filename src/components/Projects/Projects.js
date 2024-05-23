import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import admin from "../../Assets/Projects/Admin-Dashbord.png";
import qkart from "../../Assets/Projects/Qkart.png";
import chart from "../../Assets/Projects/chart-dasshbord.png";
import law from "../../Assets/Projects/law_firm.png";
import task from "../../Assets/Projects/task-manager.png";

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
              imgPath={admin}
              isBlog={false}
              title="Admin-Ui"
              description="Admin Ui dashboard build using reactjs and Material UI. Functionalities it provides Edit ,Add , Delete and Pagination of records as per user demand."
              ghLink="https://github.com/m-nimkar070/Admin_UI_Geektrust"
              demoLink="https://adminui-react.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qkart}
              isBlog={false}
              title="Qkart E-commerce"
              description="Qkart is an E-Commerce website with the functionality of Login , Registration , Cart and Checkout.The technology I have used for user Authentication is Tokenization."
              ghLink="https://github.com/m-nimkar070/Qkart-FrontEnd"
              demoLink="https://react-qkart-frontend.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chart}
              isBlog={false}
              title="Chart Dashboard"
              description="It's an Dashboart but here I have used the Chart.js Library for better visualization of data and it is user friendly. The idea behind this app is to get familier with the Visualization libraries provide by javascript"
              ghLink="https://github.com/m-nimkar070/arcot-react-chart"
              demoLink="https://arcot-react-chart.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={law}
              isBlog={false}
              title="Law-Firm"
              description="It is a law firm website UI clone to by using react component structure."
              ghLink="https://github.com/m-nimkar070/law-firm"
              demoLink="https://law-org.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task Manager"
              description="It is a full stack application using a MERN technoloy for Frontend Raact and tailwind CSS is used and for the Backend part I have used Nodejs, ExpressJs, MongoDb. It provide Add, Edit, DElete, SortBy and Search Functionatily"
              ghLink="https://github.com/m-nimkar070/taskManagerApp/tree/master"
              demoLink="https://thetaskmanagerapp.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;