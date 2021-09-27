import React from "react";
import "./skills.css";
import { 
  SiTypescript, SiReact, SiC, SiCsharp, 
  SiCsswizardry, SiSass, SiMysql,
  SiRedux, SiOpensuse, SiArchlinux,
  SiVim, SiGit, SiLinux, SiVisualstudio
} from "react-icons/si";
import { Col, Row, Container } from "react-bootstrap";


const Skills = () => {
  return (
    <Container fluid className="skills" style={{position: "absolute", zIndex: 2}}>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col className="tech-icons">
          <SiTypescript  
            style={{width: "250px", height: "250px"}}
        />
        </Col>
        <Col className="tech-icons">
          <SiC 
            style={{width: "250px", height: "250px"}}
          />
        </Col>
        <Col className="tech-icons">
          <SiMysql 
            style={{width: "250px", height: "250px"}}
          />
        </Col>
        <Col className="tech-icons">
          <SiLinux
            style={{width: "250px", height: "250px"}}
        />
        </Col>        
        <Col className="tech-icons">
          <SiReact 
            style={{width: "250px", height: "250px"}}
          />
        </Col>
        <Col className="tech-icons">
          <SiCsswizardry 
            style={{width: "250px", height: "250px"}}
          />
        </Col>
        <Col className="tech-icons">
          <SiSass
            style={{width: "250px", height: "250px"}}
          />
        </Col>
        <Col className="tech-icons">
          <SiCsharp
            style={{width: "250px", height: "250px"}}
          />
        </Col>
        <Col className="tech-icons">
          <SiRedux
            style={{width: "250px", height: "250px"}}
          />
        </Col>
        <Col className="tech-icons">
          <SiGit
            style={{width: "250px", height: "250px"}}
          />
        </Col>  

      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col className="tech-icons">
          <SiVisualstudio
            style={{width: "250px", height: "250px"}}
          />
        </Col>     
        <Col className="tech-icons">
          <SiArchlinux
            style={{width: "250px", height: "250px"}}
          />
        </Col>     
        <Col className="tech-icons">
          <SiVim
            style={{width: "250px", height: "250px"}}
          />
        </Col>     
         <Col className="tech-icons">
          <SiOpensuse
            style={{width: "250px", height: "250px"}}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Skills;
