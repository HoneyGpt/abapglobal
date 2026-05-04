import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="public-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h3 className="mb-4" style={{ color: 'var(--abap-gold)' }}>ABAP Global</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', fontSize: '0.9rem', paddingRight: '20px' }}>
            ‘Ayyappa Dharma’, the ultimate solace for all in this world, plays a vital part in propagation of peace through divinity.
          </p>
          <div className="mt-4" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
            Swamiye Saranam Ayyappa
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/camps" className="footer-link">Annadanam Camps</Link>
          <Link to="/contact" className="footer-link">Contact Us</Link>
        </div>

        <div className="footer-col">
          <h4>Important Links</h4>
          <a href="https://sabarimalaonline.org/" target="_blank" rel="noreferrer" className="footer-link">Virtual Q Booking</a>
          <a href="http://travancoredevaswomboard.org/" target="_blank" rel="noreferrer" className="footer-link">Travancore Devaswom Board</a>
          <a href="https://www.onlinetdb.com/" target="_blank" rel="noreferrer" className="footer-link">Online Seva</a>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms & Conditions</Link>
          <Link to="/refund" className="footer-link">Cancellation & Refunds</Link>
        </div>
      </div>
      
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Akhil Bhartiya AyyappaDharma PracharSabha (ABAP). All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
