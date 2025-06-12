import logo from "./logo.svg";
import "./App.scss";
import HeroSection from "./components/HeroSection";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { useState } from "react";
import MenuOverlay from "./components/MenuOverlay";
import ImagesCollection from "./components/ImagesCollection";
import InformationSection from "./components/InformationSection";
import AboutSection from "./components/AboutSection";
import FooterMenu from "./components/FooterMenu";
import { Col, Row } from "react-bootstrap";
import ContactForm from "./components/ContactForm";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="App">
      <Container fluid>
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <HeroSection />
        <InformationSection />
        <ImagesCollection />
        <AboutSection />
        <Container className="footer-section">
          {/* <Row>
            <div className="contact-us-img">
              <img src="/contact-us.png" alt="Contact Us" />
            </div>
          </Row> */}
          <Row className="my-3">
            <Col xs={12} md={6}>
              <ContactForm />
            </Col>
            <Col xs={12} md={6}>
              <FooterMenu />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
