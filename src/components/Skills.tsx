
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    "Java", "Spring Boot", "React", "Node.js", "Tailwind CSS", 
    "JavaScript", "TypeScript", "SQL", "MongoDB", "Git", 
    "Docker", "REST APIs", "HTML/CSS", "Python", "Data Structures"
  ];

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge 
              key={index}
              variant="outline"
              className="px-8 py-4 text-lg font-light bg-white/5 backdrop-blur-sm border border-white/20 text-gray-200 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/50 hover:text-cyan-400 hover:scale-105 transition-all duration-300 cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
