import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    { q: "How do I book a trip?", a: "Request a quotation → Receive itinerary → Confirm → Pay deposit or full payment → Receive booking confirmation → Travel." },
    { q: "What payment methods do you accept?", a: "We accept PayBill, bank transfer, card and mobile money. Deposits secure bookings while balances are paid before departure unless otherwise agreed." },
    { q: "Can I cancel a booking?", a: "Refunds depend on supplier policies. Administrative charges and non-refundable third-party costs may apply. Contact us early for the best outcome." },
    { q: "Can I pay in installments?", a: "Yes, for selected packages. Ask about our deposit structure when requesting a quotation." },
    { q: "Can I travel alone?", a: "Yes. Solo travelers can join our scheduled group tours and road trips at competitive per-person rates." },
    { q: "Do you deliver merchandise countrywide?", a: "Yes, we deliver across Kenya. Bulk customization is also available for groups and corporates." },
    { q: "Do you own the Airbnb properties?", a: "No. We facilitate bookings for strictly verified properties to ensure your safety, comfort, and authenticity of experience." },
    { q: "Are your drivers and guides vetted?", a: "Yes. All our drivers and guides are thoroughly vetted and licensed where applicable." },
    { q: "Do I need my own camping equipment?", a: "No. Equipment can be included in all our camping packages. Ask about gear packages during booking." },
    { q: "How does the partnership and profit-sharing model work?", a: "Where Tufike owns the product but another company delivers part of the service, the partner earns 20% of the agreed profit/commission. Where Tufike sells another company's product, Tufike earns 20% commission unless a separate written agreement exists." }
  ];

  return (
    <div className="about-page">

      {/* ── EDITORIAL HERO ── */}
      <section className="about-hero">
        <div className="ah-content reveal">
          <span className="section-label">Our Story</span>
          <h2 className="section-title">The Heart of <em>Tufike</em></h2>
          <p className="ah-lead">
            <strong>Tufike Tours and Travels</strong> is a Kenyan travel, tourism, transport and logistics company providing memorable travel experiences across East Africa. We combine adventure, convenience and professional service under the promise:
          </p>
          <blockquote className="pull-quote" style={{margin: '1.5rem 0'}}>
            "Your destination is our priority."
          </blockquote>
          <div className="mv-row">
            <div className="mv-block">
              <h4>Mission</h4>
              <p>To deliver reliable, affordable and memorable travel and logistics solutions.</p>
            </div>
            <div className="mv-block">
              <h4>Vision</h4>
              <p>To become East Africa's most trusted adventure travel and destination management company.</p>
            </div>
          </div>
        </div>
        <div className="ah-images reveal">
          <img src="https://images.unsplash.com/photo-1518259102261-b40117eabbf9?w=600&q=80" alt="Safari Guide" className="img-front" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1547471080-7fc2caa6f56c?w=600&q=80" alt="African Landscape" className="img-back" loading="lazy" />
        </div>
      </section>

      {/* ── TRUST GUARANTEE ── */}
      <section className="guarantee-section reveal">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <span className="section-label">Peace of Mind</span>
          <h2 className="section-title">Why Choose <em>Tufike</em></h2>
        </div>
        <div className="g-grid">
          {[
            {icon: '🧭', title: 'Experienced Team', desc: 'Knowledgeable, passionate guides and staff born across East Africa.'},
            {icon: '🤝', title: 'Reliable Partners', desc: 'Strictly vetted — business registration, licenses, insurance and references required.'},
            {icon: '💎', title: 'Affordable Pricing', desc: 'Competitive rates with transparent, no-hidden-fee quotations every time.'},
            {icon: '✏️', title: 'Customized Itineraries', desc: 'Every package is uniquely built for your group\'s needs, pace and goals.'},
            {icon: '📞', title: 'Transparent Communication', desc: 'Clear updates from quotation through confirmation to your safe return.'},
            {icon: '🌟', title: 'Memorable Experiences', desc: 'We don\'t just take you somewhere — we craft stories you\'ll tell for years.'},
          ].map((g, i) => (
            <div key={i} className="g-item hover-target">
              <span className="g-icon">{g.icon}</span>
              <h4>{g.title}</h4>
              <p>{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW WE OPERATE ── */}
      <section className="sops-section reveal">
        <div style={{textAlign: 'center', marginBottom: '3.5rem'}}>
          <span className="section-label">Standard Operating Procedures</span>
          <h2 className="section-title">How We <em>Operate</em></h2>
        </div>
        <div className="sops-grid">
          <div className="sop-card hover-target">
            <h4>01. Booking Process</h4>
            <p>Request quotation → Receive itinerary → Confirm → Pay deposit or full payment → Receive booking confirmation → Travel. Simple, transparent and stress-free.</p>
          </div>
          <div className="sop-card hover-target">
            <h4>02. Payments</h4>
            <p>Accepted via PayBill, bank transfer, card and mobile money. Deposits secure bookings while balances are paid before departure unless otherwise agreed.</p>
          </div>
          <div className="sop-card hover-target">
            <h4>03. Cancellation & Refunds</h4>
            <p>Refunds depend on supplier policies. Administrative charges and non-refundable third-party costs may apply. We always advise clients early when plans change.</p>
          </div>
          <div className="sop-card hover-target">
            <h4>04. Partner Verification</h4>
            <p>All partners must provide business registration, physical addresses, licenses, insurance, and references. No exceptions — your safety is non-negotiable.</p>
          </div>
          <div className="sop-card hover-target">
            <h4>05. Client Responsibilities</h4>
            <p>Clients must provide accurate travel information, valid identification and comply with all destination regulations. Prices may change before confirmation.</p>
          </div>
          <div className="sop-card hover-target">
            <h4>06. Privacy Policy</h4>
            <p>Customer information is kept strictly confidential and used only for the purpose of service delivery. We do not share personal data with unauthorized third parties.</p>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="faq-section reveal">
        <div className="faq-container">
          <div style={{textAlign: 'center', marginBottom: '3.5rem'}}>
            <span className="section-label">Knowledge Base</span>
            <h2 className="section-title">Frequently Asked <em>Questions</em></h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item hover-target ${openFaq === i ? 'open' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-q">
                  <h4>{faq.q}</h4>
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </div>
                <div className="faq-a"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

