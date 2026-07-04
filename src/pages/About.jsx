import React, { useState } from 'react';
import { Shield, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
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
      <div className="page-header">
        <div className="container">
          <h1 className="animate-fade-up">About Tufike Tours & Travels</h1>
          <p className="page-subtitle animate-fade-up" style={{ animationDelay: '0.1s' }}>
            We make every destination feel like it was designed specifically for you.
          </p>
        </div>
      </div>

      <div className="container section">
        
        {/* Positioning Statement */}
        <div className="about-content glass-card animate-fade-up">
          <h2>Who We Are</h2>
          <p className="lead-text">
            <strong>Tufike Tours & Travels</strong> is an East African travel and experiences company specializing in local adventures, curated group trips, camping experiences, accommodation facilitation, mobility services, merchandise, and travel support solutions.
          </p>
          <p>
            Our mission is to make travel accessible, memorable, and personalized while promoting local tourism and adventure culture across Kenya and East Africa.
          </p>
        </div>

        {/* Trust Guarantee */}
        <div className="trust-section animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="section-header center">
            <Shield size={48} className="text-secondary" style={{ margin: '0 auto 1rem' }} />
            <h2>Our Trust Guarantee</h2>
            <p>At Tufike, we don't simply take you somewhere. We ensure a premium, secure experience.</p>
          </div>
          
          <div className="guarantees-grid">
            <div className="guarantee-item">
              <CheckCircle size={24} className="text-primary" />
              <span>Verified Partners</span>
            </div>
            <div className="guarantee-item">
              <CheckCircle size={24} className="text-primary" />
              <span>Transparent Pricing</span>
            </div>
            <div className="guarantee-item">
              <CheckCircle size={24} className="text-primary" />
              <span>Professional Support</span>
            </div>
            <div className="guarantee-item">
              <CheckCircle size={24} className="text-primary" />
              <span>Safety-First Operations</span>
            </div>
            <div className="guarantee-item">
              <CheckCircle size={24} className="text-primary" />
              <span>Reliable Experiences</span>
            </div>
            <div className="guarantee-item">
              <CheckCircle size={24} className="text-primary" />
              <span>Personalized Service</span>
            </div>
          </div>
        </div>

        {/* Standard Operating Procedures */}
        <div className="sops-section glass-card animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2>How We Operate</h2>
          <div className="sops-grid">
            <div className="sop-card">
              <h4>Booking & Payment</h4>
              <p>We accept M-Pesa, Bank transfers, Cards, and International transfers. Once you inquire, we confirm availability, issue a quote, and generate a booking reference upon payment.</p>
            </div>
            <div className="sop-card">
              <h4>Safety First</h4>
              <p>Before every trip, we verify transport, accommodation, and emergency contacts. We conduct a safety briefing and check weather conditions for every expedition.</p>
            </div>
            <div className="sop-card">
              <h4>Partner Verification</h4>
              <p>All our partners must provide business registration, physical addresses, licenses, insurance, and references before they can list on the Tufike Marketplace.</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="faq-section animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-center" style={{ marginBottom: '2rem' }}>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
