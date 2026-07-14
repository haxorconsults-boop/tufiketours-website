import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <Link to="/" className="nav-logo hover-target">
          <img src="/logo.jpg" alt="Tufike Tours & Travels" className="nav-logo-img" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/about" className="hover-target">About</Link></li>
          <li><Link to="/services" className="hover-target">Services</Link></li>
          <li><Link to="/tours" className="hover-target">Tours</Link></li>
          <li><Link to="/marketplace" className="hover-target">Marketplace</Link></li>
          <li><Link to="/contact" className="hover-target">Contact</Link></li>
        </ul>
        <a href="tel:+254718804650" className="nav-cta hover-target">📞 Book Now</a>
        <button 
          className="hamburger hover-target" 
          id="hamburger" 
          aria-label="Menu"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <button className="mobile-close hover-target" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
        <Link to="/about" className="hover-target">About</Link>
        <Link to="/services" className="hover-target">Services</Link>
        <Link to="/tours" className="hover-target">Tours</Link>
        <Link to="/marketplace" className="hover-target">Marketplace</Link>
        <Link to="/contact" className="hover-target">Contact</Link>
        <a href="tel:+254718804650" style={{ color: 'var(--gold)', fontSize: '1.1rem', fontFamily: 'var(--font-body)', letterSpacing: '.1em' }} className="hover-target">+254 718 804650</a>
      </div>
    </>
  );
};

export default Navbar;

