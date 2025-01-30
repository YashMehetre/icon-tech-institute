import React, { useEffect, useState } from "react";
import usePopup from "../hooks/usePopup";
import enquiryImage from "../assets/enquiry.jpg"; 

const PopupForm = () => {
  const [showPopup, setShowPopup] = usePopup();
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      setSlideIn(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [setShowPopup]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`bg-white p-8 rounded-lg shadow-xl w-[900px] relative flex transform transition-all duration-500 ${
          slideIn ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        
        <div className="w-1/2 mr-6">
          <img
            src={enquiryImage}
            alt="Enquiry"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 relative">
          {/* Close Button */}
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-2 text-gray-800 hover:text-gray-900 text-3xl"
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Enquiry Form
          </h2>

          <p className="text-lg mb-6 text-center text-gray-600">
            Let's Talk! Find your desired career path with us!
          </p>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:border-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:border-blue-400"
          />
          <input
            type="tel"
            placeholder="Your Contact Number"
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:border-blue-400"
          />

          <button
            className="bg-black text-white px-5 py-3 rounded-lg w-full hover:bg-gray-800 transition-colors"
            onClick={() => setShowPopup(false)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
