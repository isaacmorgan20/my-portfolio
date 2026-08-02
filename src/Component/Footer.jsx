import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white border-t border-gray-800 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Isaac Morgan
            </h2>

            <p className="text-gray-400 leading-relaxed" data-aos="fade-up">
              Software Developer & AI Enthusiast passionate about
              building responsive web applications, AI-powered
              solutions, and impactful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <a href="#" className="hover:text-blue-500 transition" data-aos="fade-left">
                Home
              </a>

              <a href="#about" className="hover:text-blue-500 transition" data-aos="fade-right">
                About
              </a>

              <a href="#projects" className="hover:text-blue-500 transition" data-aos="fade-left">
                Projects
              </a>

              <a href="#contact" className="hover:text-blue-500 transition" data-aos="fade-up">
                Contact
              </a>

            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-4 mb-6">

              <a
                href="https://github.com/isaacmorgan20"
                // target="_blank"
                data-aos="fade-right"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-500 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/isaac-morgan-4a9b31362/"
                // target="_blank"
                data-aos="fade-left"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-500 transition"
              >
                <FaLinkedin size={20} />
              </a>

            </div>

           
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6  md:flex-row items-center gap-4">

          <p className="text-gray-500 text-sm text-center" >
            © {new Date().getFullYear()} Isaac Morgan. All rights reserved.
          </p>

          

        </div>

      </div>
    </footer>

  );
};

export default Footer;
