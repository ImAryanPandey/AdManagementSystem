import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-8 py-20">
      {/* Main Content */}
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">About Us</h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Welcome to **Adspotter**! We are committed to simplifying advertisement placement and
          property promotions. Our mission is to bridge the gap between property owners and
          advertisers, providing seamless and efficient solutions.
        </p>

        {/* About Company Section */}
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At **Adspotter**, we aim to connect businesses with premium advertisement spaces,
            ensuring visibility and impact for their brands. From LED screens to property banners,
            we provide a variety of options to suit your needs.
          </p>
        </div>

        {/* Contact Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              📍 <span className="font-medium">Address:</span> noida Sec-62, Noida, India
            </li>
            <li>
              📧 <span className="font-medium">Email:</span> support@adspotter.com
            </li>
            <li>
              📞 <span className="font-medium">Phone:</span> +91-7564867551
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
