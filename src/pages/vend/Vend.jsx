import React from 'react';
import './vend.css';

// --- SVG Icons for features ---
const ICONS = {
    MEAL: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
    SNACK: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.18a14.98 14.98 0 00-5.84 7.38m5.84 2.58v-4.8" /></svg>,
    DRINK: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664l.143.258a1.107 1.107 0 001.161.886l.143-.048a1.107 1.107 0 00.57-1.664l-.143-.258a1.107 1.107 0 00-1.161-.886l-1.068-.355a1.107 1.107 0 01-.886-1.161l.51-.766a2.25 2.25 0 011.161-.886l1.43-.477a1.107 1.107 0 00.57-1.664l-.143-.258a1.107 1.107 0 00-1.161-.886l-1.43.477a1.107 1.107 0 01-.886-1.161l.51-.766a2.25 2.25 0 011.161-.886l.143-.048a1.107 1.107 0 00.57-1.664l-.143-.258a1.107 1.107 0 00-1.161-.886l-1.068.355a1.107 1.107 0 01-.886-1.161l.51-.766a2.25 2.25 0 011.161-.886l.143-.048a1.107 1.107 0 00.57-1.664l-.143-.258a1.107 1.107 0 00-1.161-.886z" /></svg>,
    SPECIAL: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 21.1a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>,
    MODERN_DESIGN: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125A2.25 2.25 0 014.5 4.875h15A2.25 2.25 0 0121.75 7.125v10.5A2.25 2.25 0 0119.5 19.875h-15A2.25 2.25 0 012.25 17.625V7.125z" /></svg>,
    SMART_TECH: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
    ECO_PACKAGING: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

// --- Reusable Components ---
const ProductCard = ({ icon, title, description }) => (
    <div className="product-card">
        <div className="product-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const FeatureItem = ({ icon, title, description }) => (
    <li className="feature-item">
        <div className="feature-icon">{icon}</div>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </li>
);

// --- Main Vends Component ---
const Vend = () => {
    return (
        <div className="vends-container">
            {/* --- Hero Section --- */}
            <header className="vends-hero">
                <img src="/images/img1.jpg" alt="Sleek vending machine in a modern urban setting" className="hero-background" />
                <div className="hero-content">
                    {/* <div className="brand-name">Barefoot in the Garden</div> */}
                    <h1>Smart Vending, Delivered.</h1>
                    <p>
                        Experience a taste of our kitchen, anywhere, anytime. Barefoot Vends brings chef-approved meals and refreshments to urban spaces across Guwahati.
                    </p>
                </div>
            </header>

            <main className="vends-content">
                {/* --- What's Inside Section --- */}
                <section id="inside" className="vends-section">
                    <div className="section-header">
                        <h2>What You'll Find Inside</h2>
                        <p>A seamless blend of design, technology, and slow food philosophy—ready in seconds.</p>
                    </div>
                    <div className="whats-inside-grid">
                        <ProductCard icon={ICONS.MEAL} title="Comfort Meals" description="Ready-to-eat artisanal meals made in our kitchen—nutritious, flavorful, and preservative-free." />
                        <ProductCard icon={ICONS.SNACK} title="Signature Snacks" description="Curated bites inspired by Northeast and global flavors, perfect for a quick indulgence." />
                        <ProductCard icon={ICONS.DRINK} title="Cold Brews & Beverages" description="Small-batch iced coffee, fresh infusions, and our signature bottled coolers to refresh your day." />
                        <ProductCard icon={ICONS.SPECIAL} title="Limited Edition Drops" description="Rotating specials, seasonal goodies, and bestsellers straight from our café menu." />
                    </div>
                </section>

                {/* --- Design & Convenience Section --- */}
                <section id="design" className="vends-section">
                    <div className="section-header">
                        <h2>Designed for Aesthetic + Convenience</h2>
                        <p>Just like our prefab spaces, each Barefoot Vend unit is built with intention and intelligence.</p>
                    </div>
                    <div className="design-convenience-container">
                        <div className="design-image-wrapper">
                            <img src="/images/img2.jpg" alt="A person using the modern touchscreen interface of a Barefoot Vend machine" />
                        </div>
                        <ul className="features-list">
                            <FeatureItem icon={ICONS.MODERN_DESIGN} title="Minimal, Modern Designs" description="Our units blend beautifully into cafes, offices, gyms, and co-living spaces without disrupting the aesthetic." />
                            <FeatureItem icon={ICONS.SMART_TECH} title="Smart Technology" description="Featuring real-time stock updates, multiple cashless payment options, and temperature-controlled compartments." />
                            <FeatureItem icon={ICONS.ECO_PACKAGING} title="Eco-Conscious Packaging" description="Thoughtful, sustainable packaging that reflects our commitment to the environment." />
                        </ul>
                    </div>
                </section>


            </main>
        </div>
    );
};

export default Vend;
