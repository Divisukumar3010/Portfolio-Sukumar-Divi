
import { Github, Linkedin, ArrowUp, Mail, Twitter, Instagram, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-400" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Mail, href: "mailto:sukumar@example.com", label: "Email", color: "hover:text-green-400" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-20 px-6 relative border-t border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Sukumar Divi</h3>
                <p className="text-cyan-400 font-light">Java & Web Developer</p>
              </div>
            </div>
            <p className="text-gray-300 font-light leading-relaxed max-w-md">
              Passionate computer science student building efficient, scalable solutions. 
              Always eager to learn new technologies and take on challenging projects.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-11 h-11 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-white/10 hover:border-white/20 group`}
                  >
                    <IconComponent className="w-5 h-5 group-hover:animate-pulse" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-light transform hover:translate-x-1 block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:sukumar@example.com"
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-light block"
              >
                sukumar@example.com
              </a>
              <a 
                href="tel:+1234567890"
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-light block"
              >
                +1 (234) 567-890
              </a>
              <p className="text-gray-400 font-light">
                Available for freelance work and full-time opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
            <p className="flex items-center gap-1">
              © {currentYear} Sukumar Divi. Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> and lots of code
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <p className="text-gray-500 text-sm">
              Built with React, Tailwind CSS, and futuristic design
            </p>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-110 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
