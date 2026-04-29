import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Hello! I'm Sriram S, a passionate Full Stack Developer pursuing my 3rd year of BCA 
              at St Joseph College, Trichy.
            </p>
            
            <p className="about-desc">
              I'm passionate about creating beautiful, responsive, and user-friendly web applications. 
              With a strong foundation in both frontend and backend technologies, I enjoy turning ideas 
              into reality through code.
            </p>
            
            <p className="about-desc">
              During my college journey, I've worked on several mini projects that have helped me 
              develop my problem-solving skills and deepen my understanding of web development. 
              I'm excited to continue learning and growing as a developer.
            </p>

            <div className="about-info">
              <div className="info-item">
                <h4>Education</h4>
                <p>BCA (3rd Year) - St Joseph College, Trichy</p>
              </div>
              <div className="info-item">
                <h4>Specialization</h4>
                <p>Full Stack Web Development</p>
              </div>
              <div className="info-item">
                <h4>Focus Areas</h4>
                <p>React, Node.js, Database Design</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <img 
                src="/images/IMG_20260220_121554.jpg.jpeg" 
                alt="Sriram S Profile Photo"
                className="profile-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
