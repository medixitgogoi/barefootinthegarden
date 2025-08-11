import React from 'react';
import './gallery.css'; // Import the CSS file
import airbnbImage from '/images/airbnb.jpg';
import cafeImage from '/images/cafe.jpg';
import vendingMachinesImage from '/images/vending-machines.jpg';

const Gallery = () => {
  return (
    <section className="your-stay-section">
      <div className="your-stay-content-wrapper">
        <div className="your-stay-text-content">
          <h2 className="section-title">Your Stay, Your Style, Your Home</h2>
          <p className="section-description">
            From the moment you step into a Barefoot in the Garden space, you're surrounded by carefully curated interiors, stunning tableware, elegant furniture, and unique lighting – <strong className="highlight">all available for purchase</strong>. Whether it's a small memento or a complete home makeover, you can take what inspires you home.
          </p>
          <p className="section-description">
            If something catches your eye but isn't quite right, our partners at Crafted Comforts can <strong className="highlight">recreate and customize it just for you</strong>.
          </p>
        </div>
        <div className="your-stay-images">
          <img src={airbnbImage} alt="Barefoot in the Garden interior" className="image-card" />
          <img src={cafeImage} alt="Barefoot in the Garden cafe" className="image-card" />
          <img src={vendingMachinesImage} alt="Barefoot in the Garden ven" className="image-card" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
