// components/pages/Services.js
import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";
import { Helmet } from "react-helmet";

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

const ServiceCard = React.memo(
  ({ imageSrc, title, description, features, path }) => (
    <AnimatedSection delay={0.2}>
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out lg:mx-8">
        <div className="p-7">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            loading="lazy"
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
    </AnimatedSection>
  )
);

const Services = () => (
  <div className="bg-gradient-to-b from-custom-blue to-white p-6 lg:p-10">
    <Helmet>
      <title>Our Detailing Services | Foam Experts</title>
      <meta
        name="description"
        content="Discover premium car detailing services including paint correction, interior detailing, and ceramic coating. Expert care, professional results."
      />
      <meta property="og:title" content="Our Detailing Services | Foam Experts" />
      <meta
        property="og:description"
        content="Foam Experts offers a range of professional auto detailing services including paint correction, ceramic coating, and interior care."
      />
      <meta property="og:url" content="https://www.foamexdetailing.com/services" />
      <meta
        property="og:image"
        content="https://www.foamexdetailing.com/images/og-preview.webp"
      />
    </Helmet>

    <section id="services" className="container mx-auto my-12">
      <AnimatedSection>
        <h1 className="pl-2 text-center text-3xl font-bold border-custom-blue md:text-5xl">
          Our Services
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="text-lg text-gray-500 text-center p-5">
          Elevate your ride with our premium car detailing services...
        </p>
      </AnimatedSection>
      <DownArrow />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            imageSrc: "/images/paint_correction.webp",
            title: "Paint Correction",
            description:
              "Restore your car's exterior to its showroom glory with our meticulous detailing services.",
            features: [
              "1 Step & 2 Step Paint Correction",
              "Removal of light & deep swirl marks",
              "Restore showroom shine",
            ],
            path: "/paint-correction",
          },
          {
            imageSrc: "/images/interior.webp",
            title: "Exterior & Interior Detailing",
            description:
              "Experience luxury from the inside out. Our interior detailing ensures a pristine and comfortable driving experience.",
            features: ["Deep Cleaning", "Leather Treatment", "Odor Removal"],
            path: "/interior-detailing",
          },
          {
            imageSrc: "/images/ceramic-1.webp",
            title: "Ceramic Coating",
            description:
              "Protect your investment with our advanced ceramic coating that enhances and preserves your car's finish.",
            features: [
              "Long-lasting Shine",
              "Scratch Resistance",
              "Easy Maintenance",
            ],
            path: "/ceramic",
          },
        ].map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  </div>
);

export default Services;
