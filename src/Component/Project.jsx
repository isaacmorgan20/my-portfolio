import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal developer portfolio showcasing projects, skills, and contact information.",
      tech: ["React", "Tailwind CSS"],
      live: "https://my-portfolio-indol-two-25.vercel.app/",
      github: "https://github.com/isaacmorgan20/my-portfolio",
    },
    {
      title: "Health Booking App",
      description:
        "Healthcare booking platform with appointment scheduling, Firebase authentication, and Firestore integration.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      live: "https://health-check-app-uhch.vercel.app",
      github: "https://github.com/isaacmorgan20/Health-Check-app",
    },
    {
      title: "Customer Chatbot",
      description:
        "Customer support chatbot focused on improving communication and user engagement.",
      tech: ["React", "Firebase", "AI"],
      live: "#",
      github: "#"
    },
    {
      title: "E-Commerce Web App",
      description:
        "Modern e-commerce platform featuring product listings, responsive design, and reusable components.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      live: "#",
      github: "#"
    },
    {
      title: "Task Manager App",
      description:
        "Productivity application for organizing tasks and improving workflow management.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      live: "#",
      github: "#"
    },
    {
      title: "NexSupport Weather App",
      description:
        "Weather dashboard providing real-time weather information through API integration.",
      tech: ["React", "API Integration", "Tailwind CSS"],
      live: "#",
      github: "#"
    },
  ];

  return (
    <section id="projects" className="relative bg-black text-white py-24 overflow-hidden">
      {/* Background Glow */} <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-widest text-sm">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" data-aos="flip-up">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto" data-aos="fade-left">
            A collection of projects that showcase my skills in web
            development, AI applications, data-driven solutions,
            and modern frontend technologies.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-right">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition duration-300"
            >

              {/* Project Number */}
              <p className="text-blue-500 font-bold mb-4">
                0{index + 1}
              </p>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-black border border-blue-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    data-aos="flip-down"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition"
                  >
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    data-aos="flip-down"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-white hover:bg-white hover:text-black py-2 rounded-lg transition"
                  >
                    GitHub
                  </a>
                )}

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>

  );
};

export default Projects;
