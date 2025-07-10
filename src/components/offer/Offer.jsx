import React from 'react';
import './offer.css';

import airbnbImage from '../../assets/images/airbnb.jpg';
import cafeImage from '../../assets/images/cafe.jpg';
import vendingMachinesImage from '../../assets/images/vending-machines.jpg';

const offerData = [
  {
    title: "AirBnb",
    bgColor: "#F8F9FA",
    textColor: "#2d3748",
    borderColor: "#4a5568",
    imageUrl: airbnbImage, // Use the imported image variable
  },
  {
    title: "Cafe",
    bgColor: "#F1EDE7",
    textColor: "#2d3748",
    borderColor: "#4a5568",
    imageUrl: cafeImage, // Use the imported image variable
  },
  {
    title: "Vending machines",
    bgColor: "#D1B9A8",
    textColor: "#2d3748",
    borderColor: "#4a5568",
    imageUrl: vendingMachinesImage, // Use the imported image variable
  },
];
// The OfferCard component remains the same
const OfferCard = ({ title, bgColor, textColor, borderColor, imageUrl }) => {
  return (
    <div
      className="offer-card"
      style={{ backgroundColor: bgColor }}
    >
      <div>
        <h2
          className="offer-card-title"
          style={{ color: textColor }}
        >
          {title}
        </h2>
        <button
          className="offer-button"
          style={{
            borderColor: borderColor,
            color: textColor,
          }}
        >
          <span className='offer-button-text'>Know More</span>
        </button>
      </div>
      <div className="offer-image-wrapper">
        <img
          src={imageUrl} // This will now be your local image path
          alt={title}
          className="offer-image"
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/400x300/ccc/333?text=Image+Error`;
            e.currentTarget.alt = "Error loading image";
          }}
        />
      </div>
    </div>
  );
};

// The Offer component remains the same
const Offer = () => {
  return (
    <div className="offer-container">
      <div className="offer-header">
        <h1 className="offer-title">What We Offer</h1>
        <p className="offer-subtitle">Explore our unique spaces and services.</p>
      </div>
      <div className="offer-grid">
        {offerData.map((offer, index) => (
          <OfferCard
            key={index}
            title={offer.title}
            bgColor={offer.bgColor}
            textColor={offer.textColor}
            borderColor={offer.borderColor}
            imageUrl={offer.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Offer;
