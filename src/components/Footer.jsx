import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo2 from "../assets/logo2.png";
import Image from "../components/Image";
const Footer = () => {
  return (
    <section className='footer-part'>
      <Container>
        <Row>
          <Col lg={5}>
            <Image className='footerimg' src={logo2} />
          </Col>

          <Col lg={2}>
            <h2>company</h2>
            <p>How it works</p>
            <p>Pricing</p>
            <p>Demo</p>
          </Col>

          <Col lg={3}>
            <h2>RESOURCES</h2>
            <p>Blog post name goes here</p>
            <p>Blog post name goes here</p>
            <p>Something</p>
            <p>See all resources</p>
          </Col>

          <Col lg={2}>
            <h2>ABOUT</h2>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </Col>
        </Row>
        <p className='copyright'>Copyright © 2025 Tahsin Al Tabib</p>
      </Container>
    </section>
  );
};

export default Footer;
