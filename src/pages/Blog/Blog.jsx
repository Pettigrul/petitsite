import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  // Blog categories for filtering
  const categories = ['All', 'Web Development', 'Technology', 'Design', 'Tutorials', 'Career'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample blog post data (in a real app, this would come from an API or CMS)
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks: A Comprehensive Guide",
      excerpt: "Learn the fundamentals of React Hooks and how they can simplify your components while making code more reusable and easier to understand.",
      category: "Web Development",
      date: "April 10, 2025",
      readTime: "8 min read",
      image: "/assets/blog/react-hooks.jpg", // This would be a real image in production
      featured: true
    },
    {
      id: 2,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Explore the emerging technologies and methodologies shaping the future of web development landscape, from WebAssembly to AI-assisted coding.",
      category: "Technology",
      date: "March 28, 2025",
      readTime: "6 min read",
      image: "/assets/blog/web-trends.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Optimizing Database Performance for High-Traffic Applications",
      excerpt: "Practical techniques to improve database performance and scalability when dealing with millions of users and queries.",
      category: "Tutorials",
      date: "March 15, 2025",
      readTime: "10 min read",
      image: "/assets/blog/database.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Designing Intuitive User Interfaces: Principles and Best Practices",
      excerpt: "Explore key UI design principles that can help you create more intuitive, user-friendly interfaces for your digital products.",
      category: "Design",
      date: "February 28, 2025",
      readTime: "7 min read",
      image: "/assets/blog/ui-design.jpg",
      featured: false
    },
    {
      id: 5,
      title: "From Junior to Senior Developer: Navigating Your Career Path",
      excerpt: "Advice and strategies to help you progress from a junior developer position to a senior role, with insights from industry veterans.",
      category: "Career",
      date: "February 14, 2025",
      readTime: "9 min read",
      image: "/assets/blog/career-path.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Building Secure APIs: Authentication and Authorization Strategies",
      excerpt: "Learn how to implement robust security measures in your APIs to protect sensitive data and prevent unauthorized access.",
      category: "Web Development",
      date: "January 30, 2025",
      readTime: "11 min read",
      image: "/assets/blog/api-security.jpg",
      featured: false
    },
    {
      id: 7,
      title: "Mastering CSS Grid: Advanced Layout Techniques",
      excerpt: "Take your CSS Grid skills to the next level with advanced techniques for responsive, complex layouts that work across browsers.",
      category: "Tutorials",
      date: "January 15, 2025",
      readTime: "8 min read",
      image: "/assets/blog/css-grid.jpg",
      featured: false
    },
    {
      id: 8,
      title: "The Rise of Edge Computing and Its Impact on Web Performance",
      excerpt: "Understand how edge computing is transforming web applications by moving processing closer to users for better performance.",
      category: "Technology",
      date: "December 28, 2024",
      readTime: "7 min read",
      image: "/assets/blog/edge-computing.jpg",
      featured: false
    }
  ];

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  // Separate featured posts for the top section
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Tech <span className="highlight">Blog</span></h1>
            <p className="hero-tagline">Insights, tutorials and industry perspectives</p>
          </div>
        </div>
      </section>

      <section className="featured-posts-section">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <span className="tag-marker">&lt;</span>
              <h2>Featured Articles</h2>
              <span className="tag-marker">/&gt;</span>
            </div>
          </div>

          <div className="featured-posts">
            {featuredPosts.map(post => (
              <div className="featured-post" key={post.id}>
                <div className="featured-post-image">
                  {/* In production, use actual image: <img src={post.image} alt={post.title} /> */}
                  <div className="placeholder-image">
                    <span>{post.title.charAt(0)}</span>
                  </div>
                </div>
                <div className="featured-post-content">
                  <div className="post-metadata">
                    <span className="post-category">{post.category}</span>
                    <span className="post-date">{post.date}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read Article
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="all-posts-section">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <span className="tag-marker">&lt;</span>
              <h2>All Articles</h2>
              <span className="tag-marker">/&gt;</span>
            </div>

            <div className="blog-filter">
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
            </div>
          </div>

          <div className="blog-grid">
            {filteredPosts.map(post => (
              <div className="blog-card" key={post.id}>
                <div className="blog-card-image">
                  {/* In production, use actual image: <img src={post.image} alt={post.title} /> */}
                  <div className="placeholder-image">
                    <span>{post.title.charAt(0)}</span>
                  </div>
                  <div className="post-category-tag">{post.category}</div>
                </div>
                <div className="blog-card-content">
                  <div className="post-metadata">
                    <span className="post-date">{post.date}</span>
                    <span className="post-dot">•</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Continue Reading
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-posts-message">
              <p>No articles found in this category. Please try another category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Subscribe to my Newsletter</h2>
              <p>Get the latest articles, tutorials, and updates delivered directly to your inbox. No spam, just tech content!</p>
            </div>
            <div className="newsletter-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe</button>
              </form>
              <p className="form-note">* I respect your privacy and will never share your email with third parties.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
