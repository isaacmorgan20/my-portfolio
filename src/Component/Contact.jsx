import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tejr5un",
        "template_jyh5pws",
        form.current,
        "nkQtl7sv8Zl-eBDxb"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section id="contact" className="relative bg-black text-white py-24 overflow-hidden">
      {/* Background Glow */} <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6" data-aos="zoom-in">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-right">

          <span className="text-blue-500 uppercase tracking-widest text-sm">
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project idea, collaboration opportunity, or simply want to
            connect? Feel free to reach out. I'm always open to discussing
            new opportunities and innovative ideas.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div data-aos="fade-left">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500 text-green-400 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Available for Opportunities
            </div>

            <h3 className="text-3xl font-bold mb-6">
              Let's Build Something Amazing
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">
              I'm passionate about web development, AI-powered solutions,
              and building impactful digital experiences. Whether you're
              looking for a developer, collaborator, or freelancer,
              I'd love to hear from you.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h4 className="text-blue-500 font-semibold mb-1">
                  Email
                </h4>
                <p className="text-gray-300">
                  morganisaackojo5547@email.com
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h4 className="text-blue-500 font-semibold mb-1">
                  Phone
                </h4>
                <p className="text-gray-300">
                  +233 55 124 5547
                </p>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8" >

              <a
                href="https://github.com/isaacmorgan20"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
                data-aos="fade-right"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/isaac-morgan-4a9b31362/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
                data-aos="fade-left"
              >
                LinkedIn
              </a>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-3xl p-8" data-aos="fade-up">

            <h3 className="text-2xl font-bold mb-6">
              Send Me a Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:outline-none focus:border-blue-500"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:outline-none focus:border-blue-500"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Tell me about your project..."
                required
                className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>

  );
};

export default Contact;
