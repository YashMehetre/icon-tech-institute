import React from "react";

const Blog = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Latest Blog Posts</h2>
        <p className="text-lg text-gray-600 mb-12">
          Stay up to date with the latest trends, tips, and insights from the world of data analytics, Power BI, and more.
        </p>
        <div className="mb-8">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Blog Post 1"
            className="w-full rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Understanding Power BI for Data Visualization</h3>
          <p className="text-gray-700 mb-4">
            Power BI is one of the most powerful tools for data visualization. In this blog post, we explore how you can use Power BI to bring your data to life and make better business decisions.
          </p>
          <a href="#" className="text-blue-600 font-semibold">Read More</a>
        </div>

        <div className="mb-8">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Blog Post 2"
            className="w-full rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">The Future of Data Analytics in 2025</h3>
          <p className="text-gray-700 mb-4">
            Data analytics is evolving rapidly, and the future looks bright for professionals in this field. In this article, we discuss the top trends and technologies to watch out for in 2025.
          </p>
          <a href="#" className="text-blue-600 font-semibold">Read More</a>
        </div>

        <div className="mb-8">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Blog Post 3"
            className="w-full rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">How Data Management is Shaping Businesses Today</h3>
          <p className="text-gray-700 mb-4">
            Data management is a crucial aspect of business success. Learn how proper data governance and quality assurance can help organizations thrive in today's data-driven world.
          </p>
          <a href="#" className="text-blue-600 font-semibold">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
