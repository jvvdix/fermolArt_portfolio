import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterMenu = () => {
  return (
    <Container className="footer">
      <Row>
        <Col>
          <h3> Company </h3>
          <ul>
            <li>
              <a href="/">Sobre mí</a>
            </li>
            <li>
              <a href="/">Galería</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </Col>
        <Col>
          <h3> Contacto </h3>
          <ul>
            <li>
              <a href="/">Email: **correo**</a>
            </li>
            <li>
              {" "}
              <a href="/">LinkedIn: **url del linkdin**</a>
            </li>
            <li>
              <a href="/">Instagram: **url insta*</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterMenu;
