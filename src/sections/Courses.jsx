import React from "react";
import { Link } from "react-router-dom"; 
import courses from "../pages/coursesData"; 

const Courses = () => {
  const categories = ["Our Courses", "Trending Courses", "High in Demand Training"];

  return (
    <div className="bg-black min-h-screen py-16 px-6">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-4xl font-bold text-center mb-6 text-white">
            {category}
          </h2>
          {category === "Our Courses" && (
            <p className="text-2xl text-gray-400 text-center mb-12">
              Explore our top-rated courses and training programs.
            </p>
          )}
          {category === "Trending Courses" && (
            <p className="text-2xl text-gray-400 text-center mb-12">
              Courses that are currently trending for professionals.
            </p>
          )}
          {category === "High in Demand Training" && (
            <p className="text-2xl text-gray-400 text-center mb-12">
              Explore programs perfect for IT freshers.
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
    </div>
  );
};

export default Courses;
