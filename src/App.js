import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function App() {
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [projects, setProjects] = useState([]);
  const [resumes, setResumes] = useState([]);

  // Load projects and resumes from localStorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('projects');
    const savedResumes = localStorage.getItem('resumes');
    
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      // Default projects for first time
      const defaultProjects = [
        {
          id: 1,
          title: 'Creation of QR Code',
          description: 'Developed a dynamic QR Code Generator web application using React JS that allows users to instantly generate QR codes for any valid URL. The application takes a user-input URL and converts it into a scannable QR code in real time.',
          technologies: ['React', 'JavaScript', 'CSS'],
          link: 'https://subtle-kataifi-748794.netlify.app/'
        },
        {
          id: 2,
          title: 'Web Site for our Department',
          description: 'Developed a full-stack Department Website for our college using HTML, CSS, JavaScript for the frontend, Flask for the backend, and SQLite as the database. The website provides complete information about the department and allows dynamic content management through a connected database.',
          technologies: ['HTML', 'CSS', 'FLASK','SQLite'],
          link: 'https://silvest.pythonanywhere.com/'
        },
        {
          id: 3,
          title: 'Dice game ',
          description: 'Developed an interactive two-player Dice Game using HTML, CSS, and JavaScript. The application simulates rolling dice using image assets and dynamically determines the winner based on randomly generated values.',
          technologies: ['HTML', 'CSS', 'Javascript'],
          link: 'https://shimmering-otter-148446.netlify.app/'
        },
        {
          id: 5,
          title: 'Static Perfume Web Site',
          description: 'Full-stack application for managing projects and tasks with user authentication.',
          technologies: ['React', 'Express', 'MongoDB', 'JWT'],
          link: '#projects'
        },
        {
          id: 6,
          title: 'Blog Platform',
          description: 'A blog platform with markdown support, comments, and user authentication.',
          technologies: ['React', 'Node.js', 'PostgreSQL'],
          link: '#projects'
        }
      ];
      setProjects(defaultProjects);
      localStorage.setItem('projects', JSON.stringify(defaultProjects));
    }
    
    if (savedResumes) {
      setResumes(JSON.parse(savedResumes));
    }
  }, []);

  // Check if user is accessing /admin path
  useEffect(() => {
    if (window.location.pathname === '/admin') {
      setIsLoggedIn(true);
      setIsAdminPanelOpen(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdminPanelOpen(false);
    window.location.href = '/';
  };

  const handleAddProject = (newProject) => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  const handleDeleteProject = (id) => {
    const updatedProjects = projects.filter(p => p.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  const handleUpdateProject = (updatedProject) => {
    const updatedProjects = projects.map(p => p.id === updatedProject.id ? updatedProject : p);
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  const handleAddResume = (newResume) => {
    const updatedResumes = [...resumes, newResume];
    setResumes(updatedResumes);
    localStorage.setItem('resumes', JSON.stringify(updatedResumes));
  };

  const handleDeleteResume = (id) => {
    const updatedResumes = resumes.filter(r => r.id !== id);
    setResumes(updatedResumes);
    localStorage.setItem('resumes', JSON.stringify(updatedResumes));
  };

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Hero />
      <About />
      <Projects projects={projects} isLoggedIn={isLoggedIn} />
      <Skills />
      <Experience />
      <Tools />
      <Contact />
      <Footer />

      {/* Admin Panel Modal */}
      <AdminPanel 
        isOpen={isAdminPanelOpen}
        onClose={() => setIsAdminPanelOpen(false)}
        onLogout={handleLogout}
        projects={projects}
        resumes={resumes}
        onAddProject={handleAddProject}
        onDeleteProject={handleDeleteProject}
        onUpdateProject={handleUpdateProject}
        onAddResume={handleAddResume}
        onDeleteResume={handleDeleteResume}
      />
    </div>
  );
}

export default App;
