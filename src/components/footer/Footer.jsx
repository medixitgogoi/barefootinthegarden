import React from 'react';
import './footer.css';
import logo from '../../assets/images/logo.png';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-logo-name">
          <img src={logo} alt="barefootinthegarden logo" className="footer-logo" />
          <p className="footer-brand">barefootinthegarden</p>
        </div>
        <div className="footer-info">
          <p className="footer-copy">© Copyright 2025</p>
          <p className="footer-tagline">BAREFOOTINTHEGARDEN. All Rights Reserved.</p>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-links">
            <div className="link-columns">
            <div className="link-column">
                <a href="/">Home</a>
                <a href="/contact">Contact us</a>
            </div>
            <div className="link-column">
                <a href="/how-it-works">How it works</a>
                <a href="/privacy-policy">Privacy policy</a>
            </div>
            <div className="link-column">
                <a href="/our-mission">Our mission</a>
                <a href="/blog">Blog</a>
            </div>
            <div className="link-column">
                <a href="/shipping-policy">Shipping Policy</a>
                <a href="/refund-policy">Refund Policy</a>
            </div>
            </div>

            <button className="contact-button">CONTACT US</button>
        </div>

        <div className="footer-divider"></div>

        <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
