import React from 'react';
import './about.css'; // Import the stylesheet

// Import images
import img1 from '/images/img1.jpg';
import img2 from '/images/img2.jpg';
import img3 from '/images/img3.jpg';
import img4 from '/images/img4.jpg';
import img5 from '/images/img5.jpg';

// It's good practice to define icons as components for reusability and clarity.
const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon">
    {children}
  </a>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.4-2.8 1.4c-.7 0-1.4-.2-1.4-.2s-1.4 4.4-4.2 6.3c-2.8 1.9-5.6 2.8-8.4 2.8s-5.6-1.9-5.6-1.9s2.8.9 5.6.9c2.8 0 5.6-1.9 5.6-1.9s-2.8.9-4.2-1.9c-1.4-2.8-1.4-4.7-1.4-4.7s.9.4 1.4.4c-.5-1.3-1-2.6-1-4.2 0-2.3 1-4.6 3.3-6.1s4.7-2.6 7-2.6c.3 0 .5 0 .8.1z"></path></svg>
);

const About = () => {

  // Fallback image handler
  const onImageError = (e) => {
    const placeholderText = e.target.alt.replace(/\s/g, '+');
    e.target.src = `https://placehold.co/600x400/fbece2/4d2b22?text=${placeholderText}`;
  };

  return (
    <main className="about-container">
      {/* Header Section */}
      <header className="about-header">
        <h1>Barefoot in the Garden</h1>
        <p className="subtitle">By Crafted Comforts</p>
      </header>

      {/* Introduction Section */}
      <section className="about-section">
        <div className="text-content">
          <h2>A Feeling. A Way of Living.</h2>
          <p>
            Tucked away in the quiet greens of Digaru, where the air smells like rain-soaked earth and time moves at its own rhythm, there’s a space waiting to be discovered. Not a showroom. Not just a stay. But a feeling. Welcome to Barefoot in the Garden—a living, breathing canvas created by Crafted Comforts, where architecture kisses the landscape and comfort is not a luxury, but a given. This isn’t just where design meets nature—it’s where your future comes into focus.
          </p>
        </div>
        <div className="image-content">
          <img src={img1} alt="Serene Garden" onError={onImageError} />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="about-section reverse">
        <div className="text-content">
          <h2>Our Philosophy: Crafted Comforts</h2>
          <p>
            Crafted in partnership with Looms Craft, every corner here is a whisper of possibility, built with modular precision and wrapped in warmth. Here, you don’t just walk through spaces—you feel them. This is where you see, in real time, how beauty, functionality, and sustainability can dance together in harmony. Where homes are not just built—they’re curated, seasoned, and served.
          </p>
        </div>
        <div className="image-content">
          <img src={img2} alt="Crafted Interior" onError={onImageError} />
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2>The Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <img src={img3} alt="Sunlit Cafe" onError={onImageError} />
            <h3>Sip & Savor</h3>
            <p>Sip soulful coffee in a sunlit prefab café designed for slow mornings and inspired conversations. Taste our table—where every dish is an ode to simple, satisfying food made with love.</p>
          </div>
          <div className="experience-card">
            <img src={img4} alt="Cozy Airbnb" onError={onImageError} />
            <h3>Stay & Unwind</h3>
            <p>Stay a while in our thoughtfully designed prefab Airbnb, complete with a heated pool that cocoons you in comfort—rain or shine.</p>
          </div>
          <div className="experience-card">
            <img src={img5} alt="Curated Decor" onError={onImageError} />
            <h3>Discover & Reimagine</h3>
            <p>And just when you think you’ve seen it all, you realize—the chair beneath you, the art on the wall, the pendant lights above your table—it’s all for sale.</p>
          </div>
        </div>
      </section>

      {/* --- NEW & IMPROVED FOOTER --- */}
      <footer className="about-footer">
        <div className="footer-content">
          <h2>
            Experience Prefab Living Done Right
          </h2>
          <p className="footer-description">
            Your journey into thoughtful, sustainable design begins here. Schedule a visit to walk through our spaces, or book a stay to fully immerse yourself.
          </p>
          <a href="#contact" className="footer-cta">
            Schedule a Visit
          </a>
          <div className="footer-socials">
            <SocialIcon href="https://facebook.com">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon href="https://instagram.com">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon href="https://twitter.com">
              <TwitterIcon />
            </SocialIcon>
          </div>
          <p className="footer-closing-text">
            <strong>Welcome home.</strong>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default About;
