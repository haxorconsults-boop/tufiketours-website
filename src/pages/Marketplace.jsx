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
        <p className="section-label">Equip & Explore</p>
        <h2 className="section-title">The Tufike <em>Marketplace</em></h2>
        <p className="market-subtitle">Your hub for shared group trip tickets and exclusive Bennie Culture merchandise.</p>
      </div>

      {/* Ticket Section */}
      <section className="market-section reveal">
        <div className="market-card">
          <div className="mc-header">
            <h3>Shared Group Trip Tickets</h3>
            <p>We partner with verified tour companies across East Africa to bring you affordable, shared group trips.</p>
          </div>
          <div className="mc-features">
            <div className="mc-feature">
              <span className="mc-icon">🛡️</span>
              <h4>Verified Partners</h4>
              <p>Strictly vetted for your safety and comfort.</p>
            </div>
            <div className="mc-feature">
              <span className="mc-icon">🎟️</span>
              <h4>Personalized Tickets</h4>
              <p>Custom ticket with a unique QR code.</p>
            </div>
            <div className="mc-feature">
              <span className="mc-icon">🤝</span>
              <h4>Travel Together</h4>
              <p>Join existing trips to lower costs and make friends.</p>
            </div>
          </div>
          <div className="mc-cta text-center">
            <p style={{marginBottom: '1.5rem'}}>Our trip inventory is constantly updating. Contact us to find a trip that matches your dates and destination!</p>
            <Link to="/contact" className="btn-primary hover-target">Find a Trip</Link>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section className="market-section reveal">
        <div className="market-card border-gold">
          <div className="mc-header">
            <h3>Adventure Merchandise</h3>
            <p>Join the <strong>Bennie Culture Initiative</strong> — an affordable, fashionable outdoor lifestyle identity.</p>
          </div>
          <div className="merch-grid">
            {merchandise.map((item, index) => (
              <div key={index} className="merch-item hover-target">
                <span className="merch-name">{item.name}</span>
                <span className="merch-price">KES {item.price}</span>
              </div>
            ))}
          </div>
          <div className="mc-cta text-center">
            <p style={{marginBottom: '1.5rem', fontStyle: 'italic', color: 'var(--cream-dark)'}}>* We deliver countrywide! Bulk customization is also available.</p>
            <Link to="/contact" className="btn-outline hover-target">Order Merchandise</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
