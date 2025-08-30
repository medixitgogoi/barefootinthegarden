import React from 'react';
import './contact.css';

// The new CSS will be in a separate file, 
// so you would typically import it like this:
// import './ContactPage.css';

const Contact = () => {
  // In a real application, you would link the external CSS file.
  // For this example, the styles are provided in a separate immersive.
  return (
    <div className="contact-page-wrapper">
      <div className="contact-page-container">
        {/* Left Side: Form */}
        <div className="contact-form-section">
          <div className="form-header">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you. Send us a message and we'll get back to you shortly.</p>
          </div>
          <form className="contact-form-content">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="form-submit-button">Send Message</button>
          </form>
        </div>

        {/* Right Side: Contact Info & Image */}
        <div className="contact-info-section">
          <img
            src="/images/img5.jpg"
            alt="Artisan coffee"
            className="contact-info-image"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x800/07553d/fef191?text=Bloom'; }}
          />
          <div className="contact-details">
            <h3>Our Information</h3>
            <p>Bishnu Rabha Path, Ghoramara Chariali, BIKASH NAGAR, Guwahati, PIN-781029</p>
            <p><strong>Email:</strong> info@barefootinthegarden.in</p>
            <p><strong>Phone:</strong> +91 9706044374</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
