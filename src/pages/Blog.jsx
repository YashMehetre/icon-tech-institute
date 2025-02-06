import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogCards } from '../pages/blogdata';

function Blog() {
  const { id } = useParams();
  const blog = blogCards.find((b) => b.title === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="container mx-auto py-16 px-6">
      {/* Blog Content Section */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12 mt-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-72 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{blog.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{blog.content}</p>
            <p className="text-gray-800">{blog.fullContent}</p>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Key Insights</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
          <li>Effective strategies for data management.</li>
          <li>How analytics can drive better business decisions.</li>
          <li>Emerging technologies transforming data processing.</li>
        </ul>
      </div>

      {/* Practical Tips Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Practical Tips</h2>
        <p className="text-lg text-gray-600 mb-4">
          Here are some actionable tips that can help implement data-driven solutions effectively:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
          <li>Start with clear data objectives aligned with your business goals.</li>
          <li>Leverage visualization tools for better insights.</li>
          <li>Regularly audit and clean data to ensure accuracy.</li>
        </ul>
      </div>

      {/* About the Author Section */}
      <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About the Author</h2>
        <div className="flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Author"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-lg text-gray-600">Data Analyst & Blogger at DataTech</p>
            <p className="text-gray-600 mt-4 text-lg">
              John is a seasoned data analyst with over 10 years of experience helping organizations optimize their data strategies. He enjoys writing about data trends, visualization techniques, and future technologies in analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
