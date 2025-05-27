import React from "react";
import { Link } from "react-router-dom";
import courses from "../pages/coursesData";
import placement from "../pages/placement"; // import your placement array
import { FaChalkboardTeacher, FaBrain, FaUsersCog } from "react-icons/fa";

const Courses = () => {
  const categories = ["Trending Courses"]; // Only Trending Courses

  return (
    <div className="bg-black min-h-screen py-16 px-6">
      {/* Placement Cards Section above Trending Courses */}
      <div>
        <h2 className="text-4xl font-bold text-center mb-6 text-white">
          Placement Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4 mb-16">
          {placement.map((person) => (
            <div
              key={person.id}
              className="w-11/12 mx-auto bg-gray-100 text-black p-6 rounded-lg shadow-lg border border-gray-300 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform min-h-[350px]"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">
                {person.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {categories.map((category, index) => (
        <div key={category} className={index !== 0 ? "mt-12" : ""}>
          <h2 className="text-4xl font-bold text-center mb-6 text-white">
            {category}
          </h2>
          {category === "Trending Courses" && (
            <p className="text-2xl text-gray-400 text-center mb-12">
              Courses that are currently trending for professionals.
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
            {courses
              .filter((course) => course.category === category)
              .map((course) => (
                <div
                  key={course.id}
                  className="w-11/12 mx-auto bg-gray-100 text-black p-6 rounded-lg shadow-lg border border-gray-300 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform min-h-[350px]"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-700">{course.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <Link
                      to={`/course/${course.id}`}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Services Section */}
      <div className="container mx-auto mt-16 bg-blue-50 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Services
        </h1>
        <div className="flex flex-col sm:flex-row justify-between gap-6 text-center">
          {/* Training */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-1/3">
            <div className="flex justify-center text-orange-500 mb-4">
              <FaChalkboardTeacher size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">AI Training</h3>
            <p className="text-gray-600 mt-2">
              Hands-on learning experiences in Power BI, Data Analytics, and
              modern data tools designed to build industry-ready skills.
            </p>
          </div>

          {/* AI Solutions */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-1/3">
            <div className="flex justify-center text-orange-500 mb-4">
              <FaBrain size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">AI Solutions</h3>
            <p className="text-gray-600 mt-2">
              Transform your business with custom AI models and data-driven
              solutions tailored to streamline workflows and boost efficiency.
            </p>
          </div>

          {/* Outsource */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-1/3">
            <div className="flex justify-center text-orange-500 mb-4">
              <FaUsersCog size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Outsource</h3>
            <p className="text-gray-600 mt-2">
              Delegate your data management, reporting, and analytics needs to
              our expert team and focus on what matters most — growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
