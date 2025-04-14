import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="footer-logo-symbol"></div>
            <Link to="/">Pedro Teixeira</Link>
          </div>

          <div className="footer-social">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="mailto:contato@pedroteixeira.tech" className="social-icon">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Hire Me</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services#web-development">Web Development</Link></li>
              <li><Link to="/services#mobile-apps">Mobile Apps</Link></li>
              <li><Link to="/services#backend">Backend Services</Link></li>
              <li><Link to="/services#ui-design">UI/UX Design</Link></li>
              <li><Link to="/services#consulting">Consulting</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <address>
              <p><i className="fa-solid fa-envelope"></i> contato@pedroteixeira.tech</p>
              <p><i className="fa-solid fa-location-dot"></i> São Paulo, Brazil</p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} Pedro Teixeira. All rights reserved.
          </div>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="footer-decorations">
        <div className="footer-line"></div>
        <div className="footer-dots">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="dot"></div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
