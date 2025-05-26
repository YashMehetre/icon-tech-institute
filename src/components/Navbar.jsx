import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  const handleNavigation = (link, isSection) => {
    setActiveLink(link);
    if (isSection && location.pathname === "/") {
      return;
    }
    navigate("/", { replace: true });
  };

// Navbar.js
const handleCourseCategoryClick = (category) => {
  navigate("/courses", { 
    state: { filterCategory: category },
    replace: true 
  });
  setMenuOpen(false);
  setIsCoursesDropdownOpen(false);
};

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const isBlogDetailPage = /^\/blog\//.test(location.pathname) || location.pathname === "/blogdetails";
  const isCoursePage = location.pathname.includes("/course/");

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md py-6 z-50">
      <nav className="container mx-auto px-4" aria-label="Main navigation" role="navigation">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <RouterLink
              to="/"
              className="text-3xl font-extrabold ml-6"
              aria-label="Grow N Work"
              onClick={handleHomeClick}
            >
              <span className="text-black">Icon</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-type">
                Tech Institute
              </span>
            </RouterLink>
          </div>

          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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
                <button
                  onClick={handleHomeClick}
                  className="block text-xl text-gray-700 hover:text-blue-800 hover:underline transition duration-300 cursor-pointer"
                  aria-label="Go to Home section"
                >
                  Home
                </button>
              </li>

              {!isBlogDetailPage && !isCoursePage && (
                <>
                  <li className="relative group">
                    <button
                      onClick={toggleCoursesDropdown}
                      className="flex items-center text-xl text-gray-700 hover:text-blue-800 transition duration-300 cursor-pointer"
                      aria-expanded={isCoursesDropdownOpen}
                      aria-label="Courses dropdown"
                    >
                      All Courses
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                          isCoursesDropdownOpen ? "transform rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      className={`${
                        isCoursesDropdownOpen ? "block" : "hidden"
                      } md:absolute md:group-hover:block mt-2 md:mt-0 w-48 bg-white rounded-md shadow-lg z-10`}
                    >
                      <div className="py-1">
                        <button
                          onClick={() => handleCourseCategoryClick("Data Analytics")}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                        >
                          Data Analytics
                        </button>
                        <button
                          onClick={() => handleCourseCategoryClick("Power Platform")}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                        >
                          Power Platform
                        </button>
                        <button
                          onClick={() => handleCourseCategoryClick("Cloud Technologies")}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                        >
                          Cloud Technologies
                        </button>
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                      className="block text-xl text-gray-700 hover:text-blue-800 hover:underline transition duration-300 cursor-pointer"
                      onClick={() => handleNavigation("about", true)}
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
                      spy={true}
                      offset={-80}
                      className="block text-xl text-gray-700 hover:text-blue-800 hover:underline transition duration-300 cursor-pointer"
                      onClick={() => handleNavigation("contact", true)}
                      aria-label="Go to Contact Us section"
                    >
                      Contact Us
                    </Link>
                  </li>
                </>
              )}

              <li>
                <RouterLink
                  to="/blogdetails"
                  className="block text-xl text-gray-700 hover:text-blue-800 hover:underline transition duration-300 cursor-pointer"
                  onClick={() => handleNavigation("blog", false)}
                  aria-label="Go to Blog page"
                >
                  Blog
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 