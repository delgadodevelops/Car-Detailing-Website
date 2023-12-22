// Gallery.js
import React from "react";

const Gallery = () => {
  const imageUrls = [
    "./images/bmw.jpeg",
    "./images/R32.JPG",
    "./images/mercedes.jpeg",
    "./images/mercedes.jpeg",
    "./images/bmw.jpeg",
    "./images/R32.JPG",
  ];

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-white to-custom-blue py-12"
    >
      {" "}
      <div className="container mx-auto p-6 my-12">
        <h1 class="pl-2 text-center text-3xl font-bold border-custom-blue md:text-5xl ">
          Check out our Work
        </h1>
        <p className="text-lg text-gray-500 text-center p-5 mb-8">
          Our gallery showcases the immaculate results of cars treated to our
          premium detailing services.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="overflow-hidden rounded-3xl">
              <img
                className="w-full h-full object-cover transform scale-100 transition-transform duration-300 hover:scale-105"
                src={imageUrl}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
