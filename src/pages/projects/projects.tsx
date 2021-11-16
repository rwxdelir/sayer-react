import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./../../components/cards/cards";
import "./projects.css";

import tetrisIcon from "./../../assets/images/tetris.png";
import capstoneIcon from "./../../assets/images/capstone.png";
import hotelIcon from "./../../assets/images/hotel.png";
import portfolioIcon from "./../../assets/images/portfolio.png";

const Projects = () => {
  return (
    <Container className="d-flex justify-content-center" style={{position:"relative", zIndex: 3, maxWidth: "100%", top: "150px"}}>
      <Row>
        <Col sm={6} md={6} lg={6} xl={4} xxl={3} className="px-5 p-4 p-2 project-card">
          <ProjectCards 
            title= {"capstone"} 
            description={"The goal of this project is to provide a way to perform some of the tasks required to run the university and to enable effective querying of the metadata from around campus."}
            img={capstoneIcon}
            href={"https://github.com/arkulnid/capstone"}
          />
        </Col>
        <Col sm={6} md={6} lg={6} xl={4} xxl={3} className="px-5 p-4 p-2 project-card">
          <ProjectCards 
            title= {"mtwain-js"} 
            description={
              "Classic Tetris written entirely in pure JS. Feature of this project's in opportunity to watch replays of the last game. It's also can be included in your site as customizable widget"}
            img={tetrisIcon}
            href={"https://github.com/arkulnid/mtwain-js"}
          />
        </Col>
        <Col sm={6} md={6} lg={6} xl={4} xxl={3} className="px-5 p-4 p-2 project-card">
          <ProjectCards 
            title= {"hotel-site"} 
            description={
              "Hotel site that implemented with using React, BEM methodology, SCSS and PUG preprocessors. Maket of this site not mine and all rights belongs to FSD."}
            img={hotelIcon}
            href={"https://github.com/arkulnid/hotel_site"}
        />
        </Col>
        <Col sm={6} md={6} lg={6} xl={4} xxl={3} className="px-5 p-4 p-2 project-card">
          <ProjectCards 
            title= {"sayer-react"} 
            description={"Just portfolio site that implemented with using Typescript, React and Redux. It has a unique (not) window system and terminal that can run several UNIX system commands."}
            img={portfolioIcon}
            href={"https://github.com/arkulnid/sayer-react"}
        />
        </Col>
      </Row>
    </Container>
  )
}

export default Projects;
