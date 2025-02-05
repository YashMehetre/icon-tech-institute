import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const blog = {
    title: "The Ultimate Guide to Power BI",
    image: "https://via.placeholder.com/1200x600", // Placeholder image
    author: "John Doe",
    date: "February 5, 2025",
    content: `
      Power BI is a powerful tool for data analysis, enabling users to visualize and explore data in ways that make business intelligence accessible to anyone. In this guide, we'll explore the various features of Power BI, from basic visualizations to advanced data modeling techniques. 

      Whether you're a beginner looking to get started with Power BI or an advanced user seeking to enhance your data analysis skills, this guide will provide you with valuable insights and tips. 

      In the first section, we'll cover the basics of Power BI. This includes how to connect data sources, build dashboards, and share your reports with others. We will also dive into more advanced topics such as DAX (Data Analysis Expressions), Power Query, and custom visualizations.

      With the right knowledge and skills, you can leverage Power BI to turn raw data into actionable insights, helping your organization make more informed decisions.
    `,
  };

  return (
    <div className="container mx-auto py-16 px-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="md:w-2/3">
          <h1 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">{blog.title}</h1>
          <div className="flex items-center text-gray-600 mb-6 space-x-4">
            <p className="text-sm">By <span className="font-medium">{blog.author}</span></p>
            <p className="text-sm">{blog.date}</p>
          </div>

          {/* Image Section */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[450px] object-cover rounded-lg shadow-xl mb-8"
          />

          {/* Blog Content */}
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>{blog.content}</p>
          </div>
        </div>

        {/* Sidebar - Related Posts and Share Section */}
        <div className="md:w-1/3">
          {/* Related Posts */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Related Posts</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blog-details"
                  className="text-lg text-blue-600 hover:text-blue-500 transition-all duration-300"
                >
                  How to Create Interactive Dashboards in Power BI
                </Link>
              </li>
              <li>
                <Link
                  to="/blog-details"
                  className="text-lg text-blue-600 hover:text-blue-500 transition-all duration-300"
                >
                  Advanced DAX Techniques for Data Analysis
                </Link>
              </li>
              <li>
                <Link
                  to="/blog-details"
                  className="text-lg text-blue-600 hover:text-blue-500 transition-all duration-300"
                >
                  Power Query Tips & Tricks for Beginners
                </Link>
              </li>
            </ul>
          </div>

          {/* Share Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Share This Blog</h3>
            <div className="flex space-x-4">
              <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-full p-3 transition-all duration-300">
                <i className="fab fa-facebook-f text-xl"></i>
              </button>
              <button className="text-white bg-blue-400 hover:bg-blue-500 rounded-full p-3 transition-all duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </button>
              <button className="text-white bg-green-500 hover:bg-green-600 rounded-full p-3 transition-all duration-300">
                <i className="fab fa-whatsapp text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
