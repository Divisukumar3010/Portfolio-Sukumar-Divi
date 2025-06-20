
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-light"
            >
              Resume
            </a>
            <a 
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-light"
            >
              GitHub
            </a>
            <a 
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-light"
            >
              LinkedIn
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 font-light">
            © 2024 Sukumar Divi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
