import React, { useEffect } from "react";
import { FiCalendar, FiUser } from "react-icons/fi";

// Dummy Blog Data with Copyright-Free Images from Unsplash
const blogs = [
  {
    title: "The Ultimate Guide to Power BI",
    image: "https://images.unsplash.com/photo-1573497491207-b35c3bfa7a38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDJ8fHBvd2VyJTIwYml8ZW58MHx8fHwxNjA5NTM4NTA4&ixlib=rb-1.2.1&q=80&w=1080", // Power BI
    author: "John Doe",
    date: "February 5, 2025",
    content: `
      Power BI is a powerful tool for data analysis, enabling users to visualize and explore data in ways that make business intelligence accessible to anyone.
      In this guide, we'll explore the various features of Power BI, from basic visualizations to advanced data modeling techniques.
      Whether you're a beginner looking to get started with Power BI or an advanced user seeking to enhance your data analysis skills, this guide will provide you with valuable insights and tips.
    `,
  },
  {
    title: "How to Create Interactive Dashboards in Power BI",
    image: "https://images.unsplash.com/photo-1589320366709-5296a5bb928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDJ8fGRhc2hib2FyfGVufDB8fHx8fDE2MDk1MjAyNjg&ixlib=rb-1.2.1&q=80&w=1080", // Dashboard
    author: "Jane Smith",
    date: "January 28, 2025",
    content: `
      Dashboards are one of the most powerful features of Power BI. In this post, we'll cover how to create interactive dashboards that provide real-time insights and engage users.
    `,
  },
  {
    title: "Advanced DAX Techniques for Data Analysis",
    image: "https://images.unsplash.com/photo-1511382722043-9a0edc086e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDJ8fGRhc2hib2FyfGVufDB8fHx8fDE2MDk1MjAyNjg&ixlib=rb-1.2.1&q=80&w=1080", // DAX Techniques
    author: "James Brown",
    date: "December 10, 2024",
    content: `
      In this post, we'll go deeper into Data Analysis Expressions (DAX), covering advanced techniques to enhance your data analysis and calculation abilities in Power BI.
    `,
  },
  {
    title: "Data Visualization Best Practices",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDJ8fGRhdGF8ZW58MHx8fHwxNjA5NTM4NTA4&ixlib=rb-1.2.1&q=80&w=1080", // Data Visualization
    author: "Anna Green",
    date: "November 18, 2024",
    content: `
      Visualization plays a crucial role in making data understandable. This blog post will cover the best practices to follow for effective and impactful data visualization.
    `,
  },
  {
    title: "Optimizing Power BI Performance",
    image: "https://images.unsplash.com/photo-1587588680503-ccabb9089820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDJ8fGRhdGFfYXN8ZW58MHx8fHwxNjA5NTM4NTA4&ixlib=rb-1.2.1&q=80&w=1080", // Power BI Performance
    author: "Tom Wilson",
    date: "October 30, 2024",
    content: `
      As data models grow in Power BI, performance becomes a crucial factor. In this guide, we will explore ways to optimize Power BI's performance for better speed and usability.
    `,
  },
];

const BlogDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Loop through each blog and display its content */}
        {blogs.map((blog, index) => (
          <div key={index} className="mb-16">
            {/* Blog Header */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <FiUser className="mr-2 text-blue-600" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <FiCalendar className="mr-2 text-blue-600" />
                <span>{blog.date}</span>
              </div>
            </div>

            {/* Featured Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[450px] object-cover rounded-xl shadow-xl mb-12"
            />

            {/* Blog Content */}
            <div className="bg-white p-8 shadow-lg rounded-lg text-lg text-gray-800 leading-relaxed space-y-6">
              {blog.content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
