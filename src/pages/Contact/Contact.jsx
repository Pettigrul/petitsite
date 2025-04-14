import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Get in <span className="highlight">Touch</span></h1>
            <p className="hero-tagline">Let's discuss your project and bring your ideas to life</p>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-title">
                <span className="tag-marker">&lt;</span>
                <h2>Contact Information</h2>
                <span className="tag-marker">/&gt;</span>
              </div>

              <p className="contact-intro">I'm open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out to me through any of the following channels.</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="method-info">
                    <h3>Email</h3>
                    <p><a href="mailto:contato@pedroteixeira.tech">contato@pedroteixeira.tech</a></p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="method-info">
                    <h3>Location</h3>
                    <p>São Paulo, Brazil</p>
                    <p>Available for remote work worldwide</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div className="method-info">
                    <h3>Working Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>UTC-3 (Brazil Standard Time)</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <div className="section-title">
                  <span className="tag-marker">&lt;</span>
                  <h2>Connect</h2>
                  <span className="tag-marker">/&gt;</span>
                </div>

                <div className="social-grid">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fa-brands fa-github"></i>
                    <span>GitHub</span>
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fa-brands fa-linkedin-in"></i>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fa-brands fa-twitter"></i>
                    <span>Twitter</span>
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fa-brands fa-instagram"></i>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

              <div className="response-time">
                <i className="fa-solid fa-bolt"></i>
                <p>I typically respond to messages within 24 hours.</p>
              </div>
            </div>

            <div className="contact-form-container">
              <ContactForm
                title="Send a Message"
                subtitle="Have a question or want to work together? Drop me a message."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <div className="section-title centered">
              <span className="tag-marker">&lt;</span>
              <h2>Frequently Asked Questions</h2>
              <span className="tag-marker">/&gt;</span>
            </div>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is your typical process for working with a new client?</h3>
              <p>My process typically begins with an initial consultation to understand your needs and objectives. From there, I'll provide a proposal outlining scope, timeline, and cost. Once approved, we'll move into the design and development phases with regular check-ins for feedback.</p>
            </div>

            <div className="faq-item">
              <h3>How do you charge for your services?</h3>
              <p>I offer various pricing models including fixed project rates, hourly billing, and retainer agreements. The most appropriate option depends on your project's scope and requirements. I'm happy to discuss the best approach for your specific situation.</p>
            </div>

            <div className="faq-item">
              <h3>How long does it typically take to complete a project?</h3>
              <p>Project timelines vary based on complexity and scope. A simple website might take 2-3 weeks, while a complex web application could take several months. During our initial discussion, I'll provide a realistic timeline based on your specific requirements.</p>
            </div>

            <div className="faq-item">
              <h3>Do you offer ongoing maintenance and support?</h3>
              <p>Yes, I offer maintenance and support services to ensure your project continues to function smoothly after launch. This can be arranged on an as-needed basis or through a monthly retainer agreement.</p>
            </div>

            <div className="faq-item">
              <h3>Can you work with clients internationally?</h3>
              <p>Absolutely! I work with clients around the world. Modern communication tools make remote collaboration seamless, and I'm comfortable adjusting my schedule for different time zones when necessary.</p>
            </div>

            <div className="faq-item">
              <h3>What technologies do you specialize in?</h3>
              <p>My core expertise includes React, Node.js, JavaScript/TypeScript, Python, and various database technologies. However, I'm continuously learning and can adapt to different tech stacks based on project requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
