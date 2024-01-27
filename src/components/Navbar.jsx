// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const location = useLocation();
  const isHomeActive = location.pathname === "/";
  const isDocumentationActive = location.pathname === "/documentation";

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="links">
        <Link className={isHomeActive ? "active" : ""} to="/">
          Home
        </Link>
        <Link
          className={isDocumentationActive ? "active" : ""}
          to="/documentation"
        >
          Documentation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
