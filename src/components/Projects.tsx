
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with user authentication, shopping cart, and payment integration using React and Spring Boot.",
      image: "/placeholder.svg",
      technologies: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
      githubUrl: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and deadline tracking.",
      image: "/placeholder.svg",
      technologies: ["Node.js", "React", "MongoDB", "Socket.io"],
      githubUrl: "#"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard displaying weather patterns and forecasts with interactive charts and location-based data.",
      image: "/placeholder.svg",
      technologies: ["JavaScript", "Chart.js", "REST API", "Bootstrap"],
      githubUrl: "#"
    },
    {
      title: "Student Grade Tracker",
      description: "Java desktop application for tracking student performance with grade calculations and progress reports.",
      image: "/placeholder.svg",
      technologies: ["Java", "JavaFX", "SQLite", "Maven"],
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Projects</h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-normal text-gray-900">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 font-light leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs font-light">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-light"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
