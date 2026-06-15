import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Isaac Morgan
        </motion.h1>

        {/* Desktop Menu */}
        <motion.div className="hidden md:flex items-center gap-6 text-white"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <a href="https://eu.docworkspace.com/d/sbOartpTE6scOmSq_p630xqvs1avghyrotm?sa=601.1037">
            <button className="bg-white text-black px-4 py-2 rounded-lg">
              Resume
            </button>
          </a>
      </motion.div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>

      {/* Mobile Menu */ }
  {
    menuOpen && (
      <div className="md:hidden bg-black text-white flex flex-col items-center gap-6 py-6">
        <a href="#" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        <a href="https://eu.docworkspace.com/d/sbOartpTE6scOmSq_p630xqvs1avghyrotm?sa=601.1037">
          <button className="bg-white text-black px-4 py-2 rounded-lg">
            Resume
          </button>
        </a>
      </div>
    )
  }
    </nav >
  );
};

export default Navbar;