import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ isLoggedIn = false, onLogout = null, onOpenLogin = null }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Sriram S</span>
        </div>
        
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a 
              href="#home" 
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#about" 
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => handleLinkClick('about')}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#projects" 
              className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#skills" 
              className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
              onClick={() => handleLinkClick('skills')}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#contact" 
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </a>
          </li>
          <li className="nav-resume-item">
            <a 
              href="/resume/sri.pdf" 
              className="nav-link nav-resume"
              download="sri.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
