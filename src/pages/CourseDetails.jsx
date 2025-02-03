import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import coursesData from "../pages/coursesData";

const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData.find((course) => course.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return <p className="text-center text-gray-700 text-xl mt-10">Course not found.</p>;
  }

  return (
    <div className="min-h-screen py-10 px-4 md:px-12 bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black p-8 rounded-lg shadow-lg text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h2>
          <p className="text-lg md:text-xl mb-6">{course.description}</p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out text-lg">
              Enroll Now
            </button>
            <button className="w-full md:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out text-lg">
              Download Brochure
            </button>
          </div>
        </div>

        <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Course Overview</h3>
          <p className="text-gray-700 text-lg leading-relaxed">{course.info}</p>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Placement Support", description: "We provide complete assistance to secure placements.", icon: "📋" },
              { title: "Resume Building", description: "Assistance in building a professional resume that stands out.", icon: "📝" },
              { title: "Flexible Learning", description: "Choose between online or classroom training as per your convenience.", icon: "📚" },
              { title: "HR Interaction", description: "Regular HR sessions to prepare you for the corporate world.", icon: "👥" },
              { title: "Mock Interviews", description: "Practice interviews to boost your confidence.", icon: "🎤" },
              { title: "Certified Trainer", description: "Learn from certified trainers with extensive industry experience.", icon: "🎓" },
              { title: "Practical Learning", description: "Engage in real-time projects for a hands-on learning experience.", icon: "⚙️" },
              { title: "Industry Networking", description: "Connect with professionals in your field to build a strong network.", icon: "🔗" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:bg-blue-50"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Course Curriculum</h2>
          <div className="space-y-4">
            {[
              "Introduction to the Course",
              "Core Concepts and Fundamentals",
              "Advanced Topics and Techniques",
              "Hands-on Projects and Case Studies",
              "Final Assessment and Certification",
            ].map((topic, index) => (
              <div key={index} className="flex items-center bg-gray-100 p-4 rounded-lg">
                <span className="text-blue-600 font-semibold mr-4">{index + 1}.</span>
                <p className="text-gray-700">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
