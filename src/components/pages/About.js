// components/pages/About.js
import React from "react";
import AnimatedSection from "../AnimatedSection";
import { Helmet } from "react-helmet";
import { Link as ScrollLink } from "react-scroll";

const About = () => (
  <section
    id="about"
    className="flex items-center bg-gradient-to-b from-white to-custom-blue xl:h-screen"
  >
    <Helmet>
      <title>About Foam Experts Detailing</title>
      <meta
        name="description"
        content="Learn what sets Foam Experts apart — our passion, process, and premium service in Florida."
      />
      <meta property="og:title" content="About Foam Experts Detailing" />
      <meta
        property="og:description"
        content="Our passion for detailing and commitment to excellence make Foam Experts the go-to in South Florida."
      />
      <meta property="og:url" content="https://www.foamexdetailing.com/about" />
      <meta
        property="og:image"
        content="https://www.foamexdetailing.com/images/og-preview.webp"
      />
    </Helmet>

    <div className="justify-center flex-1 m-6 py-4 lg:py-10 lg:m-40">
      <AnimatedSection>
        <div
          className="relative py-10 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url("images/about-us.webp")',
            borderRadius: "1.5rem",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 rounded-3xl"></div>
          <div className="relative z-10 justify-center px-2 py-2 mx-auto max-w-7xl lg:py-28 md:px-7">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-5 lg:px-30 mb-2 lg:mb-4">
                <h2 className="mb-6 text-4xl font-bold text-gray-100 md:text-5xl dark:text-gray-300">
                  Why Choose Us?
                </h2>
                <p className="mb-8 leading-7 text-sm lg:text-lg lg:leading-loose text-gray-400">
                  At Foam Experts, we believe that the beauty of a car lies in its
                  details. Our passion for vehicles drives us to provide unmatched
                  attention to every aspect of our detailing process. We
                  understand that a car is more than just a mode of transport;
                  it's a statement of personal style and pride. That's why, at
                  Foam Experts, we dedicate ourselves to ensure every customer
                  leaves with a car that's not just clean, but meticulously cared
                  for. Our commitment to customer satisfaction is at the core of
                  our service. We listen, we care, and we deliver excellence in
                  every detail, guaranteeing a personalized experience that sets
                  us apart. Choose Foam Experts, where our passion for cars and
                  commitment to excellence combine to provide a detailing
                  experience that truly stands out.
                </p>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-50}
                  className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 lg:text-xl rounded-full cursor-pointer"
                >
                  Start Today
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default React.memo(About);
