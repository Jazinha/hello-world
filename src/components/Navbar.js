import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Portfolio'

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <button
        className={`navbar-toggler ${showNavbar ? '' : 'collapsed'}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={showNavbar ? 'true' : 'false'}
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${showNavbar ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className={`nav-item ${isActive('/about')}`}>
            <Link className="nav-link nav-link-padding" to="/about">
              About
            </Link>
          </li>
          <li className={`nav-item ${isActive('/projects-portfolio-link')}`}>
            <Link className="nav-link nav-link-padding" to="/projects-portfolio-link">
              Projects
            </Link>
          </li>
          <li className={`nav-item ${isActive('/portfolio')}`}>
            <Link className="nav-link nav-link-special" to="/portfolio">
              Jazmine Garcia
            </Link>
          </li>
          <li className={`nav-item ${isActive('/contact')}`}>
            <Link className="nav-link nav-link-padding" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/jazinha"
              className="nav-link nav-link-padding"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;






















