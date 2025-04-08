// components/pages/Testimonials.jsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Testimonials = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-custom-blue to-white py-12 px-10 sm:px-6 lg:px-8"
    >
      <Helmet>
        <title>Customer Reviews | Foam Experts Detailing</title>
        <meta
          name="description"
          content="Read real Google reviews from satisfied customers who’ve trusted Foam Experts Detailing with their vehicles."
        />
        <meta
          property="og:title"
          content="Customer Reviews | Foam Experts Detailing"
        />
        <meta
          property="og:description"
          content="5-star reviews from real clients. See why people trust Foam Experts for mobile detailing, paint correction, and ceramic coating."
        />
        <meta property="og:url" content="https://www.foamexdetailing.com/testimonials" />
        <meta
          property="og:image"
          content="https://www.foamexdetailing.com/images/og-preview.webp"
        />
      </Helmet>

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-500 mb-10">
          Real Google Reviews from our happy customers.
        </p>
        <div
          className="elfsight-app-c0ef9121-1cd6-4707-bc1f-f1782376e73d"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default Testimonials;
