import React, { useEffect, useState } from 'react';
import { Heart, Users, Compass, ChevronRight } from 'lucide-react';
import './landing.css';
import Particles from '../../components/public/Particles';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div 
          className="hero-parallax-bg"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        />
        <div className="hero-overlay" />
        
        <div className="hero-content">
          <img src="/hero-art.png" alt="Ayyappa Line Art" className="hero-art-bg" />
          <h1 className="hero-title serif-text"><span>Swamiye Saranam Ayyappa</span></h1>
          <p className="hero-subtitle">
            The Digital Home for Ayyappa Dharma Prachara Sabha.<br />Your Gateway to Devotion and Seva.
          </p>
          <div className="hero-actions">
            <Link to="/dashboard" className="public-btn">
              Become an Ayyappan <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section overlaying the parallax smoothly */}
      <div style={{ position: 'relative', background: 'var(--abap-bg-primary)', zIndex: 10, paddingTop: '40px' }}>
        {/* About Section */}
        <section className="section">
          <h2 className="section-title serif-text">The Path of Devotion</h2>
          <div className="grid-3">
            <div className="feature-card">
              <div className="feature-icon">
                <Heart size={32} />
              </div>
              <h3 className="feature-title serif-text">Annadanam Camps</h3>
              <p className="feature-desc">
                Providing massive free food distributions at Sabarimala, Pamba, Erumeli, Azhutha, Kumily, and Laha Estate during all temple festivals.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3 className="feature-title serif-text">Brotherhood & Service</h3>
              <p className="feature-desc">
                Organizing medical camps, supplying medicated water, offering financial assistance to the needy, and providing free uniforms to school children.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Compass size={32} />
              </div>
              <h3 className="feature-title serif-text">Ayyappa Traditions</h3>
              <p className="feature-desc">
                Guiding devotees on the 41 days Deeksha, Irumudikettu, and Sabari Yatra. Preserving and teaching the sacred rituals of Lord Ayyappa.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
