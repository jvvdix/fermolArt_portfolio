import React from "react";
import { Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export const Header = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <div className="d-flex header justify-content-between align-items-center">
      {!navbarOpen && (
        <button
          className="menu-btn"
          onClick={() => setNavbarOpen((prevNavbarOpen) => !prevNavbarOpen)}
        >
          <div
            className={`menu-icon-container ${navbarOpen ? "expanded" : ""}`}
          >
            <span className="icon-line"></span>
            <span className="icon-line"></span>
            <span className="icon-line"></span>
          </div>
        </button>
      )}
      <div className="logo"> Macarena's Web</div>
      <div className="contact-btn">
        <HashLink to="#contact">
          <Button variant="primary">Contacto</Button>
        </HashLink>
      </div>
    </div>
  );
};
