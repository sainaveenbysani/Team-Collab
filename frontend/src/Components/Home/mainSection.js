import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./mainSection.css";
import Logo from "./AppLogo.png";

const mainSection = () => {
  
  const dim = {
    width: 500,
    height: 500,
  };
  return (
    <section className="main-sec" id="home">
      <Container className="main-cont">
        <Row className="main-row">
          <Col className="text-col">
            <h3>AGENDA</h3>
            <h1 className="sub-head">PLAN</h1>
            <h1 className="sub-head">TRACK</h1>
            <h1 className="sub-head">COLLABORATE</h1>
            <h1 className="sub-head">COMPLETE</h1>
            <h1 className="sub-head">SUCCEED</h1>
            {/* <h1 className="sub-head">TRACK</h1>
            <h4 className="sub-text">Checkout the most effective exercises</h4>
            <Button size="lg">Explore exercises</Button>
            <h1 className="big-text">Exercise</h1> */}
          </Col>
          <Col className="img-col">
            <Image alt="gymboy" src={Logo} style={dim} className="col-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default mainSection;
