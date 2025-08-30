import React from 'react';
import './stay.css'; // This will be the new CSS file

// --- SVG Icons (can be moved to a separate file) ---
const ICONS = {
  WIFI: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>,
  TV: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>,
  KITCHEN: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z"></path></svg>,
  LINENS: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2"></path><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>,
  COFFEE: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>,
  PATIO: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-6M12 8V2M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M16 12h6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"></path></svg>
};

// --- Component for individual feature cards ---
const FeatureCard = ({ imageUrl, title, description, reverse = false }) => (
  <div className={`feature-card ${reverse ? 'reverse' : ''}`}>
    <div className="feature-image-wrapper">
      <img src={imageUrl} alt={title} className="feature-image" />
    </div>
    <div className="feature-text">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

// --- Component for Local Area spots ---
const LocalSpotCard = ({ imageUrl, name, category }) => (
  <div className="local-spot-card">
    <div className="local-spot-image-wrapper">
      <img src={imageUrl} alt={name} className="local-spot-image" />
    </div>
    <div className="local-spot-text">
      <h4>{name}</h4>
      <p>{category}</p>
    </div>
  </div>
);

// --- Component for a single Amenity item ---
const AmenityItem = ({ icon, text }) => (
  <li className="amenity-item">
    <span className="amenity-icon">{icon}</span>
    <span>{text}</span>
  </li>
);

// --- Component for Guest Testimonials ---
const GuestStory = ({ quote, name, imageUrl }) => (
  <div className="guest-story">
    <img src={imageUrl} alt={name} className="guest-avatar" />
    <blockquote>"{quote}"</blockquote>
    <cite>- {name}</cite>
  </div>
);

// --- Main Stay Component ---
const Stay = () => {
  return (
    <div className="stay-container">
      {/* --- Hero Section --- */}
      <header className="stay-hero">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop"
          alt="Modern Airbnb exterior"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>The Stay</h1>
          <p>Your serene getaway, thoughtfully designed for comfort and relaxation.</p>
        </div>
      </header>

      <main className="stay-content">
        {/* --- About the Units Section --- */}
        <section id="about" className="stay-section">
          <h2 className="section-title">A Space to Unwind</h2>
          <p className="section-intro">
            Discover our meticulously designed private units, created to be your home away from home. Each space combines modern aesthetics with cozy comforts, ensuring a memorable and relaxing experience.
          </p>
          <FeatureCard
            imageUrl="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop"
            title="Spacious & Bright Interiors"
            description="Our units are designed with open-plan living in mind, featuring large windows that flood the space with natural light. The minimalist decor is accented with warm, natural materials to create a calming atmosphere."
          />
        </section>

        {/* --- Heated Pool Section --- */}
        <section id="pool" className="stay-section">
          <h2 className="section-title">Your Private Oasis</h2>
          <p className="section-intro">
            Dive into relaxation, no matter the season. Our state-of-the-art heated pool is the perfect place to unwind.
          </p>
          <FeatureCard
            imageUrl="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?q=80&w=2670&auto=format&fit=crop"
            title="Year-Round Comfort"
            description="The prefab pool is temperature-controlled, making it ideal for a refreshing morning swim or a soothing evening dip. Surrounded by a comfortable deck, it's your private oasis."
            reverse={true}
          />
        </section>

        {/* --- Interiors & Amenities Section --- */}
        <section id="amenities" className="stay-section">
          <h2 className="section-title">Curated Comforts</h2>
          <p className="section-intro">
            Every detail is considered for your comfort. Enjoy modern conveniences in a beautifully designed space, making your stay both seamless and special.
          </p>
          <div className="amenities-container">
            <div className="amenities-image-showcase">
              <img src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2670&auto=format&fit=crop" alt="Stylish and comfortable living room" />
            </div>
            <ul className="amenities-list-detailed">
              <AmenityItem icon={ICONS.WIFI} text="High-speed Wi-Fi" />
              <AmenityItem icon={ICONS.TV} text="Smart TV with Streaming" />
              <AmenityItem icon={ICONS.KITCHEN} text="Fully Equipped Kitchen" />
              <AmenityItem icon={ICONS.LINENS} text="Luxury Linens & Towels" />
              <AmenityItem icon={ICONS.COFFEE} text="Complimentary Coffee & Tea" />
              <AmenityItem icon={ICONS.PATIO} text="Private Patio or Balcony" />
            </ul>
          </div>
        </section>

        {/* --- Local Area Guide Section --- */}
        <section id="local-guide" className="stay-section">
          <h2 className="section-title">Explore the Neighborhood</h2>
          <p className="section-intro">
            Our location is the perfect base to discover local charm. From cozy cafes to scenic trails, there's something nearby for everyone.
          </p>
          <div className="local-guide-grid">
            <LocalSpotCard
              imageUrl="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop"
              name="The Daily Grind"
              category="5 min walk"
            />
            <LocalSpotCard
              imageUrl="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=2670&auto=format&fit=crop"
              name="Oakwood Park Trail"
              category="10 min drive"
            />
            <LocalSpotCard
              imageUrl="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2670&auto=format&fit=crop"
              name="Lakeside Rentals"
              category="Kayaks & Paddleboards"
            />
            <LocalSpotCard
              imageUrl="https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?q=80&w=2574&auto=format&fit=crop"
              name="Artisan's Market"
              category="Local Crafts & Food"
            />
          </div>
        </section>

        {/* --- Guest Stories Section --- */}
        <section id="stories" className="stay-section">
          <h2 className="section-title">Guest Stories</h2>
          <div className="guest-stories-wrapper">
            <GuestStory
              quote="An absolute gem! The place was spotless, beautifully decorated, and the pool was a dream. We felt so relaxed and can't wait to come back."
              name="Priya & Rohan"
              imageUrl="https://placehold.co/100x100/EFEFEF/333?text=P+R"
            />
            <GuestStory
              quote="The perfect weekend getaway. Every little detail was thought of, from the coffee machine to the comfy bed. It exceeded all our expectations."
              name="Aarav M."
              imageUrl="https://placehold.co/100x100/EFEFEF/333?text=A+M"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stay;
