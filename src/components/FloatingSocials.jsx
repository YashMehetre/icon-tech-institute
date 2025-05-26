import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";

const FloatingSocials = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-in">
      <div className="flex flex-col space-y-4">
        {/* WhatsApp */}
        <a
          href="https://wa.me/7744993282" // Replace with actual number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full shadow-lg text-white hover:bg-green-600 hover:scale-110 transition-all duration-300"
        >
          <FaWhatsapp size={20} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/icontechinstitut?igsh=OTExZG1kY2RhbzZ5" // Replace with your page
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-3 rounded-full shadow-lg text-white hover:scale-110 transition-all duration-300"
        >
          <FaInstagram size={20} />
        </a>

        {/* Contact */}
        <a
          href="tel:7744993282"
          className="bg-blue-600 p-3 rounded-full shadow-lg text-white hover:bg-blue-700 hover:scale-110 transition-all duration-300"
        >
          <FaPhoneAlt size={20} />
        </a>
      </div>
    </div>
  );
};

export default FloatingSocials;
