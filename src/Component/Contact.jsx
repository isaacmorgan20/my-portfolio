import React, { useRef } from "react";
import emailjs from "@emailjs/browser"

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      alert("Message sent!");
    })
    .catch((error) => {
      console.log(error);
    });
  };


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
              href="https://github.com/isaacmorgan20"
              className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/isaac-morgan-4a9b31362/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BMWXEfmcFRyC%2FFLkHZH0aUw%3D%3D"
              className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1">
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
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