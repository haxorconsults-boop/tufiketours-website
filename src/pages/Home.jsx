import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [currentTesti, setCurrentTesti] = useState(0);

  const testimonials = [
    {
      text: "We had no idea what to expect, but Tufike handled everything — from the airport pickup to the safari to our hotel checkout. We just showed up and experienced Africa.",
      author: "James & Amara Whitmore",
      location: "United Kingdom — Masai Mara Safari"
    },
    {
      text: "Booked a tailor-made package for our church group. Seventy-two people, zero chaos. The team at Tufike is simply remarkable.",
      author: "Pastor Daniel Otieno",
      location: "Nairobi — Church Retreat Package"
    },
    {
      text: "I needed airport transfer, SGR tickets, and hotel in a new city — all confirmed in under an hour. This is exactly what a travel company should be.",
      author: "Dr. Yuki Tanaka",
      location: "Japan — Foreign Visitor Facilitation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTesti(p => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">

      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-kicker">Est. Kenya · East Africa</div>
          <h1 className="hero-title">
            Your Destination<br />is Our <em>Priority</em>
          </h1>
          <p className="hero-deck">
            Tufike Tours & Travels — delivering reliable, affordable and memorable travel, transport and logistics solutions across East Africa.
          </p>
          <div className="hero-btns">
            <Link to="/services" className="btn-primary hover-target">Explore Services</Link>
            <Link to="/contact" className="btn-outline hover-target">Plan My Trip</Link>
          </div>
        </div>
        <div className="hero-scroll">Scroll <span></span></div>

        {/* Hero editorial strip */}
        <div className="hero-strip">
          <span>Group Tours</span>
          <span className="strip-dot">·</span>
          <span>Safaris</span>
          <span className="strip-dot">·</span>
          <span>Car Hire</span>
          <span className="strip-dot">·</span>
          <span>Camping</span>
          <span className="strip-dot">·</span>
          <span>Hotel Bookings</span>
          <span className="strip-dot">·</span>
          <span>Errands</span>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-num">10+</span>
          <span className="stat-label">Core Services</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-num">8+</span>
          <span className="stat-label">Countries Covered</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-num">5,000+</span>
          <span className="stat-label">Happy Travelers</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-num">24/7</span>
          <span className="stat-label">Support Available</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-num">98%</span>
          <span className="stat-label">Client Satisfaction</span>
        </div>
      </div>

      {/* ── EDITORIAL INTRO ── */}
      <section id="mission" className="mission-section">
        <div className="mission-inner reveal">
          <div className="mission-left">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Adventure, Convenience<br />& <em>Professional Service</em></h2>
          </div>
          <div className="mission-right">
            <p className="pull-quote">"We combine adventure, convenience and professional service under the promise: Your destination is our priority."</p>
            <p style={{color: 'var(--cream-dark)', lineHeight: 1.8, marginTop: '1.5rem'}}>
              Tufike Tours and Travels is a Kenyan travel, tourism, transport and logistics company providing memorable travel experiences across East Africa. Whether you need a group safari, a professional driver, or someone to handle your errands — we deliver with reliability and heart.
            </p>
            <div style={{display: 'flex', gap: '3rem', marginTop: '2.5rem'}}>
              <div>
                <strong style={{display: 'block', color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '.4rem'}}>Mission</strong>
                <p style={{fontSize: '.85rem', color: 'var(--cream-dark)', lineHeight: 1.7}}>To deliver reliable, affordable and memorable travel and logistics solutions.</p>
              </div>
              <div>
                <strong style={{display: 'block', color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '.4rem'}}>Vision</strong>
                <p style={{fontSize: '.85rem', color: 'var(--cream-dark)', lineHeight: 1.7}}>To become East Africa's most trusted adventure travel and destination management company.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="why-us">
        <div className="why-grid">
          <div className="why-items reveal">
            <span className="section-label">Why Tufike</span>
            <h2 className="section-title">Africa, The Right <em>Way</em></h2>
            <br />
            <div className="why-item">
              <div className="why-num">01</div>
              <div>
                <h4>Experienced Team</h4>
                <p>Our people were born and raised across East Africa. This land isn't a destination for us — it's home. We share it with pride, depth, and genuine love.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-num">02</div>
              <div>
                <h4>Reliable Partners</h4>
                <p>Every hotel, driver, airline and camp partner we work with is strictly vetted. Business registration, licenses, insurance and references — all verified.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-num">03</div>
              <div>
                <h4>Transparent Communication</h4>
                <p>From quotation to confirmation to arrival — we keep you fully informed at every step. No hidden fees, no surprises.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-num">04</div>
              <div>
                <h4>Customized Itineraries</h4>
                <p>Family, honeymoon, school, church, or corporate — every package is built around your needs, your pace, and your budget.</p>
              </div>
            </div>
          </div>
          <div className="why-img reveal">
            <img src="https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=800&q=80" alt="East Africa Safari" loading="lazy" />
            <div className="why-img-tag">
              Affordable<br />Pricing
              <small>Guaranteed</small>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials">
        <div className="testi-header reveal">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">Words From the <em>Road</em></h2>
        </div>
        <div className="testi-slider reveal">
          {testimonials.map((t, i) => (
            <div key={i} className={`testi-card ${i === currentTesti ? 'active' : ''}`}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <strong>{t.author}</strong>
                <span>{t.location}</span>
              </div>
            </div>
          ))}
          <div className="testi-dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`testi-dot hover-target ${i === currentTesti ? 'active' : ''}`} onClick={() => setCurrentTesti(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING STRIP ── */}
      <section className="booking-strip reveal">
        <div className="bs-inner">
          <div>
            <span className="section-label">Get Started</span>
            <h3>Ready to Book Your Journey?</h3>
            <p>Request a quotation → Receive itinerary → Confirm → Pay → Travel</p>
          </div>
          <div className="bs-actions">
            <a href="https://wa.me/254708037495" className="btn-primary hover-target">WhatsApp Us</a>
            <Link to="/contact" className="btn-outline hover-target">Send Inquiry</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
