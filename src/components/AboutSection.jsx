import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const AboutSection = () => {
  return (
    <Container className="about-section-wrapper" id="about">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <div className="about-img-wrapper text-center">
            <img
              src="images/about.png"
              alt="Sobre mí"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "300px", border: "6px solid #fff" }}
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <h2 className="mb-3" style={{ fontFamily: "Forum", fontWeight: 700 }}>
            Sobre mi trabajo
          </h2>
          <blockquote
            style={{
              fontStyle: "italic",
              color: "#6e6e6e",
              borderLeft: "4px solid #161412",
              paddingLeft: "1em",
              marginBottom: "1.5em",
              fontFamily: "Forum",
            }}
          >
            “El arte es morirse de frío.”
          </blockquote>
          <p style={{ lineHeight: 2, fontSize: "1.1em" }}>
            Nam non volutpat tellus. Duis eget lorem pretium, egestas metus at,
            ullamcorper urna. In id lacus lobortis, condimentum enim ac,
            sollicitudin velit. Morbi ut ullamcorper nisi, sed suscipit nibh.
            Aenean nec posuere metus. Praesent nec ante ut ligula aliquet
            venenatis. Morbi aliquam luctus pulvinar. Mauris dictum tellus mi,
            et condimentum lorem bibendum sit amet. In a lobortis lorem, ac
            dignissim arcu. Nullam vehicula vulputate dui. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aenean vehicula, elit vel finibus
            efficitur, felis lorem fermentum erat, id sagittis sem libero et
            enim.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
