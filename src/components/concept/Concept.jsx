import React from 'react';
import './concept.css'; // Import the CSS file

<h2 className="sub-heading">
    What drives us forward
</h2>

const Concept = () => {
    return (
        <div className="concept-container">
            {/* Main Heading */}
            <div className='concept-header'>
            <h1 className="main-heading">
                The Concept
            </h1>
            <p className='concept-subtitle'>What drives us forward.</p>
            </div>

            {/* Content Section: Video on left, text on right */}
            <div className="content-section">
                {/* Left Half: Video Section */}
                <div className="media-section">
                    <video
                    className="media-element" // <-- Add this class
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/videos/concept.mp4"
                    onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/640x360/E0E7FF/4338CA?text=Video+Not+Found";
                            e.currentTarget.title = "Video could not be loaded. Placeholder shown.";
                            console.error("Error loading video:", e);
                        }}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Right Half: Write-up Section */}
                <div className="write-up-section">
                    {/* Text from image is updated below */}
                    <h2 className="sub-heading">
                    The Lifestyle You Live Before You Buy</h2>
                    <p className="paragraph">
                        Located in Digaru, Barefoot in the Garden is an experience Centre by Crafted Comforts. Thoughtfully built by our franchise partner, Looms Craft.
                    </p>
                    <p className="paragraph">
                        Barefoot in the Garden isn’t just a destination—it’s a living, breathing reflection of modern urban life. You witness everything it takes to build a home—from the prefab structures to the walls and the doors, the pools to the planters, the dinner plates to the artwork, and even the food and recipes that turn a house into a warm, living experience.
                    </p>
                    <button className="button-primary">
                        MORE DETAILS
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Concept;
