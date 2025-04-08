// components/pages/Ceramic.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Schedule Button
const LearnMoreButton = ({ to }) => (
  <Link
    to={to}
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
      Schedule Now
    </span>
    <span className="relative invisible">Schedule Now</span>
  </Link>
);

// Reusable Package
const PackageSection = ({
  imagePath,
  alt,
  title,
  subtitle,
  description,
  coupeSedanPrice,
  oversizePrice,
  to,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-xl">
    <img
      src={imagePath}
      alt={alt}
      className="w-full h-52 object-cover mb-4 rounded-xl"
    />
    <h2 className="flex items-center text-2xl font-semibold mb-2">
      <img
        src="/icons/car.svg"
        alt="Car Icon"
        className="w-10 h-10 p-1 bg-custom-blue rounded-full mr-2"
      />
      {title}
    </h2>
    {subtitle && (
      <h3 className="text-custom-blue font-semibold text-lg mb-6">
        {subtitle}
      </h3>
    )}
    <p className="text-gray-700 text-md mb-6">{description}</p>
    <div className="mb-4">
      <ul className="list-disc list-inside">
        <li className="font-semibold mb-2">Coupes & Sedans: {coupeSedanPrice}</li>
        <li className="font-semibold mb-2">SUV & Oversize: {oversizePrice}</li>
      </ul>
    </div>
    <LearnMoreButton to={to} />
  </div>
);

// Animated arrow
const DownArrow = () => (
  <div className="text-center text-custom-blue mb-4">
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

const Ceramic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactPath = "/contact";

  return (
    <div className="bg-gradient-to-b from-white to-custom-blue p-6 min-h-screen">
      <Helmet>
        <title>Ceramic Coating Services | Foam Experts Detailing</title>
        <meta
          name="description"
          content="Protect your vehicle with industry-leading ceramic coatings by Gyeon & Artdeshine. Gloss, durability, and next-level hydrophobic finish."
        />
        <meta
          property="og:title"
          content="Ceramic Coating Services | Foam Experts Detailing"
        />
        <meta
          property="og:description"
          content="Explore our ceramic coating packages with up to 7 years durability. Premium protection, showroom shine."
        />
        <meta property="og:url" content="https://www.foamexdetailing.com/ceramic" />
        <meta
          property="og:image"
          content="https://www.foamexdetailing.com/images/og-preview.webp"
        />
      </Helmet>

      <div className="container mx-auto">
        {/* Summary Section */}
        <div className="mb-8 p-4">
          <h1 className="text-6xl text-center mb-8">
            <span className="text-black font-bold">Ceramic </span>
            <span className="text-custom-blue font-bold">Coating</span>
          </h1>
          <p className="leading-6 mb-8">
            Over time, factors like sun exposure, bugs, gasoline, dust, and
            debris inevitably diminish your car's paint quality. This wear and
            tear can be concerning, but there's a solution for protection and
            restoration...
          </p>
          <h2 className="text-custom-blue text-2xl mb-2 font-semibold">
            What is Ceramic Coating?
          </h2>
          <p className="leading-6 mb-8">
            Ceramic coating is an advanced, nanoscopic protective layer applied
            to the exterior of vehicles...
          </p>
          <h2 className="text-custom-blue text-2xl mb-2 font-semibold">
            What we do.
          </h2>
          <p className="leading-6 mb-8">
            Our comprehensive packages offer a thorough hand wash, clay bar,
            interior cleaning, and multi-surface ceramic coverage.
          </p>
        </div>

        {/* Package Header */}
        <h2 className="text-3xl text-custom-blue text-center font-bold mb-4">
          Our Packages
        </h2>
        <DownArrow />

        {/* Packages */}
        <div className="grid grid-cols-1 gap-8 mb-10">
          <PackageSection
            imagePath="/images/ceramic-1.webp"
            alt="Entry Level Package"
            title="Entry Level Package"
            subtitle="Q² ONE EVO by Gyeon | 24 Months Durability"
            description="Exquisite candy gloss finish with over 2 years of protection."
            coupeSedanPrice="$1200"
            oversizePrice="Additional cost starting at $300 and up."
            to={contactPath}
          />
          <PackageSection
            imagePath="/images/ceramic-2.webp"
            alt="Standard Package"
            title="Standard Package"
            subtitle="Q² MOHS EVO by Gyeon | 36+ Months Durability"
            description="Fluorine-enhanced hydrophobic single-layer coating with intense gloss and resistance."
            coupeSedanPrice="$1500"
            oversizePrice="Additional cost starting at $300 and up."
            to={contactPath}
          />
          <PackageSection
            imagePath="/images/ceramic-3.webp"
            alt="Premium Package"
            title="Premium Package"
            subtitle="Q² SYNCRO EVO by Gyeon | 48+ Months durability"
            description="Dual-layer system with topcoat for gloss, durability, and self-cleaning performance."
            coupeSedanPrice="$1800"
            oversizePrice="Additional cost starting at $300 and up."
            to={contactPath}
          />
          <PackageSection
            imagePath="/images/ceramic-4.webp"
            alt="Elite Package"
            title="Elite Package"
            subtitle="NANO GRAPHENE by Artdeshine | 7 Year Durability"
            description="The ultimate graphene-based coating for extreme protection and surface clarity."
            coupeSedanPrice="$2100"
            oversizePrice="Additional cost starting at $300 and up."
            to={contactPath}
          />
        </div>
      </div>
    </div>
  );
};

export default Ceramic;
