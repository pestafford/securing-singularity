import { Shield, Lock, LineChart } from "lucide-react";

const LandingPage = () => {
  // Simple banner for the company logo area
  const Banner = () => (
    <header className="flex justify-between items-center py-4 px-4 md:py-6 md:px-8 bg-[#e9ecef] shadow-sm">
      <div className="flex items-center gap-2">
        <img
          src="/lovable-uploads/LogoStylizedSmall.png"
          alt="Singularity Solutions Logo"
          style={{ display: 'block' }}
        />
        <h1 className="text-xl md:text-2xl font-bold text-[#1EAEDB] font-orbitron tracking-wide">
          Singularity Solutions
        </h1>
      </div>
      <nav className="hidden md:flex items-center gap-6 md:gap-8">
        <a href="#services" className="text-gray-700 hover:text-[#1EAEDB] transition-colors">Services</a>
        <a href="#about" className="text-gray-700 hover:text-[#1EAEDB] transition-colors">About</a>
        <a href="#contact" className="text-gray-700 hover:text-[#1EAEDB] transition-colors">Contact</a>
        <button className="bg-[#1EAEDB] hover:bg-[#1795BD] text-white px-4 py-2 rounded-md transition-colors">
          Get Started
        </button>
      </nav>
    </header>
  );

  // Simple team member card
  const TeamMemberCard = () => (
    <div className="p-5 md:p-6 hover:shadow-lg transition-shadow max-w-xs md:max-w-sm mx-auto bg-white/90 rounded-lg border border-gray-100">
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
    </div>
  );

  return (
    <div className="min-h-screen bg-black relative">
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: "url('/lovable-uploads/Singularity Poster.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative z-10">
        <Banner />
        {/* Hero Section */}
        <section className="relative py-14 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
                  Securing Your AI Future
                </h1>
                <p className="text-xl text-white mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                  Expert cybersecurity consulting for the age of artificial intelligence. 
                  We provide fractional CISO services, GRC solutions, and AI security consulting.
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#1EAEDB] hover:bg-[#1795BD] text-white px-6 py-3 rounded-md text-lg font-semibold transition-colors">
                    Schedule Consultation
                  </button>
                  <button className="border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-md text-lg font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="flex justify-end md:pr-8 lg:pr-16">
                <Shield className="w-64 h-64 text-[#1EAEDB] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]" />
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
              <div className="p-6 hover:shadow-lg transition-shadow rounded-lg border border-gray-100">
                <Lock className="w-12 h-12 text-[#1EAEDB] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fractional CISO</h3>
                <p className="text-gray-600">
                  Expert security leadership without the full-time commitment.
                </p>
              </div>
              <div className="p-6 hover:shadow-lg transition-shadow rounded-lg border border-gray-100">
                <LineChart className="w-12 h-12 text-[#1EAEDB] mb-4" />
                <h3 className="text-xl font-semibold mb-3">GRC Solutions</h3>
                <p className="text-gray-600">
                  Comprehensive governance, risk management, and compliance services.
                </p>
              </div>
              <div className="p-6 hover:shadow-lg transition-shadow rounded-lg border border-gray-100">
                <Shield className="w-12 h-12 text-[#1EAEDB] mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI Security</h3>
                <p className="text-gray-600">
                  Specialized consulting for AI systems security and ethics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="about" className="py-14 md:py-20 px-4 md:px-8 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
              Meet Our Leadership
            </h2>
            <div className="flex justify-center">
              <TeamMemberCard />
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
            <button className="bg-[#1EAEDB] hover:bg-[#1795BD] text-white px-6 py-3 rounded-md text-lg font-semibold transition-colors">
              Contact Us Today
            </button>
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
    </div>
  );
};

export default LandingPage;
