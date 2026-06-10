import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Web App",
      description:
        "Full-stack e-commerce platform with user authentication, product management, and cart functionality.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "#",
      github: "#",
    },
    {
      title: "Task Manager App",
      description:
        "A productivity app to create, update, and manage daily tasks with real-time updates.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      live: "#",
      github: "#",
    },
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
        "RESTful API for a blog system with authentication, CRUD operations, and secure routes.",
      tech: ["React", "Tailwind Css", "Firebase"],
      live: "health-check-app-uhch-rapa7i7ej-isaac-morgan-s-projects.vercel.app",
      github: "https://github.com/isaacmorgan20/Health-Check-app",
    },
    {
      title: "Customer Chatbot",
      description:
        "Real-time chat app with rooms and instant messaging using socket-based communication.",
      tech: ["React", "Tailwind Css", "Firebase"],
      live: "#",
      github: "#",
    },
    {
      title: "NexSupport App",
      description:
        "Weather app that fetches live data from APIs and displays forecasts in a clean UI.",
      tech: ["React", "API Integration", "Tailwind CSS"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.live}
                  className="text-sm px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  className="text-sm px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;