import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Tours.css';

const Tours = () => {
  const tours = [
    {
      title: "Safari Adventures",
      image: "./safari.jpg",
      description: "Wildlife safaris within Kenya and other African destinations.",
      tags: ["Wildlife", "Camping", "Photography"]
    },
    {
      title: "Coastal Escapes",
      image: "./beach.jpg",
      description: "Relaxing getaways to pristine beaches and luxury resorts.",
      tags: ["Beach", "Relaxation", "Family"]
    },
    {
      title: "Mountain Hiking",
      image: "./mountain.jpg",
      description: "Thrilling climbs and nature hikes for the adventurous soul.",
      tags: ["Adventure", "Hiking", "Nature"]
    }
  ];

  return (
    <div className="tours-page pt-32">
      <div className="page-header section-purple">
        <div className="container text-center">
          <h1 className="section-title">Safaris & Tours</h1>
          <p className="section-subtitle light mx-auto">
            Discover our curated packages tailored for unforgettable experiences.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="tours-grid">
            {tours.map((tour, index) => (
              <div key={index} className="tour-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="tour-img-wrap">
                  <img src={tour.image} alt={tour.title} className="tour-img" />
                  <div className="tour-tags">
                    {tour.tags.slice(0,2).map((tag, i) => (
                      <span key={i} className="tour-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="tour-content">
                  <h3>{tour.title}</h3>
                  <p>{tour.description}</p>
                  <Link to="/contact" className="tour-link">
                    Book Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="custom-package mt-16 glass-card text-center">
            <h3>Want a Custom Package?</h3>
            <p className="mb-8">We can tailor-make packages to suit your specific needs, interests, and budget.</p>
            <Link to="/contact" className="btn btn-primary">Contact Our Consultants</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;
