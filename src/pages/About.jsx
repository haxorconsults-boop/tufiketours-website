import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { question: "How do I book a trip?", answer: "Select a package, contact us, receive a quotation, and complete payment." },
    { question: "Can I cancel a booking?", answer: "Yes. Cancellation policies vary by package." },
    { question: "Can I pay in installments?", answer: "Yes, for selected packages." },
    { question: "Are shared trip tickets genuine?", answer: "Yes. All trips are verified with partner operators." },
    { question: "Can I travel alone?", answer: "Yes. Solo travelers can easily join our group trips." },
    { question: "Do you deliver merchandise countrywide?", answer: "Yes, we deliver across Kenya. Bulk customization is also available." },
    { question: "Do you own the Airbnb properties?", answer: "No. We facilitate bookings for strictly verified properties to ensure your safety." },
    { question: "Are your drivers and guides vetted?", answer: "Yes. All our drivers and guides are thoroughly vetted, and licensed where applicable." },
    { question: "Do I need my own camping equipment?", answer: "No. Equipment can be included in all our camping packages." }
  ];

  return (
    <div className="about-page">
      {/* Our Story Header */}
      <section className="about-hero">
        <div className="ah-content reveal">
          <p className="section-label">Our Story</p>
          <h2 className="section-title">The Heart of <em>Tufike</em></h2>
          <p className="ah-lead">
            <strong>Tufike Tours & Travels</strong> is an East African travel and experiences company specializing in local adventures, curated group trips, camping experiences, accommodation facilitation, mobility services, merchandise, and travel support solutions.
          </p>
          <p className="ah-sub">
            Our mission is to make travel accessible, memorable, and personalized while promoting local tourism and adventure culture across Kenya and East Africa.
          </p>
        </div>
        <div className="ah-images reveal">
          <img src="https://images.unsplash.com/photo-1518259102261-b40117eabbf9?w=600&q=80" alt="Safari Guide" className="img-front" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1547471080-7fc2caa6f56c?w=600&q=80" alt="African Landscape" className="img-back" loading="lazy" />
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="guarantee-section reveal">
        <div className="text-center" style={{marginBottom: '3rem'}}>
          <p className="section-label">Peace of Mind</p>
          <h2 className="section-title">Our Trust <em>Guarantee</em></h2>
          <p style={{color: 'var(--cream-dark)', marginTop: '1rem'}}>At Tufike, we don't simply take you somewhere. We ensure a premium, secure experience.</p>
        </div>
        <div className="g-grid">
          <div className="g-item hover-target">
            <span className="g-icon">🛡️</span>
            <h4>Verified Partners</h4>
          </div>
          <div className="g-item hover-target">
            <span className="g-icon">💎</span>
            <h4>Transparent Pricing</h4>
          </div>
          <div className="g-item hover-target">
            <span className="g-icon">📞</span>
            <h4>Professional Support</h4>
          </div>
          <div className="g-item hover-target">
            <span className="g-icon">🧭</span>
            <h4>Safety-First Operations</h4>
          </div>
        </div>
      </section>

      {/* SOPs Section */}
      <section className="sops-section reveal">
        <div className="text-center" style={{marginBottom: '3rem'}}>
          <p className="section-label">Standard Operating Procedures</p>
          <h2 className="section-title">How We <em>Operate</em></h2>
        </div>
        <div className="sops-grid">
          <div className="sop-card hover-target">
            <h4>01. Booking & Payment</h4>
            <p>We accept M-Pesa, Bank transfers, Cards, and International transfers. Once you inquire, we confirm availability, issue a quote, and generate a booking reference upon payment.</p>
          </div>
          <div className="sop-card hover-target">
            <h4>02. Safety First</h4>
            <p>Before every trip, we verify transport, accommodation, and emergency contacts. We conduct a safety briefing and check weather conditions for every expedition.</p>
          </div>
          <div className="sop-card hover-target">
            <h4>03. Partner Verification</h4>
            <p>All our partners must provide business registration, physical addresses, licenses, insurance, and references before they can list on the Tufike Marketplace.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section reveal">
        <div className="faq-container">
          <div className="text-center" style={{marginBottom: '3rem'}}>
            <p className="section-label">Knowledge Base</p>
            <h2 className="section-title">Frequently Asked <em>Questions</em></h2>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item hover-target ${openFaq === index ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-q">
                  <h4>{faq.question}</h4>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </div>
                <div className="faq-a">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
