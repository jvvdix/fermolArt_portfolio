import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const InformationSection = ({ images }) => {
  const sectionVariants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    hidden: { y: 100, opacity: 0 },
  };

  return (
    <Container className="information-section">
      <Row>
        <Col lg="6" className="fs-7 px-3 font-weight-bold">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView={"visible"}
          >
            <p>
              <span>
                Nam non volutpat tellus. Duis eget lorem pretium, egestas metus
                at, ullamcorper urna. In id lacus lobortis, condimentum enim ac,
                sollicitudin velit. Morbi ut ullamcorper nisi, sed suscipit
                nibh. Aenean nec posuere metus. Praesent nec ante ut ligula
                aliquet venenatis. Morbi aliquam luctus pulvinar. Mauris dictum
                tellus mi, et condimentum lorem bibendum sit amet.
              </span>
            </p>
          </motion.div>
        </Col>
        <Col lg="6" className="px-3">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView={"visible"}
          >
            <p>
              Nam non volutpat tellus. Duis eget lorem pretium, egestas metus
              at, ullamcorper urna. In id lacus lobortis, condimentum enim ac,
              sollicitudin velit. Morbi ut ullamcorper nisi, sed suscipit nibh.
              Aenean nec posuere metus. Praesent nec ante ut ligula aliquet
              venenatis. Morbi aliquam luctus pulvinar. Mauris dictum tellus mi,
              et condimentum lorem bibendum sit amet. In a lobortis lorem, ac
              dignissim arcu.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default InformationSection;
