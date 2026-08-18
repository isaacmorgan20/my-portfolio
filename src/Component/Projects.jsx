import { motion } from "framer-motion";

// Import project screenshots
import cosa from "../assets/Images/cosa.png";
import ecommence from "../assets/Images/ecommence.png";
import herbal from "../assets/Images/herbal.png";
import portfolio from "../assets/Images/portfolio.png";
import weather from "../assets/Images/weather.png";
import task from "../assets/Images/task.png"

// import taskManager from "../assets/Images/projects/taskManager.png";

const Projects = () => {
  const pro = [
    {
      title: "Portfolio Website",
      description:
        "Personal developer portfolio showcasing projects, skills, and contact information.",
      tech: ["React", "Tailwind CSS"],
      live: "https://my-portfolio-indol-two-25.vercel.app/",
      github: "https://github.com/isaacmorgan20/my-portfolio",
      image: portfolio,
    },
    {
      title: "Health Booking App",
      description:
        "Healthcare booking platform with appointment scheduling, Firebase authentication, and Firestore integration.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      live: "https://health-check-app-uhch.vercel.app",
      github: "https://github.com/isaacmorgan20/Health-Check-app",
      image: herbal,
    },
    {
      title: "Weather App",
      description:
        "Weather dashboard providing real-time weather information through API integration.",
      tech: ["React", "API Integration", "Tailwind CSS"],
      live: "https://weather-app-one-phi-0iwiv9o490.vercel.app/",
      github: "https://github.com/isaacmorgan20/weather-app",
      image: weather,
    },
    {
      title: "E-Commerce Web App",
      description:
        "Modern e-commerce platform featuring product listings, responsive design, and reusable components.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      live: "https://shopping-weld-six.vercel.app/",
      github: "https://github.com/isaacmorgan20/Shopping",
      image: ecommence,
    },
    {
      title: "Cosa Website",
      description:
        "Cosa website is an e-commence platform",
      tech: ["React", "Javascript"],
      live: "https://cart-two.vercel.app/",
      github: "https://github.com/isaacmorgan20/Cart",
      image: cosa,
    },
    {
      title: "Task Manager App",
      description:
        "Productivity application for organizing tasks and improving workflow management.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      live: "#",
      github: "#",
      image: task,
    },
  ];

  return (
    <section id="projects" className="relative bg-black text-white py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-500 uppercase tracking-widest text-sm font-semibold">
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
          {pro.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300"
            >
              {/* Project Image Container */}
              <div className="relative h-48 w-full overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
               
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 hover:text-blue-400 transition duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 text-xs rounded-full bg-black/40 border border-blue-500/30 text-blue-300"
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
                      target={project.live === "#" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className={`flex-1 text-center py-2 rounded-lg text-sm font-semibold transition shadow-md ${
                        project.live === "#"
                          ? "bg-gray-800/40 text-gray-500 cursor-not-allowed border border-gray-800"
                          : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20 hover:shadow-blue-600/40"
                      }`}
                    >
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target={project.github === "#" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className={`flex-1 text-center py-2 rounded-lg text-sm font-semibold transition ${
                        project.github === "#"
                          ? "border border-gray-800 text-gray-500 cursor-not-allowed"
                          : "border border-gray-700 hover:border-white text-gray-300 hover:text-black hover:bg-white"
                      }`}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
