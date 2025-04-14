import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const downloadCV = () => {
    // Create a virtual link and click it to trigger download
    // In production, you would link to an actual file
    const link = document.createElement('a');
    link.href = '/assets/pedro-teixeira-cv.pdf';
    link.download = 'Pedro-Teixeira-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const developer = {
    name: "Pedro Teixeira",
    title: "Full-Stack Developer",
    location: "São Paulo, Brazil",
  };

  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1><span>&lt;</span>About Me<span>/&gt;</span></h1>
            <p className="hero-subtitle">Full-Stack Developer | Creative Problem Solver | Tech Enthusiast</p>
          </div>
        </div>
        <div className="terminal-decoration">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="terminal-title">about.ts</div>
          </div>
          <div className="terminal-body">
            <div className="line"><span className="line-number">01</span><span className="code-comment">// Developer profile</span></div>
            <div className="line">
              <span className="line-number">02</span>
              <span className="code-keyword">const</span>&nbsp;
              <span className="code-variable">developer</span> =&nbsp;{'{'}
            </div>
            <div className="line">
            <span className="line-number">03</span>
            <span className="code-property">name</span>: <span className="code-string">{developer.name}</span>,
            </div>
            <div className="line"><span className="line-number">04</span>  <span className="code-property">title</span>: <span className="code-string">"Full-Stack Developer"</span>,</div>
            <div className="line"><span className="line-number">05</span>  <span className="code-property">location</span>: <span className="code-string">"São Paulo, Brazil"</span>,</div>
            <div className="line"><span className="line-number">06</span>  <span className="code-property">skills</span>: [<span className="code-string">"JavaScript"</span>, <span className="code-string">"React"</span>, <span className="code-string">"Node.js"</span>, <span className="code-string">"Python"</span>, <span className="code-string">"...</span>]</div>
            <div className="line"><span className="line-number">07</span>{'};'}</div>
          </div>
        </div>
      </section>

      <section className="about-main">
        <div className="container">
          <div className="about-content">
            <div className="profile-image">
              <div className="image-container">
                {/* Replace with your actual image */}
                <div className="placeholder-image">
                  {/* This is a placeholder - replace with <img src="your-photo.jpg" alt="Pedro Teixeira" /> */}
                  <div className="image-placeholder-text">PT</div>
                </div>
                <div className="image-decoration"></div>
              </div>
              <div className="profile-actions">
                <button className="cv-button" onClick={downloadCV}>
                  <i className="fa-solid fa-download"></i> Download CV
                </button>
                <Link to="/contact" className="contact-link">
                  <i className="fa-solid fa-paper-plane"></i> Contact Me
                </Link>
              </div>
            </div>

            <div className="about-bio">
              <div className="section-title">
                <span className="tag-marker">&lt;</span>
                <h2>My Story</h2>
                <span className="tag-marker">/&gt;</span>
              </div>

              <p>Hello! I'm Pedro, a passionate full-stack developer with over 8 years of experience creating web and mobile applications that solve real-world problems. My journey in technology began when I built my first website at 15, and I've been coding ever since.</p>

              <p>After earning my Computer Science degree from the University of São Paulo, I worked with several tech companies and startups, developing my skills across the entire development stack. I specialize in creating robust, scalable applications using modern technologies like React, Node.js, and cloud services.</p>

              <p>What sets me apart is my commitment to writing clean, maintainable code and my ability to translate complex technical concepts into simple solutions. I believe in continuous learning and regularly explore new technologies to stay at the forefront of web development.</p>

              <p>When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or mentoring aspiring developers. I'm also an avid hiker and photography enthusiast, finding inspiration in nature for my creative problem-solving approach.</p>

              <div className="section-title">
                <span className="tag-marker">&lt;</span>
                <h2>Skills & Expertise</h2>
                <span className="tag-marker">/&gt;</span>
              </div>

              <div className="skills-container">
                <div className="skill-category">
                  <h3>Frontend</h3>
                  <ul className="skill-list">
                    <li>React</li>
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>HTML5/CSS3</li>
                    <li>Responsive Design</li>
                    <li>Redux</li>
                    <li>Next.js</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h3>Backend</h3>
                  <ul className="skill-list">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>RESTful APIs</li>
                    <li>GraphQL</li>
                    <li>SQL/NoSQL Databases</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h3>Other</h3>
                  <ul className="skill-list">
                    <li>Git/GitHub</li>
                    <li>AWS/Azure</li>
                    <li>Docker</li>
                    <li>CI/CD</li>
                    <li>Testing (Jest, Cypress)</li>
                    <li>UI/UX Design</li>
                    <li>Agile Methodologies</li>
                  </ul>
                </div>
              </div>

              <div className="section-title">
                <span className="tag-marker">&lt;</span>
                <h2>Education & Certifications</h2>
                <span className="tag-marker">/&gt;</span>
              </div>

              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>BSc in Computer Science</h3>
                    <p className="timeline-place">University of São Paulo</p>
                    <p className="timeline-date">2013 - 2017</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>AWS Certified Solutions Architect</h3>
                    <p className="timeline-place">Amazon Web Services</p>
                    <p className="timeline-date">2020</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>Google Cloud Professional Developer</h3>
                    <p className="timeline-place">Google Cloud</p>
                    <p className="timeline-date">2022</p>
                  </div>
                </div>
              </div>

              <div className="cta-container">
                <Link to="/projects" className="cta-button">
                  <span>View My Projects</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link to="/services" className="cta-button secondary">
                  <span>See My Services</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
