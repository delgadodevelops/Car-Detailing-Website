// Import necessary dependencies from React and React Router
import React, { useEffect } from "react";
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
  subtitle, // New prop for the subtitle
  description,
  coupeSedanPrice,
  oversizePrice,
  to, // Add to prop for the Schedule Now button
}) => (
  <div className="bg-white p-6 rounded-xl shadow-xl">
    <img
      src={imagePath}
      alt={alt}
      className="w-full h-52 object-cover mb-4 rounded-xl"
    />
    <h2 className="flex items-center text-2xl font-semibold mb-2">
      {title === "Entry Level Package" && (
        <img
          src="/icons/car.svg"
          alt="Car Icon"
          className="w-10 h-10 p-1 bg-custom-blue rounded-full mr-2"
        />
      )}
      {title === "Standard Package" && (
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
      {title === "Elite Package" && (
        <img
          src="/icons/car.svg"
          alt="Car Side Icon"
          className="w-10 h-10 p-1 bg-custom-blue rounded-full mr-2"
        />
      )}
      {title}
    </h2>
    {subtitle && (
      <h3 className="text-custom-blue font-semibold text-lg mb-6">
        {subtitle}
      </h3>
    )}
    <p className="text-gray-700 text-md mb-6">{description}</p>
    <div className="mb-4">
      <ul className="list-disc list-inside ">
        <li className=" font-semibold mb-2">
          Coupes & Sedans: {coupeSedanPrice}
        </li>
        <li className=" font-semibold mb-2">SUV & Oversize: {oversizePrice}</li>
      </ul>
    </div>
    {/* Schedule Now Button */}
    <LearnMoreButton to={to} />
  </div>
);

// Arrow component
const DownArrow = () => (
  <div className="text-center text-custom-blue  mb-4">
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
    // Reset scroll position to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Define paths for the Schedule Now links

  const contactPath = "/contact"; // Add the path for the Contact page

  return (
    <div className="bg-gradient-to-b from-white to-custom-blue  p-6 min-h-screen">
      <div className="container mx-auto">
        {/* Summary Section */}
        <div className=" mb-8 p-4">
          <h1 className="text-6xl text-center mb-8">
            <span className="text-black font-bold">Ceramic </span>
            <span className="text-custom-blue font-bold">Coating</span>
          </h1>
          <p className=" leading-6 mb-8">
            Over time, factors like sun exposure, bugs, gasoline, dust, and
            debris inevitably diminish your car's paint quality. This wear and
            tear can be concerning, but there's a solution for protection and
            restoration. Foam Experts offers advanced ceramic coating services
            specifically tailored to shield and rejuvenate your vehicle's paint.
            Our service ensures your car maintains its vibrant shine,
            reminiscent of the day you first drove it off the lot.
          </p>
          <h2 className=" text-custom-blue text-2xl mb-2 font-semibold">
            What is Ceramic Coating?
          </h2>
          <p className=" leading-6 mb-8">
            Ceramic coating is an advanced, nanoscopic protective layer applied
            to the exterior of vehicles. It transitions from a liquid state to a
            solid form, creating a robust barrier predominantly made of silicon
            dioxide (SiO2). Once bonded with the car's paint, it generates a
            hydrophobic effect, effectively repelling water and safeguarding
            against various contaminants.
          </p>
          <h2 className=" text-custom-blue text-2xl mb-2 font-semibold">
            What we do.
          </h2>
          <p className=" leading-6 mb-8">
            Here at Foam Experts Detailing our comprehensive packages offer a
            thorough hand wash and clay bar treatment, detailed cleaning of
            wheels and tires, and interior leather cleaning. Additionally, it
            includes a one-step paint correction to remove light marks and
            enhance the paint's appearance. The packages cover a full exterior
            coating for paint, plastics, trims, wheel faces, and the
            front windshield.
          </p>
        </div>

        {/* Our Packages Title and Arrow */}
        <h2 className="text-3xl text-custom-blue  text-center font-bold mb-4">
          Our Packages
        </h2>
        <DownArrow />

        {/* Packages Section */}
        <div className="grid grid-cols-1 gap-8 mb-10">
          {/* Entry Level Package */}
          <PackageSection
            imagePath="/images/ceramic-1.jpg"
            alt="Entry Level Package"
            title="Entry Level Package"
            subtitle="Q² ONE EVO by Gyeon | 24 Months Durability"
            description="The Q² ONE EVO coating offers an exquisite candy gloss finish coupled with enduring protection. Engineered for longevity, it boasts a durability of over 24 months, making it a formidable choice in this category. This product exemplifies professional-grade quality in surface protection technology."
            coupeSedanPrice="$1200"
            oversizePrice="Additional cost starting at $300 and up."
            to={contactPath}
          />

          {/* Standard Package */}
          <PackageSection
            imagePath="/images/ceramic-2.jpg"
            alt="Standard Package"
            title="Standard Package"
            subtitle="Q² MOHS EVO by Gyeon | 36+ Months Durability"
            description="The Q² MOHS EVO coating, developed by GYEON, is a breakthrough in ceramic coatings. By infusing fluorine into polysilazane, it offers high gloss, durable, and chemically resistant single-layer coating with exponential water repellency. This product sets a new standard in paint protection technology."
            coupeSedanPrice="$1500"
            oversizePrice="Additional cost starting at $300 and up."
            to={contactPath}
          />

          {/* Premium Package */}
          <PackageSection
            imagePath="/images/ceramic-3.jpg"
            alt="Premium Package"
            title="Premium Package"
            subtitle="Q² SYNCRO EVO by Gyeon | 48+ Months durability"
            description="The Q² SYNCRO EVO represents the pinnacle of GYEON's multi-layer ceramic paint coating technology. This sophisticated kit merges the newly developed Q² MOHS EVO as its base with the innovative Q² SKIN EVO top coat. Engineered for optimal endurance, the base coating ensures unparalleled durability and protection. Concurrently, the top coat enhances gloss and color, significantly augmenting the aesthetic appeal. Additionally, the combination boasts outstanding self-cleaning and hydrophobic properties, setting a new benchmark in ceramic coating performance."
            coupeSedanPrice="$1800"
            oversizePrice="Additional cost starting at $300 and up."
            to={contactPath}
          />

          {/* Elite Package */}
          <PackageSection
            imagePath="/images/ceramic-4.jpg"
            alt="Elite Package"
            title="Elite Package"
            subtitle="NANO GRAPHENE Coating by ARTDESHINE | 7 year Durability"
            description="Graphene, a one-atom-thick material, stands out as the lightest, strongest, and thinnest known substance, offering exceptional properties ideal for automotive coatings. However, its application is challenging due to the need for advanced techniques to ensure even dispersion in liquids, crucial for effective coating use. The ultimate coating solution to reducing etching, spotting, watermark issues and corrosion."
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
