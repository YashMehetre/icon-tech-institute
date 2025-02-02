import React from "react";
import BI from "../assets/Courses/PowerBi.jpg";
import gcp from "../assets/Courses/gcp.jpg";
import tableLu from "../assets/Courses/tablue.jpg";
import sql from "../assets/Courses/SQL.jpg";
import da from "../assets/Courses/DA.jpg";
import ms from "../assets/Courses/ms.jpg";
import python from "../assets/Courses/python1.jpg";
import automate from "../assets/Courses/automate.jpg";

const courses = [
  {
    id: 1,
    title: "Microsoft Power BI",
    description:
      "Unlock the full potential of your data with Power BI. Our training covers everything from basic data visualization to advanced analytics.",
    image: BI,
  },
  {
    id: 2,
    title: "Google Cloud Platform",
    description:
      "Master the Google Cloud Platform with our comprehensive training. Learn to deploy, manage, and scale applications with ease.",
    image: gcp,
  },
  {
    id: 3,
    title: "Tableau",
    description:
      "Become an expert in Tableau with our training program. Learn how to create beautiful dashboards and visualize complex data.",
    image: tableLu,
  },
  {
    id: 4,
    title: "Advanced SQL",
    description:
      "Learn Advanced SQL from our expert trainers. Master complex queries, database management, and more.",
    image: sql,
  },
];

const trendingCourses = [
  {
    id: 5,
    title: "Data Analytics",
    description:
      "Dive into the world of Data Analytics with our expert-led courses. Gain the tools to turn raw data into actionable insights.",
    image: da,
  },
  {
    id: 6,
    title: "Microsoft Power BI",
    description:
      "Unlock the full potential of your data with Power BI. Our training covers everything from basic data visualization to advanced analytics.",
    image: BI,
  },
  {
    id: 7,
    title: "Google Cloud Platform",
    description:
      "Master the Google Cloud Platform with our comprehensive training. Learn to deploy, manage, and scale applications.",
    image: gcp,
  },
  {
    id: 8,
    title: "Microsoft Power Platform",
    description:
      "Learn how to use Power Apps, Power Automate, and Power BI efficiently to boost your career opportunities.",
    image: ms,
  },
];

const leadershipCourses = [
  {
    id: 9,
    title: "Python",
    description:
      "Discover the power of Python through our training. Learn from basics to advanced data analysis and machine learning. Build strong applications and uncover insights easily.",
    image: python,
  },
  {
    id: 10,
    title: "Advanced SQL",
    description:
      "Become an expert in Advanced SQL with our comprehensive training. Learn to tackle complex queries, improve performance, and manage databases efficiently with ease.",
    image: sql,
  },
  {
    id: 11,
    title: "Microsoft Power BI",
    description:
      "Unlock the full potential of your data with Power BI. Our training covers data visualization to advanced analytics, enabling you to make data-driven decisions confidently.",
    image: BI,
  },
  {
    id: 12,
    title: "Power Automate",
    description:
      "Unlock the power of efficiency with Power Automate. Automate tasks easily, integrate apps smoothly, and supercharge your productivity without coding.",
    image: automate,
  },
];

const Courses = () => {
  return (
    <div className="bg-black min-h-screen py-16 px-6">
      {/* Section: Our Courses */}
      <h2 className="text-4xl font-bold text-center mb-6 text-white">
        Our Courses
      </h2>
      <p className="text-2xl text-gray-400 text-center mb-12">
        Explore our top-rated courses and training programs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
        {courses.map((course) => (
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
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                Explore More
              </a>
              <span className="text-red-500 text-2xl">➜</span>
            </div>
          </div>
        ))}
      </div>

      {/* Section: Trending Courses */}
      <h2 className="text-4xl font-bold text-center mt-16 mb-6 text-white">
        Trending Courses For Professionals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
        {trendingCourses.map((course) => (
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
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                Explore More
              </a>
              <span className="text-red-500 text-2xl">➜</span>
            </div>
          </div>
        ))}
      </div>

      {/* Section: High in Demand Training */}
      <h2 className="text-4xl font-bold text-center mt-16 mb-6 text-white">
        High in Demand Training Courses for IT Beginners
      </h2>
      <p className="text-2xl text-gray-400 text-center mb-12">
        Explore Programs Perfect for IT Freshers
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
        {leadershipCourses.map((course) => (
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
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                Explore More
              </a>
              <span className="text-red-500 text-2xl">➜</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;