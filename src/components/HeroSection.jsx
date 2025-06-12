import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Container className="hero-section-container">
      <Row className="h-100">
        {/* FIRST COLUMN */}
        <Col
          xs="12"
          md="8"
          className="d-flex flex-column justify-content-center text-start px-4"
        >
          <div className="mx-4">
            <h1>Art Portfolio</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vitae tellus consequat, efficitur odio vitae, vulputate nunc.
              Donec id ipsum enim. Sed hendrerit nisi nec est porttitor sodales.
              Quisque quis nunc nulla. Fusce placerat luctus tortor ut volutpat.
              Mauris scelerisque dui ipsum, nec molestie lacus vulputate ac.{" "}
            </p>
          </div>
          <div className="btns-wrapper px-4 d-flex align-items-center">
            <a href="/"> Read my blog</a>
            <Button variant="secondary">Learn More</Button>
          </div>
        </Col>
        {/* SECOND COLUMN */}
        <Col xs="12" md="4">
          <div className="img-wrapper"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
