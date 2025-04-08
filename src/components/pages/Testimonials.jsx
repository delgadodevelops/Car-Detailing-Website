// components/pages/Testimonials.jsx
import React, { useEffect } from "react";
import AnimatedSection from "../AnimatedSection";

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
    <section id="testimonials" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            What Our Clients Say
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-lg text-gray-500 mb-10">
            Real Google Reviews from our happy customers.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div
            className="elfsight-app-c0ef9121-1cd6-4707-bc1f-f1782376e73d"
            data-elfsight-app-lazy
          ></div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
