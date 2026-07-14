import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'group-tours', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: 'group-tours', message: '' });
      setTimeout(() => setSubmitStatus(null), 6000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-split">

        {/* Left Side */}
        <div className="contact-info-side reveal">
          <div className="contact-overlay">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">Let the <em>Journey</em> Begin</h2>
            <p className="contact-lead">
              Whether you need a group safari, a professional driver, or just want someone to run your errands — we are here, ready and reliable.
            </p>

            <div className="contact-details">
              <div className="cd-item">
                <span className="cd-icon">📍</span>
                <div>
                  <strong>Headquarters</strong>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              <div className="cd-item">
                <span className="cd-icon">📞</span>
                <div>
                  <strong>Call / WhatsApp</strong>
                  <a href="tel:+254718804650">+254 718 804650</a>
                </div>
              </div>
              <div className="cd-item">
                <span className="cd-icon">✉️</span>
                <div>
                  <strong>Email Us</strong>
                  <a href="mailto:info@tufiketours.com">info@tufiketours.com</a>
                </div>
              </div>
              <div className="cd-item">
                <span className="cd-icon">🎵</span>
                <div>
                  <strong>TikTok</strong>
                  <p>@PeterTufike</p>
                </div>
              </div>
            </div>

            <div className="contact-whatsapp">
              <a href="https://wa.me/254718804650?text=Hello%20Tufike%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." className="btn-primary hover-target" style={{marginTop: '2rem'}}>
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-side reveal">
          <div className="form-wrapper">
            {/* Editorial header */}
            <span className="section-label">Inquiry Form</span>
            <h3>Send an Inquiry</h3>
            <p className="form-sub">Fill out the form below and our team will respond within 24 hours.</p>

            {submitStatus === 'success' && (
              <div className="alert-success">
                ✓ Message sent! We will be in touch shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="tufike-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" className="form-control"
                  value={formData.name} onChange={handleChange} required placeholder="e.g. Jane Mwangi" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" className="form-control"
                    value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input type="tel" id="phone" name="phone" className="form-control"
                    value={formData.phone} onChange={handleChange} placeholder="+254..." />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">I am interested in...</label>
                <select id="service" name="service" className="form-control" value={formData.service} onChange={handleChange}>
                  <option value="errands">Errands by Tufike</option>
                  <option value="group-tours">Group Tours & Road Trips</option>
                  <option value="tailor-made">Tailor-Made Packages</option>
                  <option value="driver">Driver on Call / Car Hire</option>
                  <option value="accommodation">Hotel & Airbnb Bookings</option>
                  <option value="camping">Expeditions & Camping</option>
                  <option value="ticketing">Event Ticketing</option>
                  <option value="foreign">Foreign Visitor Facilitation</option>
                  <option value="transport">Flight / Train / Bus Bookings</option>
                  <option value="educational">Historical & Educational Trips</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" className="form-control" rows="5"
                  value={formData.message} onChange={handleChange} required
                  placeholder="Tell us about your trip dates, group size, destination or any special needs..."></textarea>
              </div>
              <button type="submit" className="btn-primary hover-target" style={{width: '100%', marginTop: '1rem'}} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

