import React from "react";
import { motion } from "framer-motion";
import Ik from "../assets/Images/Ik.jpg";

const About = () => {
  const skills = [
    "React",
    "Tailwind CSS",
    "Firebase",
    "Python",
    "JavaScript",
    "Data Analysis",
    "AI Chatbots",
    "RAG",
    "Git & GitHub",
  ];

  return (
    <section id="about" className="relative bg-black text-white py-24 overflow-hidden"

    >
      {/* Background Glow */} <div className="absolute top-20 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8" data-aos="zoom-in">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-500 uppercase tracking-widest text-sm">
            Get To Know Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            About Me
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Passionate about building impactful digital experiences,
            solving real-world problems, and continuously learning
            modern technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">

              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

              <motion.img
                src={Ik}
                alt="Isaac Morgan"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl border border-blue-500/40"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />

            </div>
          </div>

          {/* Content */}
          <div>

            <h3 className="text-3xl font-bold mb-6" data-aos="flip-up">
              Software Developer & AI Enthusiast
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6" data-aos="fade-right">
              I am Isaac Morgan, a self-motivated Software Developer with a
              strong passion for building responsive web applications,
              AI-powered solutions, and user-focused digital experiences.
              My journey started with front-end development and has grown
              into exploring data analysis, artificial intelligence, and
              modern software engineering practices.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8" data-aos="fade-left">
              I enjoy transforming ideas into functional products and
              continuously expanding my expertise in React, Firebase,
              Python, AI Chatbots, and Retrieval-Augmented Generation (RAG).
              My goal is to create innovative solutions that make a
              meaningful impact.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-gray-900 border border-blue-500 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">

              <div className="bg-gray-900 p-5 rounded-xl text-center border border-gray-800">
                <h4 className="text-3xl font-bold text-blue-500">8+</h4>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>

              <div className="bg-gray-900 p-5 rounded-xl text-center border border-gray-800">
                <h4 className="text-3xl font-bold text-blue-500">4+</h4>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>

              <div className="bg-gray-900 p-5 rounded-xl text-center border border-gray-800">
                <h4 className="text-3xl font-bold text-blue-500">AI</h4>
                <p className="text-gray-400 text-sm">Learning RAG</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>


  );
};

export default About;
