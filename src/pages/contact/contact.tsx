import React from "react";
import {  Col, Row, Container } from "react-bootstrap";
import { 
  FaGoogle, FaTelegram, FaVk, FaGithub
} from "react-icons/fa";
import { ReactComponent as MessageImg } from  "./../../assets/images/address_image.svg";
import "./contact.css";

const Contact = () => {
  return (
    <Container fluid className="contactme-icons" style={{position: "absolute", zIndex: 2}}>
      <Row>
        <Container style={{position: "absolute", display: "flex", left: "1230px", top: "660px"}}>
          <Col className="contact-title"> 
            Contact Me
          </Col>
          <Col className="contact-description">
            I am available on almost every social media. You can message me, I will reply within 24 hours.
          </Col>
          <Col className="social-icon">
            <FaGoogle 
              style={{width: "65px", height: "65px", color: "white", background: "red", borderRadius: "100px", border: "10px solid red"}}
            />
          </Col>
          <Col className="social-icon">
            <FaTelegram 
              style={{width: "85px", height: "89px", color: "#0390d5", borderRadius: "100px",
                background: "#fff"}}
            />
          </Col>
          <Col className="social-icon">
            <FaVk
              style={{width: "65px", height: "65px", color: "white", background: "#2787f5",
                borderRadius: "100px", border: "10px solid #2787f5"}}
            />
          </Col>
          <Col className="social-icon">
            <FaGithub
              style={{width: "50px", height: "50px", color: "white", border: "18px solid black",
                borderRadius: "500px", background: "black"}}
            />
          </Col>
        </Container>
        <Col style={{position: "absolute", top: "150px", marginLeft: "30px"}}>
          <MessageImg />
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;
