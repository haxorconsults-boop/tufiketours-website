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
          <img src="/hero.jpg" alt="Savanna Safari" className="hero-img" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content animate-fade-up">
          <h1>Experience the Wild Heart of Africa</h1>
          <p>
            Your premier travel management partner for corporate, group, and individual holidays.
          </p>
          <div className="hero-actions">
            <Link to="/tours" className="btn btn-primary">
              Explore Packages <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
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
                We are leaders of multi-national travel management in the region and our clients' best partner.
              </p>
              
              <div className="mv-blocks">
                <div className="mv-block">
                  <h3>Our Mission</h3>
                  <p>
                    Tufike Tours & Travels is committed to providing our clients with exceptional service, a complete end-to-end booking solution covering all aspects of your travel needs tailored in-house at an affordable price with pro-active customer service.
                  </p>
                </div>
                <div className="mv-block">
                  <h3>Our Vision</h3>
                  <p>
                    To be leaders of multi-national travel management in the region and our clients' best partner, always providing the best possible product, with the highest quality of services, and demonstrating faithfully our commitment towards social and environmental responsibility.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="intro-images">
              <img src="/safari.jpg" alt="Safari Jeep" className="intro-img-main" />
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
              <h3>Safaris & Tours</h3>
              <p>Wildlife safaris within Kenya and other African destinations. Tailor-made adventure packages and private camping.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Shield size={32} /></div>
              <h3>Corporate Travel</h3>
              <p>Top notch corporate & government travel services. Reliable, efficient, and tailored to your organization's needs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><CheckCircle size={32} /></div>
              <h3>Car Hire</h3>
              <p>Flexible car rental and hire services dependent entirely on your needs, including day disposals with excursions.</p>
            </div>
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
