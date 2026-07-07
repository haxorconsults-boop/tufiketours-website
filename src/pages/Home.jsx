import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [currentTesti, setCurrentTesti] = useState(0);

  const testimonials = [
    {
      text: "Our Masai Mara experience was nothing short of transcendent. The guides at Tufike knew exactly where the lions would be at dawn. A journey I will carry in my heart for the rest of my life.",
      author: "Sarah & James Whitmore",
      location: "London, United Kingdom — Masai Mara Safari 2024"
    },
    {
      text: "We saw all the Big Five on day two. Day two! The planning was flawless, the camps were luxurious, and the team treated us like family. Tufike is simply the best in East Africa.",
      author: "Dr. Aisha Nkemdirim",
      location: "Lagos, Nigeria — Ultimate East Africa Package 2024"
    },
    {
      text: "The photography safari exceeded every expectation. Our guide had an extraordinary eye for light and wildlife. I came home with images I never imagined possible. Book with Tufike — you will not regret it.",
      author: "Marco & Elena Ferrucci",
      location: "Milan, Italy — Photography Safari 2023"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTesti((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-badge">Africa's Premier Safari Specialists</div>
          <h1 className="hero-title">Your Destination<br />is Our <em>Priority</em></h1>
          <p className="hero-sub">Discover the untamed beauty of East Africa with Tufike Tours & Travels — crafting extraordinary safari journeys since 2010</p>
          <div className="hero-btns">
            <Link to="/services" className="btn-primary hover-target">Explore Services</Link>
            <Link to="/contact" className="btn-outline hover-target">Plan My Trip</Link>
          </div>
        </div>
        <div className="hero-scroll">Scroll <span></span></div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-num">12+</span>
          <span className="stat-label">Years of Excellence</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">5,000+</span>
          <span className="stat-label">Happy Travelers</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">8</span>
          <span className="stat-label">African Countries</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">10+</span>
          <span className="stat-label">Core Services</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">98%</span>
          <span className="stat-label">Client Satisfaction</span>
        </div>
      </div>

      {/* ── WHY US ── */}
      <section id="why-us">
        <div className="why-grid">
          <div className="why-items reveal">
            <div>
              <p className="section-label">Why Tufike</p>
              <h2 className="section-title">Africa, The Right <em>Way</em></h2>
              <br />
            </div>
            <div className="why-item">
              <div className="why-num">01</div>
              <div>
                <h4>Native-Born Expertise</h4>
                <p>Our team was born and raised across East Africa. This land isn't a destination for us — it's home. We share it with pride, depth, and genuine love.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-num">02</div>
              <div>
                <h4>100% Tailor-Made Services</h4>
                <p>From airport pickups to multi-day safaris, every itinerary is personally designed around your interests, pace, budget, and the experience you dream of.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-num">03</div>
              <div>
                <h4>24/7 Support</h4>
                <p>From the moment you land to your final farewell, our team is always reachable — in the field, at camp, or across borders.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-num">04</div>
              <div>
                <h4>Responsible Tourism</h4>
                <p>We invest 5% of every package into wildlife conservation and community programs, so your journey contributes to Africa's future.</p>
              </div>
            </div>
          </div>
          <div className="why-img reveal">
            <img src="https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=800&q=80" alt="Safari experience" loading="lazy" />
            <div className="why-img-tag">
              Safari<br />Excellence<br />Award 2024
              <small>East Africa Tourism Board</small>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials">
        <div className="testi-header reveal">
          <p className="section-label">Client Stories</p>
          <h2 className="section-title">Words From the <em>Wild</em></h2>
        </div>
        <div className="testi-slider reveal">
          {testimonials.map((testi, index) => (
            <div key={index} className={`testi-card ${index === currentTesti ? 'active' : ''}`}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"{testi.text}"</p>
              <div className="testi-author">
                <strong>{testi.author}</strong>
                <span>{testi.location}</span>
              </div>
            </div>
          ))}
          <div className="testi-dots">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`testi-dot hover-target ${index === currentTesti ? 'active' : ''}`} 
                onClick={() => setCurrentTesti(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
