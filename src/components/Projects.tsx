
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

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
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ExternalLink className="w-12 h-12 text-white/50 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-normal text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300 font-light leading-relaxed text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs font-light bg-white/10 text-gray-300 border-white/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/50 hover:text-cyan-400 font-light transform hover:scale-105 transition-all duration-300"
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
