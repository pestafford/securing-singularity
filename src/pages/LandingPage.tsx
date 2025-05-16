import { Shield, Lock, ChartLine, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const LandingPage = () => {
  // Simple banner for the company logo area
  const Banner = () => (
    <header className="flex justify-between items-center py-4 px-4 md:py-6 md:px-8 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <img
          src="/lovable-uploads/LogoStylizedSmall.png"
          alt="Singularity Solutions Logo"
          className="h-10 w-10 md:h-12 md:w-12 mr-2 md:mr-3 drop-shadow-md bg-white/90 rounded-full p-1.5 border border-gray-100 shadow-sm object-contain"
          style={{ maxHeight: '48px', background: 'rgba(255,255,255,0.92)' }}
        />
        <h1 className="text-xl md:text-2xl font-bold text-[#1EAEDB]">Singularity Solutions</h1>
      </div>
      <nav className="hidden md:flex items-center gap-6 md:gap-8">
        <a href="#services" className="text-gray-700 hover:text-[#1EAEDB] transition-colors">Services</a>
        <a href="#about" className="text-gray-700 hover:text-[#1EAEDB] transition-colors">About</a>
        <a href="#contact" className="text-gray-700 hover:text-[#1EAEDB] transition-colors">Contact</a>
        <Button variant="default" className="bg-[#1EAEDB] hover:bg-[#1795BD]">
          Get Started
        </Button>
      </nav>
    </header>
  );

  // Simple team member card
  const TeamMemberSimple = () => (
    <Card className="p-5 md:p-6 hover:shadow-lg transition-shadow max-w-xs md:max-w-sm mx-auto bg-white/90 border border-gray-100">
      <div className="flex flex-col items-center">
        <img
          src="/lovable-uploads/BlueShirt.PNG"
          alt="Phil Stafford"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full mb-4 object-cover border-2 border-gray-100 shadow bg-gray-100/80"
          style={{ objectPosition: 'top', boxShadow: '0 2px 12px 0 rgba(30,174,219,0.08)' }}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <h3 className="text-lg md:text-xl font-semibold mb-2">Phil Stafford</h3>
        <p className="text-gray-600 mb-3 md:mb-4">
          Founder & Principal Consultant
        </p>
        <p className="text-gray-500 text-center text-base">
          Phil Stafford is a cybersecurity expert with over 15 years of experience helping organizations secure their digital assets and navigate complex technology risks. He specializes in AI security, governance, and risk management, and is passionate about empowering businesses to thrive safely in the age of artificial intelligence.
        </p>
      </div>
    </Card>
  );

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        backgroundImage: "url('/lovable-uploads/Singularity Poster.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Banner />
      
      {/* Hero Section */}
      <section className="relative py-14 md:py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-gray-900">
                Securing Your AI Future
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert cybersecurity consulting for the age of artificial intelligence. 
                We provide fractional CISO services, GRC solutions, and AI security consulting.
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
            <div className="flex justify-center">
              <Shield className="w-64 h-64 text-[#1EAEDB]" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-14 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Lock className="w-12 h-12 text-[#1EAEDB] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fractional CISO</h3>
              <p className="text-gray-600">
                Expert security leadership without the full-time commitment.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <ChartLine className="w-12 h-12 text-[#1EAEDB] mb-4" />
              <h3 className="text-xl font-semibold mb-3">GRC Solutions</h3>
              <p className="text-gray-600">
                Comprehensive governance, risk management, and compliance services.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-[#1EAEDB] mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI Security</h3>
              <p className="text-gray-600">
                Specialized consulting for AI systems security and ethics.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section - Simplified */}
      <section id="about" className="py-14 md:py-20 px-4 md:px-8 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            Meet Our Leadership
          </h2>
          <div className="flex justify-center">
            <TeamMemberSimple />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-14 md:py-20 px-4 md:px-8 bg-white">
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
      <footer className="bg-gray-900 text-white py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Singularity Solutions</h2>
            <p className="text-gray-400">
              Securing the future of technology, one business at a time.
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">contact@singularitysolutions.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
