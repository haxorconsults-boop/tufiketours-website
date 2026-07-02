import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/">
              <img src="/logo.jpg" alt="Tufike Logo" className="footer-logo" />
            </Link>
            <p className="footer-desc">
              Your premier corporate travel and ticketing partner in Kenya. Experience the wild heart of Africa with our curated safaris, and rely on our expertise for seamless corporate journeys.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">IG</a>
              <a href="#" className="social-link">X</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tours">Safaris & Tours</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-title">Contact Information</h4>
            <div className="contact-item">
              <MapPin className="contact-icon" size={20} />
              <span>P.O.BOX. 350-20600, MARALAL</span>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" size={20} />
              <span>+254 718 804 650 (Peter Muiruru)</span>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" size={20} />
              <a href="mailto:tufiketours@gmail.com">tufiketours@gmail.com</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tufike Tours & Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
