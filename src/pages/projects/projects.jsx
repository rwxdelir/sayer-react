import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./../../components/cards/cards";
import "./projects.css";

import tetrisIcon from "./../../assets/images/tetris.png";

const Projects = () => {
  return (
    <Container fluid className="project-container">
      <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
        <Col className="project-card">
          <ProjectCards 
            title= {"First Project"} 
            description={"that's my first project"}
            img={tetrisIcon}
        />
        </Col>
        <Col className="project-card">
          <ProjectCards title= {"Second Project"} description={"that's my second project"}/>
        </Col>
        <Col className="project-card">
          <ProjectCards title= {"First Project"} description={"that's my first project"}/>
        </Col>
        <Col className="project-card">
          <ProjectCards title= {"Second Project"} 
            description={"that's my second projedsadas dasdasdas dasda asdadasdasdas ddsadasct"}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects;
