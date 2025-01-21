import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-left">
          <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "isActive" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className={location.pathname === "/resume" ? "isActive" : ""}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>

        <div className="logo">
          <Link to="/">Farah's Portfolio</Link>
        </div>

        <div className="nav-right">
          <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
            <li>
              <Link
                to="/projects"
                className={location.pathname === "/projects" ? "isActive" : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className={location.pathname === "/experience" ? "isActive" : ""}
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>

        <div className="hamburger" onClick={handleToggle}>
          <div className={isMobile ? 'bar1 change' : 'bar1'}></div>
          <div className={isMobile ? 'bar2 change' : 'bar2'}></div>
          <div className={isMobile ? 'bar3 change' : 'bar3'}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
