import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import logo from "../assets/Main.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest("#main-menu") && !event.target.closest("button[aria-controls='main-menu']")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsCoursesDropdownOpen(false); // Close dropdown when toggling menu
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
    setMenuOpen(false); // Close menu on navigation
  };

  const handleCourseCategoryClick = (category) => {
    navigate("/courses", {
      state: { filterCategory: category },
      replace: true,
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
    setMenuOpen(false);
  };

  const isBlogDetailPage = /^\/blog\//.test(location.pathname) || location.pathname === "/blogdetails";
  const isCoursePage = location.pathname.includes("/course/");

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 md:py-6 z-50">
      <nav className="container mx-auto px-4" aria-label="Main navigation" role="navigation">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 md:ml-6">
            <RouterLink
              to="/"
              className="flex items-center text-2xl md:text-3xl font-extrabold"
              aria-label="Tech Institute"
              onClick={handleHomeClick}
            >
              <img
                src={logo}
                alt="Company Logo"
                className="h-8 w-8 md:h-10 md:w-10 object-contain mr-2"
              />
              <span className="text-black">Icon</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-type">
                Tech Institute
              </span>
            </RouterLink>
          </div>

          <button
            className="md:hidden p-2 focus:outline-none"
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
            className={`absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none ${
              menuOpen ? "block" : "hidden"
            } md:block transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6 lg:space-x-8 p-4 md:p-0">
              <li className="w-full md:w-auto">
                <button
                  onClick={handleHomeClick}
                  className="block w-full text-left md:text-center text-lg md:text-xl text-gray-700 hover:text-blue-800 hover:underline transition duration-300 cursor-pointer py-2 md:py-0"
                  aria-label="Go to Home section"
                >
                  Home
                </button>
              </li>

              {!isBlogDetailPage && !isCoursePage && (
                <>
                  <li className="relative w-full md:w-auto">
                    <button
                      onClick={toggleCoursesDropdown}
                      className="flex items-center justify-between w-full md:w-auto text-lg md:text-xl text-gray-700 hover:text-blue-800 transition duration-300 cursor-pointer py-2 md:py-0"
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
                      } md:absolute mt-2 md:mt-0 w-full md:w-48 bg-white rounded-md shadow-lg md:shadow-xl z-10`}
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

                  <li className="w-full md:w-auto">
                    <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                      className="block w-full text-left md:text-center text-lg md:text-xl text-gray-700 hover:text-blue-800 hover:underline transition duration-300 cursor-pointer py-2 md:py-0"
                      onClick={() => handleNavigation("about", true)}
                      aria-label="Go to About Us section"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="w-full md:w-auto">
                    <Link
                      to="contact"
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                      className="block w-full text-left md:text-center text-lg md:text-xl text-gray-700 hover:text-blue-800 hover:underline transition duration-300 cursor-pointer py-2 md:py-0"
                      onClick={() => handleNavigation("contact", true)}
                      aria-label="Go to Contact Us section"
                    >
                      Contact Us
                    </Link>
                  </li>
                </>
              )}

              <li className="w-full md:w-auto">
                <RouterLink
                  to="/blogdetails"
                  className="block w-full text-left md:text-center text-lg md:text-xl text-gray-700 hover:text-blue-800 hover:underline transition duration-300 cursor-pointer py-2 md:py-0"
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