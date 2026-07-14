import React from 'react';
import { Link } from 'react-router-dom';
import './Marketplace.css';

const Marketplace = () => {
  const merchandise = [
    { name: "Camping Tent (4-person)", price: "7,000" },
    { name: "Camping Tent (2-person)", price: "4,500" },
    { name: "Hiking Boots", price: "3,000" },
    { name: "Camel Bags", price: "2,600" },
    { name: "Hoodies", price: "2,500" },
    { name: "Torch", price: "1,600" },
    { name: "Polo Shirt", price: "1,500" },
    { name: "Jote Bags", price: "1,500" },
    { name: "Watches", price: "1,500" },
    { name: "Thermal Bottle", price: "1,300" },
    { name: "Sleeping Bags", price: "1,300" },
    { name: "Hiking Sticks", price: "1,300" },
    { name: "Round Neck T-Shirt", price: "1,000" },
    { name: "Tote Bags", price: "800" },
    { name: "Caps", price: "600" },
    { name: "Bennie Marvin Deluxe", price: "500" },
    { name: "Bennie Marvin Premium", price: "450" },
    { name: "Bennie Marvin", price: "400" },
    { name: "Wrist Bands", price: "300" }
  ];

  return (
    <div className="marketplace-page">
      <div className="market-header reveal">
        <span className="section-label">Shop & Book</span>
        <h2 className="section-title">The Tufike <em>Marketplace</em></h2>
        <p className="market-subtitle">
          Your hub for shared group trip tickets and exclusive Bennie Culture adventure merchandise.
        </p>
      </div>

      {/* ── EVENT TICKETING ── */}
      <section className="market-section reveal">
        <div className="market-card">
          <div className="mc-header">
            <span className="mc-badge">Event Ticketing</span>
            <h3>Shared Group Trip Tickets</h3>
            <p>We sell tickets for Tufike-organized events and vetted partner events across East Africa. Every ticket is personalized with a unique QR code and detailed itinerary.</p>
          </div>
          <div className="mc-features">
            <div className="mc-feature">
              <span className="mc-icon">🛡️</span>
              <h4>Verified Partners Only</h4>
              <p>Business registration, physical address, license, insurance and references — all checked before listing.</p>
            </div>
            <div className="mc-feature">
              <span className="mc-icon">🎟️</span>
              <h4>Personalized Tickets</h4>
              <p>Receive a custom Tufike ticket with a unique QR code and full itinerary — professional and genuine.</p>
            </div>
            <div className="mc-feature">
              <span className="mc-icon">🤝</span>
              <h4>Travel Together</h4>
              <p>Join existing scheduled departures to lower costs and make new friends along the road.</p>
            </div>
          </div>
          <div className="mc-cta text-center">
            <p>Our trip inventory updates constantly. Contact us to find a departure that matches your dates and destination.</p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem'}}>
              <a href="https://wa.me/254718804650" className="btn-primary hover-target">WhatsApp for Tickets</a>
              <Link to="/contact" className="btn-outline hover-target">Send Inquiry</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENNIE CULTURE MERCH ── */}
      <section className="market-section reveal" style={{paddingTop: 0}}>
        <div className="market-card border-gold">
          <div className="mc-header">
            <span className="mc-badge" style={{background: 'var(--gold)', color: 'var(--dark)'}}>Bennie Culture Initiative</span>
            <h3>Adventure Merchandise</h3>
            <p>An affordable, fashionable outdoor lifestyle identity for travel enthusiasts across Kenya. We deliver countrywide — bulk customization available.</p>
          </div>

          {/* Editorial price table */}
          <div className="merch-table">
            <div className="mt-head">
              <span>Item</span>
              <span>Price (KES)</span>
            </div>
            {merchandise.map((item, i) => (
              <div key={i} className="merch-row hover-target">
                <span className="merch-name">{item.name}</span>
                <span className="merch-price">KES {item.price}</span>
              </div>
            ))}
          </div>

          <div className="mc-cta text-center" style={{marginTop: '3rem'}}>
            <p style={{fontStyle: 'italic', color: 'var(--cream-dark)'}}>Countrywide delivery available. Custom branding for groups, corporates and events.</p>
            <a href="https://wa.me/254718804650?text=Hello%20Tufike%2C%20I%20want%20to%20order%20merchandise." className="btn-primary hover-target" style={{marginTop: '1.5rem'}}>
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;

