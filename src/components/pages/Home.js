import React from "react";
import { Link } from "react-router-dom";

const DownArrow = () => (
  <div className="text-center text-custom-blue mb-10">
    <svg
      className="w-8 h-8 mx-auto animate-bounce"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      ></path>
    </svg>
  </div>
);

const ServiceCard = ({ imageSrc, title, description, features, path }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out lg:mx-8">
    <div className="p-6">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-64 object-cover rounded-md shadow-lg"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <ul className="mt-4 text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg
              className="w-4 h-4 mr-2 text-custom-blue"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="8" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to={path}
        className="mt-4 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-custom-blue rounded-full shadow-md group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-custom-blue group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-custom-blue transition-all duration-300 transform group-hover:translate-x-full ease">
          Learn More
        </span>
        <span className="relative invisible">Learn More</span>
      </Link>
    </div>
  </div>
);

const Home = () => (
  <div>
    <section className="relative flex justify-center h-screen text-black">
      <div
        className="absolute inset-0 overflow-hidden flex items-center lg:translate-x-1/4"
        style={{
          backgroundImage: 'url("/images/nsx.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      ></div>
      <div className="text-left z-10 text-black p-4">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 mt-16 ">
          <span className="text-custom-blue">Elevate</span> Your Ride with
          Professional Detailing
        </h1>
        <p className="text-lg lg:text-xl mb-4">
          Transform your car into a masterpiece.
        </p>
        <button className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 lg:text-xl rounded-full">
          Schedule Now
        </button>
      </div>
    </section>
    <div className="bg-white p-6 lg:p-10">
      <section id="services" className="container mx-auto my-12">
        <h2 className="text-3xl text-custom-blue lg:text-4xl font-bold text-center">
          Our Services
        </h2>
        <p className="text-lg text-gray-400 text-center p-5">
          Elevate your ride with our premium car detailing services...
        </p>
        <DownArrow />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            imageSrc="/images/Paint Correction.jpg"
            title="Paint Correction"
            description="Restore your car's exterior to its showroom glory with our meticulous detailing services."
            features={[
              "1 Step & 2 Step Paint Correction",
              "Removal of light & deep swirl marks",
              "Restore showroom shine",
            ]}
            path="/paint-correction"
          />
          <ServiceCard
            imageSrc="/images/interior.jpg"
            title="Exterior & Interior Detailing"
            description="Experience luxury from the inside out. Our interior detailing ensures a pristine and comfortable driving experience."
            features={["Deep Cleaning", "Leather Treatment", "Odor Removal"]}
            path="/interior-detailing"
          />
          <ServiceCard
            imageSrc="/images/ceramic.jpg"
            title="Ceramic Coating"
            description="Protect your investment with our advanced ceramic coating that enhances and preserves your car's finish."
            features={[
              "Long-lasting Shine",
              "Scratch Resistance",
              "Easy Maintenance",
            ]}
            path="/ceramic-coating"
          />
        </div>
      </section>
    </div>
  </div>
);

export default Home;

// COMING SOON

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

// OPTION 1

// {/* Hero Section */}
// <section
//   className="flex justify-center h-screen bg-cover bg-center relative"
//   style={{
//     backgroundImage: 'url("images/R32.JPG")', // Update the path to your image
//   }}
// >
//   <div className="absolute inset-0 bg-black opacity-50"></div>
//   <div className="text-center z-10 text-white p-4 mt-5">
//     {" "}
//     {/* Change text-center to text-left */}
//     <h1 className="text-4xl lg:text-6xl font-bold mb-4 mt-12">
//       Elevate Your Ride with Professional Detailing
//     </h1>
//     <p className="text-lg lg:text-xl mb-4">
//       Transform your car into a masterpiece.
//     </p>
//     <button className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//       Schedule Now
//     </button>
//   </div>
// </section>

// {/* Call to Action */}
// {/* <section className="bg-gray-800 text-white py-16">
//   <div className="container mx-auto text-center">
//     <h2 className="text-4xl lg:text-6xl font-bold mb-4">
//       Ready to Transform Your Ride?
//     </h2>
//     <p className="text-lg lg:text-xl mb-8">
//       Schedule your appointment now for a premium detailing experience.
//     </p>
//     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//       Schedule Now
//     </button>
//   </div>
// </section> */}
