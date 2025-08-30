import React from 'react';
import { useNavigate } from 'react-router-dom'; // Although not used in the final version, good to keep if you switch back to internal links
import './offer.css';
import airbnbImage from '/images/airbnb.jpg';
import cafeImage from '/images/cafe.jpg';
import vendingMachinesImage from '/images/vending-machines.jpg';
import livingShowroomImage from '/images/airbnb.jpg';

const offerData = [
  {
    title: "The Stay",
    bgColor: "#F8F9FA",
    textColor: "#2d3748",
    borderColor: "#4a5568",
    imageUrl: airbnbImage,
    url: '/stay'
  },
  {
    title: "The Cafe",
    bgColor: "#F1EDE7",
    textColor: "#2d3748",
    borderColor: "#4a5568",
    imageUrl: cafeImage,
    url: '/cafe'
  },
  {
    title: "Vending machines",
    bgColor: "#D1B9A8",
    textColor: "#2d3748",
    borderColor: "#4a5568",
    imageUrl: vendingMachinesImage,
    url: '/vend'
  },
  {
    title: "The Living Showroom",
    bgColor: "#E2E8F0",
    textColor: "#2d3748",
    borderColor: "#4a5568",
    imageUrl: livingShowroomImage,
    url: 'https://crafted-comforts-ghy.netlify.app/'
  },
];

const OfferCard = ({ title, bgColor, textColor, borderColor, imageUrl, url }) => {
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
        <a
          href={url}
          className="offer-button"
          style={{
            borderColor: borderColor,
            color: textColor,
            textDecoration: 'none',
          }}
          // For external links, it's good practice to add these attributes
          target={url.startsWith('http') ? '_blank' : '_self'}
          rel={url.startsWith('http') ? 'noopener noreferrer' : ''}
        >
          <span className='offer-button-text'>Know More</span>
        </a>
      </div>
      <div className="offer-image-wrapper">
        <img
          src={imageUrl}
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
            {...offer} // Pass all properties from the offer object
          />
        ))}
      </div>
    </div>
  );
};

export default Offer;
