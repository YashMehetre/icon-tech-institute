import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/IconTech.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col justify-start">
            <img
              src={logo}
              alt="Tech Institutes Logo"
              className="h-28 w-auto object-contain"
            />
          </div>

          {/* Course Domains */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Course Domains</h3>
            <ul className="space-y-2">
              <li>Data Analytics</li>
              <li>Microsoft Power BI</li>
              <li>Google Cloud Platform</li>
              <li>Microsoft Power Platform</li>
              <li>Python</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#courses" className="hover:underline">Courses</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Reach Us + Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Reach Us</h3>
            {/* <p>Sangarsh Chowk, Kharadi</p>
            <p>Chandan Nagar, Wadgaon Sheri</p>
            <p>Pune, Maharashtra 411014, India</p> */}

            {/* Embedded Google Map */}
            <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.093650689262!2d73.93065407519941!3d18.569061882542846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b2b4d22d67%3A0xa3f5c2f0d69cc274!2sSangarsh%20Chowk%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1716734343877!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Socials */}
            <h3 className="text-lg font-semibold mt-4 mb-2">Social Handles</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            ©{new Date().getFullYear()} Icon Tech Institutes. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
