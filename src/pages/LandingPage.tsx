import { Shield, Lock, LineChart, Brain, Star, BookOpen, AlertCircle, Award, CheckCircle2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import BackgroundPattern from "../components/BackgroundPattern";
import StatsSection from "../components/StatsSection";
import { siteContent } from "../content/siteContent";

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Simple banner for the company logo area
  const Banner = () => (
    <header className="flex justify-between items-center py-4 px-4 md:py-6 md:px-8 bg-[#111111] border-b border-[#383838]">
      <div className="flex items-center gap-2">
        <a href="/" className="flex items-center gap-2 group">
          <img
            src="/lovable-uploads/LogoStylizedSmall.png"
            alt={`${siteContent.company.name} Logo`}
            style={{ display: 'block' }}
          />
          <h1 className="text-xl md:text-2xl font-bold text-[#1EAEDB] font-mono tracking-wide group-hover:underline">
            {siteContent.company.name}
          </h1>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 md:gap-8">
        <a href="#services" className="text-[#B0B0B0] hover:text-[#1EAEDB] transition-colors font-mono text-sm tracking-wide">Services</a>
        <a href="#about" className="text-[#B0B0B0] hover:text-[#1EAEDB] transition-colors font-mono text-sm tracking-wide">About</a>
        <a href="#contact" className="text-[#B0B0B0] hover:text-[#1EAEDB] transition-colors font-mono text-sm tracking-wide">Contact</a>
        <a href="#contact" className="bg-[#1EAEDB] hover:bg-[#1795BD] text-white px-4 py-2 rounded-md transition-colors font-mono text-sm">Get Started</a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#B0B0B0] hover:text-[#1EAEDB] transition-colors p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <nav className="fixed top-[73px] right-0 bottom-0 w-64 bg-[#1A1A1A] shadow-2xl z-50 md:hidden overflow-y-auto border-l border-[#383838]">
            <div className="flex flex-col p-6 space-y-4">
              <a
                href="#services"
                className="text-[#B0B0B0] hover:text-[#1EAEDB] transition-colors text-lg py-2 border-b border-[#383838] font-mono"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-[#B0B0B0] hover:text-[#1EAEDB] transition-colors text-lg py-2 border-b border-[#383838] font-mono"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-[#B0B0B0] hover:text-[#1EAEDB] transition-colors text-lg py-2 border-b border-[#383838] font-mono"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="bg-[#1EAEDB] hover:bg-[#1795BD] text-white px-4 py-3 rounded-md transition-colors text-center text-lg font-semibold mt-4 font-mono"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  );

  // Simple team member card
  const TeamMemberCard = () => {
    const member = siteContent.team.members[0];
    return (
      <div className="p-5 md:p-6 hover:shadow-lg transition-shadow max-w-xs md:max-w-sm mx-auto bg-[#1A1A1A] rounded-lg border border-[#383838]">
        <div className="flex flex-col items-center">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full mb-4 object-cover border-2 border-[#383838] shadow bg-[#252525]"
            style={{ objectPosition: 'top', boxShadow: '0 2px 12px 0 rgba(30,174,219,0.15)' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#F5F5F5]">{member.name}</h3>
          <p className="text-[#B0B0B0] mb-3 md:mb-4">
            {member.title}
          </p>
          <div className="flex flex-row items-center justify-center gap-4 mb-3">
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#1EAEDB] text-[#B0B0B0] transition-colors">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.271c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.271h-3v-4.604c0-1.098-.021-2.509-1.529-2.509-1.529 0-1.764 1.195-1.764 2.427v4.686h-3v-9h2.881v1.233h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v4.721z"/></svg>
            </a>
            <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#1EAEDB] text-[#B0B0B0] transition-colors">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.017-2.252-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href={member.social.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium" className="hover:text-[#1EAEDB] text-[#B0B0B0] transition-colors">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 1043.63 592.71"><g><path d="M588.67 296.14c0 163.57-131.93 296.14-294.33 296.14S0 459.71 0 296.14 131.93 0 294.34 0s294.33 132.57 294.33 296.14zM853.03 296.14c0 151.31-65.98 273.99-147.36 273.99-81.38 0-147.36-122.68-147.36-273.99S624.29 22.15 705.67 22.15c81.38 0 147.36 122.68 147.36 273.99zM1043.63 296.14c0 140.13-29.13 253.77-65.07 253.77-35.94 0-65.07-113.64-65.07-253.77s29.13-253.77 65.07-253.77c35.94 0 65.07 113.64 65.07 253.77z"/></g></svg>
            </a>
          </div>
          <p className="text-[#808080] text-center text-base">
            {member.bio}
          </p>
        </div>
      </div>
    );
  };

  // Client testimonial card component
  const TestimonialCard = ({ quote, author, company }: { quote: string; author: string; company: string }) => (
    <div className="p-6 bg-[#1A1A1A] rounded-lg shadow-lg hover:shadow-xl transition-all border border-[#383838]">
      <div className="mb-4">
        <Star className="w-6 h-6 text-[#1EAEDB] inline" />
        <Star className="w-6 h-6 text-[#1EAEDB] inline" />
        <Star className="w-6 h-6 text-[#1EAEDB] inline" />
        <Star className="w-6 h-6 text-[#1EAEDB] inline" />
        <Star className="w-6 h-6 text-[#1EAEDB] inline" />
      </div>
      <p className="text-[#B0B0B0] mb-4 italic">{quote}</p>
      <div>
        <p className="font-semibold text-[#F5F5F5]">{author}</p>
        <p className="text-[#808080] text-sm">{company}</p>
      </div>
    </div>
  );

  // Case study card component
  const CaseStudyCard = ({ title, description, image }: { title: string; description: string; image: string }) => (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all bg-[#1A1A1A] border border-[#383838]">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-[#F5F5F5]">{title}</h3>
        <p className="text-[#B0B0B0] mb-4">{description}</p>
        <button className="text-[#1EAEDB] font-semibold hover:text-[#1795BD] transition-colors">
          Read Case Study →
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#111111] relative grain-overlay">
      <div className="relative z-10">
        <Banner />
        {/* Value Proposition - Top of Page */}
        <div className="max-w-3xl mx-auto mt-8 mb-0 px-4 z-20 relative">
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl shadow-2xl px-8 py-6 text-center border border-[#383838] ring-2 ring-primary/50 ring-offset-2 ring-offset-[#111111]">
            <h2 className="font-mono font-bold text-xl md:text-2xl lg:text-3xl tracking-tight">{siteContent.valueProp.headline}</h2>
            <p className="text-sm md:text-base font-medium mt-2 text-white/90 leading-relaxed">{siteContent.valueProp.description}</p>
          </div>
        </div>
        {/* News Banner Card below header */}
        <div className="max-w-2xl mx-auto mt-8 mb-0 px-4 z-20 relative">
          <a href="#news" className="block bg-gradient-to-r from-[#14B8A6] to-[#1EAEDB] text-white rounded-xl shadow-2xl px-6 py-3 text-center font-semibold transition-all text-base md:text-lg border border-[#383838] ring-2 ring-accent-teal/50 ring-offset-2 ring-offset-[#111111] hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(30,174,219,0.3)] focus:outline-none focus:ring-4 focus:ring-primary animate-fade-in-up">
            <span className="inline-flex items-center gap-2 justify-center">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="inline-block flex-shrink-0" aria-hidden="true"><path d="M12 19v-2m0-8v2m0 0a7 7 0 1 1-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/></svg>
              <span>{siteContent.newsBanner.text} <span className="font-bold">{siteContent.newsBanner.highlight}</span> &rarr;</span>
            </span>
          </a>
        </div>
        {/* Mission/About Me Section - Near Top */}
        <section id="mission" className="py-12 md:py-20 px-2 md:px-6 bg-[#1A1A1A]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold mb-6 text-[#F5F5F5] tracking-tight">{siteContent.mission.title}</h2>
            <p className="text-lg md:text-xl text-[#B0B0B0] mb-8 max-w-2xl mx-auto leading-relaxed">{siteContent.mission.description}</p>
            <a href="#about" className="bg-gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-block hover:shadow-lg hover:scale-105">{siteContent.mission.cta}</a>
          </div>
        </section>
        {/* Hero Section */}
        <section className="relative py-8 md:py-12 px-2 md:px-6">
          <div className="max-w-5xl mx-auto bg-[#252525]/90 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-10 border border-[#383838]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-black mb-4 md:mb-6 text-[#F5F5F5] tracking-tight">
                  {siteContent.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-[#B0B0B0] mb-6 md:mb-8 leading-relaxed">
                  {siteContent.hero.subtitle}
                </p>
                <div className="flex gap-3 md:gap-4">
                  <button className="bg-gradient-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all hover:shadow-lg hover:scale-105" onClick={() => { window.location.hash = '#contact'; }}>
                    {siteContent.hero.ctaPrimary}
                  </button>
                  <button className="border-2 border-[#383838] hover:border-[#1EAEDB] hover:bg-[#1EAEDB]/10 text-[#F5F5F5] px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all hover:scale-105" onClick={() => { window.location.hash = '#about'; }}>
                    {siteContent.hero.ctaSecondary}
                  </button>
                </div>
              </div>
              <div className="flex justify-center md:justify-end md:pr-6 lg:pr-10">
                {/* Hero Image: Office Astronaut */}
                <img
                  src="/lovable-uploads/OfficeAstronaut.jpeg"
                  alt="Astronaut working at a desk in a modern office, symbolizing secure AI innovation"
                  loading="lazy"
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-xl object-cover shadow-lg border-2 border-[#383838] bg-[#252525] animate-float"
                  style={{ objectPosition: 'center', boxShadow: '0 2px 24px 0 rgba(30,174,219,0.18)' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 px-2 md:px-6 bg-[#111111] relative overflow-hidden">
          <BackgroundPattern variant="dots" opacity={0.03} className="text-primary" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-center mb-4 text-[#F5F5F5] tracking-tight">
              {siteContent.services.title}
            </h2>
            <p className="text-center text-[#B0B0B0] mb-12 max-w-2xl mx-auto">{siteContent.services.subtitle}</p>
            <ul className="grid md:grid-cols-3 gap-6 md:gap-8 list-none">
              {siteContent.services.items.map((service, index) => {
                const iconMap: Record<string, any> = {
                  Lock: Lock,
                  Shield: Shield,
                  LineChart: LineChart,
                  Brain: Brain,
                };
                const Icon = iconMap[service.icon] || Shield;
                const gradients = [
                  'from-primary to-accent-teal',
                  'from-accent-teal to-primary',
                  'from-primary-dark to-accent-teal',
                ];
                return (
                  <li key={index} className="p-8 hover:shadow-2xl transition-all duration-300 rounded-xl border border-[#383838] flex flex-col items-center text-center bg-[#1A1A1A] hover:-translate-y-2 group hover:border-l-4 hover:border-l-[#1EAEDB]">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#F5F5F5]">{service.title}</h3>
                    <ul className="text-[#B0B0B0] text-base list-disc list-inside mb-2">
                      {service.description.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
            <div className="text-center mt-8">
              <a href="#contact" className="bg-gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-block mr-4 hover:shadow-lg hover:scale-105">{siteContent.services.ctaPrimary}</a>
              <a href="#about" className="border-2 border-primary hover:bg-primary/10 text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-block hover:scale-105">{siteContent.services.ctaSecondary}</a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Team Section - Simplified */}
        <section id="about" className="py-16 md:py-24 px-2 md:px-6 bg-gradient-primary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-center mb-4 text-white tracking-tight">
              {siteContent.team.title}
            </h2>
            <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">{siteContent.team.subtitle}</p>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
              <TeamMemberCard />
            </div>
            <div className="text-center mt-8">
              <a href="#contact" className="bg-[#111111] text-primary hover:bg-[#1A1A1A] px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-block hover:shadow-lg hover:scale-105">{siteContent.team.cta}</a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 px-2 md:px-6 bg-secondary relative overflow-hidden">
          <BackgroundPattern variant="grid" opacity={0.05} className="text-white" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-center mb-4 text-white tracking-tight">
              {siteContent.whyChooseUs.title}
            </h2>
            <p className="text-center text-cyan-200 mb-12 max-w-2xl mx-auto">{siteContent.whyChooseUs.subtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {siteContent.whyChooseUs.items.map((item, index) => {
                const iconMap: Record<string, any> = {
                  Award: Award,
                  AlertCircle: AlertCircle,
                  CheckCircle2: CheckCircle2,
                  BookOpen: BookOpen,
                };
                const Icon = iconMap[item.icon] || Award;
                const gradients = [
                  'from-primary to-accent-teal',
                  'from-accent-teal to-primary',
                  'from-primary-dark to-accent-teal',
                  'from-accent-teal to-primary-dark',
                ];
                return (
                  <div key={index} className="text-center group">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-10 h-10 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-cyan-100">{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <a href="#contact" className="bg-gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-block hover:shadow-lg hover:scale-105">{siteContent.whyChooseUs.cta}</a>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-16 md:py-24 px-2 md:px-6 bg-[#111111]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-center mb-4 text-[#F5F5F5] tracking-tight">
              {siteContent.blog.title}
            </h2>
            <p className="text-center text-[#B0B0B0] mb-12 max-w-2xl mx-auto">{siteContent.blog.subtitle}</p>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {siteContent.blog.posts.map((post, index) => {
                const gradients = [
                  'from-primary/80',
                  'from-accent-teal/80',
                  'from-primary-dark/80',
                ];
                return (
                  <div key={index} className="bg-[#1A1A1A] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-[#383838]">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-t ${gradients[index % gradients.length]} to-transparent z-10`}></div>
                      <img src={post.image} alt={`Cover for '${post.title}' blog post`} loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="w-full h-48 object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-4 text-[#F5F5F5]">{post.title}</h3>
                      <a href={post.link} target="_blank" rel="noopener noreferrer" className="bg-gradient-primary text-white px-4 py-2 rounded-md text-sm font-semibold transition-all inline-block hover:shadow-lg hover:scale-105">Read on Medium</a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <a
                href={siteContent.blog.ctaPrimaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-block mr-4 hover:shadow-lg hover:scale-105"
              >
                {siteContent.blog.ctaPrimary}
              </a>
              <a href="#services" className="border-2 border-primary hover:bg-primary/10 text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-block hover:scale-105">{siteContent.blog.ctaSecondary}</a>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-16 md:py-24 px-2 md:px-6 bg-[#1A1A1A]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-center mb-4 text-[#F5F5F5] tracking-tight">
              {siteContent.news.title}
            </h2>
            <p className="text-center text-[#B0B0B0] mb-12 max-w-2xl mx-auto">{siteContent.news.subtitle}</p>
            <div className="flex flex-col items-center gap-6">
              {siteContent.news.items.map((newsItem, index) => (
                <div key={index} className="w-full bg-[#252525] rounded-lg shadow p-6 flex flex-col md:flex-row items-center gap-6 border border-[#383838]">
                  <div className="flex-shrink-0">
                    <img src={newsItem.image} alt={`${newsItem.title} logo`} loading="lazy" className="w-20 h-20 rounded-full object-cover border border-[#383838]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#F5F5F5]">{newsItem.title}</h3>
                    <p className="text-[#B0B0B0] mb-2">{newsItem.description}</p>
                    <ul className="text-[#808080] mb-2 text-sm list-disc pl-5">
                      {newsItem.details.map((detail, detailIndex) => (
                        <li key={detailIndex}><span className="font-semibold text-[#B0B0B0]">{detail.label}:</span> {detail.value}</li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      {newsItem.links.about && (
                        <a href={newsItem.links.about} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-primary-light transition-colors">About Event</a>
                      )}
                      {newsItem.links.register && (
                        <a href={newsItem.links.register} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-primary-light transition-colors">Event Details & Registration</a>
                      )}
                      {newsItem.links.recording && (
                        <a href={newsItem.links.recording} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-primary-light transition-colors">Watch Recording</a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 px-2 md:px-6 bg-gradient-to-br from-[#0A2540] via-[#1E3A5F] to-[#14B8A6]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold mb-6 text-white tracking-tight">
              {siteContent.contact.title}
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {siteContent.contact.subtitle}
            </p>
            <a href={`mailto:${siteContent.contact.email}`} className="bg-[#1EAEDB] text-white hover:bg-[#1795BD] px-8 py-4 rounded-lg text-xl font-bold transition-all inline-block shadow-lg hover:scale-105">
              {siteContent.contact.cta}
            </a>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-[#111111] border-t border-[#383838] text-white py-10 md:py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 font-mono">{siteContent.company.name}</h2>
              <p className="text-[#808080]">
                {siteContent.footer.tagline}
              </p>
              <div className="mt-4 flex gap-6">
                <a href="#services" className="text-[#808080] hover:text-[#1EAEDB] transition-colors">Services</a>
                <a href="#about" className="text-[#808080] hover:text-[#1EAEDB] transition-colors">About</a>
                <a href="#contact" className="text-[#808080] hover:text-[#1EAEDB] transition-colors">Contact</a>
                <a href="#mission" className="text-[#808080] hover:text-[#1EAEDB] transition-colors">Mission</a>
              </div>
            </div>
            <div className="md:text-right">
              <h3 className="text-lg font-semibold mb-4 font-mono">Contact</h3>
              <p className="text-[#808080]">{siteContent.company.email}</p>
              <a href={`mailto:${siteContent.company.email}`} className="inline-block mt-2 text-[#1EAEDB] hover:underline">Email Us</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
