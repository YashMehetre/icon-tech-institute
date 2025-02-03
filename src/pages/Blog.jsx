import React from "react";
import img1 from "../assets/Blog/img1.jpg";
import img3 from "../assets/Blog/img3.jpg";
import img2 from "../assets/Blog/img2.jpg";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding Power BI for Data Visualization",
      description:
        "Power BI is one of the most powerful tools for data visualization. In this blog post, we explore how you can use Power BI to bring your data to life and make better business decisions.",
      image: img1,
      link: "#",
    },
    {
      id: 2,
      title: "The Future of Data Analytics in 2025",
      description:
        "Data analytics is evolving rapidly, and the future looks bright for professionals in this field. In this article, we discuss the top trends and technologies to watch out for in 2025.",
      image: img2,
      link: "#",
    },
    {
      id: 3,
      title: "How Data Management is Shaping Businesses Today",
      description:
        "Data management is a crucial aspect of business success. Learn how proper data governance and quality assurance can help organizations thrive in today's data-driven world.",
      image: img3,
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Latest Blog Posts</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay up to date with the latest trends, tips, and insights from the world of data analytics, Power BI, and more.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
