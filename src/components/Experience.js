import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer (Mini Projects)',
      company: 'St Joseph College, Trichy',
      duration: '2024 - 2026',
      description: 'Developed multiple full-stack web applications using React, Node.js, and MongoDB. Gained hands-on experience in building responsive and user-friendly web applications.'
    },
    {
      id: 2,
      title: 'BCA Student - 3rd Year',
      company: 'St Joseph College, Trichy',
      duration: '2024 - Present',
      description: 'Pursuing Bachelor of Computer Applications with focus on web development, database design, and software development. Completed various projects demonstrating practical knowledge.'
    },
    {
      id: 3,
      title: 'Web Development Projects',
      company: 'Personal',
      duration: '2023 - 2026',
      description: 'Created multiple web applications including Todo app, Weather dashboard, Web site for our Department and Task management system. Implemented responsive design and modern animations.'
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-marker"></div>
              
              <div className="experience-content">
                <div className="exp-header">
                  <h3 className="exp-title">{exp.title}</h3>
                  <span className="exp-duration">{exp.duration}</span>
                </div>
                
                <p className="exp-company">{exp.company}</p>
                <p className="exp-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
