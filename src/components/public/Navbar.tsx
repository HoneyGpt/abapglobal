import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`public-nav ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="public-nav-brand">
        ABAP <span>Global</span>
      </Link>
      
      <div className="public-nav-links">
        <Link to="/yatra" className="public-nav-link">Yatra</Link>
        <Link to="/seva" className="public-nav-link">Seva</Link>
        <Link to="/annadanam" className="public-nav-link">Annadanam</Link>
      </div>

      <div className="flex gap-4 items-center">
        <div id="google_translate_element" className="translate-widget"></div>
        <Link to="/dashboard" className="public-btn">
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
