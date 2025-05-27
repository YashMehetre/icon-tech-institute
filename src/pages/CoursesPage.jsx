import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import courses from "./allcourse"; // Import your courses data

const CoursesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Scroll to courses section when coming from navbar
    if (location.state?.scrollTo === "courses") {
      const element = document.getElementById("courses");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Filter courses based on category if provided
    if (location.state?.filterCategory) {
      filterCourses(location.state.filterCategory);
    }
  }, [location.state]);

  const filterCourses = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter((course) => course.category === category);
      setFilteredCourses(filtered);
    }
  };

  const categories = [
    { name: "All", label: "All Courses" },
    { name: "Data Analytics", label: "Data Analytics" },
    { name: "Power Platform", label: "Power Platform" },
    { name: "Cloud Technologies", label: "Cloud Technologies" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50" id="courses">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Our Courses</h1>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => filterCourses(category.name)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${
                activeCategory === category.name
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-gray-900">{course.title}</h2>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <button
                    onClick={() => navigate(`/courses/${course.id}`)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">No courses found in this category</h3>
            <p className="text-gray-500 mt-2">Please try another category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
