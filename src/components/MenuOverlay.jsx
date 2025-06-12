import React from "react";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <nav className={`menu-container ${navbarOpen ? "expanded" : ""}`}>
      <ul className="menu-list">
        <li className="list">
          <a href="/" className="nav-link" onClick={() => setNavbarOpen(false)}>
            Home{" "}
          </a>
        </li>
        <li>
          <a
            href="/#about"
            className="nav-link"
            onClick={() => setNavbarOpen(false)}
          >
            About{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuOverlay;
