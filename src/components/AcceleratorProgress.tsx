
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AcceleratorProgress = () => {
  const progressUpdates = [
    {
      date: "December 2024",
      title: "Algorithm Challenge Week",
      description: "Completed 50+ LeetCode problems focusing on dynamic programming and graph algorithms. Preparing for technical interviews with daily practice sessions.",
      status: "In Progress"
    },
    {
      date: "November 2024",
      title: "System Design Fundamentals", 
      description: "Started learning system design principles including scalability, load balancing, and database optimization. Building a distributed chat application as practice.",
      status: "Completed"
    },
    {
      date: "October 2024",
      title: "Open Source Contributions",
      description: "Made first contributions to React ecosystem projects. Focusing on bug fixes and documentation improvements to build collaborative development skills.",
      status: "Ongoing"
    }
  ];

  return (
    <section id="accelerator" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Currently Learning & Building</h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-light">
            Documenting my journey toward joining a top-tier coding accelerator program
          </p>
        </div>
        
        <div className="space-y-6">
          {progressUpdates.map((update, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <CardTitle className="text-xl font-normal text-gray-900">{update.title}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs font-light">
                      {update.date}
                    </Badge>
                    <Badge 
                      variant={update.status === "Completed" ? "default" : "secondary"}
                      className="text-xs font-light"
                    >
                      {update.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-light leading-relaxed">
                  {update.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcceleratorProgress;
