import React from "react";
import { Link } from "react-router-dom";

const DownArrow = () => (
  <div className="text-center text-gray-500 mb-10">
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
  <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out lg:mx-8">
    <div className="p-7">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-64 object-cover rounded-xl shadow-lg"
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
    {/* Hero Section */}
    <section className="relative flex justify-center h-screen text-black ">
      <div
        className="absolute inset-0 overflow-hidden flex items-center lg:translate-x-1/4"
        style={{
          backgroundImage: 'url("/images/nsx.png")',
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

    {/* About Us  */}
    <section
      id="about"
      className="flex items-center bg-gradient-to-b from-white to-custom-blue xl:h-screen"
    >
      <div className="justify-center flex-1 m-8 py-4 lg:py-10 lg:m-40">
        <div
          className="relative py-10 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url("images/about-us.jpg")',
            borderRadius: "1.5rem", // Adjust this value for your desired rounded corners
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 rounded-3xl"></div>
          <div className="relative z-10 justify-center px-4 py-4 mx-auto max-w-7xl lg:py-28 md:px-7">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-10 lg:px-30 mb-10 lg:mb-4">
                <h2 className="mb-6 text-4xl font-bold text-gray-100 md:text-5xl dark:text-gray-300">
                  Why Choose Us?
                </h2>
                <p className="mb-6 leading-loose text-gray-400 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <button className="flex px-6 py-2 font-semibold leading-loose text-gray-100 transition-all duration-300 bg-custom-blue rounded-full hover:bg-sky-600">
                  Start Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <div className="bg-gradient-to-b from-custom-blue to-white p-6 lg:p-10">
      <section id="services" className="container mx-auto my-12">
        <h1 class="pl-2 text-center text-3xl font-bold border-custom-blue md:text-5xl ">
          Our Services
        </h1>
        <p className="text-lg text-gray-500 text-center p-5">
          Elevate your ride with our premium car detailing services...
        </p>
        <DownArrow />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            imageSrc="/images/Paint Correction.jpg"
            path="/paint-correction"
            scrollTo={0}
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
