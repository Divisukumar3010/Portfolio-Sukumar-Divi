
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import AcceleratorProgress from "@/components/AcceleratorProgress";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
      `}</style>
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <AcceleratorProgress />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
