
import { Github, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 relative border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            <a 
              href="#" 
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-light transform hover:scale-105"
            >
              Resume
            </a>
            <a 
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-light transform hover:scale-105"
            >
              GitHub
            </a>
            <a 
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-light transform hover:scale-105"
            >
              LinkedIn
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 font-light">
            © 2024 Sukumar Divi. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React, Tailwind CSS, and futuristic design
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
