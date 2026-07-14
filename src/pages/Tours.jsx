import React from 'react';
import { Link } from 'react-router-dom';
import './Tours.css';

const Tours = () => {
  const tours = [
    {
      title: "Safari Adventures",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      description: "Witness the majestic wildlife of East Africa in their natural habitats. From the Great Migration to private conservancies.",
      tags: ["Wildlife", "Camping", "Photography"]
    },
    {
      title: "Coastal Escapes",
      image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80",
      description: "Relaxing getaways to pristine white-sand beaches and luxury resorts along the Indian Ocean coast.",
      tags: ["Beach", "Relaxation", "Family"]
    },
    {
      title: "Mountain Trekking",
      image: "https://images.unsplash.com/photo-1547471080-7fc2caa6f56c?w=800&q=80",
      description: "Thrilling climbs and scenic nature hikes for the adventurous soul. Summit Mount Kenya or explore the Rift Valley.",
      tags: ["Adventure", "Hiking", "Nature"]
    }
  ];

  return (
    <div className="tours-page">
      <div className="tours-header reveal">
        <p className="section-label">Curated Itineraries</p>
        <h2 className="section-title">Safaris & <em>Tours</em></h2>
        <p className="tours-subtitle">Discover our exclusive packages tailored for unforgettable East African experiences.</p>
      </div>

      <div className="tours-list">
        {tours.map((tour, index) => (
          <div key={index} className="tour-row reveal">
            <div className="tour-img-wrap hover-target">
              <img src={tour.image} alt={tour.title} />
              <div className="tour-tags-overlay">
                {tour.tags.map((tag, i) => <span key={i}>{tag}</span>)}
              </div>
            </div>
            <div className="tour-content">
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
              <Link to="/contact" className="btn-outline hover-target" style={{marginTop: '1rem'}}>
                Book This Tour
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="tours-cta reveal">
        <div className="tc-content">
          <h3>Want a Custom Package?</h3>
          <p>We can tailor-make packages to suit your specific needs, interests, pace, and budget.</p>
          <Link to="/contact" className="btn-primary hover-target" style={{marginTop: '2rem'}}>
            Contact Our Consultants
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tours;

