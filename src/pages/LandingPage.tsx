import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import BackgroundPattern from "../components/BackgroundPattern";
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
    <header className="flex justify-between items-center py-4 px-4 md:py-6 md:px-8 border-b border-border-theme">
      <div className="flex items-center gap-2">
        <a href="/" className="flex items-center gap-2 group">
          <img
            src="/lovable-uploads/LogoStylized.png"
            alt={`${siteContent.company.name} Logo`}
            className="block dark:hidden h-14 md:h-20 w-auto"
          />
          <img
            src="/lovable-uploads/LogoStylizedWhite.png"
            alt={`${siteContent.company.name} Logo`}
            className="hidden dark:block h-14 md:h-20 w-auto"
          />
          <h1 className="text-xl md:text-2xl font-display uppercase tracking-[2px] group-hover:underline">
            <span className="font-bold text-heading">SINGULARITY</span>{' '}
            <span className="font-light text-muted">SYSTEMS</span>
          </h1>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 md:gap-8">
        <a href="#services" className="forge-nav">Services</a>
        <a href="#about" className="forge-nav">About</a>
        <a href="#contact" className="forge-nav">Contact</a>
        <ThemeToggle />
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="forge-btn">Book a 30-min assessment</a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-1 md:hidden">
        <a
          href={siteContent.company.phoneHref}
          className="text-body hover:text-primary transition-colors p-2"
          aria-label={`Call ${siteContent.company.phone}`}
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="forge-btn forge-btn-sm whitespace-nowrap"
        >
          Book
        </a>
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
                className="forge-btn text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a 30-min assessment
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
      <div className="forge-card p-5 md:p-6 max-w-xs md:max-w-sm mx-auto">
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
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <Banner />

        {/* Hero Section — editorial, open on the textured background */}
        <section className="relative py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="forge-specline mb-10 md:mb-14">
              <span>AI Security Consultancy</span>
              <span>Architecture · Review · Hardening</span>
            </div>
            <div className="grid md:grid-cols-[1.55fr_0.7fr] gap-10 md:gap-14 items-center">
              <div>
                <p className="forge-eyebrow mb-6"><span className="dot">&#9670;</span> {siteContent.valueProp.headline}</p>
                <h1 className="font-display font-bold uppercase tracking-[-0.5px] leading-[0.95] text-heading text-4xl sm:text-5xl md:text-5xl lg:text-6xl mb-6">
                  Can you trust<br />your agents <span className="hl">in production?</span>
                </h1>
                <p className="text-lg md:text-xl text-body mb-8 leading-relaxed max-w-xl">
                  {siteContent.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 sm:items-center">
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="forge-btn">
                    {siteContent.hero.ctaPrimary}
                  </a>
                  <a href="#services" className="forge-link">
                    {siteContent.hero.ctaSecondary} &rarr;
                  </a>
                </div>
                <p className="text-muted font-mono text-xs tracking-wider mt-4 uppercase">
                  30 min &middot; no obligation
                </p>
              </div>
              <div className="md:pt-1">
                <div className="forge-plate p-3">
                  <span className="brk"></span>
                  <img
                    src="/lovable-uploads/OfficeAstronaut.jpeg"
                    alt="Astronaut working at a desk in a modern office, symbolizing secure AI innovation"
                    loading="lazy"
                    className="w-full aspect-square object-cover block"
                    style={{ filter: 'grayscale(0.7) contrast(1.05) saturate(0.8)' }}
                  />
                </div>
                <div className="forge-figcap">
                  <span className="l">Fig. 01 &mdash; The Autonomy Era</span>
                  <span>Secure by design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured At Section */}
        <section className="py-10 md:py-14 px-4 md:px-8 border-y border-border-theme">
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

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
          <BackgroundPattern variant="dots" opacity={0.03} className="text-primary" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="forge-sec-h">
              <h2 className="forge-h2">{siteContent.services.title}</h2>
              <span className="sl">01 &middot; Capabilities</span>
            </div>
            <p className="forge-sub">{siteContent.services.subtitle}</p>
            <ul className="grid md:grid-cols-3 gap-6 md:gap-8 list-none">
              {siteContent.services.items.map((service, index) => (
                <li key={index} className="p-6 hover:shadow-2xl transition-all duration-300 forge-card flex flex-col bg-surface-card hover:-translate-y-1 group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-bold text-primary tracking-wider">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display font-bold text-heading uppercase tracking-wide text-base">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="text-body text-base list-disc list-inside space-y-1">
                    {service.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="text-center mt-8">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="forge-btn">{siteContent.services.ctaPrimary}</a>
            </div>
          </div>
        </section>

        {/* Litmus Methodology Section */}
        <section id="methodology" className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="forge-sec-h">
              <h2 className="forge-h2">{siteContent.litmus.title}</h2>
              <span className="sl">02 &middot; Litmus</span>
            </div>
            <p className="forge-sub">
              {siteContent.litmus.subtitle}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {siteContent.litmus.dimensions.map((dim, index) => (
                <div
                  key={index}
                  className="bg-surface-elevated forge-card p-5 hover:-translate-y-0.5 transition-transform"
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

        {/* Team Section */}
        <section id="about" className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="forge-sec-h">
              <h2 className="forge-h2">{siteContent.team.title}</h2>
              <span className="sl">03 &middot; Leadership</span>
            </div>
            <p className="forge-sub">{siteContent.team.subtitle}</p>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
              <TeamMemberCard />
            </div>
            <div className="text-center mt-8">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="forge-btn">{siteContent.team.cta}</a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
          <BackgroundPattern variant="grid" opacity={0.04} className="text-primary" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="forge-sec-h">
              <h2 className="forge-h2">{siteContent.whyChooseUs.title}</h2>
              <span className="sl">04 &middot; Why Us</span>
            </div>
            <p className="forge-sub">{siteContent.whyChooseUs.subtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {siteContent.whyChooseUs.items.map((item, index) => (
                <div
                  key={index}
                  className="forge-card p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-primary tracking-wider">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display font-bold text-heading uppercase tracking-wide text-sm">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-body text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="forge-btn">{siteContent.whyChooseUs.cta}</a>
            </div>
          </div>
        </section>

        {/* Recent Work Section */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="forge-sec-h">
              <h2 className="forge-h2">{siteContent.recentWork.title}</h2>
              <span className="sl">05 &middot; Work</span>
            </div>
            <p className="forge-sub">{siteContent.recentWork.subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {siteContent.recentWork.items.map((item, index) => {
                const CardWrapper = item.link ? 'a' : 'div';
                const wrapperProps = item.link
                  ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
                  : {};
                return (
                  <CardWrapper
                    key={index}
                    {...wrapperProps}
                    className="bg-surface-card forge-card p-5 hover:-translate-y-0.5 transition-transform flex flex-col group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="font-mono text-xs font-bold tracking-wider uppercase"
                        style={{ color: item.type === 'Tool' ? 'var(--color-accent2)' : 'var(--color-accent)' }}
                      >
                        {item.type}
                      </span>
                      {item.date && (
                        <span className="font-mono text-xs text-muted tracking-wider">
                          · {item.date}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-heading uppercase tracking-wide text-base mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-body text-sm leading-relaxed flex-grow">{item.summary}</p>
                    {item.link && (
                      <span className="text-primary font-mono text-xs tracking-wider mt-3 group-hover:underline underline-offset-4">
                        Read &rarr;
                      </span>
                    )}
                  </CardWrapper>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <a href={siteContent.recentWork.ctaLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light font-mono text-sm tracking-wide underline-offset-4 hover:underline">
                {siteContent.recentWork.cta} &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="forge-sec-h">
              <h2 className="forge-h2">{siteContent.news.title}</h2>
              <span className="sl">06 &middot; Dispatches</span>
            </div>
            <p className="forge-sub">{siteContent.news.subtitle}</p>
            <div className="flex flex-col items-center gap-6">
              {siteContent.news.items.map((newsItem, index) => (
                <div key={index} className="forge-card w-full p-6 flex flex-col md:flex-row items-center gap-6">
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
        <section id="contact" className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="forge-sec-h">
              <h2 className="forge-h2">{siteContent.contact.title}</h2>
              <span className="sl">Book &middot; 30 min</span>
            </div>
            <p className="forge-sub text-lg" style={{ maxWidth: '60ch' }}>
              {siteContent.contact.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="forge-btn">
                {siteContent.contact.cta}
              </a>
              <a href={`mailto:${siteContent.contact.email}`} className="text-muted hover:text-primary transition-colors text-sm font-mono">
                or email {siteContent.contact.email}
              </a>
            </div>
            <p className="text-muted font-mono text-xs tracking-wider mt-3 uppercase">
              30 min &middot; no obligation
            </p>
            <div className="mt-4">
              <a href={siteContent.company.phoneHref} className="text-muted hover:text-primary transition-colors text-sm font-mono">
                or call {siteContent.company.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border-theme text-heading py-8 md:py-10 px-4 md:px-8">
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
              <p className="text-muted mt-1">
                <a href={siteContent.company.phoneHref} className="hover:text-primary transition-colors">
                  {siteContent.company.phone}
                </a>
              </p>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-primary hover:underline font-semibold">Book a Call</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
