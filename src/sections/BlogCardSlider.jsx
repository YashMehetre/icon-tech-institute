import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogCards } from "../pages/blogdata";  

const BlogCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogCards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

 
  const displayedBlogs = [
    blogCards[(currentIndex) % blogCards.length],
    blogCards[(currentIndex + 1) % blogCards.length]
  ];

  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Latest Blog Posts</h2>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-12 mt-8"
      >
        {displayedBlogs.map((blog, index) => (
          <div key={index} className="w-full md:w-[400px]">
            <div className="bg-white w-full h-[450px] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-[calc(100%-176px)]">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {blog.content}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">By {blog.author}</p>
                  <Link
                    to={`/blog/${blog.title}`} // Dynamic routing to individual blog post
                    className="text-white bg-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="flex justify-center space-x-2 mt-8">
        {blogCards.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCardSlider;
