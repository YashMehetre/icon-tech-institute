import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold transition-colors duration-500 hover:text-blue-400 text-left">
            <span className="text-white">Data</span>
            <span className="text-blue-500"> Mentor</span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Course Domains</h3>
            <ul className="space-y-2">
              <li><a href="#data-analytics">Data Analytics</a></li>
              <li><a href="#power-bi">Microsoft Power BI</a></li>
              <li><a href="#google-cloud">Google Cloud Platform</a></li>
              <li><a href="#power-platform">Microsoft Power Platform</a></li>
              <li><a href="#python">Python</a></li>
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
            <p>Chandan Nagar </p>
            <p>Pune</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Social Handles</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            ©{new Date().getFullYear()} Data Mentor Academy All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
