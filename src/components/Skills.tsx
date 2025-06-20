
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    "Java", "Spring Boot", "React", "Node.js", "Tailwind CSS", 
    "JavaScript", "TypeScript", "SQL", "MongoDB", "Git", 
    "Docker", "REST APIs", "HTML/CSS", "Python", "Data Structures"
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Skills</h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <Badge 
              key={index}
              variant="outline"
              className="px-6 py-3 text-base font-light border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
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
