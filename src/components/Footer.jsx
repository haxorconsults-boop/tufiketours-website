import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">Tufike Tours<br />&amp; Travels</div>
          <p className="footer-tagline">"Your destination is our priority."</p>
          <p>A Kenyan travel, tourism, transport and logistics company providing memorable experiences across East Africa since day one.</p>
          <div className="social-links">
            <a href="https://wa.me/254718804650" aria-label="WhatsApp" className="hover-target">💬 WhatsApp</a>
            <a href="https://tiktok.com/@PeterTufike" aria-label="TikTok" className="hover-target">🎵 TikTok</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services" className="hover-target">Errands by Tufike</Link></li>
            <li><Link to="/services" className="hover-target">Group Tours & Road Trips</Link></li>
            <li><Link to="/services" className="hover-target">Tailor-Made Packages</Link></li>
            <li><Link to="/services" className="hover-target">Driver on Call</Link></li>
            <li><Link to="/services" className="hover-target">Hotel & Airbnb Bookings</Link></li>
            <li><Link to="/services" className="hover-target">Expeditions & Camping</Link></li>
            <li><Link to="/services" className="hover-target">Event Ticketing</Link></li>
            <li><Link to="/services" className="hover-target">Foreign Visitor Facilitation</Link></li>
            <li><Link to="/services" className="hover-target">Flight & Transport Bookings</Link></li>
            <li><Link to="/services" className="hover-target">Educational Trips</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/tours" className="hover-target">Safaris & Tours</Link></li>
            <li><Link to="/marketplace" className="hover-target">Marketplace</Link></li>
            <li><Link to="/marketplace" className="hover-target">Bennie Culture Merch</Link></li>
            <li><Link to="/about" className="hover-target">About Us</Link></li>
            <li><Link to="/about" className="hover-target">How We Operate</Link></li>
            <li><Link to="/about" className="hover-target">Trust Guarantee</Link></li>
            <li><Link to="/about" className="hover-target">FAQs</Link></li>
            <li><Link to="/contact" className="hover-target">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+254718804650" className="hover-target">+254 718 804650</a></li>
            <li><a href="https://wa.me/254718804650" className="hover-target">WhatsApp Us</a></li>
            <li><a href="mailto:info@tufiketours.com" className="hover-target">info@tufiketours.com</a></li>
            <li style={{color: 'var(--cream-dark)', fontSize: '.82rem', marginTop: '.5rem'}}>TikTok: @PeterTufike</li>
            <li style={{color: 'var(--cream-dark)', fontSize: '.82rem', marginTop: '.5rem'}}>Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tufike Tours & Travels. All rights reserved. | Nairobi, Kenya</p>
        <span>Your destination is our priority ✈️</span>
      </div>
    </footer>
  );
};

export default Footer;

