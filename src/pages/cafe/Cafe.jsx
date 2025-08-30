import React from 'react';
import './cafe.css';

// --- Reusable Components ---

// Section wrapper for consistent styling
const Section = ({ id, title, intro, children }) => (
    <section id={id} className="cafe-section">
        {title && <h2>{title}</h2>}
        {intro && <p className="section-intro">{intro}</p>}
        {children}
    </section>
);

// Component for the feature block (image + text)
const FeatureBlock = ({ title, paragraphs, imageUrl, imageAlt }) => (
    <div className="feature-container">
        <div className="feature-text">
            <h3>{title}</h3>
            {paragraphs.map((p, index) => <p key={index}>{p}</p>)}
        </div>
        <img src={imageUrl} alt={imageAlt} className="feature-image" />
    </div>
);

// Component for a single menu item
const MenuItem = ({ name, price, description }) => (
    <div className="menu-item">
        <div className="menu-item-header">
            <h4>{name}</h4>
            <span className="price">{price}</span>
        </div>
        <p>{description}</p>
    </div>
);

// Component for a single gallery image
const GalleryItem = ({ src, alt }) => (
    <div className="gallery-item">
        <img src={src} alt={alt} />
    </div>
);

// Component for a single testimonial
const Testimonial = ({ quote, name, imageUrl }) => (
    <div className="testimonial">
        <img src={imageUrl} alt={name} className="testimonial-avatar" />
        <blockquote>"{quote}"</blockquote>
        <cite>- {name}</cite>
    </div>
);


// --- Main Café Component ---
const Cafe = () => {
    // Note: Image paths are placeholders.
    return (
        <div className="cafe-container">
            {/* --- Hero Section --- */}
            <header className="cafe-hero">
                <img
                    src="/images/img1.jpg"
                    alt="Interior of a cozy, contemporary café"
                    className="hero-image"
                />
                <div className="hero-text">
                    <h1>The Café</h1>
                    <p>A cozy and contemporary retreat for coffee lovers and food enthusiasts.</p>
                </div>
            </header>

            <main className="cafe-content">
                {/* --- About/Features Section --- */}
                <Section id="about">
                    <FeatureBlock
                        title="Cozy & Contemporary Design"
                        paragraphs={[
                            "Our café is built with a modern prefab design, focusing on natural light, warm woods, and comfortable seating. It's a space created for connection, creativity, and quiet moments.",
                            "Every corner is crafted to feel like a home away from home, combining a sleek, contemporary atmosphere with the undeniable comfort of your favorite cozy nook."
                        ]}
                        imageUrl="/images/img2.jpg"
                        imageAlt="Bright interior of the café with comfortable seating"
                    />
                </Section>

                {/* --- Sample Menu Section --- */}
                <Section
                    id="menu"
                    title="A Taste of Our Menu"
                    intro="We believe in simple, high-quality ingredients. Our menu features artisanal coffee, freshly baked pastries, and wholesome bites, all made in-house."
                >
                    <div className="menu-grid">
                        <MenuItem
                            name="Masala Chai Latte"
                            price="₹180"
                            description="Aromatic spiced tea with perfectly steamed milk, a comforting classic with a modern twist."
                        />
                        <MenuItem
                            name="Bombay Sandwich"
                            price="₹220"
                            description="Toasted bread layered with boiled potato, cucumber, tomato, onion, and a zesty mint chutney."
                        />
                        <MenuItem
                            name="Samosa Chaat"
                            price="₹150"
                            description="Crushed crispy samosas topped with yogurt, tamarind and mint chutneys, and savory spices."
                        />
                        <MenuItem
                            name="Paneer Tikka Puff"
                            price="₹160"
                            description="A flaky, buttery puff pastry filled with spiced cottage cheese and bell peppers."
                        />
                    </div>
                </Section>

                {/* --- Gallery Section --- */}
                <Section id="gallery" title="Glimpses of The Café">
                    <div className="gallery-grid">
                        <GalleryItem src="/images/img3.jpg" alt="A cup of coffee on a wooden table" />
                        <GalleryItem src="/images/img4.jpg" alt="Freshly baked pastries on display" />
                        <GalleryItem src="/images/img5.jpg" alt="A person reading a book in the cafe" />
                        <GalleryItem src="/images/img6.jpg" alt="Exterior view of the prefab cafe" />
                        <GalleryItem src="/images/img1.jpg" alt="Detailed shot of the cafe counter" />
                        <GalleryItem src="/images/img2.jpg" alt="Friends chatting at a table" />
                        <GalleryItem src="/images/img3.jpg" alt="Barista preparing a drink" />
                        <GalleryItem src="/images/img4.jpg" alt="Sunlight streaming into the cafe" />
                    </div>
                </Section>

                {/* --- Visitor Testimonials Section --- */}
                <Section id="testimonials" title="What Our Visitors Say">
                    <div className="testimonials-wrapper">
                        <Testimonial
                            quote="My new favorite spot! The coffee is exceptional, and the atmosphere is so calming. I could spend all day here."
                            name="Priya S."
                            imageUrl="https://placehold.co/100x100/EAE0D5/4A2C2A?text=PS"
                        />
                        <Testimonial
                            quote="The design of this place is just stunning. You can tell how much thought went into every detail. And the Samosa Chaat is a must-try!"
                            name="Rohan K."
                            imageUrl="https://placehold.co/100x100/EAE0D5/4A2C2A?text=RK"
                        />
                    </div>
                </Section>
            </main>
        </div>
    );
};

export default Cafe;