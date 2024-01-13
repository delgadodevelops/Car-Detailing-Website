// Contact.js

import React, { useState } from "react";
import emailjs from "emailjs-com";

const AlertModal = ({ isOpen, message, onClose }) => {
  return (
    <div className={`fixed inset-0  overflow-auto ${isOpen ? "flex" : "hidden"}`}>
      <div className="flex items-center mx-auto justify-center min-h-screen">
        <div className="bg-white  p-8 rounded shadow-lg">
          <p className="text-lg font-semibold mb-4">{message}</p>
          <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    packageType: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "serviceType") {
      let updatedPackageTypeOptions = [];
      switch (value) {
        case "Paint Correction":
          updatedPackageTypeOptions = ["Entry-Level", "Premium"];
          break;
        case "Ceramic Coating":
          updatedPackageTypeOptions = ["Entry-Level", "Standard", "Premium", "Elite"];
          break;
        default:
          updatedPackageTypeOptions = [];
          break;
      }
      setFormData({
        ...formData,
        [name]: value,
        packageType: "",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending email using EmailJS
    emailjs
      .send("service_8pbzzr9", "template_gukzhjj", formData, "EfGTdTFgjfpRrAh7I")
      .then((response) => {
        console.log("Email sent successfully:", response);
        setModalMessage("Email sent successfully!");
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setModalMessage("Error sending email. Please try again later.");
        setShowModal(true);
      });

    // You can also handle the form submission logic here, like storing in a database

    // Example using fetch
    fetch("your-backend-api-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Backend response:", data);
      })
      .catch((error) => {
        console.error("Backend error:", error);
      });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gradient-to-b from-custom-blue to-white p-6">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Service Type:
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled>Select a Service Type</option>
            <option value="Paint Correction">Paint Correction</option>
            <option value="Ceramic Coating">Ceramic Coating</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Package Type:
          <select
            name="packageType"
            value={formData.packageType}
            onChange={handleChange}
            disabled={formData.serviceType === ""}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled>Select a Package Type</option>
            {formData.serviceType === "Paint Correction" && (
              <>
                <option value="Entry-Level">Entry-Level</option>
                <option value="Premium">Premium</option>
              </>
            )}
            {formData.serviceType === "Ceramic Coating" && (
              <>
                <option value="Entry-Level">Entry-Level</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Elite">Elite</option>
              </>
            )}
          </select>
        </label>
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>

      {/* Display the AlertModal component */}
      <AlertModal isOpen={showModal} message={modalMessage} onClose={closeModal} />
    </div>
  );
};

export default Contact;







