import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import './Home.css'; // Import your CSS file
// --- Font Awesome Imports ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faUser, faShoppingBag, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png';
import Concept from '../../components/concept/Concept';
import Offer from '../../components/offer/Offer';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Gallery from '../../components/gallery/Gallery';

// Add the imported icons to the library
library.add(faSearch, faUser, faShoppingBag, faArrowLeft, faArrowRight);
// --- End Font Awesome Imports ---

const HomePage = () => {

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
    }, 6000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="home-page">
      {/* Dark overlay for navbar visibility */}
      <div className="navbar-overlay">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/" className='logo-container'>
              <img src={logo} alt="barefootinthegarden" className="logo-image" /> {/* Added img tag */}
              <p className='logo'>barefootinthegarden</p>
            </Link>
          </div>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/" className="nav-link">About Us</Link></li>
            <li><Link to="/" className="nav-link">Services</Link></li>
            <li><Link to="/" className="nav-link">Contact us</Link></li>
          </ul>
        </nav>
      </div>

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
            {/* Updated carousel arrow icons */}
            <button onClick={prevSlide} className="arrow-button"><FontAwesomeIcon icon="arrow-left" /></button>
            <button onClick={nextSlide} className="arrow-button"><FontAwesomeIcon icon="arrow-right" /></button>
          </div>
        </div>
      </div>

      <Concept />
      <Gallery />
      <Offer />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;