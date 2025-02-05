import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("home");
    } else if (location.pathname === "/blog") {
      setActiveLink("blog");
    } else if (location.pathname === "/contact") {
      setActiveLink("contact");
    } else if (location.pathname === "/about") {
      setActiveLink("about");
    } else if (location.pathname === "/courses") {
      setActiveLink("courses");
    } else if (location.pathname.includes("/course/")) {
      setActiveLink("courses");
    }
  }, [location.pathname]);

  const isBlogDetailPage = location.pathname === "/blogdetails";
  const isHomePage = location.pathname === "/";
  const isCoursePage = location.pathname.includes("/course/");

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 z-50">
      <nav className="container mx-auto px-4" aria-label="Main navigation" role="navigation">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-extrabold" aria-label="Grow N Work">
              <span className="text-black">Data</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-type">Mentor</span>{" "}
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
            className={`absolute md:relative top-16 md:top-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent ${menuOpen ? "block" : "hidden"} md:block transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              <li>
                {isBlogDetailPage ? (
                  <RouterLink
                    to="/"
                    className={`block text-lg text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer ${activeLink === "home" ? "text-blue-500 font-bold" : ""}`}
                    onClick={() => handleSetActive("home")}
                    aria-label="Go to Home page"
                  >
                    Home
                  </RouterLink>
                ) : (
                  
                  <RouterLink
                    to="/"
                    className={`block text-lg text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer ${activeLink === "home" ? "text-blue-500 font-bold" : ""}`}
                    onClick={() => handleSetActive("home")}
                    aria-label="Go to Home page"
                  >
                    Home
                  </RouterLink>
                )}
              </li>
              {!isBlogDetailPage && !isCoursePage && (
                <>
                  <li>
                    <Link
                      to="courses"
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                      className={`block text-lg text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer ${activeLink === "courses" ? "text-blue-500 font-bold" : ""}`}
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
                      spy={true}
                      offset={-80}
                      className={`block text-lg text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer ${activeLink === "about" ? "text-blue-500 font-bold" : ""}`}
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
                      spy={true}
                      offset={-80}
                      className={`block text-lg text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer ${activeLink === "contact" ? "text-blue-500 font-bold" : ""}`}
                      onClick={() => handleSetActive("contact")}
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
                  className={`block text-lg text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer ${activeLink === "blog" ? "text-blue-500 font-bold" : ""}`}
                  onClick={() => handleSetActive("blog")}
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
