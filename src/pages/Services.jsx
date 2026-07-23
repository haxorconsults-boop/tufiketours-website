import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const services = [
    {
      id: "errands",
      num: "01",
      icon: "🏃",
      title: "Errands by Tufike",
      description: "Vehicle pick-ups & drop-offs, vehicle supervision at garages, spare-parts shopping, parcel handling, shopping errands and document delivery.",
      tag: "Logistics · Nairobi & Beyond",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80"
    },
    {
      id: "group-tours",
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
      id: "driver",
      num: "04",
      icon: "🚗",
      title: "Driver on Call & Car Hire",
      description: "Professional chauffeurs for your own vehicle, or complete self-drive and car hire coordination including airport transfers and corporate travel.",
      tag: "Sedan · SUV · Van · Luxury",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80"
    },
    {
      id: "accommodation",
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
      id: "foreign",
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
            {s.id ? (
              <a href={`#${s.id}`} style={{display: 'block', height: '100%'}}>
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className="srv-overlay">
                  <div className="srv-num">{s.num}</div>
                  <div className="srv-icon">{s.icon}</div>
                  <div className="srv-title">{s.title}</div>
                  <p className="srv-desc">{s.description}</p>
                  <span className="srv-tag">{s.tag}</span>
                  <div className="read-more-hint">Read More ↓</div>
                </div>
              </a>
            ) : (
              <>
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className="srv-overlay">
                  <div className="srv-num">{s.num}</div>
                  <div className="srv-icon">{s.icon}</div>
                  <div className="srv-title">{s.title}</div>
                  <p className="srv-desc">{s.description}</p>
                  <span className="srv-tag">{s.tag}</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* ── DETAILED SERVICES SECTIONS ── */}
      <div className="detailed-services">

        {/* 1. Errands by Tufike */}
        <section id="errands" className="service-detail reveal">
          <div className="sd-inner">
            <div className="sd-text">
              <span className="section-label">01. Logistics</span>
              <h2>Errands by <em>Tufike</em></h2>
              <p className="sd-lead">Errands by Tufike is a product developed to help you save on your time since we understand that your time is valuable.</p>
              <p>We help in errands like:</p>
              <ul className="editorial-list">
                <li>Vehicle pick-up and drop-off at various points.</li>
                <li>Vehicles supervision during garage times.</li>
                <li>Spare part shopping in industrial and Kirinyaga road.</li>
                <li>Groceries and supermarket shopping.</li>
                <li>Pharmacy and medication pick-ups.</li>
                <li>Gift shopping pick-ups and drop-offs.</li>
                <li>Document deliveries.</li>
              </ul>
              <blockquote className="pull-quote">
                "We ensure your errands are attended in the best way possible, with rates tailor-made and discussed according to the nature of the errand ensuring friendly and affordable rates."
              </blockquote>
            </div>
            <div className="sd-image">
              <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80" alt="Errands Logistics" loading="lazy" />
            </div>
          </div>
        </section>

        {/* 2. Driver on call and car hire */}
        <section id="driver" className="service-detail reveal alt-layout">
          <div className="sd-inner">
            <div className="sd-image">
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80" alt="Driver and Car Hire" loading="lazy" />
            </div>
            <div className="sd-text">
              <span className="section-label">04. Mobility</span>
              <h2>Driver on Call & <em>Car Hire</em></h2>
              <p className="sd-lead">Our team of qualified and certified drivers ensure that your movement is met with ease and professionalism.</p>
              <p>As the company's motto suggests — "Your destination is our priority." Whether it’s for a few hours, long distance travel, corporate meetings, airport transfers, special events, or when you are just too tired to drive, Tufike ensures you get to your destination safely and on time.</p>
              <p>We also have well-maintained high- and middle-class vehicles with a professional driver for hire. Our vehicles are equipped with a tracking system that ensures our clients' safety. Our fleet is suitable for:</p>
              <ul className="editorial-list two-col">
                <li>Airport transfers</li>
                <li>Business travels</li>
                <li>Family trips</li>
                <li>Road trips</li>
                <li>Weddings & special occasions</li>
              </ul>
              <p style={{marginTop: '1.5rem', color: 'var(--gold)'}}><em>We provide flexible booking options, competitive rates, and dependable customer service to ensure every journey is smooth and stress-free.</em></p>
            </div>
          </div>
        </section>

        {/* 3. Group tour and road trips */}
        <section id="group-tours" className="service-detail reveal">
          <div className="sd-inner">
            <div className="sd-text">
              <span className="section-label">02. Travel</span>
              <h2>Group Tours & <em>Road Trips</em></h2>
              <p className="sd-lead">At Tufike Tours and Travel, we believe every journey is more memorable when shared.</p>
              <p>Our group tours and trips are carefully planned to bring together friends, families, colleagues, and adventure lovers for exciting, affordable, and well-organized travel experiences across Kenya and East Africa.</p>
              <p>From breathtaking safaris and mountain adventures to beach holidays, cultural experiences, road trips, team building events, and international excursions, we handle every detail so you can focus on creating unforgettable memories.</p>
              
              <div className="sd-split-lists">
                <div>
                  <h4>Our group tours include:</h4>
                  <ul className="editorial-list">
                    <li>Weekend road trips and adventure escapes</li>
                    <li>Wildlife safaris and national park tours</li>
                    <li>Hiking and mountain expeditions</li>
                    <li>Beach vacations and island getaways</li>
                    <li>Cultural and heritage experiences</li>
                    <li>Corporate retreats and team building events</li>
                    <li>School, church, and youth excursions</li>
                    <li>Local, regional, and international group travel</li>
                  </ul>
                </div>
                <div>
                  <h4>Why travel with Tufike?</h4>
                  <ul className="editorial-list check-list">
                    <li>Professionally planned itineraries</li>
                    <li>Affordable group travel packages</li>
                    <li>Comfortable and reliable transportation</li>
                    <li>Experienced guides and tour coordinators</li>
                    <li>Safe, fun, and memorable travel experiences</li>
                    <li>Flexible packages for both small and large groups</li>
                  </ul>
                </div>
              </div>
              
              <blockquote className="pull-quote" style={{marginTop: '2rem'}}>
                "Whether you are seeking adventure, relaxation, learning, or cultural discovery, Tufike is committed to delivering exceptional group travel experiences that create lifelong memories."
              </blockquote>
            </div>
          </div>
        </section>

        {/* 4. Hotel and Airbnb booking */}
        <section id="accommodation" className="service-detail reveal alt-layout">
          <div className="sd-inner">
            <div className="sd-image">
              <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80" alt="Hotel and Airbnb" loading="lazy" />
            </div>
            <div className="sd-text">
              <span className="section-label">05. Stays</span>
              <h2>Hotel & Airbnb <em>Booking</em></h2>
              <p className="sd-lead">Find a perfect stay with Tufike Tours and Travel. We understand that where you stay is as important as where you go.</p>
              <p>Our hotel and Airbnb booking service is designed to help travelers find comfortable, secure, and affordable accommodation that suits their budget, lifestyle, and travel needs.</p>
              <p>Whether you are travelling for business, leisure, a family holiday, a romantic getaway, a group adventure, or a long-term stay, we connect you with carefully selected hotels, lodges, resorts, guest houses, and Airbnb properties across Kenya and select international destinations. Our team takes the stress out of accommodation planning by comparing options and securing the best matches for your preference.</p>
              
              <div className="sd-split-lists">
                <div>
                  <h4>Our booking services include:</h4>
                  <ul className="editorial-list">
                    <li>Hotel reservations</li>
                    <li>Airbnb bookings</li>
                    <li>Luxury resorts and safari lodges</li>
                    <li>Budget and family-friendly accommodation</li>
                    <li>Holiday homes and vacation rentals</li>
                    <li>Group accommodation for tours and events</li>
                  </ul>
                </div>
                <div>
                  <h4>Why book with Tufike?</h4>
                  <ul className="editorial-list check-list">
                    <li>Carefully selected, trusted accommodation partners</li>
                    <li>Competitive prices and value for money</li>
                    <li>Accommodation tailored to your budget and preferences</li>
                    <li>Support before, during, and after your stay</li>
                    <li>Fast, secure, and hassle-free booking process</li>
                    <li>Personalized recommendations based on your plans</li>
                  </ul>
                </div>
              </div>

              <p style={{marginTop: '2rem', color: 'var(--gold)'}}><em>Book with confidence and let Tufike Tours and Travel take care of your accommodation while you focus on your journey.</em></p>
            </div>
          </div>
        </section>

        {/* 5. Foreigner facilitation and services */}
        <section id="foreign" className="service-detail reveal">
          <div className="sd-inner">
            <div className="sd-text">
              <span className="section-label">08. International</span>
              <h2>Foreigner Facilitation & <em>Services</em></h2>
              <p className="sd-lead">Making your stay in Kenya and East Africa easy, comfortable, and stress-free.</p>
              <p>At Tufike Tours and Travel, we understand that relocating to or visiting a new country can be exciting and challenging. Our foreigner facilitation services are designed to help visitors settle in quickly and confidently while carrying out their work, research, volunteer programs, business activities, or extended travel.</p>
              <p>When visiting for academic research, field studies, humanitarian work, business, media production, internships, surveys, cultural exchange, or any professional assignment, our local team provides reliable support to help you navigate unfamiliar environments with ease. We act as your trusted local partner, offering practical assistance and local knowledge so you can focus on achieving your objectives while we take care of the logistics.</p>

              <div className="sd-split-lists">
                <div>
                  <h4>Our Services</h4>
                  <ul className="editorial-list">
                    <li>Local orientation and destination guidance</li>
                    <li>Airport meet and greet services</li>
                    <li>Transportation and mobility support</li>
                    <li>Professional driver and vehicle arrangements</li>
                    <li>Assistance in locating offices, institutions, and essential services</li>
                    <li>Translation and local communication support</li>
                    <li>Coordination of errands and day-to-day logistics</li>
                    <li>Customized assistance based on your individual needs throughout your stay</li>
                  </ul>
                </div>
                <div>
                  <h4>Why choose Tufike?</h4>
                  <ul className="editorial-list check-list">
                    <li>Experienced local team with extensive destination knowledge</li>
                    <li>Personalized support tailored to your purpose of travel</li>
                    <li>Reliable transportation and logistical coordination</li>
                    <li>Trusted accommodation recommendations</li>
                    <li>Responsive customer support throughout your stay</li>
                    <li>Professional, safe, and confidential services</li>
                  </ul>
                </div>
              </div>

              <blockquote className="pull-quote" style={{marginTop: '2rem'}}>
                "Let Tufike be your trusted local partner from the moment you arrive until your journey is complete. We believe every customer deserves a smooth and rewarding experience."
              </blockquote>
            </div>
          </div>
        </section>

      </div>

      {/* Editorial CTA */}
      <div className="services-cta reveal">
        <span className="section-label">Get Started</span>
        <h2>Ready to plan your next journey?</h2>
        <p>Our dedicated team builds every experience around your needs. Request a quotation today.</p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem'}}>
          <a href="https://wa.me/254718804650" className="btn-primary hover-target">WhatsApp Us</a>
          <Link to="/contact" className="btn-outline hover-target">Send Inquiry</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
