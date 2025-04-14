import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  // Project categories for filtering
  const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Backend'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample project data (in a real app, this might come from an API or CMS)
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A complete e-commerce solution with product management, payment processing, and customer accounts.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/assets/projects/ecommerce.jpg", // This would be a real image path in production
      featured: true,
      link: "#"
    },
    {
      id: 2,
      title: "Health & Fitness App",
      category: "Mobile Apps",
      description: "Mobile application for tracking workouts, nutrition, and personal health metrics with custom analytics.",
      technologies: ["React Native", "Firebase", "Redux", "Health API"],
      image: "/assets/projects/fitness-app.jpg",
      featured: false,
      link: "#"
    },
    {
      id: 3,
      title: "Corporate Dashboard",
      category: "UI/UX Design",
      description: "Data visualization dashboard designed for enterprise use, featuring real-time analytics and custom reporting.",
      technologies: ["Figma", "Adobe XD", "D3.js", "Sketch"],
      image: "/assets/projects/dashboard.jpg",
      featured: true,
      link: "#"
    },
    {
      id: 4,
      title: "Content Management System",
      category: "Backend",
      description: "Custom CMS solution built for a media company to manage digital assets and editorial workflow.",
      technologies: ["Python", "Django", "PostgreSQL", "AWS"],
      image: "/assets/projects/cms.jpg",
      featured: false,
      link: "#"
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "Web Development",
      description: "Property listing and management platform with virtual tours and interactive map integration.",
      technologies: ["Next.js", "GraphQL", "MongoDB", "Google Maps API"],
      image: "/assets/projects/real-estate.jpg",
      featured: true,
      link: "#"
    },
    {
      id: 6,
      title: "Inventory Management System",
      category: "Backend",
      description: "Backend infrastructure for real-time inventory tracking, with barcode scanning and supplier management.",
      technologies: ["Node.js", "Express", "MySQL", "Redis"],
      image: "/assets/projects/inventory.jpg",
      featured: false,
      link: "#"
    },
    {
      id: 7,
      title: "Food Delivery App",
      category: "Mobile Apps",
      description: "Mobile application connecting users with local restaurants, featuring real-time order tracking and ratings.",
      technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
      image: "/assets/projects/food-app.jpg",
      featured: false,
      link: "#"
    },
    {
      id: 8,
      title: "Financial Dashboard",
      category: "UI/UX Design",
      description: "User-centric interface design for a personal finance management application with data visualization.",
      technologies: ["Figma", "Illustrator", "After Effects", "Principle"],
      image: "/assets/projects/finance.jpg",
      featured: false,
      link: "#"
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  // Separate featured projects for hero section
  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <div className="hero-content">
            <h1>My <span className="highlight">Projects</span></h1>
            <p className="hero-tagline">Showcasing my work and creative solutions</p>
          </div>

          <div className="featured-projects">
            {featuredProjects.map(project => (
              <div className="featured-project" key={project.id}>
                <div className="featured-image">
                  {/* In production, use actual image: <img src={project.image} alt={project.title} /> */}
                  <div className="placeholder-image">
                    <span>{project.title.slice(0, 2)}</span>
                  </div>
                </div>
                <div className="featured-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="featured-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                  <Link to={project.link} className="view-project">View Project</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="container">
          <div className="filter-categories">
            {categories.map(category => (
              <button
                key={category}
                className={activeCategory === category ? 'active' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  {/* In production, use actual image: <img src={project.image} alt={project.title} /> */}
                  <div className="placeholder-image">
                    <span>{project.title.slice(0, 2)}</span>
                  </div>
                  <div className="project-category">{project.category}</div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                  <Link to={project.link} className="project-link">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <div className="section-title centered">
              <span className="tag-marker">&lt;</span>
              <h2>My Project Process</h2>
              <span className="tag-marker">/&gt;</span>
            </div>
            <p className="section-description">How I approach each project to ensure success</p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Discovery & Research</h3>
                <p>Every project begins with thorough research to understand the problem, audience, and objectives. This foundation ensures solutions are relevant and effective.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Planning & Architecture</h3>
                <p>Creating the project blueprint - defining scope, selecting technologies, establishing timelines, and designing the technical architecture.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Design & Prototyping</h3>
                <p>Developing wireframes and interactive prototypes, establishing visual design, and ensuring an intuitive user experience that meets all requirements.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Development & Testing</h3>
                <p>Bringing designs to life with clean, efficient code while maintaining regular communication and feedback cycles. Comprehensive testing ensures quality.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h3>Deployment & Maintenance</h3>
                <p>Careful launch with ongoing support, ensuring the solution remains effective and updated to evolving needs and technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Have a project in mind?</h2>
            <p>Let's discuss how I can help you turn your idea into reality. From concept to launch, I'm ready to collaborate on your next digital endeavor.</p>
            <Link to="/contact" className="cta-button">
              <span>Start a Project</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
