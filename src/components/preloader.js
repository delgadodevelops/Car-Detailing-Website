import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 1000); // Delay in milliseconds before the text fades in

    const timer2 = setTimeout(() => {
      setFadeOut(true);
    }, 3000); // Delay in milliseconds before the entire preloader fades out

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div
      className={`preloader ${fadeIn ? "fade-in" : ""} ${
        fadeOut ? "fade-out" : ""
      }`}
    >
      <div className="preloader-content">
        <div className="logo-container ml-10">
          <img
            className={`logo ${fadeIn ? "swipe-in" : ""} w-32 h-32`} // Set width and height to 32 pixels
            src="./images/dd-logo.png"
            alt="Logo"
          />
        </div>
        <h1 className=" text-custom-orange flex items-center justify-center">
          <span className=" mr-2 animate-spin text-custom-orange">&#9696;</span>{" "}
          Portfolio Loading ...
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
