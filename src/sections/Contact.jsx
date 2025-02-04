const Contact = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 overflow-hidden">
      <div className="container mx-auto md:ml-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="md:mr-12"> {/* Added margin on the right for better spacing */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Email, call, or complete the form to learn how Snappy can solve your messaging problem.
          </p>
          <p className="text-gray-800 font-semibold">info@snappy.io</p>
          <p className="text-gray-800 font-semibold mb-4">321-221-231</p>
          <a href="#" className="text-blue-600 font-semibold">Customer Support</a>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900">Customer Support</h3>
              <p className="text-gray-700 mt-2">Our support team is available around the clock to address any concerns or queries you may have.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900">Feedback and Suggestions</h3>
              <p className="text-gray-700 mt-2">We value your feedback and are continuously working to improve Snappy.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900">Media Inquiries</h3>
              <p className="text-gray-700 mt-2">For media-related questions or press inquiries, contact us at media@snappyapp.com.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full mt-10 md:mt-0"> {/* Added margin-top for spacing */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
          <form action="#" method="POST" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            <div className="flex gap-4">
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            <textarea
              rows="4"
              placeholder="How can we help?"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Submit
            </button>
            <p className="text-sm text-gray-500 text-center mt-2">
              By contacting us, you agree to our <a href="#" className="text-blue-600">Terms of Service</a> and <a href="#" className="text-blue-600">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
