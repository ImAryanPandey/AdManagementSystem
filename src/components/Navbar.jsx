import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between">
      <li><a href="/">Dashboard</a></li>
        <Link to="/" className="text-xl font-semibold">Adspotter</Link>
        <div className="flex space-x-4">
          <li><a href="/ad">Ad</a></li>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          <Link to="/login" className="hover:text-yellow-300">Login</Link>
          <Link to="/signup" className="hover:text-yellow-300">Signup</Link>
          <nav>
        <ul>
          
          
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
