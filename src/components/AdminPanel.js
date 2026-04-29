import React, { useState } from 'react';
import '../styles/AdminPanel.css';

const AdminPanel = ({ isOpen, onClose, onLogout, projects, resumes, onAddProject, onDeleteProject, onUpdateProject, onAddResume, onDeleteResume }) => {
  const [activeTab, setActiveTab] = useState('projects');
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    link: '',
    editId: null
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [resumeName, setResumeName] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (formData.editId) {
      onUpdateProject({
        id: formData.editId,
        title: formData.title,
        description: formData.description,
        technologies: formData.technologies.split(',').map(t => t.trim()),
        link: formData.link
      });
    } else {
      onAddProject({
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        technologies: formData.technologies.split(',').map(t => t.trim()),
        link: formData.link
      });
    }
    setFormData({ title: '', description: '', technologies: '', link: '', editId: null });
    setShowAddForm(false);
  };

  const handleEditProject = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(', '),
      link: project.link,
      editId: project.id
    });
    setShowAddForm(true);
  };

  // Handle resume file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if file is PDF or DOC
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (validTypes.includes(file.type)) {
        setResumeFile(file);
        setUploadStatus('');
      } else {
        setUploadStatus('❌ Only PDF and DOC files allowed');
        setResumeFile(null);
      }
    }
  };

  const handleAddResume = (e) => {
    e.preventDefault();
    
    if (!resumeFile || !resumeName.trim()) {
      setUploadStatus('❌ Please select a file and enter a name');
      return;
    }

    // Create a File Reader to convert file to data URL for storage
    const reader = new FileReader();
    reader.onload = (event) => {
      const resumeData = {
        id: Date.now(),
        name: resumeName,
        fileName: resumeFile.name,
        fileType: resumeFile.type,
        fileSize: resumeFile.size,
        fileData: event.target.result // Base64 encoded file
      };
      
      onAddResume(resumeData);
      setResumeFile(null);
      setResumeName('');
      setUploadStatus('✅ Resume uploaded successfully!');
      setTimeout(() => setUploadStatus(''), 3000);
    };
    
    reader.onerror = () => {
      setUploadStatus('❌ Error reading file');
    };
    
    reader.readAsDataURL(resumeFile);
  };

  const handleDeleteResume = (id) => {
    onDeleteResume(id);
  };

  const downloadResume = (resume) => {
    const link = document.createElement('a');
    link.href = resume.fileData;
    link.download = resume.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="admin-overlay">
      <div className="admin-modal">
        <div className="admin-header">
          <h2>Admin Panel</h2>
          <div className="admin-header-buttons">
            <button 
              className="admin-logout-btn" 
              onClick={onLogout}
              title="Logout"
            >
              🔒 Logout
            </button>
            <button className="admin-close-btn" onClick={onClose}>×</button>
          </div>
        </div>

        <div className="admin-tabs">
          <button 
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            📁 Projects
          </button>
          <button 
            className={`tab-btn ${activeTab === 'resumes' ? 'active' : ''}`}
            onClick={() => setActiveTab('resumes')}
          >
            📄 Resumes
          </button>
        </div>

        <div className="admin-content">
          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="tab-content">
              <button 
                className="add-btn"
                onClick={() => {
                  setShowAddForm(!showAddForm);
                  setFormData({ title: '', description: '', technologies: '', link: '', editId: null });
                }}
              >
                {showAddForm ? '✕ Cancel' : '+ Add Project'}
              </button>

              {showAddForm && (
                <form onSubmit={handleAddProject} className="project-form">
                  <input
                    type="text"
                    name="title"
                    placeholder="Project Title"
                    value={formData.title}
                    onChange={handleFormChange}
                    required
                  />
                  <textarea
                    name="description"
                    placeholder="Project Description"
                    value={formData.description}
                    onChange={handleFormChange}
                    required
                  />
                  <input
                    type="text"
                    name="technologies"
                    placeholder="Technologies (comma separated)"
                    value={formData.technologies}
                    onChange={handleFormChange}
                  />
                  <input
                    type="url"
                    name="link"
                    placeholder="Project Link/URL"
                    value={formData.link}
                    onChange={handleFormChange}
                  />
                  <button type="submit" className="submit-btn">
                    {formData.editId ? 'Update Project' : 'Add Project'}
                  </button>
                </form>
              )}

              <div className="projects-list">
                {projects.length === 0 ? (
                  <p style={{ textAlign: 'center', color: '#999' }}>No projects yet. Add one to get started!</p>
                ) : (
                  projects.map(project => (
                    <div key={project.id} className="admin-project-item">
                      <div className="project-info">
                        <h4>{project.title}</h4>
                        <p>{project.description.substring(0, 80)}...</p>
                      </div>
                      <div className="project-actions">
                        <button 
                          className="edit-btn"
                          onClick={() => handleEditProject(project)}
                          title="Edit"
                        >
                          ✏️
                        </button>
                        <button 
                          className="delete-btn"
                          onClick={() => onDeleteProject(project.id)}
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Resumes Tab */}
          {activeTab === 'resumes' && (
            <div className="tab-content">
              <form onSubmit={handleAddResume} className="resume-form">
                <div className="resume-input-group">
                  <input
                    type="text"
                    placeholder="Resume Name (e.g., 'My Resume 2024')"
                    value={resumeName}
                    onChange={(e) => setResumeName(e.target.value)}
                    className="resume-name-input"
                  />
                  <label className="file-input-label">
                    📁 Choose File (PDF/DOC)
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                  </label>
                  <button type="submit" className="submit-btn">⬆️ Upload</button>
                </div>
                {resumeFile && (
                  <div className="file-preview">
                    ✅ Selected: <strong>{resumeFile.name}</strong> ({(resumeFile.size / 1024).toFixed(2)} KB)
                  </div>
                )}
                {uploadStatus && (
                  <div className={`upload-status ${uploadStatus.includes('✅') ? 'success' : 'error'}`}>
                    {uploadStatus}
                  </div>
                )}
              </form>

              <div className="resumes-list" key={`resumes-${resumes.length}`}>
                {resumes && resumes.length === 0 ? (
                  <p style={{ textAlign: 'center', color: '#999' }}>No resumes uploaded yet. Upload one to get started!</p>
                ) : (
                  resumes && resumes.map(resume => (
                    <div key={`resume-${resume.id}`} className="resume-item">
                      <div className="resume-info">
                        <span className="resume-icon">📄</span>
                        <div className="resume-details">
                          <span className="resume-name">{resume.name}</span>
                          <span className="resume-file-name">{resume.fileName}</span>
                        </div>
                      </div>
                      <div className="resume-actions">
                        <button 
                          className="download-btn"
                          onClick={() => downloadResume(resume)}
                          title="Download"
                        >
                          ⬇️
                        </button>
                        <button 
                          className="delete-btn"
                          onClick={() => handleDeleteResume(resume.id)}
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
