import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      num: "01",
      icon: "🏃",
      title: "Errands by Tufike",
      description: "Vehicle pick-ups & drop-offs, vehicle supervision at garages, spare-parts shopping, parcel handling, shopping errands and document delivery.",
      tag: "Logistics · Nairobi & Beyond",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80"
    },
    {
      num: "02",
      icon: "🌍",
      title: "Group Tours & Road Trips",
      description: "Scheduled departures, safaris, hiking expeditions, camping adventures and immersive cultural experiences across East Africa.",
      tag: "Kenya · Tanzania · Uganda",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80"
    },
    {
      num: "03",
      icon: "✨",
      title: "Tailor-Made Packages",
      description: "Family, honeymoon, school, church and corporate packages — every itinerary built uniquely around your group's needs, pace and budget.",
      tag: "Custom Packages",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80"
    },
    {
      num: "04",
      icon: "🚗",
      title: "Driver on Call & Car Hire",
      description: "Professional chauffeurs for your own vehicle, or complete self-drive and car hire coordination including airport transfers and corporate travel.",
      tag: "Sedan · SUV · Van · Luxury",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80"
    },
    {
      num: "05",
      icon: "🏡",
      title: "Hotel & Airbnb Bookings",
      description: "Hotels, lodges, camps and Airbnb reservations across Kenya and East Africa — all verified hosts, real photos, and secure payments.",
      tag: "Accommodation Facilitation",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80"
    },
    {
      num: "06",
      icon: "🏕️",
      title: "Expeditions & Camping",
      description: "Overland adventures, camping and off-road experiences with transport, meals, campfire, equipment and security fully arranged.",
      tag: "Naivasha · Nanyuki · Samburu",
      image: "https://images.unsplash.com/photo-1504280390224-811c750e50d5?w=600&q=80"
    },
    {
      num: "07",
      icon: "🎟️",
      title: "Event Ticketing",
      description: "Selling tickets for Tufike-organized events and vetted partner events. Personalized tickets with unique QR codes and itineraries.",
      tag: "Events · Partner Trips",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80"
    },
    {
      num: "08",
      icon: "✈️",
      title: "Foreign Visitor Facilitation",
      description: "Airport transfers, accommodation, translators, local logistics and full orientation for international guests visiting East Africa.",
      tag: "International Arrivals",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80"
    },
    {
      num: "09",
      icon: "🚂",
      title: "Flight, Train & Bus Bookings",
      description: "Flight, SGR (Standard Gauge Railway), bus and ferry reservations — a one-stop transport ticketing desk for any journey.",
      tag: "Air · Rail · Road · Sea",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80"
    },
    {
      num: "10",
      icon: "🎓",
      title: "Historical & Educational Trips",
      description: "Museums, wildlife, conservation and heritage tours for schools, scholars, NGOs, scientists, and documentary production crews.",
      tag: "Education · Research · Heritage",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80"
    }
  ];

  return (
    <div className="services-page">
      <div className="services-header reveal">
        <span className="section-label">Our Expertise</span>
        <h2 className="section-title">Ten Ways We <em>Serve You</em></h2>
        <p className="services-subtitle">
          From handling your errands to crafting multi-country expeditions — we handle every detail so you can focus on the experience.
        </p>
      </div>

      <div className="services-grid reveal">
        {services.map((s, i) => (
          <div key={i} className="srv-card hover-target">
            <img src={s.image} alt={s.title} loading="lazy" />
            <div className="srv-overlay">
              <div className="srv-num">{s.num}</div>
              <div className="srv-icon">{s.icon}</div>
              <div className="srv-title">{s.title}</div>
              <p className="srv-desc">{s.description}</p>
              <span className="srv-tag">{s.tag}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Editorial CTA */}
      <div className="services-cta reveal">
        <span className="section-label">Get Started</span>
        <h2>Ready to plan your next journey?</h2>
        <p>Our dedicated team builds every experience around your needs. Request a quotation today.</p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem'}}>
          <a href="https://wa.me/254708037495" className="btn-primary hover-target">WhatsApp Us</a>
          <Link to="/contact" className="btn-outline hover-target">Send Inquiry</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
