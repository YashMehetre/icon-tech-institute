import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSetActive = (link) => {
    setActiveLink(link);  
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 z-50">
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-extrabold" aria-label="Grow N Work">
              <span className="text-black">Grow</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-type">-N-</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-type">Spark</span>
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div
            id="main-menu"
            className={`absolute md:relative top-16 md:top-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent ${
              menuOpen ? "block" : "hidden"
            } md:block transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className={`block text-lg text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer ${
                    activeLink === "home" ? "text-blue-500 font-bold" : ""
                  }`}
                  onClick={() => handleSetActive("home")} // Set active on click
                  aria-label="Go to Home section"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="courses"
                  smooth={true}
                  duration={500}
                  className={`block text-lg text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer ${
                    activeLink === "courses" ? "text-blue-500 font-bold" : ""
                  }`}
                  onClick={() => handleSetActive("courses")}
                  aria-label="Go to Courses section"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className={`block text-lg text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer ${
                    activeLink === "about" ? "text-blue-500 font-bold" : ""
                  }`}
                  onClick={() => handleSetActive("about")}
                  aria-label="Go to About Us section"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={`block text-lg text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer ${
                    activeLink === "contact" ? "text-blue-500 font-bold" : ""
                  }`}
                  onClick={() => handleSetActive("contact")}
                  aria-label="Go to Contact Us section"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  smooth={true}
                  duration={500}
                  className={`block text-lg text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer ${
                    activeLink === "blog" ? "text-blue-500 font-bold" : ""
                  }`}
                  onClick={() => handleSetActive("blog")}
                  aria-label="Go to Blog section"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
