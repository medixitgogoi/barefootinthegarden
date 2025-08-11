import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import img1 from '/images/img6.jpg';
import img2 from '/images/img5.jpg';
import img3 from '/images/img4.jpg';
import './home.css'; // Your styles for the home page content
// --- Font Awesome Imports ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// Removed unused icons, keeping only those for the carousel
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Concept from '../../components/concept/Concept';
import Offer from '../../components/offer/Offer';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Gallery from '../../components/gallery/Gallery';

// Add only the necessary icons to the library
library.add(faArrowLeft, faArrowRight);
// --- End Font Awesome Imports ---

const Home = () => {
  const carouselImages = [img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, []); // Dependency array is empty to run only once

  return (
    <div className="home-page">
      {/* Navbar has been removed and placed in the Layout component */}

      {/* Hero Section / Carousel */}
      <div className="hero-section" style={{ backgroundImage: `url(${carouselImages[currentImageIndex]})` }}>
        <div className="hero-content">
          <h1 className="hero-title">New Zero Track Pro Recessed</h1>
          <p className="hero-description">
            Designed to integrate smoothly into the ceiling and preserve the
            purity of architectural lines.
          </p>
          <Link to="/discover-more" className="discover-more-button">DISCOVER MORE</Link>
        </div>

        {/* Carousel Navigation */}
        <div className="carousel-nav">
          <div className="carousel-dots">
            {carouselImages.map((_, index) => (
              <span
                key={index}
                className="dot"
                style={{
                  width: index === currentImageIndex ? '30px' : '8px',
                  backgroundColor: index === currentImageIndex ? '#fff' : '#aaa',
                }}
                onClick={() => setCurrentImageIndex(index)}
              ></span>
            ))}
          </div>
          <div className="carousel-arrows">
            <button onClick={prevSlide} className="arrow-button"><FontAwesomeIcon icon="arrow-left" /></button>
            <button onClick={nextSlide} className="arrow-button"><FontAwesomeIcon icon="arrow-right" /></button>
          </div>
        </div>
      </div>

      {/* Other page sections */}
      <Concept />
      <Gallery />
      <Offer />
      <Contact />
    </div>
  );
};

export default Home;