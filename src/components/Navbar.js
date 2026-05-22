import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ isLoggedIn = false, onLogout = null, onOpenLogin = null }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background change on scroll
      setScrolled(window.scrollY > 50);

      // Detect which section is in view
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If section is in viewport (between top and middle of screen)
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link, e) => {
    e.preventDefault();
    setActiveLink(link);
    setMenuOpen(false);
    
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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
              onClick={(e) => handleLinkClick('home', e)}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#about" 
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick('about', e)}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#projects" 
              className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick('projects', e)}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#skills" 
              className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick('skills', e)}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#contact" 
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick('contact', e)}
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
