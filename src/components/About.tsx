
import { Card } from "@/components/ui/card";
import { Code, Globe, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Java Development",
      description: "Building robust applications with Java and Spring framework",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Web Development", 
      description: "Creating modern web experiences with React and Node.js",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Accelerator Training",
      description: "Preparing for intensive coding bootcamp programs",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
            About
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
            I'm a computer science student passionate about creating{" "}
            <span className="text-cyan-400">efficient, scalable solutions</span>. 
            Currently pursuing my degree while building practical experience through projects and 
            preparing for advanced accelerator programs to further develop my skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="group p-8 text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-normal text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
