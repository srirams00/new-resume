import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [ 'Python', 'Java', 'C', 'C++']
    },
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      category: 'Backend & Frameworks',
      skills: ['Node.js', 'Flask']
    },
    {
      category: 'Tools & Deployment',
      skills: ['GitHub', 'VS Code', 'Git', 'Vercel', 'Netlify', 'Render']
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
