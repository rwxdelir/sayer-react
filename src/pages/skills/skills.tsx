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
    <Container fluid className="skills-container" style={{position: "absolute", zIndex: 2}}>
      <div className="proffesional-skills-title">Proffesional
      <span style={{color: "blue"}}> Skillset</span>
      </div>
      <Row className="proffesional-skills"
        style={{ justifyContent: "center", paddingBottom: "50px" }}
      >
        <Col className="tech-icons">
          <SiTypescript  
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">
            Typescript
          </div>          
        </Col>
        <Col className="tech-icons">
          <SiC 
            style={{width: "125px", height: "125px"}}
          />
          <div class="icon-title">
            C
          </div>
        </Col>
        <Col className="tech-icons">
          <SiMysql 
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">
            MySql
          </div>          
        </Col>
        <Col className="tech-icons">
          <SiLinux
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            Linux 
          </div>                                    
        </Col>        
        <Col className="tech-icons">
          <SiReact 
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            React
          </div>                                    
        </Col>
        <Col className="tech-icons">
          <SiCsswizardry 
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            CSS
          </div>                                    
        </Col>
        <Col className="tech-icons">
          <SiSass
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            Sass
          </div>                                    
        </Col>
        <Col className="tech-icons">
          <SiCsharp
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            Csharp
          </div>                                    
        </Col>
        <Col className="tech-icons">
          <SiRedux
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            Redux
          </div>                                    
        </Col>
        <Col className="tech-icons">
          <SiGit
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            Git
          </div>                                    
        </Col>  
      </Row>
      <div className="tools-title"><span style={{color: "blue"}}>Tools</span> i use</div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col className="tech-icons">
          <SiVisualstudio
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            VS Code
          </div>                                    
        </Col>     
        <Col className="tech-icons">
          <SiArchlinux
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            Arch
          </div>                                    
        </Col>     
        <Col className="tech-icons">
          <SiVim
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            Vim
          </div>                                    
        </Col>     
         <Col className="tech-icons">
          <SiOpensuse
            style={{width: "125px", height: "125px"}}
          />
          <div className="icon-title">    
            OpenSuse
          </div>                                    
        </Col>
      </Row>
    </Container>
  )
}

export default Skills;
