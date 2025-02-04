import img from "../assets/company.jpg";

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
        <div className="md:ml-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
            About Us
          </h2>
          <p className="text-lg text-gray-600 mb-4 text-center md:text-left">
            At <span className="text-black font-semibold">Data</span> <span className="text-blue-600 font-semibold">Mentor</span>, we are dedicated to shaping the future of data professionals by providing industry-leading courses in Power BI, Data Analytics, and Data Management.
          </p>
          <p className="font-semibold text-gray-900 mb-6 text-center md:text-left">
            Our mission is to equip professionals with the tools, techniques, and expertise needed to excel in the ever-evolving data landscape.
          </p>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            Our courses focus on real-world applications and hands-on learning, ensuring that each student is prepared to tackle the challenges of data-driven industries.
          </p>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            Learn more about how we can help you grow your data skills at <a href="#" className="text-blue-600 underline">Data Mentor</a>.
          </p>
        </div>

        <div className="w-full md:w-4/5 mx-auto">
          <img src={img} alt="About Us" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="container mx-auto mt-16 bg-blue-50 p-8 rounded-lg shadow-lg">
        <div className="flex justify-between flex-wrap text-center">
          <div className="w-full sm:w-1/3 mb-6">
            <h3 className="text-3xl font-bold text-orange-500">01</h3>
            <h4 className="text-xl font-semibold text-gray-900 mt-2">Power BI Mastery</h4>
            <p className="text-gray-600 mt-2">
              Learn to visualize and analyze data using Power BI, transforming raw information into actionable insights.
            </p>
          </div>
          <div className="w-full sm:w-1/3 mb-6">
            <h3 className="text-3xl font-bold text-orange-500">02</h3>
            <h4 className="text-xl font-semibold text-gray-900 mt-2">Data Analytics</h4>
            <p className="text-gray-600 mt-2">
              Dive deep into data analysis techniques, including data mining, predictive analytics, and statistical modeling to drive business decisions.
            </p>
          </div>
          <div className="w-full sm:w-1/3 mb-6">
            <h3 className="text-3xl font-bold text-orange-500">03</h3>
            <h4 className="text-xl font-semibold text-gray-900 mt-2">Data Management</h4>
            <p className="text-gray-600 mt-2">
              Understand the importance of data governance, quality assurance, and database management in ensuring data integrity and accessibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
