import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">Tufike Tours</div>
          <p>Africa's most trusted safari specialists, crafting extraordinary journeys across East Africa since 2010. Where every safari is a story waiting to be lived.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook" className="hover-target">f</a>
            <a href="#" aria-label="Instagram" className="hover-target">📷</a>
            <a href="https://wa.me/254718804650" aria-label="WhatsApp" className="hover-target">💬</a>
            <a href="#" aria-label="YouTube" className="hover-target">▶</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Safaris</h4>
          <ul>
            <li><Link to="/services" className="hover-target">Big Five Safari</Link></li>
            <li><Link to="/services" className="hover-target">Balloon Safari</Link></li>
            <li><Link to="/services" className="hover-target">Mountain Trek</Link></li>
            <li><Link to="/services" className="hover-target">Beach & Safari</Link></li>
            <li><Link to="/services" className="hover-target">Cultural Safari</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Destinations</h4>
          <ul>
            <li><Link to="/tours" className="hover-target">Masai Mara, Kenya</Link></li>
            <li><Link to="/tours" className="hover-target">Serengeti, Tanzania</Link></li>
            <li><Link to="/tours" className="hover-target">Zanzibar</Link></li>
            <li><Link to="/tours" className="hover-target">Amboseli</Link></li>
            <li><Link to="/tours" className="hover-target">Bwindi, Uganda</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about" className="hover-target">About Us</Link></li>
            <li><Link to="/about" className="hover-target">Trust Guarantee</Link></li>
            <li><Link to="/marketplace" className="hover-target">Marketplace</Link></li>
            <li><Link to="/contact" className="hover-target">Contact</Link></li>
            <li><a href="tel:+254718804650" className="hover-target">+254 718 804650</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tufike Tours & Travels. All rights reserved. | Nairobi, Kenya</p>
        <span>Crafted with ❤️ for Africa</span>
      </div>
    </footer>
  );
};

export default Footer;
