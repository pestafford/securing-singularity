// Site Content Configuration
// Update this file to change website content without touching component code

export const siteContent = {
  // Company Information
  company: {
    name: "Singularity Systems",
    tagline: "AI Security Architecture & Consulting",
    email: "contact@securingthesingularity.com",
    description: "AI security architecture, tooling, and strategy — built by practitioners who build the tools.",
  },

  // Hero Section
  hero: {
    title: "AI Security Architecture & Consulting",
    subtitle: "We design secure AI systems, build security tooling, and help organizations deploy AI safely — grounded in hands-on experience building platforms like ThinkTank and Credence.",
    ctaPrimary: "Schedule Consultation",
    ctaSecondary: "Learn More",
  },

  // Value Proposition Banner
  valueProp: {
    headline: "Securing AI Systems From the Inside Out",
    description: "We build AI security tools, so we understand the attack surface firsthand. Singularity Systems helps organizations adopt AI with confidence through architecture, tooling, and strategy.",
  },

  // News Banner
  newsBanner: {
    text: "See our latest announcement:",
    highlight: "MLOps Conference: Agents in Production",
    link: "#news",
  },

  // Mission Section
  mission: {
    title: "Our Mission",
    description: "To help organizations adopt AI securely through hands-on architecture, purpose-built tooling, and practical strategy. Led by Phil Stafford, we combine deep technical expertise with real-world experience building AI security platforms.",
    cta: "Meet Our Founder",
  },

  // Services Section
  services: {
    title: "Our Services",
    subtitle: "AI security architecture, tooling, and strategy — built by practitioners",
    items: [
      {
        title: "AI Security Architecture",
        icon: "Shield",
        description: [
          "Threat modeling for AI/ML pipelines",
          "Secure design for LLM applications",
          "AI deployment security review",
        ],
      },
      {
        title: "AI Agent & MCP Security",
        icon: "Brain",
        description: [
          "Security analysis for autonomous agents",
          "MCP server verification & trust scoring",
          "Agent trust frameworks",
        ],
      },
      {
        title: "AI Security Strategy",
        icon: "LineChart",
        description: [
          "AI risk assessments & governance",
          "Frameworks for safe AI adoption",
          "Security roadmaps for AI-forward orgs",
        ],
      },
    ],
    ctaPrimary: "Schedule Consultation",
    ctaSecondary: "Meet the Team",
  },

  // Stats Section
  stats: {
    title: "Built and Proven in Production",
    subtitle: "Real tools, real analysis, real results",
    items: [
      { number: "15+", label: "Years in Cybersecurity" },
      { number: "60+", label: "Repositories Analyzed" },
      { number: "26", label: "MCP Servers Assessed" },
      { number: "14+", label: "Vulnerabilities Discovered" },
    ],
  },

  // Team Section
  team: {
    title: "Meet Our Leadership",
    subtitle: "AI security architecture backed by 15+ years in cybersecurity",
    cta: "Contact Us",
    members: [
      {
        name: "Phil Stafford",
        title: "Founder & Principal Consultant",
        image: "/lovable-uploads/BlueShirt.PNG",
        bio: "Phil Stafford is an AI security architect with over 15 years of cybersecurity experience. He builds tools like ThinkTank — a multi-agent system for automated security analysis of AI repositories — and Credence, a trust and verification registry for MCP servers. Phil combines hands-on engineering with strategic consulting to help organizations deploy AI securely.",
        social: {
          linkedin: "http://www.linkedin.com/in/phillipstafford",
          github: "https://github.com/pestafford",
          medium: "https://medium.com/@pe.stafford",
        },
      },
    ],
  },

  // Why Choose Us Section
  whyChooseUs: {
    title: "Why Choose Us",
    subtitle: "AI security expertise backed by real tools and real results",
    items: [
      {
        title: "Hands-On Builder",
        icon: "Award",
        description: "Built ThinkTank (multi-agent security analysis) and Credence (MCP server security registry)",
      },
      {
        title: "Deep AI Expertise",
        icon: "AlertCircle",
        description: "Built multi-agent analysis systems; understands AI attack surfaces from the inside",
      },
      {
        title: "Research-Driven",
        icon: "BookOpen",
        description: "Conference speaker (MLOps, CyberLab Con) with active thought leadership",
      },
      {
        title: "Practical Focus",
        icon: "CheckCircle2",
        description: "Real vulnerabilities found, real tools deployed — not theoretical frameworks",
      },
    ],
    cta: "Get Started",
  },

  // Blog Section
  blog: {
    title: "Latest Insights",
    subtitle: "Thought leadership on AI, cybersecurity, and digital transformation",
    posts: [
      {
        title: "You Didn't Sell Out — You Bought In",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*h5ThH_7ZbpKp8C-tIJ7W2Q.jpeg",
        link: "https://medium.com/@pe.stafford/you-didnt-sell-out-you-showed-up-f0bdd7b83132",
      },
      {
        title: "You're Not Scared of AI, You're Scared of Losing Yourself",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*vRE7IyeQeqQXFlm0rO2U8Q.jpeg",
        link: "https://medium.com/@pe.stafford/youre-not-scared-of-ai-youre-scared-of-losing-yourself-abcdef123456",
      },
      {
        title: "This Isn't a Story About Failure — It's About Staying in the Fight",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*yHJgArT6XwaZROu-y8P74w.jpeg",
        link: "https://medium.com/@pe.stafford/this-isnt-a-story-about-failure-its-about-staying-in-the-fight-9876543210ba",
      },
    ],
    ctaPrimary: "View All Posts",
    ctaPrimaryLink: "http://medium.com/@pe.stafford/",
    ctaSecondary: "Explore Services",
  },

  // News Section
  news: {
    title: "News & Announcements",
    subtitle: "Stay updated on our latest activities and industry events",
    items: [
      {
        title: "MLOps Conference: Agents in Production",
        image: "https://unita.co/wp-content/uploads/2022/06/mlops-community-logo.jpg",
        description: "Phil Stafford will be speaking at the MLOps Conference on November 18, 2025, discussing 'Agents in Production' and the security implications of deploying autonomous AI agents in real-world applications.",
        details: [
          { label: "Date", value: "November 18, 2025, 10:50 AM PST" },
          { label: "Location", value: "Online (Zoom livestream)" },
          { label: "Admission", value: "Free with RSVP" },
        ],
        links: {
          recording: "https://home.mlops.community/home/videos/when-ai-agents-argue-structured-dissent-patterns-for-production-reliability-phil-stafford-2025-11-27",
        },
      },
      {
        title: "CyberLab Con 2025",
        image: "https://static.wixstatic.com/media/91d0ba_616a18678ec84102a18c1b25ef81dcc4~mv2.png/v1/fill/w_120,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cyber%20Lab%20Con%20idea%203%20(1).png",
        description: "Phil Stafford will be speaking at CyberLab Con 2025, a free online conference hosted by CyberSpeak Labs in partnership with the Missouri Cyber Center of Excellence (MCCOE).",
        details: [
          { label: "Date", value: "July 17, 2025, 8:00 AM – 5:00 PM CDT" },
          { label: "Location", value: "Online (YouTube livestream)" },
          { label: "Admission", value: "Free with RSVP" },
        ],
        links: {
          about: "https://www.cyberspeaklabs.com/cyberlab-con-2025-about",
          register: "https://www.cyberspeaklabs.com/event-details/cyberlab-con-2025",
        },
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Ready to Secure Your AI Systems?",
    subtitle: "Let's discuss how we can help you deploy AI securely — from architecture to strategy.",
    cta: "Contact Us Today",
    email: "contact@securingthesingularity.com",
  },

  // Footer
  footer: {
    tagline: "AI security architecture, tooling, and strategy — built by practitioners.",
    links: [
      { text: "Services", href: "#services" },
      { text: "About", href: "#about" },
      { text: "Contact", href: "#contact" },
      { text: "Mission", href: "#mission" },
    ],
  },
};

export type SiteContent = typeof siteContent;
