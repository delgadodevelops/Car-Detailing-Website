// Home.js

import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="flex justify-center h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("images/R32.JPG")', // Update the path to your image
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center z-10 text-white p-4 mt-5">
          {" "}
          {/* Change text-center to text-left */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 mt-12">
            Elevate Your Ride with Professional Detailing
          </h1>
          <p className="text-lg lg:text-xl mb-4">
            Transform your car into a masterpiece.
          </p>
          <button className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Schedule Now
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto my-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Exterior Detailing</h3>
            <p className="text-gray-600">
              Restore your car's exterior to its showroom glory with our
              meticulous detailing services.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Interior Detailing</h3>
            <p className="text-gray-600">
              Experience luxury from the inside out. Our interior detailing
              ensures a pristine and comfortable driving experience.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Ceramic Coating</h3>
            <p className="text-gray-600">
              Protect your investment with our advanced ceramic coating that
              enhances and preserves your car's finish.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Ready to Transform Your Ride?
          </h2>
          <p className="text-lg lg:text-xl mb-8">
            Schedule your appointment now for a premium detailing experience.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Schedule Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white">
//       <div className="text-center p-8 bg-white">
//         <img
//           src="/images/foam-experts-logo.png" // Replace with the actual path to your car detailing logo
//           alt="Car Detailing Logo"
//           className="mx-auto mb-4 " // Adjust margin and border as needed
//           style={{ maxWidth: "250px" }} // Adjust the max width of your logo as needed
//         />
//         <h1 className="text-4xl font-semibold italic mb-4">COMING SOON</h1>
//         <p className="text-gray-700 mb-8 w-96">
//           We are launching soon to provide top-notch car detailing services.
//           Stay tuned for the grand opening!
//         </p>

//         <p className="text-sm text-gray-500 mb-6">
//           Follow us on social media for updates
//         </p>
//         <div className="flex justify-center space-x-4 mb-8">
//           {/* Social media icons with links */}
//           <a
//             href="https://www.instagram.com/foam_experts/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram className="text-2xl text-gray-500 hover:text-custom-blue transition duration-300" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
