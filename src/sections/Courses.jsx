import React from "react";

const Courses = () => {
  const steps = [
    {
      id: "01",
      title: "Career Advice",
      description:
        "A dedicated career expert will guide you by putting light on which course to select based on your interests and qualifications.",
    },
    {
      id: "02",
      title: "Enrollment",
      description:
        "Once you enroll in the course, a dedicated Relationships Manager will be provided to support you throughout the course completion period.",
    },
    {
      id: "03",
      title: "Follow 3A",
      description:
        "3A (Attendance, Assignment & Assessment) is a learning model designed by us where students have to score minimum 90%.",
    },
    {
      id: "04",
      title: "Projects",
      description:
        "We provide 30+ industry-oriented projects and case studies to make our students industry-ready professionals.",
    },
    {
      id: "05",
      title: "Interviews",
      description:
        "A total of 150+ mocks are planned for each student to prepare them for technical interviews.",
    },
    {
      id: "06",
      title: "Job",
      description:
        "We start working on student placements soon after course completion.",
    },
  ];

  return (
    <div className="bg-black min-h-screen py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Our Courses
      </h2>
      <p className="text-lg text-gray-400 text-center mb-12">
        Explore our Career Advice and Training programs.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white text-black p-6 rounded-lg shadow-md border border-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300 transform group"
          >
            <div className="text-green-500 text-4xl font-bold">{step.id}</div>
            <h3 className="text-xl font-semibold mt-3 group-hover:text-green-500">
              {step.title}
            </h3>
            <p className="mt-2 text-gray-700">{step.description}</p>
            <div className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-20 transition duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
