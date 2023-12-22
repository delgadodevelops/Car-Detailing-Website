import { useState } from "react";

const Gallery = () => {
  const imageUrls = [
    "./images/bmw.jpeg",
    "./images/R32.JPG",
    "./images/mercedes.JPEG",
    "./images/mercedes.JPEG",
    "./images/bmw.jpeg",
    "./images/R32.JPG",
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const navigate = (direction) => {
    const newIndex =
      (selectedImageIndex + direction + imageUrls.length) % imageUrls.length;
    setSelectedImageIndex(newIndex);
  };

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-white to-custom-blue py-12"
    >
      <div className="container mx-auto p-6 my-12">
        <h1 className="pl-2 text-center text-3xl font-bold border-custom-blue md:text-5xl">
          Check out our Work
        </h1>
        <p className="text-lg text-gray-500 text-center p-5 mb-8">
          Our gallery showcases the immaculate results of cars treated to our
          premium detailing services.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {imageUrls.map((imageUrl, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img
                className="w-full h-full object-cover transform scale-100 transition-transform duration-300 hover:scale-105 cursor-pointer"
                src={imageUrl}
                alt={`Car ${index + 1} - Premium Detailing`}
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </div>

        {selectedImageIndex !== null && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-6">
            <div className="relative max-w-screen-md max-h-screen-3/4 lg:h-screen">
              <span
                className="absolute top-4 right-4 text-white cursor-pointer text-4xl"
                onClick={closeModal}
              >
                &times;
              </span>
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 px-4 py-2 rounded-full cursor-pointer"
                onClick={() => navigate(-1)}
              >
                {"<"}
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 px-4 py-2 rounded-full cursor-pointer"
                onClick={() => navigate(1)}
              >
                {">"}
              </button>
              <img
                className="w-full h-full object-contain filter rounded-3xl"
                src={imageUrls[selectedImageIndex]}
                alt="Enlarged Image"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
