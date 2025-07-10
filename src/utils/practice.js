import React from 'react';
import './about.css'; // Import the CSS file
import airbnbImage from '../../assets/images/airbnb.jpg';
import cafeImage from '../../assets/images/cafe.jpg';
import vendingMachinesImage from '../../assets/images/vending-machines.jpg';

const Gallery = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Experience Barefoot in the Garden: Live the Lifestyle, Take it Home</h1>
        <p className="hero-description">
          Barefoot in the Garden isn't just a place to stay—it's an immersive shopping experience. Imagine falling in love with a lamp in your room, a chair on the patio, or even the entire cozy prefab home you're staying in. Here, everything you see is for sale, allowing you to seamlessly integrate the beauty and comfort of your stay into your own life.
        </p>
      </section>

      {/* Your Stay, Your Style, Your Home Section */}
      <section className="your-stay-section">
        <div className="your-stay-content-wrapper">
          <div className="your-stay-text-content">
            <h2 className="section-title">Your Stay, Your Style, Your Home</h2>
            <p className="section-description">
              From the moment you step into a Barefoot in the Garden space, you're surrounded by carefully curated interiors, stunning tableware, elegant furniture, and unique lighting – <strong className="highlight">all available for purchase</strong>. Whether it's a small memento or a complete home makeover, you can take what inspires you home.
            </p>
            <p className="section-description">
              If something catches your eye but isn't quite right, our partners at Crafted Comforts can <strong className="highlight">recreate and customize it just for you</strong>.
            </p>
          </div>
          <div className="your-stay-images">
            <img src={airbnbImage} alt="Barefoot in the Garden interior" className="image-card" />
            <img src={cafeImage} alt="Barefoot in the Garden cafe" className="image-card" />
            {/* You might choose to use vendingMachinesImage here or other relevant images */}
          </div>
        </div>
      </section>

      {/* Crafted for Life: Our Prefab Homes Section */}
      <section className="prefab-homes-section">
        <div className="prefab-homes-content-wrapper">
          <h2 className="section-title text-center">Crafted for Life: Our Prefab Homes</h2>
          <p className="section-description text-center max-width-text">
            Beyond beautiful aesthetics, our prefab homes are built with durability and your peace of mind in mind. They're designed to be more than just a house; they're a foundation for lasting memories, offering:
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <span className="feature-icon">✔</span>
              <p className="feature-text"><strong>Earthquake-resistant</strong> construction for ultimate safety.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✔</span>
              <p className="feature-text"><strong>Water-resistant</strong> materials to withstand the elements.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✔</span>
              <p className="feature-text"><strong>Quick to build</strong>, getting you into your dream home sooner.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✔</span>
              <p className="feature-text"><strong>Customizable layouts & finishes</strong> to perfectly match your vision.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✔</span>
              <p className="feature-text">A robust <strong>20-year structural warranty</strong> for long-term confidence.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✔</span>
              <p className="feature-text"><strong>Designed for all-season living</strong>, ensuring comfort year-round.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="cta-title">It's More Than a Destination—It's an Invitation.</h2>
        <p className="cta-description">
          Barefoot in the Garden offers a unique opportunity to not just visit, but to <strong className="highlight">live the lifestyle you desire and make it truly your own</strong>.
        </p>
        {/* You might add a call to action button here, e.g., <button className="cta-button">Explore Our Homes</button> */}
      </section>
    </div>
  );
};

export default Gallery;





//   /* Hero Section */
//   .hero-section {
//     text-align: center;
//     padding: 4rem 1rem; /* py-16 px-4 */
//     background-color: #f3f4f6; /* bg-gray-100 */
//     border-radius: 0.5rem; /* For consistency, though not explicitly on section in Tailwind */
//   }
  
//   .hero-title {
//     font-size: 2.25rem; /* text-4xl */
//     font-weight: 700; /* font-bold */
//     margin-bottom: 1rem; /* mb-4 */
//   }
  
//   .hero-description {
//     font-size: 1.125rem; /* text-lg */
//     color: #4b5563; /* text-gray-700 */
//     max-width: 48rem; /* max-w-3xl */
//     margin-left: auto;
//     margin-right: auto;
//   }
  
//   /* Your Stay, Your Style, Your Home Section */
//   .your-stay-section {
//     padding: 4rem 1rem; /* py-16 px-4 */
//   }
  
//   .your-stay-content-wrapper {
//     max-width: 72rem; /* max-w-6xl */
//     margin-left: auto;
//     margin-right: auto;
//     display: flex;
//     flex-direction: column; /* flex-col */
//     align-items: center;
//     gap: 2rem; /* gap-8 */
//   }
  
//   .your-stay-text-content {
//     width: 100%; /* md:w-1/2 */
//   }
  
