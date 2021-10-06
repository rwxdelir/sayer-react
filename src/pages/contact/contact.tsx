import React from "react";
import {  Col, Row, Container } from "react-bootstrap";
import { 
  FaGoogle, FaTelegram, FaVk, FaGithub
} from "react-icons/fa";
import { ReactComponent as MessageImg } from  "./../../assets/images/address_image.svg";
import "./contact.css";
import Btn from "./../../components/button/button";


const Contact = () => {
  return (
    <Container fluid className="contactme-icons" style={{position: "absolute", zIndex: 2}}>
      <Row>
        <Container style={{position: "absolute",left: "1230px", top: "306px", width: "400px", height: "400px"}}>
          <Col className="contact-title"> 
            Contact Me
          </Col>
          <Col className="contact-description">
            I am available on almost every social media. You can message me, I will reply within 24 hours.
          </Col>
          <Row style={{display: "flex", marginTop: "30px"}}>
            <Col className="social-icon">
              <a href={"mailto:dinar.kulchurin@gmail.com"}>
                    <FaGoogle 
                  style={{width: "65px", height: "65px", color: "white", background: "red", borderRadius: "100px", border: "10px solid red", marginRight: "20px"}}
                />
              </a>
            </Col>
            <Col className="social-icon">
              <a href={"https://t.me/lero_ro"} target="_blank">
                <FaTelegram 
                  style={{width: "85px", height: "89px", color: "#0390d5", borderRadius: "100px",
                    background: "#fff", marginRight: "20px"}}
                />
              </a>
            </Col>
            <Col className="social-icon">
              <a href={"https://vk.com/id152246572"} target="_blank">
                <FaVk
                  style={{width: "65px", height: "65px", color: "white", background: "#2787f5",
                    borderRadius: "100px", border: "10px solid #2787f5", marginRight: "20px"}}
                />
              </a>
            </Col>
            <Col className="social-icon">
              <a href={"https://github.com/arkulnid"} target="_blank">
                <FaGithub
                  style={{width: "50px", height: "50px", color: "white", border: "18px solid black",
                    borderRadius: "500px", background: "black", marginRight: "0px !important"}}
                />
              </a>
            </Col>
            <div className="contact-btn">
              <Btn title={"View Resume"} width={"170px"} href={"./#"} />
            </div>
          </Row>
        </Container>
        <Col style={{position: "absolute", top: "150px", marginLeft: "30px"}}>
          <MessageImg />
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;
