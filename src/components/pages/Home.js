import React from "react";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Services from "./Services";

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="relative flex justify-center h-screen text-black ">
      <div
        className="absolute inset-0 overflow-hidden flex items-center lg:translate-x-1/4"
        style={{
          backgroundImage: 'url("/images/nsx.png")',
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      ></div>
      <div className="text-left z-10 text-black p-4">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 mt-16 ">
          <span className="text-custom-blue">Elevate</span> Your Ride with
          Professional Detailing
        </h1>
        <p className="text-lg lg:text-xl mb-4">
          Transform your car into a masterpiece.
        </p>
        <button className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 lg:text-xl rounded-full">
          Schedule Now
        </button>
      </div>
    </section>

    <About />
    <Services />
    <Gallery />
    <Contact />
  </div>
);

export default Home;
