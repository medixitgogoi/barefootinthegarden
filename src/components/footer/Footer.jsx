import React from 'react';
import './footer.css';
import logo from '/images/logo.png';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="redesigned-footer">
      <div className="footer-main-content">
        {/* Column 1: Brand Info */}
        <div className="footer-column brand-info">
          <div className="footer-logo-container">
            <img src={logo} alt="Barefoot in the Garden Logo" className="footer-logo-img" onError={(e) => e.currentTarget.src = 'https://placehold.co/100x100/E0E7FF/4338CA?text=Logo'} />
            <span className="footer-brand-name">barefootinthegarden</span>
          </div>
          <p className="footer-tagline">
            A living, breathing reflection of modern urban life, where every detail is an experience.
          </p>
        </div>

        {/* Column 2: Services */}
        <div className="footer-column links">
          <h3 className="footer-heading">Services</h3>
          <a href="/stay">The Stay</a>
          <a href="/cafe">The Cafe</a>
          <a href="/vend">Vending Machines</a>
          <a href="https://craftedcomfort.in/" target="_blank" rel="noopener noreferrer">The Living Showroom</a>
        </div>

        {/* Column 3: Company */}
        <div className="footer-column links">
          <h3 className="footer-heading">Company</h3>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          {/* <a href="#">Careers</a>
          <a href="#">Press</a> */}
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="copyright-text">© 2025 barefootinthegarden. All Rights Reserved.</p>
        <div className="footer-social-icons">
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
