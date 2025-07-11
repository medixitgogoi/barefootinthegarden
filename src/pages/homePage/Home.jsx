import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import img1 from '../../assets/images/img6.jpg';
import img2 from '../../assets/images/img5.jpg';
import img3 from '../../assets/images/img4.jpg';
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

const Home = () => {

  const carouselImages = [img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Navbar states
  const [isScrolled, setIsScrolled] = useState(false); // Controls background/blur and justify-content
  const [isVisible, setIsVisible] = useState(true); // Controls whether the navbar is shown/hidden
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks previous scroll position for direction

  // Define the navbar height. Make sure this matches your CSS `.navbar` height.
  const NAVBAR_HEIGHT = 110;

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
  }, [currentImageIndex]);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Effect 1: Navbar appearance (background, blur, box-shadow) and justify-content
      // This will activate as soon as user scrolls down from the very top.
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Effect 2: Show/hide navbar based on scroll direction and position
      // Hide if scrolling down and past double the navbar's height
      if (currentScrollY > lastScrollY && currentScrollY > NAVBAR_HEIGHT * 2) {
        setIsVisible(false);
      }
      // Show if scrolling up, or if at or near the top of the page (within double navbar height)
      else if (currentScrollY < lastScrollY || currentScrollY <= NAVBAR_HEIGHT * 2) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Dependency array includes lastScrollY to ensure the effect re-runs when scroll position updates

  return (
    <div className="home-page">
      {/* Navbar - Apply isScrolled and isVisible/hidden classes dynamically */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="navbar-main-content">
          <div className="navbar-left">
            <Link to="/" className='logo-container'>
              <img src={logo} alt="barefootinthegarden" className="logo-image" />
              <p className='logo'>barefootinthegarden</p>
            </Link>
          </div>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/" className="nav-link">About Us</Link></li>
            <li><Link to="/" className="nav-link">Services</Link></li>
            <li><Link to="/" className="nav-link">Contact us</Link></li>
          </ul>
        </div>
      </nav>

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

      <Concept />
      <Gallery />
      <Offer />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;