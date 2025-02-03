import React from "react";
import phone from "../assets/phone.png"; 

const PhoneCallButton = () => {
  return (
    <a
      href="tel:+1234567890" 
      className="fixed bottom-5 left-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
      aria-label="Call for enquiry"
    >
      <img
        src={phone} 
        alt="Call icon"
        className="w-10 h-10" 
      />
    </a>
  );
};

export default PhoneCallButton;
