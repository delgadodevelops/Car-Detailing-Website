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

const Services = () => (
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
          path="/ceramic"
        />
      </div>
    </section>
  </div>
);

export default Services;
