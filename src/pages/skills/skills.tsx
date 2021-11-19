import React from "react";
import "./skills.css";
import { 
  SiTypescript, SiReact, SiC, SiCsharp, 
  SiCsswizardry, SiSass, SiMysql,
  SiRedux, SiOpensuse, SiArchlinux,
  SiVim, SiGit, SiLinux, SiVisualstudio, 
  SiGnubash
} from "react-icons/si";
import { Col, Row, Container } from "react-bootstrap";


const Skills = () => {
  return (
    <Container fluid className="skills-container" style={{position: "absolute", zIndex: 2}}>
      <div className="proffesional-skills-title">Proffesional
      <span style={{color: "blue"}}> Skillset</span>
      </div>
      <Row className="proffesional-skills justify-content-center"
        style={{ paddingBottom: "5px" }}
      >
        <Col className="tech-icons" md={2} xxl={3} lg={3} xl={3}>
          <SiTypescript  
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">
            Typescript
          </div>          
        </Col>
        <Col className="tech-icons" md={2} xxl={3} lg={3} xl={3}>
          <SiC 
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">
            C
          </div>
        </Col>
        <Col className="tech-icons" md={2} xxl={3} lg={3} xl={3}>
          <SiMysql 
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">
            MySql
          </div>          
        </Col>
        <Col className="tech-icons" md={2} xxl={3} lg={3} xl={3}>
          <SiGnubash 
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">
            Bash
          </div>          
        </Col>
        <Col className="tech-icons" md={2} xxl={3} lg={3} xl={3}>
          <SiLinux
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            Linux 
          </div>                                    
        </Col>        
        <Col className="tech-icons" md={2} xxl={3} lg={3} xl={3}>
          <SiReact 
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            React
          </div>                                    
        </Col>
        <Col className="tech-icons" md={2} xxl={3} lg={3} xl={3}>
          <SiCsswizardry 
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            CSS
          </div>                                    
        </Col>
        <Col className="tech-icons" md={2} xxl={3} lg={3} xl={3}>
          <SiSass
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            Sass
          </div>                                    
        </Col>
        <Col className="tech-icons" md={2} xxl={3} lg={3} xl={3}>
          <SiCsharp
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            Csharp
          </div>                                    
        </Col>
        <Col className="tech-icons" md={2} xxl={3} lg={3} xl={3}>
          <SiRedux
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            Redux
          </div>                                    
        </Col>
        <Col className="tech-icons" md={2} xxl={3} lg={3} xl={3}>
          <SiGit
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            Git
          </div>                                    
        </Col>  
      </Row>
      <div className="tools-title"><span style={{color: "blue"}}>Tools</span> i use</div>
      <Row className="proffesional-tools" style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Row className="justify-content-center" style={{maxWidth: "1000px"}}>
        <Col sm={6} className="tech-icons">
          <SiVisualstudio
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            VS Code
          </div>                                    
        </Col>     
        <Col sm={6} className="tech-icons">
          <SiArchlinux
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            Arch
          </div>                                    
        </Col>     
        <Col sm={6} className="tech-icons">
          <SiVim
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            Vim
          </div>                                    
        </Col>     
         <Col sm={6} className="tech-icons">
          <SiOpensuse
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            OpenSuse
          </div>                                    
        </Col>
        </Row>
      </Row>
    </Container>
  )
}

export default Skills;
