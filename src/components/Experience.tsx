
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      year: "2024–Present",
      title: "B.Sc. Computer Science",
      organization: "State University",
      type: "Education",
      description: "Focusing on software engineering, data structures, and web development. Maintaining a 3.8 GPA while participating in coding competitions."
    },
    {
      year: "2024",
      title: "Frontend Development Intern",
      organization: "TechStart Solutions",
      type: "Experience",
      description: "Developed responsive web interfaces using React and Tailwind CSS. Collaborated with design team to implement user-friendly features."
    },
    {
      year: "2023",
      title: "Java Programming Certification",
      organization: "Oracle",
      type: "Certification",
      description: "Completed Oracle Certified Associate Java SE certification, demonstrating proficiency in core Java concepts and programming principles."
    },
    {
      year: "2023",
      title: "Web Development Bootcamp",
      organization: "CodeAcademy Pro",
      type: "Education",
      description: "Intensive 16-week program covering full-stack development, including React, Node.js, databases, and deployment strategies."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Experience & Education</h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-100 last:border-b-0">
              <div className="md:w-32 flex-shrink-0">
                <Badge variant="outline" className="font-light text-sm">
                  {item.year}
                </Badge>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-xl font-normal text-gray-900">{item.title}</h3>
                  <Badge variant="secondary" className="text-xs font-light w-fit">
                    {item.type}
                  </Badge>
                </div>
                <p className="text-blue-600 font-light mb-3">{item.organization}</p>
                <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
