import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: "🌍",
      title: "Local Trips & Expeditions",
      description: "Day trips, weekend getaways, multi-day expeditions, corporate retreats, school excursions, and adventure travel across Kenya and East Africa.",
      destinations: "Maasai Mara, Samburu, Mount Kenya, Diani, Zanzibar & more.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80"
    },
    {
      icon: "🏡",
      title: "Airbnb Facilitation",
      description: "Assisting customers in finding and booking verified Airbnb accommodation in Nairobi, Samburu, Maralal, and beyond. We ensure verified hosts and real photos.",
      destinations: "Westlands, Kilimani, Karen, CBD, Archers Post.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80"
    },
    {
      icon: "🚗",
      title: "Driver On Call",
      description: "Professional drivers for your own vehicle, or complete driver-and-vehicle packages for airport transfers, corporate travel, and events.",
      destinations: "Sedan, SUV, Van, Luxury vehicles, Tour vans.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80"
    },
    {
      icon: "🏕️",
      title: "Camping Experiences",
      description: "Exclusive camping packages like Camp John 511 and Island Camp Sagana, complete with transport, meals, campfire, and security.",
      destinations: "Naivasha, Mount Kenya, Nanyuki, Samburu.",
      image: "https://images.unsplash.com/photo-1504280390224-811c750e50d5?w=600&q=80"
    },
    {
      icon: "🧸",
      title: "Kid-Friendly Activities",
      description: "Nature walks, horse riding, swimming, educational tours, and adventure parks perfect for families, groups, and school holidays.",
      destinations: "Customized per request.",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&q=80"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Trips",
      description: "Complete family vacation planning, hotel bookings, holiday homes, and activity arrangements for the perfect group getaway.",
      destinations: "Coast, National parks, Mountain regions.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80"
    },
    {
      icon: "🧭",
      title: "Tour & Town Guide",
      description: "Professional guides for national parks, hiking, historical tours, translation, local orientation, and shopping assistance.",
      destinations: "Nairobi, Maralal, Nanyuki, Nakuru, Mombasa.",
      image: "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=600&q=80"
    },
    {
      icon: "🎓",
      title: "Scholar Facilitation",
      description: "Logistics, accommodation, local permits, and research assistants for foreign scholars, scientists, NGOs, and documentary crews.",
      destinations: "Throughout East Africa.",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80"
    }
  ];

  return (
    <div className="services-page">
      <div className="services-header reveal">
        <p className="section-label">Our Expertise</p>
        <h2 className="section-title">Crafting <em>Extraordinary</em> Experiences</h2>
        <p className="services-subtitle">From curated safaris to professional facilitation, we handle every detail so you can focus on the experience.</p>
      </div>

      <div className="services-grid reveal">
        {services.map((service, index) => (
          <div key={index} className="srv-card hover-target">
            <img src={service.image} alt={service.title} loading="lazy" />
            <div className="srv-overlay">
              <div className="srv-icon">{service.icon}</div>
              <div className="srv-title">{service.title}</div>
              <p className="srv-desc">{service.description}</p>
              <span className="srv-tag">{service.destinations}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="services-cta reveal">
        <h2>Ready to plan your next journey?</h2>
        <p>Contact our dedicated team to customize any of these services for your needs.</p>
        <Link to="/contact" className="btn-primary hover-target" style={{ marginTop: '2rem' }}>
          Book a Service
        </Link>
      </div>
    </div>
  );
};

export default Services;
