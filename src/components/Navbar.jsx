import React from 'react'
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyShop</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-gray-700 hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-blue-600">About</a></li>
          <li><a href="#services" className="text-gray-700 hover:text-blue-600">Services</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2">
            <li><a href="#home" className="block text-gray-700 hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="block text-gray-700 hover:text-blue-600">About</a></li>
            <li><a href="#services" className="block text-gray-700 hover:text-blue-600">Services</a></li>
            <li><a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
