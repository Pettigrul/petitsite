import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ title, subtitle, type = 'general' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    services: [],
    budget: '',
    timeline: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          services: [...prev.services, value]
        };
      } else {
        return {
          ...prev,
          services: prev.services.filter(service => service !== value)
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      // Simulate form submission
      console.log('Form submitted:', formData);

      // In a real app, you'd send this data to an API or email service
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     recipient: 'contato@pedroteixeira.tech',
      //     formType: type
      //   })
      // });

      // Instead of actually sending, we'll just simulate success
      setTimeout(() => {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          services: [],
          budget: '',
          timeline: ''
        });
      }, 1000);

    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error('Form submission error:', err);
    }
  };

  if (submitted) {
    return (
      <div className="form-success">
        <div className="success-icon">✓</div>
        <h3>Message Sent Successfully!</h3>
        <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
        <button
          className="reset-button"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      {title && <h2 className="form-title">{title}</h2>}
      {subtitle && <p className="form-subtitle">{subtitle}</p>}

      {error && <div className="error-message">{error}</div>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        {type === 'project' && (
          <>
            <div className="form-group">
              <label>Services Needed *</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="services"
                    value="Web Development"
                    checked={formData.services.includes('Web Development')}
                    onChange={handleCheckboxChange}
                  />
                  Web Development
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="services"
                    value="Mobile App"
                    checked={formData.services.includes('Mobile App')}
                    onChange={handleCheckboxChange}
                  />
                  Mobile App
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="services"
                    value="UX/UI Design"
                    checked={formData.services.includes('UX/UI Design')}
                    onChange={handleCheckboxChange}
                  />
                  UX/UI Design
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="services"
                    value="Backend Development"
                    checked={formData.services.includes('Backend Development')}
                    onChange={handleCheckboxChange}
                  />
                  Backend Development
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="services"
                    value="Consulting"
                    checked={formData.services.includes('Consulting')}
                    onChange={handleCheckboxChange}
                  />
                  Consulting
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select a budget</option>
                  <option value="Less than $1,000">Less than $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>

              <div className="form-group half">
                <label htmlFor="timeline">Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select a timeline</option>
                  <option value="Less than 1 month">Less than 1 month</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                </select>
              </div>
            </div>
          </>
        )}

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
