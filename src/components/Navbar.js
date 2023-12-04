// NavBar.js

import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-custom-blue font-bold italic text-xl">
            FOAMEXPERTS
          </div>
        </div>

        {/* Navigation Links for Medium and Larger Screens */}
        <div className="hidden md:flex space-x-10">
          <a
            href="#"
            className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4"
          >
            Home
          </a>

          <a
            href="#"
            className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4"
          >
            About Us
          </a>

          <a
            href="#"
            className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4"
          >
            Services
          </a>
          <a
            href="#"
            className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4"
          >
            Packages
          </a>
          <a
            href="#"
            className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4"
          >
            Contact
          </a>
        </div>

        {/* Responsive Menu Button for Small Screens */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive Menu for Small Screens */}
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <a
            href="#"
            className="block text-center text-black hover:text-gray-300 py-2"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-center text-black hover:text-gray-300 py-2"
          >
            About Us
          </a>
          <a
            href="#"
            className="block text-center text-black hover:text-gray-300 py-2"
          >
            Services
          </a>
          <a
            href="#"
            className="block text-center text-black hover:text-gray-300 py-2"
          >
            Packages
          </a>
          <a
            href="#"
            className="block text-center text-black hover:text-gray-300 py-2"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