//   .section-title {
//     font-size: 2rem; /* text-3xl */
//     font-weight: 700; /* font-bold */
//     margin-bottom: 1rem; /* mb-4 */
//   }
  
//   .section-description {
//     font-size: 1.125rem; /* text-lg */
//     color: #4b5563; /* text-gray-700 */
//     margin-bottom: 1rem; /* mb-4 */
//   }
  
//   .section-description:last-child {
//     margin-bottom: 0; /* Remove margin from last paragraph */
//   }
  
//   .highlight {
//     font-weight: 600; /* font-semibold */
//   }
  
//   .your-stay-images {
//     width: 100%; /* md:w-1/2 */
//     display: grid;
//     grid-template-columns: 1fr; /* grid-cols-1 */
//     gap: 1rem; /* gap-4 */
//   }
  
//   .image-card {
//     border-radius: 0.5rem; /* rounded-lg */
//     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
//     width: 100%; /* Ensure images fill their grid area */
//     height: auto; /* Maintain aspect ratio */
//   }
  
//   /* Crafted for Life: Our Prefab Homes Section */
//   .prefab-homes-section {
//     background-color: #f3f4f6; /* bg-gray-100 */
//     padding: 4rem 1rem; /* py-16 px-4 */
//   }
  
//   .prefab-homes-content-wrapper {
//     max-width: 72rem; /* max-w-6xl */
//     margin-left: auto;
//     margin-right: auto;
//   }
  
//   .section-title.text-center {
//     text-align: center;
//     margin-bottom: 2rem; /* mb-8 */
//   }
  
//   .section-description.text-center {
//     text-align: center;
//     margin-bottom: 2.5rem; /* mb-10 */
//   }
  
//   .max-width-text {
//     max-width: 60rem; /* Custom max-width for this text, adjust as needed */
//     margin-left: auto;
//     margin-right: auto;
//   }
  
//   .feature-grid {
//     display: grid;
//     grid-template-columns: 1fr; /* grid-cols-1 */
//     gap: 2rem; /* gap-8 */
//   }
  
//   .feature-card {
//     background-color: #ffffff; /* bg-white */
//     padding: 1.5rem; /* p-6 */
//     border-radius: 0.5rem; /* rounded-lg */
//     box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* shadow-md */
//     display: flex;
//     align-items: center;
//   }
  
//   .feature-icon {
//     font-size: 1.5rem; /* text-2xl */
//     margin-right: 0.75rem; /* mr-3 */
//   }
  
//   .feature-text {
//     font-size: 1.125rem; /* text-lg */
//     font-weight: 500; /* font-medium */
//   }
  
//   /* Call to Action Section */
//   .cta-section {
//     text-align: center;
//     padding: 4rem 1rem; /* py-16 px-4 */
//     background-color: #1d4ed8; /* bg-blue-700 */
//     color: #ffffff; /* text-white */
//     border-radius: 0.5rem; /* For consistency */
//   }
  
//   .cta-title {
//     font-size: 2rem; /* text-3xl */
//     font-weight: 700; /* font-bold */
//     margin-bottom: 1rem; /* mb-4 */
//   }
  
//   .cta-description {
//     font-size: 1.25rem; /* text-xl */
//     max-width: 48rem; /* max-w-3xl */
//     margin-left: auto;
//     margin-right: auto;
//   }
  
//   /* Responsive Adjustments */
//   @media (min-width: 768px) { /* Corresponds to md: breakpoint in Tailwind */
//     .hero-title {
//       font-size: 3rem; /* md:text-5xl */
//     }
  
//     .hero-description {
//       font-size: 1.25rem; /* md:text-xl */
//     }
  
//     .your-stay-content-wrapper {
//       flex-direction: row; /* md:flex-row */
//     }
  
//     .your-stay-text-content {
//       width: 50%; /* md:w-1/2 */
//     }
  
//     .your-stay-images {
//       width: 50%; /* md:w-1/2 */
//       grid-template-columns: 1fr 1fr; /* sm:grid-cols-2 */
//     }
  
//     .section-title {
//       font-size: 2.5rem; /* md:text-4xl */
//     }
  
//     .prefab-homes-section {
//       padding: 4rem 2rem; /* md:px-8 */
//     }
  
//     .feature-grid {
//       grid-template-columns: 1fr 1fr; /* md:grid-cols-2 */
//     }
  
//     .cta-section {
//       padding: 4rem 2rem; /* md:px-8 */
//     }
  
//     .cta-title {
//       font-size: 2.5rem; /* md:text-4xl */
//     }
  
//     .cta-description {
//       font-size: 1.5rem; /* md:text-2xl */
//     }
//   }
  
//   @media (min-width: 1024px) { /* Corresponds to lg: breakpoint in Tailwind */
//     .feature-grid {
//       grid-template-columns: 1fr 1fr 1fr; /* lg:grid-cols-3 */
//     }
//   }
  