import React from 'react';
import { Ticket, ShoppingBag, ArrowRight, ShieldCheck, QrCode } from 'lucide-react';
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
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="animate-fade-up">Tufike Marketplace</h1>
          <p className="page-subtitle animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Your hub for shared group trip tickets and exclusive Bennie Culture merchandise.
          </p>
        </div>
      </div>

      <div className="container section">
        
        {/* Ticket Marketplace Section */}
        <div className="marketplace-section glass-card animate-fade-up">
          <div className="section-header">
            <Ticket size={40} className="section-icon" />
            <div>
              <h2>Shared Group Trip Tickets</h2>
              <p>We partner with verified tour companies across East Africa to bring you affordable, shared group trips.</p>
            </div>
          </div>
          
          <div className="ticket-features">
            <div className="feature-item">
              <ShieldCheck size={24} className="text-secondary" />
              <h4>Verified Partners</h4>
              <p>All trips are strictly vetted for your safety and comfort.</p>
            </div>
            <div className="feature-item">
              <QrCode size={24} className="text-secondary" />
              <h4>Personalized Tickets</h4>
              <p>Receive a custom Tufike ticket with a unique QR code and itinerary.</p>
            </div>
            <div className="feature-item">
              <Users size={24} className="text-secondary" />
              <h4>Travel Together</h4>
              <p>Join existing trips to lower costs and make new friends.</p>
            </div>
          </div>
          
          <div className="cta-box text-center">
            <h3>Looking for available trips?</h3>
            <p>Our trip inventory is constantly updating. Contact us to find a trip that matches your dates and destination!</p>
            <Link to="/contact" className="btn btn-primary mt-4">Find a Trip <ArrowRight size={18} /></Link>
          </div>
        </div>

        {/* Merchandise Section */}
        <div className="marketplace-section glass-card animate-fade-up" style={{ animationDelay: '0.2s', marginTop: '4rem' }}>
          <div className="section-header">
            <ShoppingBag size={40} className="section-icon" />
            <div>
              <h2>Tufike Adventure Merchandise</h2>
              <p>Join the <strong>Bennie Culture Initiative</strong> — an affordable, fashionable outdoor lifestyle identity for travel enthusiasts.</p>
            </div>
          </div>

          <div className="merch-grid">
            {merchandise.map((item, index) => (
              <div key={index} className="merch-item">
                <span className="merch-name">{item.name}</span>
                <span className="merch-price">KES {item.price}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <p><em>* We deliver countrywide! Bulk customization is also available.</em></p>
            <Link to="/contact" className="btn btn-outline mt-4">Order Merchandise</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

// We need to import Users from lucide-react since we used it
import { Users } from 'lucide-react';

export default Marketplace;
