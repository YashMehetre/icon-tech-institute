import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/IconTech.png";

const Home = () => {
  const [activeText, setActiveText] = React.useState(0);
  const textVariants = ["Power BI", "Data Analytics", "SnowFlake", "Python", "Power Automate"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveText((prev) => (prev + 1) % textVariants.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative overflow-hidden h-[90vh] sm:h-[110vh] lg:h-[95vh] pt-24 sm:py-32 lg:py-36 mb-6 sm:mb-12 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-transparent opacity-50"></div>
        <div className="absolute inset-0 z-0">
          <div className="absolute w-20 h-20 bg-purple-500 rounded-full opacity-30 animate-pulse -top-10 -left-10"></div>
          <div className="absolute w-24 h-24 bg-blue-500 rounded-full opacity-30 animate-pulse -bottom-10 -right-10"></div>
          <div className="absolute w-16 h-16 bg-indigo-500 rounded-full opacity-30 animate-pulse top-1/4 left-1/4"></div>
          <div className="absolute w-20 h-20 bg-pink-500 rounded-full opacity-30 animate-pulse bottom-1/4 right-1/4"></div>
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-bubble-spark"></div>
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-bubble-spark delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 w-2 h-2 bg-white rounded-full animate-bubble-spark delay-1000"></div>
        </div>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-8 relative z-10">
          <div className="text-center lg:text-left lg:w-1/2 p-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 transform transition-all duration-700 ease-out hover:scale-105 hover:text-yellow-400">
              Ready to Master {" "}
              <span className="relative text-yellow-500 underline underline-offset-8">
                {textVariants[activeText]}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-300 animate-pulse"></span>
              </span>{" "}
              with <span className="text-blue-500">Icon</span>{" "}
              <span className="text-blue-500">Tech</span>{" "}
            </h1>
            <p className="text-lg text-gray-300 mb-6 opacity-100 animate-fadeInUp">
              Let us guide you through the world of data analytics with
              expert-led courses and real-world applications.
            </p>
            <div className="flex justify-center lg:justify-start">
              <RouterLink
                to="/courses"
                className="bg-white text-black px-8 py-4 text-lg rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer transform hover:scale-105"
                aria-label="Explore Courses"
              >
                Explore Courses
              </RouterLink>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center p-6">
            <img
              src={logo}
              alt="Logo"
              className="w-3/5 lg:w-3/4 max-w-md rounded-lg shadow-lg transform transition-all duration-700 ease-in-out hover:scale-110 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
