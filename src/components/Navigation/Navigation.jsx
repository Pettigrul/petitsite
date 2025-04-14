import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <div className="logo-symbol"></div>
          <NavLink to="/">Pedro Teixeira</NavLink>
        </div>

        <div className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            Hire Me
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            Blog
          </NavLink>
          <NavLink to="/contact" className="contact-button" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
