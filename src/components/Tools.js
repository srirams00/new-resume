import React from 'react';
import '../styles/Tools.css';

const Tools = () => {
  const toolCategories = [
    {
      category: 'Code Editors & IDEs',
      tools: ['VS Code', 'Git', 'GitHub']
    },
    {
      category: 'Version Control',
      tools: ['Git', 'GitHub', 'Git Bash']
    },
    {
      category: 'Deployment Platform',
      tools: ['Vercel', 'Netlify', 'Render']
    },
    {
      category: 'Development Tools',
      tools: ['NPM', 'Node.js', 'Postman', 'Chrome DevTools']
    }
  ];

  return (
    <section className="tools" id="tools">
      <div className="container">
        <h2 className="section-title">Tools & Technologies</h2>
        
        <div className="tools-grid">
          {toolCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="tool-category">
              <h3 className="tool-category-title">{category.category}</h3>
              
              <div className="tools-list">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="tool-item">
                    <span className="tool-icon">⚙️</span>
                    <span className="tool-name">{tool}</span>
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

export default Tools;
