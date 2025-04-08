// components/pages/Contact.js
import React, { useEffect } from "react";
import AnimatedSection from "../AnimatedSection";
import { Helmet } from "react-helmet";

const DownArrow = () => (
  <div className="text-center text-gray-500 mb-2">
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

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-custom-blue py-12 px-4"
    >
      <Helmet>
        <title>Book an Appointment | Foam Experts Detailing</title>
        <meta
          name="description"
          content="Schedule your premium mobile detailing appointment online. Fast and easy booking through Calendly."
        />
        <meta property="og:title" content="Book an Appointment | Foam Experts Detailing" />
        <meta
          property="og:description"
          content="Choose your service and book online in minutes. Paint correction, ceramic coating, and full car detailing in Florida."
        />
        <meta property="og:url" content="https://www.foamexdetailing.com/contact" />
        <meta
          property="og:image"
          content="https://www.foamexdetailing.com/images/og-preview.webp"
        />
      </Helmet>

      <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <AnimatedSection>
          <h1 className="pl-2 text-center text-3xl font-bold border-custom-blue md:text-5xl">
            Book an Appointment
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-lg text-gray-500 text-center p-5">
            Check our available dates
          </p>
        </AnimatedSection>
        <DownArrow />
        <AnimatedSection delay={0.4}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/foamexperts/booking"
            style={{
              minWidth: "320px",
              height: "1100px",
              width: "100%",
              borderRadius: "1rem"
            }}
          ></div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
