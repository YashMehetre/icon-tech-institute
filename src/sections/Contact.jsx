import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const { firstName, lastName, email, message } = formData;
    if (!firstName || !lastName || !email || !message) {
      setError("All fields are required.");
      return false;
    }
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
      setError("Please enter a valid email.");
      return false;
    }
    if (message.length < 10) {
      setError("Message must be at least 10 characters long.");
      return false;
    }
    setError("");
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSending(true);
    setMessageSent(false);
    setSuccessMessage("");

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_z0ygob6",
        "template_l3spsn3",
        templateParams,
        "rksfd0TNUUD9ourEs"
      )
      .then(
        (response) => {
          setIsSending(false);
          setMessageSent(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
          setSuccessMessage("Your details have been sent successfully! We will get back to you shortly.");
        },
        (error) => {
          setIsSending(false);
          setError("An error occurred. Please try again later.");
        }
      );
  };

  return (
    <div className="bg-gray-100 py-16 px-6 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="lg:ml-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Email, call, or complete the form to learn how Snappy can solve your messaging problem.
          </p>
          <p className="text-gray-800 font-semibold">icontechinstitute1@gmail.com</p>
          <p className="text-gray-800 font-semibold mb-6">+91 7744993282</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900">Customer Support</h3>
              <p className="text-gray-700 mt-2">Our support team is available around the clock to address any concerns or queries you may have.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900">Feedback & Suggestions</h3>
              <p className="text-gray-700 mt-2">We value your feedback and are continuously working to improve Snappy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900">Media Inquiries</h3>
              <p className="text-gray-700 mt-2">For media-related questions or press inquiries, contact us at media@snappyapp.com.</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mt-12 lg:mt-0 lg:ml-24">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help?"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Submit"}
            </button>
            {messageSent && <p className="text-green-500 text-center mt-2">Message sent successfully!</p>}
            {successMessage && <p className="text-green-500 text-center mt-2">{successMessage}</p>}
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            <p className="text-sm text-gray-500 text-center mt-2">
              By contacting us, you agree to our <a href="#" className="text-blue-600">Terms of Service</a> and <a href="#" className="text-blue-600">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
