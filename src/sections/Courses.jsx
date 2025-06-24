import React, { useState } from "react";
import { Link } from "react-router-dom";
import courses from "../pages/coursesData";
import placement from "../pages/placement";
import { FaChalkboardTeacher, FaBrain, FaUsersCog } from "react-icons/fa";

const Courses = () => {
  const categories = ["Trending Courses"];
  const [expandedReviewId, setExpandedReviewId] = useState(null);

  const toggleReview = (id) => {
    setExpandedReviewId(expandedReviewId === id ? null : id);
  };

  return (
   <div className="bg-gradient-to-tr from-slate-900 via-gray-900 to-slate-800 min-h-screen py-16 px-6">

      {/* Placement Cards Section */}
      <div>
        <h2 className="text-4xl font-bold text-center mb-6 text-white">
          Placement Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mb-16">
          {placement.map((person) => (
            <div
              key={person.id}
              className={`w-full mx-auto bg-gray-100 text-black p-6 rounded-lg shadow-lg border border-gray-300 hover:shadow-2xl transition-all duration-300 transform ${
                expandedReviewId === person.id ? "min-h-[450px]" : "min-h-[400px]"
              }`}
            >
              <div className="w-full h-48 mb-3 overflow-hidden rounded-lg flex items-center justify-center bg-gray-200">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover object-center rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x400?text=No+Image";
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-center">
                {person.name}
              </h3>
              <p className="text-sm text-indigo-600 text-center font-medium my-1">
                {person.designation}
              </p>
              <div className="mt-2">
                <div
                  className={`text-sm text-gray-700 text-center italic ${
                    expandedReviewId !== person.id ? 'line-clamp-2' : ''
                  }`}
                >
                  "{person.review}"
                </div>
                {person.review.length > 60 && (
                  <button
                    onClick={() => toggleReview(person.id)}
                    className="text-indigo-600 text-xs font-medium mt-2 block mx-auto hover:underline"
                  >
                    {expandedReviewId === person.id ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Courses Section */}
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-4xl font-bold text-center mb-6 text-white">
            {category}
          </h2>
          <p className="text-2xl text-gray-400 text-center mb-12">
            Courses that are currently trending for professionals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {courses
              .filter((course) => course.category === category)
              .map((course) => (
                <div
                  key={course.id}
                  className="w-full mx-auto bg-gray-100 text-black p-6 rounded-lg shadow-lg border border-gray-300 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform min-h-[400px] flex flex-col"
                >
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg flex items-center justify-center bg-gray-200">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover object-center rounded-lg"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/300x400?text=No+Image";
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-700 line-clamp-3 mb-4">{course.description}</p>
                  <div className="mt-auto">
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