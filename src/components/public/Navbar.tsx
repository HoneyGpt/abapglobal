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

  useEffect(() => {
    const initTranslate = () => {
      const gWindow = window as any;
      if (gWindow.google && gWindow.google.translate) {
        new gWindow.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,ta,te,ml',
          layout: gWindow.google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      }
    };

    const gWindow = window as any;
    gWindow.googleTranslateElementInit = initTranslate;

    // Clean up any existing Google Translate script to force a fresh load and callback trigger
    const oldScript = document.getElementById('google-translate-script');
    if (oldScript) {
      oldScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
  }, []);

  return (
    <nav className={`public-nav ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="public-nav-brand">
        <img src="/logo.png" alt="ABAP Logo" className="nav-logo" />
        <span>ABAP <span>Global</span></span>
      </Link>
      
      <div className="public-nav-links">
        <Link to="/" className="public-nav-link">Home</Link>
        <Link to="/yatra" className="public-nav-link">Yatra</Link>
        <Link to="/seva" className="public-nav-link">Seva</Link>
        <Link to="/annadanam" className="public-nav-link">Annadanam</Link>
        <Link to="/about" className="public-nav-link">About Us</Link>
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
