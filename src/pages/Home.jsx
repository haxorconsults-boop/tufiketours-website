import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Shield } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <img src="./hero.jpg" alt="Savanna Safari" className="hero-img" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content animate-fade-up">
          <h1>Your Destination is Your Priority</h1>
          <p>
            Experience the wild heart of Africa with curated local trips, group expeditions, and comprehensive travel support across East Africa.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary">
              Explore Our Services <ArrowRight size={20} />
            </Link>
            <Link to="/marketplace" className="btn btn-outline">
              Visit Marketplace
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section with Mission & Vision */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2 className="section-title">Welcome to <span className="accent-text">Tufike</span></h2>
              <p className="intro-lead">
                We are an East African travel and experiences company specializing in local adventures, curated group trips, camping experiences, accommodation facilitation, mobility services, merchandise, and travel support solutions.
              </p>
              
              <div className="mv-blocks">
                <div className="mv-block">
                  <h3>Our Mission</h3>
                  <p>
                    Our mission is to make travel accessible, memorable, and personalized while promoting local tourism and adventure culture across Kenya and East Africa.
                  </p>
                </div>
                <div className="mv-block">
                  <h3>Brand Promise</h3>
                  <p>
                    At Tufike, we don't simply take you somewhere. We make every destination feel like it was designed specifically for you.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="intro-images">
              <img src="./safari.jpg" alt="Safari Jeep" className="intro-img-main" />
              <div className="intro-stats glass-card">
                <div className="stat">
                  <span className="stat-num">15+</span>
                  <span className="stat-text">Years Exp.</span>
                </div>
                <div className="stat">
                  <span className="stat-num">100%</span>
                  <span className="stat-text">Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section section-gray services-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our <span className="accent-text">Services</span></h2>
            <p className="section-subtitle mx-auto">
              Comprehensive travel solutions for every need, backed by our extensive partner network.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><Globe size={32} /></div>
              <h3>Local Trips & Expeditions</h3>
              <p>Day trips, weekend getaways, multi-day expeditions, and corporate retreats across Kenya and East Africa.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Shield size={32} /></div>
              <h3>Shared Group Tickets</h3>
              <p>Affordable, verified shared group trips through the Tufike Marketplace. Travel together and save.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><CheckCircle size={32} /></div>
              <h3>Airbnb Facilitation</h3>
              <p>Finding and booking verified Airbnb accommodations with verified hosts and secure payments.</p>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '3rem' }}>
             <Link to="/services" className="btn btn-outline">View All 10 Core Services</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-purple cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="section-title">Ready to start planning?</h2>
            <p className="section-subtitle light mb-8">
              Contact us today to tailor-make a package that suits your exact needs and interests.
            </p>
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
