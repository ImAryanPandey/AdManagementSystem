import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative h-screen"
      style={{
        backgroundImage:
          "url('https://st.depositphotos.com/1080242/1470/i/600/depositphotos_14701413-stock-photo-billboard.jpg')", // Replace with your preferred image URL
      }}
    >
      {/* Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 px-8 py-20 text-white text-center">
        <h1 className="text-5xl font-bold mb-6 animate-fadeIn">Welcome to Adspotter</h1>
        
        <Link to="/login">
          <button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow-md">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
