import { useMemo, useState } from "react";

const Gallery = () => {
  // Memoize image URLs to prevent unnecessary recalculations
  const imageUrls = useMemo(
    () => [
      "./images/bmw.jpg",
      "./images/bmw-2.jpg",
      "./images/R32.JPG",
      "./images/mercedes.JPEG",
      "./images/mercedes-2.jpg",
      "./images/mk4.JPG",
    ],
    []
  );

  // State for tracking selected image index
  const [selectedImageIndex, setSelectedImageIndex] = useState(() => null);

  // Open modal and set selected image index
  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  // Close modal by resetting selected image index
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // Navigate through images in the modal
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
        {/* Gallery Title */}
        <h1 className="pl-2 text-center text-3xl font-bold border-custom-blue md:text-5xl">
          Check out our Work
        </h1>

        {/* Gallery Description */}
        <p className="text-lg text-gray-500 text-center p-5 mb-8">
          Our gallery showcases the immaculate results of cars treated to our
          premium detailing services.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {imageUrls.map((imageUrl, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-3xl shadow-lg"
            >
              {/* Image Thumbnail */}
              <img
                className="w-full h-full object-cover transition-transform duration-300 transform scale-100 hover:scale-105 cursor-pointer"
                src={imageUrl}
                alt={`Car ${index + 1} - Premium Detailing`}
                onClick={openModal.bind(null, index)}
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-6">
            <div className="relative max-w-screen-md max-h-screen-3/4 lg:p-24">
              {/* Close Modal Button */}
              <span
                className="absolute right-4 text-white cursor-pointer text-4xl"
                onClick={closeModal}
              >
                &times;
              </span>

              {/* Previous Image Button */}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 px-2 lg:px-4 lg:py-2 rounded-full cursor-pointer"
                onClick={() => navigate(-1)}
              >
                {"<"}
              </button>

              {/* Next Image Button */}
              <button
                className="absolute top-1/2 right-4 mr-2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 px-2 lg:px-4 lg:py-2 rounded-full cursor-pointer"
                onClick={() => navigate(1)}
              >
                {">"}
              </button>

              {/* Enlarged Image */}
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
