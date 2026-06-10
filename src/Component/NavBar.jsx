import React, { useEffect, useState } from "react";

const Navbar = () => {

  // Track navbar scroll state
  const [scrolled, setScrolled] = useState(false);

  // Detect scrolling
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Listen for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-black shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left Side */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Isaac Morgan
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-white">
          <a href="#">
            <p className="cursor-pointer hover:text-gray-300 transition">
              Home
            </p>
          </a>

          <a href="#about">
            <p className="cursor-pointer hover:text-gray-300 transition">
              About
            </p>
          </a>

          <a href="#projects">
            <p className="cursor-pointer hover:text-gray-300 transition">
              Projects
            </p>
          </a>

          <a href="#contact">
            <p className="cursor-pointer hover:text-gray-300 transition">
              Contact
            </p>
          </a>

          <a href="">
            <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
              Resume
            </button>
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;