import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'safari',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: 'safari', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-split">
        {/* Left Side: Image & Info */}
        <div className="contact-info-side reveal">
          <div className="contact-overlay">
            <p className="section-label">Get in Touch</p>
            <h2 className="section-title">Let the <em>Journey</em> Begin</h2>
            <p className="contact-lead">
              Ready to explore East Africa? Whether you're booking a luxury safari or picking up outdoor gear, we are here to help.
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
                  <p><a href="tel:+254718804650">+254 718 804650</a></p>
                </div>
              </div>
              <div className="cd-item">
                <span className="cd-icon">✉️</span>
                <div>
                  <strong>Email Us</strong>
                  <p><a href="mailto:info@tufiketours.com">info@tufiketours.com</a></p>
                </div>
              </div>
            </div>
            
            <div className="social-links-contact mt-4">
              <p style={{fontFamily: 'var(--font-heading)', color: 'var(--gold)', marginBottom: '.5rem'}}>Follow our expeditions</p>
              <div className="social-links">
                <a href="#" className="hover-target">f</a>
                <a href="#" className="hover-target">📷</a>
                <a href="https://wa.me/254718804650" className="hover-target">💬</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-side reveal">
          <div className="form-wrapper">
            <h3>Send an Inquiry</h3>
            <p className="form-sub">Fill out the form below and our travel experts will respond within 24 hours.</p>

            {submitStatus === 'success' && (
              <div className="alert-success">
                Message sent successfully! We will contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="tufike-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="e.g. Jane Doe"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="you@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254..."
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">I am interested in...</label>
                <select 
                  id="service" 
                  name="service" 
                  className="form-control"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="safari">Safari & Expeditions</option>
                  <option value="camping">Camping Packages</option>
                  <option value="marketplace">Marketplace & Merch</option>
                  <option value="airbnb">Airbnb Facilitation</option>
                  <option value="driver">Driver On Call</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-control"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your trip dates, group size, or merchandise needs..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-primary hover-target w-100 mt-2" 
                disabled={isSubmitting}
                style={{ width: '100%' }}
              >
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
