
import { Card } from "@/components/ui/card";
import { Code, Globe, Zap, Rocket, Target, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Java Development",
      description: "Building robust applications with Java and Spring framework, focusing on clean code and best practices",
      gradient: "from-orange-500 to-red-500",
      stats: "15+ Projects"
    },
    {
      icon: Globe,
      title: "Web Development", 
      description: "Creating modern web experiences with React, Node.js, and cutting-edge technologies",
      gradient: "from-blue-500 to-cyan-500",
      stats: "20+ Websites"
    },
    {
      icon: Zap,
      title: "Accelerator Training",
      description: "Preparing for intensive coding bootcamp programs and advanced software development",
      gradient: "from-purple-500 to-pink-500",
      stats: "100+ Hours"
    }
  ];

  const stats = [
    { icon: Rocket, label: "Projects Completed", value: "25+", color: "text-cyan-400" },
    { icon: Target, label: "Problem Solving", value: "95%", color: "text-green-400" },
    { icon: Users, label: "Team Projects", value: "10+", color: "text-purple-400" },
    { icon: Code, label: "Lines of Code", value: "50K+", color: "text-orange-400" }
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
            I'm a dedicated computer science student with a passion for creating{" "}
            <span className="text-cyan-400 font-normal">efficient, scalable solutions</span>. 
            Currently pursuing my degree while building practical experience through projects and 
            preparing for advanced accelerator programs to{" "}
            <span className="text-purple-400 font-normal">shape the future through code</span>.
          </p>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-400 text-sm font-light">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        {/* Main highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="group p-8 text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-normal text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-light">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    {item.stats}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Personal touch */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-light text-white mb-4">My Journey</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              From writing my first "Hello World" program to building complex applications, 
              my journey in computer science has been driven by curiosity and a desire to solve 
              real-world problems. I believe in continuous learning, clean code, and the power 
              of technology to make a positive impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
