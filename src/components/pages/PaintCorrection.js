// PaintCorrection.js

import React from "react";
import { Link } from "react-router-dom";

// Constant for the Schedule Now button
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

// Reusable Package Section component
const PackageSection = ({
  imagePath,
  alt,
  title,
  description,
  carMidsizePrice,
  oversizePrice,
  to,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-xl">
    <img
      src={imagePath}
      alt={alt}
      className="w-full h-52 object-cover mb-4 rounded-xl"
    />
    <h2 className="flex items-center text-2xl font-semibold mb-4">
      {title === "Entry Level Package" && (
        <img
          src="/icons/car.svg"
          alt="Car Icon"
          className="w-10 h-10 p-1 bg-custom-blue rounded-full mr-2"
        />
      )}
      {title === "Premium Package" && (
        <img
          src="/icons/car.svg"
          alt="Car Side Icon"
          className="w-10 h-10 p-1 bg-custom-blue rounded-full mr-2"
        />
      )}
      {title}
    </h2>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="mb-4">
      <ul className="list-disc list-inside text-custom-blue">
        <li className="text-lg font-semibold mb-2">
          Cars & Midsize: {carMidsizePrice}
        </li>
        <li className="text-lg font-semibold mb-2">
          Oversize: {oversizePrice}
        </li>
      </ul>
    </div>
    {/* Schedule Now Button */}
    <LearnMoreButton to={to} />
  </div>
);

// Arrow component
const DownArrow = () => (
  <div className="text-center text-custom-blue mb-">
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
  // Define paths for the Schedule Now links
  const entryLevelPath = "/entry-level";
  const premiumPath = "/premium";

  return (
    <div className="bg-gray-100 p-6">
      <div className="container mx-auto">
        {/* Summary Section */}
        {/* Summary Section */}
        <div className="text-center mb-8 p-4">
          <h1 className="text-6xl mb-6">
            <span className="text-black font-bold">Paint </span>
            <span className="text-custom-blue font-bold">Correction</span>
          </h1>
          <p className="text-gray-600 leading-7">
            Step into Foam Experts Detailing, the intersection of automotive
            excellence and precision. Enhance your vehicle's allure with our
            premium Car Paint Correction Service. Our adept detailing artisans
            employ cutting-edge techniques and superior products to eliminate
            imperfections like swirl marks and scratches, revealing a brilliant,
            showroom-ready finish. At Foam Experts Detailing, we boast
            meticulous craftsmanship and an unyielding commitment to excellence.
            Rely on us to rejuvenate your vehicle's paintwork, ensuring it
            shines with a brilliance that exceeds expectations. Embark on the
            ultimate automotive detailing journey – opt for Foam Experts
            Detailing for an impeccable transformation.
          </p>
        </div>

        {/* Our Packages Title and Arrow */}
        <h2 className="text-3xl text-custom-blue text-center font-bold mb-4">
          Our Packages
        </h2>
        <DownArrow />

        {/* Packages Section */}
        <div className="grid grid-cols-1 gap-8">
          {/* Entry Level Package */}
          <PackageSection
            imagePath="/images/Paint Correction Stage 1.jpg"
            alt="Entry Level Package"
            title="Entry Level Package"
            description="With our entry-level package, we execute a meticulous single-step paint correction procedure utilizing a gentle compound. This method effectively eliminates a majority of minor scratches and swirl marks from your vehicle's paint surface. Not only does this meticulous process restore your car's original luster, but it also revitalizes the overall appearance of your vehicle's paint finish. To further safeguard the newly corrected surface, we apply a high-quality sealant at the end of the process. This sealant not only enhances the gloss and depth of the paint but also provides lasting protection against environmental elements, ensuring a longer-lasting, showroom-quality finish for your vehicle."
            carMidsizePrice="$400"
            oversizePrice="$500"
            to={entryLevelPath}
          />

          {/* Premium Package */}
          <PackageSection
            imagePath="/images/Paint Correction Stage 2.jpeg"
            alt="Premium Package"
            title="Premium Package"
            description="In our exclusive premium package, we precisely execute a comprehensive three-step paint correction process. The initial step involves the application of a potent abrasive compound designed to effectively eliminate deep scratches and imperfections present in your vehicle's paint. Following this, in the second step, a sophisticated polishing compound is carefully applied to address finer scratches, restoring your vehicle's paint to a showroom-quality shine. To conclude the process, we apply a high-quality sealant, providing long-lasting protection and enhancing the overall luster of your vehicle's finish."
            carMidsizePrice="$800"
            oversizePrice="$1000"
            to={premiumPath}
          />
        </div>
      </div>
    </div>
  );
};

export default PaintCorrection;
