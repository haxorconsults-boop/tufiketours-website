import React from 'react';
import { Map, Home, Car, Tent, Baby, Users, Compass, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Map className="service-icon" size={32} />,
      title: "Local Trips, Excursions & Expeditions",
      description: "Day trips, weekend getaways, multi-day expeditions, corporate retreats, school excursions, and adventure travel across Kenya and East Africa.",
      destinations: "Maasai Mara, Samburu, Mount Kenya, Diani, Zanzibar & more."
    },
    {
      icon: <Home className="service-icon" size={32} />,
      title: "Airbnb Facilitation Services",
      description: "Assisting customers in finding and booking verified Airbnb accommodation in Nairobi, Samburu, Maralal, and beyond. We ensure verified hosts, real photos, and secure payments.",
      destinations: "Westlands, Kilimani, Karen, CBD, Archers Post."
    },
    {
      icon: <Car className="service-icon" size={32} />,
      title: "Driver On Call",
      description: "Professional drivers for your own vehicle, or complete driver-and-vehicle packages for airport transfers, corporate travel, and events.",
      destinations: "Sedan, SUV, Van, Luxury vehicles, Tour vans."
    },
    {
      icon: <Tent className="service-icon" size={32} />,
      title: "Camping Experiences",
      description: "Exclusive camping packages like Camp John 511 and Island Camp Sagana, complete with transport, meals, campfire, and security.",
      destinations: "Naivasha, Mount Kenya, Nanyuki, Samburu."
    },
    {
      icon: <Baby className="service-icon" size={32} />,
      title: "Weekend Kid-Friendly Activities",
      description: "Nature walks, horse riding, swimming, educational tours, and adventure parks perfect for families, groups, and school holidays.",
      destinations: "Customized per request."
    },
    {
      icon: <Users className="service-icon" size={32} />,
      title: "Family Trips & Accommodation",
      description: "Complete family vacation planning, hotel bookings, holiday homes, and activity arrangements for the perfect group getaway.",
      destinations: "Coast, National parks, Mountain regions."
    },
    {
      icon: <Compass className="service-icon" size={32} />,
      title: "Tour & Town Guide Services",
      description: "Professional guides for national parks, hiking, historical tours, translation, local orientation, and shopping assistance.",
      destinations: "Nairobi, Maralal, Nanyuki, Nakuru, Mombasa."
    },
    {
      icon: <GraduationCap className="service-icon" size={32} />,
      title: "Facilitation for Scholars & Professionals",
      description: "Logistics, accommodation, local permits, and research assistants for foreign scholars, scientists, NGOs, and documentary crews.",
      destinations: "Throughout East Africa."
    }
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1 className="animate-fade-up">Our Core Services</h1>
          <p className="page-subtitle animate-fade-up" style={{ animationDelay: '0.1s' }}>
            From curated safaris to professional facilitation, we handle every detail so you can focus on the experience.
          </p>
        </div>
      </div>

      <div className="container section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-meta">
                <strong>Includes:</strong> {service.destinations}
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section text-center animate-fade-up" style={{ marginTop: '4rem' }}>
          <h2>Ready to plan your next journey?</h2>
          <p>Contact our dedicated team to customize any of these services for your needs.</p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
            Book a Service <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
