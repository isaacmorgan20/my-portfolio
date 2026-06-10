import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 border-t border-gray-800">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div>
          <h2 className="text-xl font-bold">Isaac Morgan</h2>
          <p className="text-gray-400 text-sm">
            MERN Stack Developer
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex gap-6 text-gray-300 text-sm">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right */}
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Isaac Morgan. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;