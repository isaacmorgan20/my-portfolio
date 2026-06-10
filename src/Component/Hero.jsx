import React from "react";
import isaac from "../assets/Images/isaac.jpg"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-black text-white pt-20">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full">

        {/* Left Side */}
        <div className="flex-1">

          <p className="text-gray-400 text-lg mb-2">
            Hi, I’m
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Isaac Morgan
          </h1>

          <h2 className="text-2xl md:text-3xl text-blue-500 font-semibold mb-4">
            MERN Stack Developer
          </h2>

          <p className="text-gray-300 max-w-md mb-6">
            I build modern, responsive web applications using MongoDB, Express, React, and Node.js.
          </p>

          <div className="flex gap-4">
            <a href="#projects">
              <button className="bg-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                View Projects
              </button>
            </a>

            <a href="#contact">
              <button className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition">
                Contact Me
              </button>
            </a>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src={isaac}
            alt="profile"
            className="rounded-full w-72 h-72 object-cover border-4 border-blue-500"
          />
        </div>

      </div>
    </section >
  );
};

export default Hero;