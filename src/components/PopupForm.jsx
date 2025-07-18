import React, { useState, useEffect } from "react";
import usePopup from "../hooks/usePopup";
import emailjs from "emailjs-com";
import enquiryImage from "../assets/enquiry.jpg";

const PopupForm = () => {
  const [showPopup, setShowPopup] = usePopup();
  const [slideIn, setSlideIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      setSlideIn(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [setShowPopup]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);
    setError("");
    setMessageSent(false);
    setSuccessMessage("");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_f2wgzzo",
        "template_cgbch76",
        templateParams,
        "c3P8PR2VhYO4UES2j"
      )
      .then(
        (response) => {
          setIsSending(false);
          setMessageSent(true);
          setFormData({ name: "", email: "", phone: "", message: "" });
          setSuccessMessage("Your enquiry has been sent successfully!");
        },
        (error) => {
          setIsSending(false);
          setError("An error occurred. Please try again later.");
        }
      );
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div
        className={`bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl relative flex flex-col md:flex-row transform transition-all duration-500 ${
          slideIn ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6 hidden md:block">
          <img
            src={enquiryImage}
            alt="Enquiry"
            className="rounded-lg shadow-lg w-full h-56 md:h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 relative">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-2 text-gray-800 hover:text-gray-900 text-3xl"
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Enquiry Form
          </h2>

          <p className="text-lg mb-4 text-center text-gray-600">
            Have a question or need more information? Reach out to us!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Enquiry"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-400"
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white px-5 py-3 rounded-lg w-full hover:bg-gray-800 transition-colors"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Submit"}
            </button>
          </form>

          {messageSent && (
            <p className="text-green-500 text-center mt-2">{successMessage}</p>
          )}
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
