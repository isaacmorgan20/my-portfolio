import React from "react";
import { motion } from "framer-motion";
import isaac from "../assets/Images/isaac.jpg";

const Hero = () => {
  const skills = [
    "React",
    "Tailwind CSS",
    "Firebase",
    "Python",
    "AI Chatbots",
    "Data Analysis",
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        {/* Left Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-500 rounded-full text-blue-400 text-sm mb-6">
            Available for Opportunities
          </span>

          <p className="text-gray-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Isaac Morgan
          </h1>

          <h2 className="text-2xl md:text-3xl text-blue-500 font-semibold mb-6">
            Software Developer | AI Enthusiast
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8" data-aos="fade-right">
            Self-motivated Software Developer with experience building
            responsive web applications, AI-powered solutions, and
            data-driven projects using React, Tailwind CSS, Firebase,
            and Python. Passionate about solving real-world problems
            through technology and currently expanding my expertise
            in AI Chatbots, Data Analysis, and Retrieval-Augmented
            Generation (RAG).
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10" data-aos="fade-left">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-blue-500 bg-gray-900 hover:bg-blue-600 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12" >

            <a href="#projects" data-aos="fade-right">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition">
                View Projects
              </button>
            </a>

            <a
              href="https://drive.google.com/file/d/1O-RlTQuL9H2hnj3eu9n7zXMGOwBGPvHy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-left"
            >
              <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition">
                Download CV
              </button>
            </a>

          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-10" data-aos="flip-up">

            <div>
              <h3 className="text-3xl font-bold text-blue-500">8+</h3>
              <p className="text-gray-400">Projects Built</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-500">6+</h3>
              <p className="text-gray-400">Core Technologies</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-500">AI</h3>
              <p className="text-gray-400">Exploring RAG</p>
            </div>

          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">

            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-30"></div>

            <img
              src={isaac}
              alt="Isaac Morgan"
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.5)]"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
