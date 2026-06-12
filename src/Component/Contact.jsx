import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">

        {/* Left Side */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

          <p className="text-gray-400 mb-6">
            Got a project in mind or just want to connect? Feel free to reach out.
          </p>

          <div className="space-y-3 text-gray-300">
            <p>Email: morganisaackojo5547@email.com</p>
            <p>Phone: +233 55 124 5547</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1">
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;