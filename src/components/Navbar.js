import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="./images/foam-experts-logo.png"
            alt="Logo"
            className="h-16 w-auto"
          />
        </div>

        <div className="hidden md:flex space-x-10">
          <a
            href="/"
            className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4"
          >
            Home
          </a>

          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4"
          >
            Services
          </Link>

          {/* Dropdown button for Packages */}
          <div className="relative group">
            <button
              onClick={toggleDropdown}
              className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4 flex items-center"
            >
              Packages
              <svg
                className="w-4 h-4 ml-1 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute top-12  z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul className="p-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-custom-blue rounded-lg  text-gray-700 hover:text-white"
                    >
                     Paint Correction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-custom-blue rounded-lg  text-gray-700 hover:text-white"
                    >
                      Exterior & Interior Detailing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-custom-blue rounded-lg  text-gray-700 hover:text-white"
                    >
                      Ceramic Coating
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4"
          >
            About Us
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4"
          >
            Contact
          </Link>
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
            href="/"
            className="block text-center text-black hover:text-gray-300 py-2"
          >
            Home
          </a>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-center text-black hover:text-gray-300 py-2"
          >
            Services
          </Link>

          {/* Center the "Packages" link and dropdown menu in the responsive menu */}
          <div className="relative group text-center">
            <button
              onClick={toggleDropdown}
              className="block mx-auto text-black hover:text-gray-300 py-2 relative"
            >
              Packages
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-50 bg-gray-200 divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul className="p-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-custom-blue rounded-lg  text-gray-700 hover:text-white"
                    >
                      Paint Correction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-custom-blue rounded-lg  text-gray-700 hover:text-white"
                    >
                      Exterior & Interior Detailing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-custom-blue rounded-lg  text-gray-700 hover:text-white"
                    >
                      Ceramic Coating
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Add more responsive menu links as needed */}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
