import React from "react";

const courses = [
  {
    id: 1,
    title: "Microsoft Power BI",
    description:
      "Unlock the full potential of your data with Power BI. Our training covers everything from basic data visualization to advanced analytics.",
    image: "/images/powerbi.png",
  },
  {
    id: 2,
    title: "Google Cloud Platform",
    description:
      "Master the Google Cloud Platform with our comprehensive training. Learn to deploy, manage, and scale applications with ease.",
    image: "/images/gcp.png",
  },
  {
    id: 3,
    title: "Tableau",
    description:
      "Become an expert in Tableau with our training program. Learn how to create beautiful dashboards and visualize complex data.",
    image: "/images/tableau.png",
  },
  {
    id: 4,
    title: "Advanced SQL",
    description:
      "Learn Advanced SQL from our expert trainers. Master complex queries, database management, and more.",
    image: "/images/sql.png",
  },
];

const trendingCourses = [
  {
    id: 5,
    title: "Data Analytics",
    description:
      "Dive into the world of Data Analytics with our expert-led courses. Gain the tools to turn raw data into actionable insights.",
    image: "/images/data-analytics.png",
  },
  {
    id: 6,
    title: "Microsoft Power BI",
    description:
      "Unlock the full potential of your data with Power BI. Our training covers everything from basic data visualization to advanced analytics.",
    image: "/images/microsoft-powerbi.png",
  },
  {
    id: 7,
    title: "Google Cloud Platform",
    description:
      "Master the Google Cloud Platform with our comprehensive training. Learn to deploy, manage, and scale applications.",
    image: "/images/google-cloud.png",
  },
  {
    id: 8,
    title: "Microsoft Power Platform",
    description:
      "Learn how to use Power Apps, Power Automate, and Power BI efficiently to boost your career opportunities.",
    image: "/images/microsoft-powerplatform.png",
  },
];

const leadershipCourses = [
  {
    id: 9,
    title: "Business Analyst",
    description:
      "Become a proficient Business Analyst with our training. Learn data analysis, evaluate business processes, and develop decision-making skills.",
    image: "/images/business-analyst.png",
  },
  {
    id: 10,
    title: "ITIL",
    description:
      "Master ITIL with our training. Discover best practices for IT service management and align IT with business goals.",
    image: "/images/itil.png",
  },
  {
    id: 11,
    title: "PMP",
    description:
      "Earn your PMP certification with our training. Master project management essentials and advance your career.",
    image: "/images/pmp.png",
  },
  {
    id: 12,
    title: "PRINCE2",
    description:
      "Enhance your project management skills with our PRINCE2 training. Learn important techniques and earn a valuable certificate.",
    image: "/images/prince2.png",
  },
];

const Courses = () => {
  return (
    <div className="bg-black min-h-screen py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-6 text-white">
        Our Courses
      </h2>
      <p className="text-2xl text-gray-400 text-center mb-12">
        Explore our top-rated courses and training programs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white text-black p-6 rounded-lg shadow-md border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300 transform"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-32 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-700">{course.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Explore More
              </a>
              <span className="text-red-500 text-2xl">➜</span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-4xl font-bold text-center mt-16 mb-6 text-white">
        Trending Courses For Professionals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {trendingCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white text-black p-6 rounded-lg shadow-md border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300 transform"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-32 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-700">{course.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Explore More
              </a>
              <span className="text-red-500 text-2xl">➜</span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-4xl font-bold text-center mt-16 mb-6 text-white">
      High in Demand Training courses for IT beginners..
      </h2>
      <p className="text-2xl text-gray-400 text-center mb-12">
      Explore Programs Perfect for IT Fresher
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {leadershipCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white text-black p-6 rounded-lg shadow-md border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300 transform"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-32 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-700">{course.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
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
