
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 font-light">
            Interested in collaborating or have a question?{" "}
            <span className="text-cyan-400">I'd love to hear from you.</span>
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl shadow-cyan-500/10">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-light text-white flex items-center justify-center gap-3">
                <Mail className="w-8 h-8 text-cyan-400" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-green-400 text-xl font-light mb-6">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 font-light"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 font-light text-base">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`mt-3 bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300 font-light text-base">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`mt-3 bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300 font-light text-base">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`mt-3 min-h-40 bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Tell me about your project or idea... (minimum 20 characters)"
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
                    <p className="text-gray-500 text-sm mt-2">
                      {formData.message.length}/20 characters minimum
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-light py-4 text-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              )}
              
              <div className="flex justify-center gap-8 mt-10 pt-8 border-t border-white/10">
                <a 
                  href="mailto:sukumar.divi@email.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-light"
                >
                  <Mail className="w-5 h-5" />
                  sukumar.divi@email.com
                </a>
                <a 
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
