import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const PhoneCallButton = () => {
  return (
    <a
      href="tel:+1234567890" 
      className="fixed bottom-5 left-5 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:scale-110"
      aria-label="Call for enquiry"
    >
      <FaPhoneAlt size={24} />
    </a>
  );
};  

export default PhoneCallButton;
