import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/IconTech.png"; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          {/* Logo Section */}
          <div className="flex-shrink-0 ml-4">
            <img
              src={logo}
              alt="Tech Institutes Logo"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between ml-4">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Course Domains</h3>
            <ul className="space-y-2">
              <li>Data Analytics</li>
              <li>Microsoft Power BI</li>
              <li>Google Cloud Platform</li>
              <li>Microsoft Power Platform</li>
              <li>Python</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Reach Us</h3>
            <p>Infront Of Agrawal Hospital</p>
            <p>Chandan Nagar</p>
            <p>Pune</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Social Handles</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebookF size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            ©{new Date().getFullYear()} Icon Tech Institutes All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
