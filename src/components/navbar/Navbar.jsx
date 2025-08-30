import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    // --- IMPROVEMENT 1: Use useRef for lastScrollY ---
    // This prevents re-renders on every scroll and avoids stale state in the event listener.
    const lastScrollY = useRef(0);

    const NAVBAR_HEIGHT = 100;

    // Effect for handling scroll behavior to show/hide navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Change navbar background on scroll
            setIsScrolled(currentScrollY > 10);

            // Determine scroll direction to show/hide the navbar
            if (currentScrollY > lastScrollY.current && currentScrollY > NAVBAR_HEIGHT) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            // Update the last scroll position
            lastScrollY.current = currentScrollY;
        };

        // Add event listener on mount
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Clean up event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array ensures this effect runs only once

    // Effect for locking body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto'; // Cleanup on unmount
        };
    }, [isMenuOpen]);

    // Toggles the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setOpenDropdown(null); // Close dropdowns when closing menu
        }
    };

    // Toggles mobile dropdowns
    const handleDropdownClick = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    // Closes the mobile menu (used by links)
    const closeMenu = () => {
        setIsMenuOpen(false);
        setOpenDropdown(null);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/" className='logo-container' onClick={closeMenu}>
                        <img src="/images/logo.png" alt="barefootinthegarden" className="logo-image" />
                        <span className='logo-text'>barefootinthegarden</span>
                    </Link>
                </div>

                <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link></li>

                    <li
                        className={`dropdown ${openDropdown === 'services' ? 'open' : ''}`}
                        onClick={() => handleDropdownClick('services')} // This works for mobile
                    >
                        <span className="nav-link dropdown-toggle">Services ▾</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/cafe" onClick={closeMenu}>The Cafe</Link></li>
                            <li><Link to="/stay" onClick={closeMenu}>The Stay</Link></li>
                            <li><a href="https://craftedcomfort.in" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>The Living Showroom</a></li>
                            <li><Link to="/vend" onClick={closeMenu}>Vending Machines</Link></li>
                        </ul>
                    </li>

                    <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact us</Link></li>
                </ul>

                <div className="hamburger-menu" onClick={toggleMenu}>
                    {/* The 'active' class on the parent will trigger the animation */}
                    <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;