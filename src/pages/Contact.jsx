import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page pt-32">
      <div className="page-header section-purple">
        <div className="container text-center">
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-subtitle light mx-auto">
            We'd love to hear from you. Let us plan your next great adventure.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info animate-fade-up">
              <h2>Contact Information</h2>
              <p className="mb-8 text-muted">
                Our consultant Peter Muiruru is ready to assist you with any inquiries or booking requests.
              </p>
              
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon"><Phone /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+254 718 804 650</p>
                    <p className="text-sm">Consultant: Peter Muiruru</p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon"><Mail /></div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:tufiketours@gmail.com">tufiketours@gmail.com</a>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon"><MapPin /></div>
                  <div>
                    <h4>Office</h4>
                    <p>P.O.BOX. 350-20600</p>
                    <p>MARALAL</p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon"><Clock /></div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 8am - 6pm</p>
                    <p>Saturday: 9am - 1pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap glass-card animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h2>Send a Message</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Interested Service</label>
                  <select id="service">
                    <option>Safaris & Tours</option>
                    <option>Corporate Travel</option>
                    <option>Car Hire</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Tell us about your travel plans..."></textarea>
                </div>
                
                <button type="button" className="btn btn-primary w-full justify-center">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
