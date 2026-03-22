import { Shield, Lock, LineChart, Brain, BookOpen, AlertCircle, Award, CheckCircle2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import BackgroundPattern from "../components/BackgroundPattern";
import StatsSection from "../components/StatsSection";
import ThemeToggle from "../components/ThemeToggle";
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

  const bookingUrl = siteContent.company.bookingUrl;

  // Simple banner for the company logo area
  const Banner = () => (
    <header className="flex justify-between items-center py-4 px-4 md:py-6 md:px-8 bg-surface border-b border-border-theme">
      <div className="flex items-center gap-2">
        <a href="/" className="flex items-center gap-2 group">
          <img
            src="/lovable-uploads/LogoStylizedSmall.png"
            alt={`${siteContent.company.name} Logo`}
            style={{ display: 'block' }}
          />
          <h1 className="text-xl md:text-2xl font-display uppercase tracking-[2px] group-hover:underline">
            <span className="font-bold text-heading">SINGULARITY</span>{' '}
            <span className="font-light text-muted">SYSTEMS</span>
          </h1>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 md:gap-8">
        <a href="#services" className="text-body hover:text-primary transition-colors font-mono text-sm tracking-wide">Services</a>
        <a href="#about" className="text-body hover:text-primary transition-colors font-mono text-sm tracking-wide">About</a>
        <a href="#contact" className="text-body hover:text-primary transition-colors font-mono text-sm tracking-wide">Contact</a>
        <ThemeToggle />
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors font-mono text-sm">Book Free Assessment</a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button
          className="text-body hover:text-primary transition-colors p-2"
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
      </div>

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
          <nav className="fixed top-[73px] right-0 bottom-0 w-64 bg-surface-card shadow-2xl z-50 md:hidden overflow-y-auto border-l border-border-theme">
            <div className="flex flex-col p-6 space-y-4">
              <a
                href="#services"
                className="text-body hover:text-primary transition-colors text-lg py-2 border-b border-border-theme font-mono"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-body hover:text-primary transition-colors text-lg py-2 border-b border-border-theme font-mono"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-body hover:text-primary transition-colors text-lg py-2 border-b border-border-theme font-mono"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-md transition-colors text-center text-lg font-semibold mt-4 font-mono"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Free Assessment
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
      <div className="p-5 md:p-6 hover:shadow-lg transition-shadow max-w-xs md:max-w-sm mx-auto bg-surface-card rounded-lg border border-border-theme">
        <div className="flex flex-col items-center">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full mb-4 object-cover border-2 border-border-theme shadow bg-surface-elevated"
            style={{ objectPosition: 'top', boxShadow: '0 2px 12px 0 rgba(42,157,143,0.15)' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-heading">{member.name}</h3>
          <p className="text-body mb-3 md:mb-4">
            {member.title}
          </p>
          <div className="flex flex-row items-center justify-center gap-4 mb-3">
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary text-body transition-colors">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.271c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.271h-3v-4.604c0-1.098-.021-2.509-1.529-2.509-1.529 0-1.764 1.195-1.764 2.427v4.686h-3v-9h2.881v1.233h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v4.721z"/></svg>
            </a>
            <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary text-body transition-colors">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.017-2.252-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href={member.social.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium" className="hover:text-primary text-body transition-colors">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 1043.63 592.71"><g><path d="M588.67 296.14c0 163.57-131.93 296.14-294.33 296.14S0 459.71 0 296.14 131.93 0 294.34 0s294.33 132.57 294.33 296.14zM853.03 296.14c0 151.31-65.98 273.99-147.36 273.99-81.38 0-147.36-122.68-147.36-273.99S624.29 22.15 705.67 22.15c81.38 0 147.36 122.68 147.36 273.99zM1043.63 296.14c0 140.13-29.13 253.77-65.07 253.77-35.94 0-65.07-113.64-65.07-253.77s29.13-253.77 65.07-253.77c35.94 0 65.07 113.64 65.07 253.77z"/></g></svg>
            </a>
            <a href={member.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-primary text-body transition-colors">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
          <p className="text-muted text-center text-base">
            {member.bio}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-surface relative">
      <div className="relative z-10">
        <Banner />

        {/* News Announcement Strip */}
        <a href="#news" className="block bg-primary hover:bg-primary-dark text-white text-center py-2 px-4 text-sm font-medium transition-colors hover:opacity-90">
          <span>{siteContent.newsBanner.text} <span className="font-bold">{siteContent.newsBanner.highlight}</span> &rarr;</span>
        </a>

        {/* Hero Section — First real content */}
        <section className="relative py-10 md:py-16 px-2 md:px-6">
          <div className="max-w-5xl mx-auto bg-surface-elevated rounded-md shadow-lg p-6 md:p-10 border border-border-theme border-l-[3px] border-l-primary">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-sm font-mono font-semibold text-primary tracking-widest uppercase mb-3">{siteContent.valueProp.headline}</p>
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-display font-bold uppercase tracking-[1.5px] mb-4 md:mb-6 text-heading">
                  {siteContent.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-body mb-6 md:mb-8 leading-relaxed">
                  {siteContent.hero.subtitle}
                </p>
                <div className="flex gap-3 md:gap-4">
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-primary text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg text-base font-semibold transition-all hover:shadow-lg hover:scale-105">
                    {siteContent.hero.ctaPrimary}
                  </a>
                  <button className="border-2 border-border-theme hover:border-primary hover:bg-primary/10 text-heading px-5 py-2.5 md:px-6 md:py-3 rounded-lg text-base font-semibold transition-all hover:scale-105" onClick={() => { window.location.hash = '#services'; }}>
                    {siteContent.hero.ctaSecondary}
                  </button>
                </div>
              </div>
              <div className="flex justify-center md:justify-end md:pr-6 lg:pr-10">
                <img
                  src="/lovable-uploads/OfficeAstronaut.jpeg"
                  alt="Astronaut working at a desk in a modern office, symbolizing secure AI innovation"
                  loading="lazy"
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-md object-cover shadow-lg border-2 border-border-theme bg-surface-elevated animate-float"
                  style={{ objectPosition: 'center', boxShadow: '0 2px 24px 0 rgba(42,157,143,0.18)' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-16 px-2 md:px-6 bg-surface relative overflow-hidden">
          <BackgroundPattern variant="dots" opacity={0.03} className="text-primary" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold uppercase tracking-[1.5px] text-center mb-4 text-heading tracking-tight">
              {siteContent.services.title}
            </h2>
            <p className="text-center text-body mb-8 max-w-2xl mx-auto">{siteContent.services.subtitle}</p>
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
                  <li key={index} className="p-6 hover:shadow-2xl transition-all duration-300 rounded-md border border-border-theme border-l-[3px] border-l-primary flex flex-col items-center text-center bg-surface-card hover:-translate-y-1 group">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-heading">{service.title}</h3>
                    <ul className="text-body text-base list-disc list-inside mb-2">
                      {service.description.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
            <div className="text-center mt-8">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-primary text-white px-6 py-3 rounded-lg text-base font-semibold transition-all inline-block hover:shadow-lg hover:scale-105">{siteContent.services.ctaPrimary}</a>
            </div>
          </div>
        </section>

        {/* Litmus Methodology Section */}
        <section id="methodology" className="py-12 md:py-16 px-2 md:px-6 bg-surface-subtle">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold uppercase tracking-[1.5px] text-center mb-4 text-heading">
              {siteContent.litmus.title}
            </h2>
            <p className="text-center text-body mb-10 max-w-2xl mx-auto leading-relaxed">
              {siteContent.litmus.subtitle}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {siteContent.litmus.dimensions.map((dim, index) => (
                <div
                  key={index}
                  className="bg-surface-elevated rounded-md border border-border-theme border-l-[3px] border-l-primary p-5 hover:-translate-y-0.5 transition-transform"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-primary tracking-wider">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display font-bold text-heading uppercase tracking-wide text-sm">
                      {dim.name}
                    </h3>
                  </div>
                  <p className="text-body text-sm leading-relaxed">{dim.description}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted text-xs font-mono mt-8 max-w-xl mx-auto tracking-wide">
              {siteContent.litmus.footnote}
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Featured At Section */}
        <section className="py-8 md:py-10 px-2 md:px-6 bg-surface border-y border-border-theme">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-muted text-sm font-mono tracking-widest uppercase mb-6">{siteContent.featuredAt.title}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {siteContent.featuredAt.items.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-border-theme"
                  />
                  <span className="text-body font-medium text-sm md:text-base group-hover:text-primary transition-colors">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="about" className="py-12 md:py-16 px-2 md:px-6 bg-gradient-to-br from-primary to-primary-dark">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold uppercase tracking-[1.5px] text-center mb-4 text-white tracking-tight">
              {siteContent.team.title}
            </h2>
            <p className="text-center text-white/90 mb-10 max-w-2xl mx-auto">{siteContent.team.subtitle}</p>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
              <TeamMemberCard />
            </div>
            <div className="text-center mt-8">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-surface text-primary hover:bg-surface-subtle px-6 py-3 rounded-lg text-base font-semibold transition-all inline-block hover:shadow-lg hover:scale-105">{siteContent.team.cta}</a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 px-2 md:px-6 bg-secondary relative overflow-hidden">
          <BackgroundPattern variant="grid" opacity={0.05} className="text-white" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold uppercase tracking-[1.5px] text-center mb-4 text-white tracking-tight">
              {siteContent.whyChooseUs.title}
            </h2>
            <p className="text-center text-primary-light mb-10 max-w-2xl mx-auto">{siteContent.whyChooseUs.subtitle}</p>
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
                    <p className="text-primary-light/80">{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-primary text-white px-6 py-3 rounded-lg text-base font-semibold transition-all inline-block hover:shadow-lg hover:scale-105">{siteContent.whyChooseUs.cta}</a>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-12 md:py-16 px-2 md:px-6 bg-surface-subtle">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold uppercase tracking-[1.5px] text-center mb-4 text-heading tracking-tight">
              {siteContent.news.title}
            </h2>
            <p className="text-center text-body mb-8 max-w-2xl mx-auto">{siteContent.news.subtitle}</p>
            <div className="flex flex-col items-center gap-6">
              {siteContent.news.items.map((newsItem, index) => (
                <div key={index} className="w-full bg-surface-elevated rounded-lg shadow p-6 flex flex-col md:flex-row items-center gap-6 border border-border-theme">
                  <div className="flex-shrink-0">
                    <img src={newsItem.image} alt={`${newsItem.title} logo`} loading="lazy" className="w-20 h-20 rounded-full object-cover border border-border-theme" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-heading">{newsItem.title}</h3>
                    <p className="text-body mb-2">{newsItem.description}</p>
                    <ul className="text-muted mb-2 text-sm list-disc pl-5">
                      {newsItem.details.map((detail, detailIndex) => (
                        <li key={detailIndex}><span className="font-semibold text-body">{detail.label}:</span> {detail.value}</li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      {newsItem.links.about && (
                        <a href={newsItem.links.about} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-primary-light transition-colors">About Event</a>
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
        <section id="contact" className="py-12 md:py-16 px-2 md:px-6 bg-gradient-to-br from-secondary via-secondary-light to-primary">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold uppercase tracking-[1.5px] mb-6 text-white tracking-tight">
              {siteContent.contact.title}
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {siteContent.contact.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-primary text-white hover:bg-primary-dark px-6 py-3 rounded-lg text-lg font-bold transition-all inline-block shadow-lg hover:scale-105">
                {siteContent.contact.cta}
              </a>
              <a href={`mailto:${siteContent.contact.email}`} className="text-white/80 hover:text-white transition-colors text-sm font-mono">
                or email {siteContent.contact.email}
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-surface border-t border-border-theme text-heading py-8 md:py-10 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-heading mb-4 font-display uppercase tracking-[2px]">{siteContent.company.name}</h2>
              <p className="text-muted">
                {siteContent.footer.tagline}
              </p>
              <div className="mt-4 flex gap-6">
                {siteContent.footer.links.map((link, index) => (
                  <a key={index} href={link.href} className="text-muted hover:text-primary transition-colors">{link.text}</a>
                ))}
              </div>
            </div>
            <div className="md:text-right">
              <h3 className="text-lg font-semibold mb-4 font-display uppercase tracking-[1px]">Contact</h3>
              <p className="text-muted">{siteContent.company.email}</p>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-primary hover:underline font-semibold">Book a Call</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
