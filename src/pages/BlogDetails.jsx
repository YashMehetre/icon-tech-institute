import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Dummy Blog Data
const blog = {
  title: "The Ultimate Guide to Power BI",
  image: "https://miro.medium.com/max/1400/1*yMgPReN0vwRA5H41Z_GJLA.jpeg", // High-quality Power BI image
  author: "John Doe",
  date: "February 5, 2025",
  content: `
    Power BI is a powerful tool for data analysis, enabling users to visualize and explore data in ways that make business intelligence accessible to anyone.
    In this guide, we'll explore the various features of Power BI, from basic visualizations to advanced data modeling techniques.

    Whether you're a beginner looking to get started with Power BI or an advanced user seeking to enhance your data analysis skills, this guide will provide you with valuable insights and tips.
  `,
};

const BlogDetails = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
      <div className="container mx-auto py-16 px-6 max-w-4xl">
        {/* Blog Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          By <span className="font-medium text-gray-800">{blog.author}</span> | {blog.date}
        </p>

        {/* Featured Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[450px] object-cover rounded-xl shadow-lg mb-8"
        />

        {/* Blog Content */}
        <div className="text-lg text-gray-800 leading-relaxed space-y-6">
          {blog.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Related Posts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/blog-details"
              className="block bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <h4 className="text-lg font-semibold text-blue-600">
                How to Create Interactive Dashboards in Power BI
              </h4>
              <p className="text-sm text-gray-600 mt-2">Learn how to make dynamic dashboards using Power BI's features.</p>
            </Link>
            <Link
              to="/blog-details"
              className="block bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <h4 className="text-lg font-semibold text-blue-600">
                Advanced DAX Techniques for Data Analysis
              </h4>
              <p className="text-sm text-gray-600 mt-2">Master complex data calculations with DAX in Power BI.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
