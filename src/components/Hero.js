import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-profile-section">
          <div className="hero-image-wrapper">
            <img 
              src="/images/IMG_20260220_121554.jpg.jpeg" 
              alt="Sriram S Profile" 
              className="hero-profile-image"
            />
          </div>
        </div>

        <h1 className="hero-title">Hi, I'm Sriram S 👋</h1>
        <p className="hero-subtitle">Full Stack Web Developer</p>
        
        <p className="hero-description">
          Crafting beautiful, responsive, and user-friendly web applications with React, Node.js & modern technologies
        </p>

        <p className="hero-tagline">
          BCA Student at St Joseph College, Trichy | Passionate about building exceptional digital experiences
        </p>

        <div className="hero-highlights">
          <div className="highlight-item">
            <h4>Frontend</h4>
            <p>React, CSS, JavaScript</p>
          </div>
          <div className="highlight-item">
            <h4>Backend</h4>
            <p>Node.js, Express, Databases</p>
          </div>
          <div className="highlight-item">
            <h4>Currently</h4>
            <p>3rd Year BCA Student</p>
          </div>
        </div>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Let's Talk</a>
          <a href="#about" className="btn btn-tertiary">Learn More</a>
        </div>

        <div className="floating-elements">
          <div className="float-1"></div>
          <div className="float-2"></div>
          <div className="float-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
