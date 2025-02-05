import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <div className="container mx-auto py-8 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Latest Blog Posts
      </h2>
      
      <div className="relative flex justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex gap-6"
          >
            {blogCards.slice(currentIndex, currentIndex + 2).map((blog, index) => (
              <div key={index} className="w-full md:w-[400px] flex-shrink-0">
                <div className="bg-white w-full h-[450px] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.05] p-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-44 object-cover rounded-md"
                  />
                  <div className="p-4 flex flex-col justify-between h-[calc(100%-176px)]">
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
                        to={`/blog/${blog.title}`}
                        className="text-white bg-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center space-x-2 mt-8">
        {blogCards.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCardSlider;
