// Contact.jsx
import React, { useState } from 'react';
import './contact.css';
import img4 from '/images/img4.jpg'; // Ensure this path is correct

const Contact = () => {
    const [inquiryType, setInquiryType] = useState('General');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
    };

    return (
        <section className="contact-section" style={{ backgroundImage: `url(${img4})` }}> {/* Apply background image here */}
            <div className="contact-overlay"> {/* This div will create a consistent overlay for the whole section */}
                <div className="contact-left">
                    <div className="contact-content">
                        <div className='contact-info-heading'>
                            <h1>You Have Questions, We Have Answers</h1>
                            <p>
                                Discover experiences you won't find anywhere else - thoughtfully designed to immerse you in the heart of the destination. Soulful stories waiting to be lived.
                            </p>
                        </div>

                        <div className="contact-info-grid">
                            <div className="contact-location">
                                <h3>Location</h3>
                                <p>Bishnu Rabha Path, Ghoramara Chariali</p>
                                <p>BIKASH NAGAR, Guwahati</p>
                                <p>Assam, India</p>
                                <p>PIN-781029</p>
                            </div>
                            <div className="contact-social-media">
                                <h3>Social Media</h3>
                                <ul>
                                    <li>Instagram</li>
                                    <li>LinkedIn</li>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                </ul>
                            </div>
                            <div className="contact-email">
                                <h3>Email</h3>
                                <p>info@craftedcomfort.in</p>
                            </div>
                            <div className="contact-phone">
                                <h3>Contact</h3>
                                <p>+91 9706044374</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-right"> {/* No specific style here, background handled by CSS */}
                    <h2>Tell Us What You Need</h2>
                    <p>Our team is ready to assist you with every detail, big or small.</p>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <input type="text" placeholder="First Name" required />
                            <input type="text" placeholder="Last Name" required />
                        </div>
                      
                        <div className="form-row">
                            <input type="email" placeholder="Email Address" required />
                        </div>

                        <div className="form-type-inquiry">
                            <h3>Type of Inquiry</h3>
                            <div className="inquiry-buttons">
                                {['Booking', 'General', 'Wedding', 'Corporate', 'Others'].map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        className={inquiryType === type ? 'active' : ''}
                                        onClick={() => setInquiryType(type)}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="form-row full-width">
                            <textarea placeholder="Message (Optional)"></textarea>
                        </div>

                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;