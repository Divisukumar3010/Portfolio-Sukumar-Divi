
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, BookOpen, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      year: "2024–Present",
      title: "B.Sc. Computer Science",
      organization: "State University",
      type: "Education",
      icon: BookOpen,
      description: "Focusing on software engineering, data structures, and web development. Maintaining a 3.8 GPA while participating in coding competitions.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      year: "2024",
      title: "Frontend Development Intern",
      organization: "TechStart Solutions",
      type: "Experience",
      icon: Code,
      description: "Developed responsive web interfaces using React and Tailwind CSS. Collaborated with design team to implement user-friendly features.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      year: "2023",
      title: "Java Programming Certification",
      organization: "Oracle",
      type: "Certification",
      icon: Award,
      description: "Completed Oracle Certified Associate Java SE certification, demonstrating proficiency in core Java concepts and programming principles.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      year: "2023",
      title: "Web Development Bootcamp",
      organization: "CodeAcademy Pro",
      type: "Education",
      icon: BookOpen,
      description: "Intensive 16-week program covering full-stack development, including React, Node.js, databases, and deployment strategies.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="group flex flex-col md:flex-row gap-8 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="md:w-40 flex-shrink-0 flex flex-col items-start gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="font-light text-sm bg-white/5 border-white/20 text-gray-300">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.year}
                  </Badge>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <h3 className="text-2xl font-normal text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs font-light w-fit bg-white/10 text-gray-300 border-white/20">
                      {item.type}
                    </Badge>
                  </div>
                  <p className="text-cyan-400 font-light mb-4 text-lg">{item.organization}</p>
                  <p className="text-gray-300 font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
