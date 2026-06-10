import React from "react";
import Ik from "../assets/Images/Ik.jpg"

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left - Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            I am Isaac Morgan, a passionate MERN Stack Developer focused on building
            modern, scalable, and responsive web applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I enjoy turning complex problems into simple, beautiful, and intuitive
            solutions. Currently, I’m sharpening my skills in full-stack development
            and building real-world projects.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {["React", "Node.js", "Express", "MongoDB", "JavaScript"].map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right - Images */}
        <div className="flex-1 flex flex-col items-center gap-6">
          
          {/* Profile Image */}
          <img
            src={Ik}
            alt="profile"
            className="w-60 h-60 rounded-full object-cover border-4 border-blue-500"
          />

          {/* Developer Illustration */}
          <img
            src={Ik}
            alt="developer"
            className="w-60 h-60 rounded-xl object-cover border border-gray-700"
          />

        </div>

      </div>
    </section>
  );
};

export default About;