
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Target, GitBranch } from "lucide-react";

const AcceleratorProgress = () => {
  const progressUpdates = [
    {
      date: "December 2024",
      title: "Algorithm Challenge Week",
      description: "Completed 50+ LeetCode problems focusing on dynamic programming and graph algorithms. Preparing for technical interviews with daily practice sessions.",
      status: "In Progress",
      icon: Target,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      date: "November 2024",
      title: "System Design Fundamentals", 
      description: "Started learning system design principles including scalability, load balancing, and database optimization. Building a distributed chat application as practice.",
      status: "Completed",
      icon: Rocket,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      date: "October 2024",
      title: "Open Source Contributions",
      description: "Made first contributions to React ecosystem projects. Focusing on bug fixes and documentation improvements to build collaborative development skills.",
      status: "Ongoing",
      icon: GitBranch,
      gradient: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section id="accelerator" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
            Currently Learning & Building
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 font-light">
            Documenting my journey toward joining a{" "}
            <span className="text-cyan-400">top-tier coding accelerator program</span>
          </p>
        </div>
        
        <div className="space-y-8">
          {progressUpdates.map((update, index) => {
            const IconComponent = update.icon;
            return (
              <Card key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${update.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-normal text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {update.title}
                      </CardTitle>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="text-xs font-light bg-white/5 border-white/20 text-gray-300">
                        {update.date}
                      </Badge>
                      <Badge 
                        variant={update.status === "Completed" ? "default" : "secondary"}
                        className={`text-xs font-light ${
                          update.status === "Completed" 
                            ? "bg-green-500/20 text-green-400 border-green-500/30" 
                            : update.status === "In Progress"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        }`}
                      >
                        {update.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 font-light leading-relaxed text-base">
                    {update.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcceleratorProgress;
