import React, { useEffect } from "react";
import { FiCalendar, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import img1 from "../assets/Courses/ms.jpg";
import img2 from "../assets/Courses/Tableu.jpg";
import img3 from "../assets/Courses/DA.jpg";
import img4 from "../assets/Courses/Automate.jpg";

const blogs = [
  {
    title: "The Ultimate Guide to Power BI",
    image: img1,
    author: "John Doe",
    date: "February 5, 2025",
    content: `Power BI is a powerful tool for data analysis and visualization. Learn the best ways to model data and present insights. 
  This guide covers key functionalities, such as data preparation, creating dashboards, and connecting various data sources.`,
  },
  {
    title: "Interactive Dashboards in Power BI",
    image: img2,
    author: "Jane Smith",
    date: "January 28, 2025",
    content: `Learn to create interactive dashboards that provide real-time insights and keep users engaged. 
  Understand how to add slicers, filters, and custom visualizations to empower decision-making and user engagement.`,
  },
  {
    title: "Advanced DAX Techniques for Data Analysis",
    image: img3,
    author: "James Brown",
    date: "December 10, 2024",
    content: `Explore advanced DAX techniques that enhance data analysis in Power BI. Learn how to create calculated columns, measures, and advanced functions 
  to derive meaningful insights from complex datasets.`,
  },
  {
    title: "Data Visualization Best Practices",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
    author: "Anna Green",
    date: "November 18, 2024",
    content: `Discover key tips to make your data visuals more effective and impactful. This includes choosing the right charts, maintaining consistency in visuals, 
  and focusing on data clarity to enhance communication.`,
  },
  {
    title: "Optimizing Power BI Performance",
    image: img4,
    author: "Tom Wilson",
    date: "October 30, 2024",
    content: `Learn how to optimize Power BI performance and handle large datasets efficiently. Key strategies include data modeling best practices, 
  query optimization, and managing refresh schedules.`,
  },
];

const BlogDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-32 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="mb-16 bg-white shadow-md p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Blog Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
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
            <motion.img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[300px] object-cover rounded-lg mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* Blog Content */}
            <div className="text-lg text-gray-800 leading-relaxed space-y-6">
              {blog.content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
