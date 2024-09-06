import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useCart } from "../contex/CartContext";
import Designer1 from "../assets/image/Designer.jpeg";
import Designer2 from "../assets/image/Designer 4.jpeg"; // Add another image for the slider
import Designer3 from "../assets/image/Hidesign.webp"; // Add another image for the slider
import Logo from "../assets/image/logo-white-text.png"; 
import Cart from "../assets/image/pngegg.png";

// Navbar Component
const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="p-4 flex items-center justify-between bg-black bg-opacity-60">
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 ml-16" />
        </Link>
      </div>
      <div className="flex-1 flex justify-center space-x-20">
        <Link to="/" className="text-white text-sm font-sans hover:text-red-500">HOME</Link>
        <Link to="/about" className="text-white text-sm font-sans hover:text-red-500">ABOUT</Link>
        <Link to="/shop" className="text-white text-sm font-sans hover:text-red-500">SHOP</Link>
        <Link to="/cloth" className="text-white text-sm font-sans hover:text-red-500">CLOTH</Link>
        <Link to="/content" className="text-white text-sm font-sans hover:text-red-500">CONTACT</Link>
      </div>
      <div className="relative">
        <Link to="/cart" className="text-white flex mr-5 items-center hover:underline">
          <img src={Cart} alt="Cart Icon" className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 mr-4 bg-red-500 text-white text-xs rounded-full px-2 py-1">
            {totalItems}
          </span>
        </Link>
      </div>
    </nav>
  );
};

// HeroSection Component
const HeroSection = () => {
  return (
    <section className="relative text-left text-white p-40">
      <h1 className="text-5xl font-bold font-serif mt-32 mb-4">Discover More, Love More </h1>
      <h1 className="text-5xl font-bold font-serif mb-8">Welcome to Our Store!</h1>
      <p className="text-xl font-sans mb-8">Find the best products at the best prices</p>
      <button className="flex items-center text-md font-sans font-bold text-white py-3 px-10 rounded-2xl bg-red-500 hover:bg-black hover:text-white">
        <img src={Cart} alt="cart Icon" className="w-5 h-5 mr-2" /> SHOP NOW
      </button>
    </section>
  );
};

// Combined Component with Background Image Slider
const CombinedComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Array of images for the slider
  const images = [Designer1, Designer2, Designer3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="h-[700px] bg-cover bg-center relative">
      {/* Background Image Slider */}
      <div
        className="absolute inset-0 bg-cover transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>
    </header>
  );
};

export default CombinedComponent;
