// components/pages/Gallery.js
import React, { useEffect } from "react";
import AnimatedSection from "../AnimatedSection";
import { Helmet } from "react-helmet";

const Gallery = () => {
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
      id="gallery"
      className="bg-gradient-to-b from-white to-custom-blue py-16 px-4 sm:px-6 lg:px-8"
    >
      <Helmet>
        <title>Gallery | Foam Experts Detailing</title>
        <meta
          name="description"
          content="View real examples of our premium detailing work in our project gallery. See the difference Foam Experts can make."
        />
        <meta property="og:title" content="Gallery | Foam Experts Detailing" />
        <meta
          property="og:description"
          content="Check out before & after photos of our car detailing, ceramic coating, and paint correction services."
        />
        <meta property="og:url" content="https://www.foamexdetailing.com/gallery" />
        <meta
          property="og:image"
          content="https://www.foamexdetailing.com/images/og-preview.webp"
        />
      </Helmet>

      <div className="max-w-6xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Our Work
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-lg text-gray-500 mb-10">
            Browse some of our most recent detailing jobs.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div
            className="elfsight-app-453acbdb-be95-433c-b974-d136a1ae9041"
            data-elfsight-app-lazy
          ></div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Gallery;
