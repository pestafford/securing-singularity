
import { Shield, Lock, ChartLine, TrendingUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import TeamMember from "@/components/TeamMember";

const Index = () => {
  // For GitHub Pages, we need to ensure the image paths are relative to the base URL
  const logoPath = process.env.NODE_ENV === 'production' 
    ? "lovable-uploads/4a152f32-ee27-4680-b298-515454c750b8.png" 
    : "/lovable-uploads/4a152f32-ee27-4680-b298-515454c750b8.png";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-gray-900">
                Securing Your AI Future
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert cybersecurity consulting for the age of artificial intelligence. 
                We provide fractional CISO services, GRC solutions, and specialized AI security consulting.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-[#1EAEDB] hover:bg-[#1795BD]">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#1EAEDB] rounded-full opacity-10 animate-pulse" />
              <Shield className="w-full h-auto text-[#1EAEDB]" size={300} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Lock className="w-12 h-12 text-[#1EAEDB] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fractional CISO</h3>
              <p className="text-gray-600">
                Expert security leadership without the full-time commitment. Strategic guidance when you need it.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <ChartLine className="w-12 h-12 text-[#1EAEDB] mb-4" />
              <h3 className="text-xl font-semibold mb-3">GRC Solutions</h3>
              <p className="text-gray-600">
                Comprehensive governance, risk management, and compliance services tailored to your needs.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-[#1EAEDB] mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI Security</h3>
              <p className="text-gray-600">
                Specialized consulting for AI systems security, ensuring safe and reliable artificial intelligence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            Meet Our Leadership
          </h2>
          <div className="flex justify-center">
            <TeamMember />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-[#1EAEDB] rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
                  <p className="text-gray-600">Deep expertise in cybersecurity and AI, bringing you the latest in security practices.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-[#1EAEDB] rounded-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">Successfully securing businesses across industries with tailored solutions.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#1EAEDB] rounded-lg opacity-5" />
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Cybersecurity Dashboard" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help protect your business in the age of AI.
          </p>
          <Button size="lg" className="bg-[#1EAEDB] hover:bg-[#1795BD]">
            Contact Us Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src={logoPath}
              alt="Securing the Singularity Logo" 
              className="h-12 mb-4 brightness-200"
            />
            <p className="text-gray-400">
              Securing the future of technology, one business at a time.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: contact@securingthesingularity.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
