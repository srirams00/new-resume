import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Sriram S</h4>
            <p>Full Stack Developer | BCA Student</p>
          </div>
          
          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h5>Follow Me</h5>
            <ul>
              <li><a href="#contact">GitHub</a></li>
              <li><a href="#contact">LinkedIn</a></li>
              <li><a href="#contact">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sriram S</p>
          <p>Made with ❤️ using React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
