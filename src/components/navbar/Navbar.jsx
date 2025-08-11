import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const NAVBAR_HEIGHT = 110; // Corresponds to the height in Navbar.css

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Apply scrolled effect based on scroll position
            if (currentScrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Show/hide navbar based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > NAVBAR_HEIGHT * 2) {
                setIsVisible(false); // Hide when scrolling down
            } else if (currentScrollY < lastScrollY || currentScrollY <= NAVBAR_HEIGHT * 2) {
                setIsVisible(true); // Show when scrolling up or near the top
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="navbar-main-content">
                <div className="navbar-left">
                    <Link to="/" className='logo-container'>
                        <img src="/images/logo.png" alt="barefootinthegarden" className="logo-image" />
                        <p className='logo'>barefootinthegarden</p>
                    </Link>
                </div>
                <ul className="nav-list">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/about" className="nav-link">About Us</Link></li>
                    <li><Link to="/service" className="nav-link">Services</Link></li>
                    {/* Assuming you have a contact page route setup similarly */}
                    <li><Link to="/contact" className="nav-link">Contact us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;