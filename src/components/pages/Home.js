import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Import social media icons

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-8 bg-white">
        <img
          src="/images/foam-experts-logo.png" // Replace with the actual path to your car detailing logo
          alt="Car Detailing Logo"
          className="mx-auto mb-4 " // Adjust margin and border as needed
          style={{ maxWidth: "250px" }} // Adjust the max width of your logo as needed
        />
        <h1 className="text-4xl font-semibold italic mb-4">COMING SOON</h1>
        <p className="text-gray-700 mb-8 w-96">
          We are launching soon to provide top-notch car detailing services.
          Stay tuned for the grand opening!
        </p>

        <p className="text-sm text-gray-500 mb-6">
          Follow us on social media for updates
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          {/* Social media icons with links */}
          <a
            href="https://www.instagram.com/foam_experts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-gray-500 hover:text-custom-blue transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
