import { useState } from "react";
import { Coffee, Leaf, Download, Star, ChefHat, Heart } from "lucide-react";

const menuItems = {
    signature: [
        {
            name: "Assam Estate Cold Brew",
            price: "₹280",
            description:
                "Single-origin coffee from local tea gardens, slow-steeped for 18 hours",
            category: "Coffee",
        },
        {
            name: "Golden Turmeric Latte",
            price: "₹240",
            description:
                "Creamy blend with organic turmeric, ginger, and local honey",
            category: "Wellness",
        },
        {
            name: "Barefoot Benedict",
            price: "₹380",
            description: "Farm eggs on sourdough with smoked fish and hollandaise",
            category: "Mains",
        },
        {
            name: "Forest Berry Pancakes",
            price: "₹320",
            description: "Fluffy pancakes with foraged berries and maple syrup",
            category: "Sweet",
        },
    ],
    local: [
        {
            name: "Bhut Jolokia Scramble",
            price: "₹300",
            description: "Spiced eggs with ghost pepper, herbs, and cottage cheese",
            category: "Spicy",
        },
        {
            name: "Black Rice Pudding",
            price: "₹220",
            description: "Traditional dessert with coconut milk and palm jaggery",
            category: "Traditional",
        },
        {
            name: "Bamboo Shoot Salad",
            price: "₹260",
            description: "Fresh shoots with sesame, lime, and mixed greens",
            category: "Fresh",
        },
        {
            name: "Thukpa Bowl",
            price: "₹340",
            description: "Hearty noodle soup with seasonal vegetables",
            category: "Comfort",
        },
    ],
    beverages: [
        {
            name: "Hibiscus Cooler",
            price: "₹180",
            description: "Refreshing floral drink with mint and lime",
            category: "Refreshing",
        },
        {
            name: "Masala Chai",
            price: "₹160",
            description: "Traditional spiced tea with organic milk",
            category: "Classic",
        },
        {
            name: "Green Tea Kombucha",
            price: "₹200",
            description: "Fermented tea with probiotics and ginger",
            category: "Healthy",
        },
        {
            name: "Fresh Coconut Water",
            price: "₹120",
            description: "Straight from the shell, naturally sweet",
            category: "Natural",
        },
    ],
};

const testimonials = [
    {
        name: "Priya Sharma",
        review:
            "The most peaceful café I've experienced in the Northeast. The design and coffee are both exceptional.",
        rating: 5,
        location: "Mumbai",
    },
    {
        name: "Arjun Patel",
        review:
            "Loved how every piece of furniture tells a story. The local flavors are authentic and beautifully presented.",
        rating: 5,
        location: "Delhi",
    },
    {
        name: "Maya Singh",
        review:
            "A perfect blend of modern comfort and traditional taste. The space feels like a warm hug.",
        rating: 5,
        location: "Guwahati",
    },
];

const features = [
    {
        icon: Coffee,
        title: "Farm-to-Cup",
        description: "Direct relationships with local coffee growers",
    },
    {
        icon: Leaf,
        title: "Sustainable Sourcing",
        description: "Organic ingredients from Northeast farms",
    },
    {
        icon: ChefHat,
        title: "Artisanal Approach",
        description: "Every dish crafted with intention and care",
    },
    {
        icon: Heart,
        title: "Community Focus",
        description: "Supporting local artisans and farmers",
    },
];

const Cafe = () => {
    const [activeMenuItem, setActiveMenuItem] = useState("signature");

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 font-sans">
            {/* Hero Section */}
            <header className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-700 text-white">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-6 py-28 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
                        <Coffee className="w-10 h-10 text-orange-950" />
                    </div>
                    <h1 className="text-5xl font-bold mb-4">The Café</h1>
                    <p className="text-xl max-w-2xl mx-auto leading-relaxed">
                        Where every sip tells a story and every bite connects you to the
                        land. Experience Northeast flavors in a space designed for slow
                        living.
                    </p>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">
                            Curated Menu
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Thoughtfully crafted dishes that celebrate local ingredients and
                            global inspiration
                        </p>
                    </div>

                    <div className="flex justify-center mb-12">
                        <div className="bg-white rounded-full p-2 shadow-lg">
                            {Object.keys(menuItems).map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveMenuItem(category)}
                                    className={`px-4 sm:px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeMenuItem === category
                                            ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md"
                                            : "text-gray-600 hover:text-amber-600"
                                        }`}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {menuItems[activeMenuItem].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.name}
                                    </h3>
                                    <span className="text-amber-600 font-bold text-lg">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                                <span className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                                    {item.category}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <div className="bg-white rounded-xl p-8 shadow-md max-w-md mx-auto">
                            <Download className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                Take Home the Taste
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Download our signature recipes and recreate the experience at
                                home.
                            </p>
                            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
                                Download Recipes
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        What Our Guests Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 text-yellow-500 fill-current"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4 italic">
                                    "{testimonial.review}"
                                </p>
                                <div>
                                    <p className="font-semibold text-gray-800">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Section */}
            <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-700 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        A Space Designed for Connection
                    </h2>
                    <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
                        Our prefab café design seamlessly blends contemporary comfort with
                        the natural beauty of the Northeast. Every corner invites you to
                        slow down and connect.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-3 text-orange-900">
                                Cozy Interiors
                            </h3>
                            <p className="opacity-90 text-orange-950">
                                Warm textures and natural materials create an intimate
                                atmosphere.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-3 text-orange-900">
                                Garden Views
                            </h3>
                            <p className="opacity-90 text-orange-950">
                                Floor-to-ceiling windows frame the surrounding landscape.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-3 text-orange-900">
                                Flexible Seating
                            </h3>
                            <p className="opacity-90 text-orange-950">
                                From solo nooks to community tables for gathering.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cafe;
