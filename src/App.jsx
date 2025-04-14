import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navigation from './components/Navigation/Navigation.jsx';
import Footer from './components/Footer/Footer.jsx';
import BusinessCard from './components/BusinessCard/BusinessCard.jsx';

// Pages
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Services from './pages/Services/Services.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Contact from './pages/Contact/Contact.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<BusinessCard />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
