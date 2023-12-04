import React from "react";

const aboutMeText = (
  <p className="">
    As a Junior Front-End Developer, I excel in HTML, CSS, JavaScript, React,
    and Tailwind. I specialize in creating responsive websites with dynamic
    interfaces. I'm highly collaborative and passionate about sports,
    photography, video games, and computer science. I'm driven, open-minded, and
    committed to excellence in all my endeavors.
  </p>
);

const About = () => {
  return (
    <div className="bg-gradient-to-b from-custom-bluee to-custom-blue flex flex-col items-center justify-center">
      <div className="bg-custom-blue rounded-lg shadow-lg p-8 m-8 md:p-16 md:m-16 xl:p-10 xl:m-80 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center lg:p-5">
          <img
            src="images/coding-img-2.png"
            alt="Your Name"
            className="mb-4 w-64 h-56 sm:w-96 sm:h-80  xl:w-120 xl:h-108"
          />
          <div className="text-center lg:text-left lg:pl-8">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold italic mb-6">
              <span className="text-custom-orange">PASSIONATE</span>{" "}
              <span className="text-white">FRONT-END</span>{" "}
              <span className="text-custom-orange">REACT</span>{" "}
              <span className="text-white">DEVELOPER</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-xl leading-7">
              {aboutMeText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
