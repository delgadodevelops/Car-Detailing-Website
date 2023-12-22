import React from "react";

const About = () => (
  <section
    id="about"
    className="flex items-center bg-gradient-to-b from-white to-custom-blue xl:h-screen"
  >
    <div className="justify-center flex-1 m-8 py-4 lg:py-10 lg:m-40">
      <div
        className="relative py-10 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("images/about-us.jpg")',
          borderRadius: "1.5rem", // Adjust this value for your desired rounded corners
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 rounded-3xl"></div>
        <div className="relative z-10 justify-center px-4 py-4 mx-auto max-w-7xl lg:py-28 md:px-7">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-10 lg:px-30 mb-10 lg:mb-4">
              <h2 className="mb-6 text-4xl font-bold text-gray-100 md:text-5xl dark:text-gray-300">
                Why Choose Us?
              </h2>
              <p className="mb-6 leading-loose text-gray-400 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </p>
              <button className="flex px-6 py-2 font-semibold leading-loose text-gray-100 transition-all duration-300 bg-custom-blue rounded-full hover:bg-sky-600">
                Start Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
