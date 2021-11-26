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
    <Container fluid className="contactme-icons" style={{position:"absolute",zIndex:2,height:"100%"}}>
      <Row style={{position:"relative", height:"100%", placeItems:"center",textAlign:"center"}}>
        <Col className="aboutme justify-content-center order-1" xxl={6} xl={6} lg={6} md={6} sm={12}>
          <Row className="contact-title"> 
            Contact Me
          </Row>
          <Row className="contact-description">
            I am available on almost every social media. You can message me, I will reply within 24 hours.
          </Row>
          <Row style={{display: "flex", marginTop: "30px", width: "450px"}}>
            <Col className="social-icon">
              <a href={"mailto:dinar.kulchurin@gmail.com"}>
                    <FaGoogle 
                  style={{width: "65px", height: "65px", color: "white", background: "red", borderRadius: "100px", border: "10px solid red"}}
                />
              </a>
            </Col>
            <Col className="social-icon">
              <a href={"https://t.me/lero_ro"} target="_blank">
                <FaTelegram 
                  style={{width: "62px", height: "62px", color: "#0390d5", borderRadius: "100px",
                    background: "#fff"}}
                />
              </a>
            </Col>
            <Col className="social-icon">
              <a href={"https://vk.com/id152246572"} target="_blank">
                <FaVk
                  style={{width: "61px", height: "61px", color: "white", background: "#2787f5",
                    borderRadius: "100px", border: "10px solid #2787f5"}}
                />
              </a>
            </Col>
            <Col className="social-icon">
              <a href={"https://github.com/arkulnid"} target="_blank">
                <FaGithub
                  style={{width: "60px", height: "60px", color: "white", border: "18px solid black",
                    borderRadius: "500px", background: "black"}}
                />
              </a>
            </Col>
          </Row>
          <Row className="contact-btn justify-content-center">
            <Btn title={"View Resume"} width={"170px"} href={"./#"} />
          </Row>
        </Col>
        <Col className="message-svg-container" xxl={6} xl={6} lg={6} md={6} sm={12}>
          <MessageImg className="message-svg" />
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;
