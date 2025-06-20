
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      title: "Java Development",
      description: "Building robust applications with Java and Spring framework"
    },
    {
      title: "Web Development", 
      description: "Creating modern web experiences with React and Node.js"
    },
    {
      title: "Accelerator Training",
      description: "Preparing for intensive coding bootcamp programs"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">About</h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-12"></div>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            I'm a computer science student passionate about creating efficient, scalable solutions. 
            Currently pursuing my degree while building practical experience through projects and 
            preparing for advanced accelerator programs to further develop my skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card key={index} className="p-8 text-center border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-normal text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
