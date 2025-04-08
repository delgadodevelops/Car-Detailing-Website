// components/pages/PaintCorrection.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Button Component
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

// Package Component
const PackageSection = ({
  imagePath,
  alt,
  title,
  description,
  coupeSedanPrice,
  oversizePrice,
  to,
}) => (
  <div className="bg-white p-6 xl:w-1/2 mx-auto rounded-xl shadow-xl">
    <img
      src={imagePath}
      alt={alt}
      className="w-full h-52 object-cover mb-4 rounded-xl"
    />
    <h2 className="flex items-center text-2xl font-semibold mb-4">
      <img
        src="/icons/car.svg"
        alt="Car Icon"
        className="w-10 h-10 p-1 bg-custom-blue rounded-full mr-2"
      />
      {title}
    </h2>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="mb-4">
      <ul className="list-disc list-inside text-custom-blue">
        <li className="text-lg font-semibold mb-2">
          Coupes & Sedans: {coupeSedanPrice}
        </li>
        <li className="text-lg font-semibold mb-2">
          SUV & Oversize: {oversizePrice}
        </li>
      </ul>
    </div>
    <LearnMoreButton to={to} />
  </div>
);

// Arrow Component
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

const PaintCorrection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactPath = "/contact";

  return (
    <div className="bg-gradient-to-b from-white to-custom-blue p-6 min-h-screen">
      <Helmet>
        <title>Paint Correction Services | Foam Experts Detailing</title>
        <meta
          name="description"
          content="Eliminate swirl marks and restore your car’s paint to perfection with our paint correction packages. High-gloss, high-quality, and long-lasting protection."
        />
        <meta
          property="og:title"
          content="Paint Correction Services | Foam Experts Detailing"
        />
        <meta
          property="og:description"
          content="Choose from entry-level or premium paint correction. Perfect your car’s exterior with precision detailing and protective sealants."
        />
        <meta
          property="og:url"
          content="https://www.foamexdetailing.com/paint-correction"
        />
        <meta
          property="og:image"
          content="https://www.foamexdetailing.com/images/og-preview.webp"
        />
      </Helmet>

      <div className="container mx-auto">
        {/* Summary Section */}
        <div className="text-center mb-8 p-4">
          <h1 className="text-6xl mb-8">
            <span className="text-black font-bold">Paint </span>
            <span className="text-custom-blue font-bold">Correction</span>
          </h1>
          <p className="leading-6 mb-8">
            Step into Foam Experts Detailing, the intersection of automotive
            excellence and precision. Enhance your vehicle's allure with our
            premium Car Paint Correction Service. Our adept detailing artisans
            employ cutting-edge techniques and superior products to eliminate
            imperfections like swirl marks and scratches, revealing a brilliant,
            showroom-ready finish...
          </p>
        </div>

        {/* Our Packages Title and Arrow */}
        <h2 className="text-3xl text-custom-blue text-center font-bold mb-4">
          Our Packages
        </h2>
        <DownArrow />

        {/* Packages */}
        <div className="grid grid-cols-1 gap-8">
          <PackageSection
            imagePath="/images/paint_correction_stage_1.webp"
            alt="Entry Level Package"
            title="Entry Level Package"
            description="Single-step correction + sealant for gloss & protection."
            coupeSedanPrice="$400"
            oversizePrice="Additional cost starting at $150 and up."
            to={contactPath}
          />
          <PackageSection
            imagePath="/images/paint_correction_stage_2.webp"
            alt="Premium Package"
            title="Premium Package"
            description="Three-stage correction with polish & sealant for deep restoration and durability."
            coupeSedanPrice="$700"
            oversizePrice="Additional cost starting at $150 and up."
            to={contactPath}
          />
        </div>
      </div>
    </div>
  );
};

export default PaintCorrection;
