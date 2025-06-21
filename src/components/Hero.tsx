
import { ArrowDown, Sparkles, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import pic from './clg pic.jpg'
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-16">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-40 right-40 w-48 h-48 bg-pink-500/8 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in lg:text-left text-center">
            <div className="space-y-6">
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-cyan-400 text-sm font-light mb-6"> */}
                {/* <Sparkles className="w-4 h-4" /> */}
                {/* Available for opportunities */}
              {/* </div> */}
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-none">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-normal">
                  Sukumar
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-normal">
                  Divi
                </span>
                .
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light tracking-wide max-w-3xl leading-relaxed">
                Java & Web Developer · Student · Future{" "}
                <span className="text-cyan-400">Accelerator Coder</span>
              </p>

              <p className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
                Passionate about creating efficient, scalable solutions and building 
                the future through code. Ready to take on new challenges and grow 
                in the tech industry.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center pt-8">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 text-lg font-light tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 border-0 group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                View Projects
              </Button>
              <a href="/public/Sukumar_Divi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button 
                variant="outline"
                className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 px-10 py-4 text-lg font-light tracking-wide transition-all duration-300 transform hover:scale-105 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                View Resume
              </Button>
              </a>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contact')}
                className="text-cyan-400 hover:text-cyan-300 px-6 py-4 text-lg font-light tracking-wide transition-all duration-300 transform hover:scale-105 group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Say Hello
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="relative lg:order-last order-first">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
              
              {/* Profile image container */}
              <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img
                  src={pic}
                  alt="Sukumar Divi"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-700"></div>
              <div className="absolute top-1/4 -left-6 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-500"></div>
            </div>

            {/* Stats or badges */}
            <div className="flex justify-center gap-4 mt-8">
              <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-cyan-400 text-sm font-light">
                CS Student
              </div>
              <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-purple-400 text-sm font-light">
                Java Developer
              </div>
              <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-blue-400 text-sm font-light">
                React Enthusiast
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all duration-300 group"
               onClick={() => scrollToSection('about')}>
            <ArrowDown className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
