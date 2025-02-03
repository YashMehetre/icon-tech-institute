import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  const [activeText, setActiveText] = React.useState(0);
  const textVariants = ["Power BI", "Data Analytics", "Data Storage"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveText((prev) => (prev + 1) % textVariants.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative overflow-hidden h-[130vh] sm:h-[110vh] lg:h-[95vh] py-28 sm:py-32 lg:py-36 mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-transparent opacity-50"></div>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-8 relative z-10">
          <div className="text-center lg:text-left lg:w-1/2 p-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Ready to Master{" "}
              <span className="relative text-yellow-500 underline">
                {textVariants[activeText]}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-300 animate-pulse"></span>
              </span>{" "}
              with <span className="text-blue-500">Data</span>{" "}
              <span className="text-blue-500">Mentor</span>{" "}
            
            </h1>
            <p className="text-lg text-gray-300 mb-6 block">
              Let us guide you through the world of data analytics with
              expert-led courses and real-world applications.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                to="courses"
                smooth={true}
                duration={500}
                className="bg-white text-black px-8 py-4 text-lg rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                aria-label="Explore Courses"
              >
                Explore Courses
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center p-6">
            <img
              src="https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=700"
              alt="Professional Learning"
              className="w-4/5 lg:w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
