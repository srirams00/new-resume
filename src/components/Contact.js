import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    section: '',
    description: '',
    priority: 'normal'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('sTNv4omk4vL1gmyMZ');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.email || !formData.name || !formData.section || !formData.description) {
      setError('❌ Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_sf259qn',
        'template_uk70cld',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.section,
          message: `Priority: ${formData.priority.toUpperCase()}\n\n${formData.description}`,
          to_email: 'sriram8794134@gmail.com'
        }
      );

      // Show success message
      setSubmitted(true);
      setFormData({ email: '', name: '', section: '', description: '', priority: 'normal' });

      // Reset form and message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('Email send error:', err);
      setError('❌ Failed to send message. Please try again or contact me directly at sriram8794134@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's connect!</h3>
            <p>
              I'm always open to new opportunities, collaborations, and interesting projects. 
              Feel free to reach out to me through any of these channels.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <span className="method-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>sriram8794134@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <span className="method-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9952538080</p>
                </div>
              </div>
              
              <div className="contact-method">
                <span className="method-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Trichy, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/srirams00" className="social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/sriram-s-6b6512317/" className="social-link">LinkedIn</a>
              
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! I'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            {/* Main ID (Email) */}
            <div className="form-group">
              <label htmlFor="email">Main ID (Email) *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Section */}
            <div className="form-group">
              <label htmlFor="section">Section (Topic) *</label>
              <select
                id="section"
                name="section"
                value={formData.section}
                onChange={handleChange}
                required
              >
                <option value="">-- Select a Section --</option>
                <option value="Job Opportunity">Job Opportunity</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Project Inquiry">Project Inquiry</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Priority Level */}
            <div className="form-group">
              <label htmlFor="priority">Priority Level</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
              </select>
            </div>

            {/* Description */}
            <div className="form-group">
              Description 
              <textarea
                id="description"
                name="description"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell me more about your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? '⏳ Sending...' : '📧 Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
