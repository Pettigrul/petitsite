import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import './Services.css';

const Services = () => {
  useEffect(() => {
    // Scroll to specific service section if URL has a hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Hire <span className="highlight">Me</span></h1>
            <p className="hero-tagline">Expert development services that transform ideas into digital reality</p>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </section>

      <section className="services-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <div className="section-title">
                <span className="tag-marker">&lt;</span>
                <h2>Services Overview</h2>
                <span className="tag-marker">/&gt;</span>
              </div>
              <p>I offer comprehensive development services to help businesses and individuals build powerful digital experiences. With expertise across the full technology stack, I deliver solutions that are not only technically robust but also beautifully designed and user-friendly.</p>
              <p>Whether you need a complete web application, a mobile app, a backend system, or just technical consultation, I provide tailored services to meet your specific needs. My approach focuses on understanding your business objectives first, then implementing the right technology solution to achieve them.</p>
            </div>
            <div className="service-stats">
              <div className="stat-item">
                <div className="stat-number">8+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="section-header">
            <div className="section-title centered">
              <span className="tag-marker">&lt;</span>
              <h2>My Services</h2>
              <span className="tag-marker">/&gt;</span>
            </div>
            <p className="section-description">Comprehensive solutions for your digital needs</p>
          </div>

          <div className="service-cards">
            <div id="web-development" className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3>Web Development</h3>
              <p>Custom websites and web applications built with modern technologies and best practices. From responsive frontend interfaces to robust backend systems.</p>
              <ul className="service-features">
                <li>Custom Website Development</li>
                <li>Web Application Development</li>
                <li>E-commerce Solutions</li>
                <li>CMS Implementation</li>
                <li>Performance Optimization</li>
              </ul>
              <div className="technologies">
                <span>React</span>
                <span>Next.js</span>
                <span>Node.js</span>
                <span>WordPress</span>
              </div>
              <Link to="/contact" className="service-link">Request Service</Link>
            </div>

            <div id="mobile-apps" className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-mobile-screen"></i>
              </div>
              <h3>Mobile Apps</h3>
              <p>Native and cross-platform mobile applications for iOS and Android. Focus on performance, user experience, and platform-specific design guidelines.</p>
              <ul className="service-features">
                <li>iOS Development</li>
                <li>Android Development</li>
                <li>Cross-platform Solutions</li>
                <li>App Store Optimization</li>
                <li>App Maintenance & Updates</li>
              </ul>
              <div className="technologies">
                <span>React Native</span>
                <span>Flutter</span>
                <span>Swift</span>
                <span>Kotlin</span>
              </div>
              <Link to="/contact" className="service-link">Request Service</Link>
            </div>

            <div id="backend" className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-server"></i>
              </div>
              <h3>Backend Development</h3>
              <p>Scalable and secure server-side applications, APIs, databases, and cloud infrastructure to power your digital products.</p>
              <ul className="service-features">
                <li>API Development</li>
                <li>Database Design & Optimization</li>
                <li>Authentication Systems</li>
                <li>Cloud Infrastructure</li>
                <li>Microservices Architecture</li>
              </ul>
              <div className="technologies">
                <span>Node.js</span>
                <span>Python</span>
                <span>MongoDB</span>
                <span>AWS</span>
              </div>
              <Link to="/contact" className="service-link">Request Service</Link>
            </div>

            <div id="ui-design" className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-palette"></i>
              </div>
              <h3>UI/UX Design</h3>
              <p>User-centric design that combines aesthetics with functionality. Crafting intuitive interfaces that engage users and achieve business goals.</p>
              <ul className="service-features">
                <li>UI Design</li>
                <li>UX Research & Testing</li>
                <li>Wireframing & Prototyping</li>
                <li>Design Systems</li>
                <li>Responsive & Adaptive Design</li>
              </ul>
              <div className="technologies">
                <span>Figma</span>
                <span>Adobe XD</span>
                <span>Sketch</span>
                <span>Prototyping</span>
              </div>
              <Link to="/contact" className="service-link">Request Service</Link>
            </div>

            <div id="consulting" className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3>Technical Consulting</h3>
              <p>Expert advice on technology strategy, architecture, and implementation. Helping you make informed decisions for your digital initiatives.</p>
              <ul className="service-features">
                <li>Technology Assessment</li>
                <li>Architecture Planning</li>
                <li>Code Review & Optimization</li>
                <li>Security Audits</li>
                <li>Scaling Strategies</li>
              </ul>
              <div className="technologies">
                <span>System Design</span>
                <span>DevOps</span>
                <span>Security</span>
                <span>Performance</span>
              </div>
              <Link to="/contact" className="service-link">Request Service</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow-section">
        <div className="container">
          <div className="section-header">
            <div className="section-title centered">
              <span className="tag-marker">&lt;</span>
              <h2>My Workflow</h2>
              <span className="tag-marker">/&gt;</span>
            </div>
            <p className="section-description">A structured approach to delivering exceptional results</p>
          </div>

          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">01</div>
              <h3>Discovery</h3>
              <p>Understanding your business, goals, and requirements through in-depth consultation.</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">02</div>
              <h3>Planning</h3>
              <p>Creating a detailed project plan, architecture, and technical specifications.</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">03</div>
              <h3>Design</h3>
              <p>Developing wireframes, prototypes, and visual designs for approval.</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">04</div>
              <h3>Development</h3>
              <p>Building the solution with regular updates and milestone reviews.</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">05</div>
              <h3>Testing</h3>
              <p>Comprehensive testing to ensure quality, performance, and security.</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">06</div>
              <h3>Deployment</h3>
              <p>Launching the solution with careful monitoring and immediate support.</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">07</div>
              <h3>Maintenance</h3>
              <p>Ongoing support, updates, and improvements to ensure continued success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-title centered">
              <span className="tag-marker">&lt;</span>
              <h2>Client Testimonials</h2>
              <span className="tag-marker">/&gt;</span>
            </div>
            <p className="section-description">What my clients have to say about working with me</p>
          </div>

          <div className="testimonials">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Pedro consistently delivered outstanding work, exceeding our expectations at every milestone. His technical knowledge, attention to detail, and commitment to quality made our project a success."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Carlos Rodriguez</h4>
                  <p>CEO, TechVision Inc.</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Working with Pedro was a game-changer for our startup. He not only built an incredible application but also provided valuable insights that helped shape our product strategy."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Maria Santos</h4>
                  <p>Founder, InnovateLab</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Pedro's technical expertise is matched only by his professionalism and communication skills. He took the time to understand our unique challenges and delivered a solution that perfectly addressed our needs."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Alex Chen</h4>
                  <p>CTO, DataFlow Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <div className="section-title centered">
              <span className="tag-marker">&lt;</span>
              <h2>Pricing Models</h2>
              <span className="tag-marker">/&gt;</span>
            </div>
            <p className="section-description">Flexible options to suit your project needs</p>
          </div>

          <div className="pricing-models">
            <div className="pricing-model">
              <div className="pricing-header">
                <h3>Fixed Project</h3>
                <p className="pricing-description">Predictable cost for well-defined projects with clear requirements</p>
              </div>
              <ul className="pricing-features">
                <li>Agreed scope and deliverables</li>
                <li>Predetermined timeline</li>
                <li>Fixed cost with payment milestones</li>
                <li>Regular progress updates</li>
              </ul>
              <div className="pricing-footer">
                <p>Best for: Complete projects with clear specifications</p>
              </div>
            </div>

            <div className="pricing-model featured">
              <div className="pricing-tag">Popular</div>
              <div className="pricing-header">
                <h3>Hourly Rate</h3>
                <p className="pricing-description">Flexible engagement with transparent billing based on hours worked</p>
              </div>
              <ul className="pricing-features">
                <li>Pay only for actual work done</li>
                <li>Detailed time tracking</li>
                <li>Regular billing cycles</li>
                <li>Adapt scope as needed</li>
              </ul>
              <div className="pricing-footer">
                <p>Best for: Evolving projects and ongoing collaboration</p>
              </div>
            </div>

            <div className="pricing-model">
              <div className="pricing-header">
                <h3>Retainer</h3>
                <p className="pricing-description">Ongoing support and development with a reserved time allocation</p>
              </div>
              <ul className="pricing-features">
                <li>Guaranteed availability</li>
                <li>Priority response</li>
                <li>Monthly commitment</li>
                <li>Regular maintenance and updates</li>
              </ul>
              <div className="pricing-footer">
                <p>Best for: Long-term partnerships and maintenance</p>
              </div>
            </div>
          </div>

          <div className="pricing-cta">
            <p>Every project is unique. Contact me for a customized quote based on your specific requirements.</p>
            <Link to="/contact" className="pricing-button">Request Quote</Link>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <div className="section-title centered">
              <span className="tag-marker">&lt;</span>
              <h2>Let's Work Together</h2>
              <span className="tag-marker">/&gt;</span>
            </div>
            <p className="section-description">Have a project in mind? Let's discuss how I can help you bring it to life.</p>
          </div>

          <div className="contact-form-wrapper">
            <ContactForm
              type="project"
              title="Start Your Project"
              subtitle="Tell me about your project and I'll get back to you within 24 hours"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
