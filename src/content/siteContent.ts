// Site Content Configuration
// Update this file to change website content without touching component code

export const siteContent = {
  // Company Information
  company: {
    name: "Singularity Systems",
    tagline: "Agent Security Architecture",
    email: "contact@securingthesingularity.com",
    phone: "(510) 214-3249",
    phoneHref: "tel:+15102143249",
    description: "Agent security architecture, review, and tooling — built by a practitioner who ships security tools.",
    bookingUrl: "https://calendly.com/phil-securingthesingularity/30min",
  },

  // Hero Section
  hero: {
    title: "Can you trust your agents in production?",
    subtitle: "Architecture, review, and hardening for autonomous AI — MCP, skills, tools, multi-agent systems. Led by the engineer behind ThinkTank and Credence.",
    ctaPrimary: "Book a 30-min assessment",
    ctaSecondary: "Learn More",
  },

  // Value Proposition Banner
  valueProp: {
    headline: "Agent Security Architecture",
    description: "We build agent security tools, so we understand the attack surface firsthand. Singularity Systems helps organizations deploy autonomous AI with confidence — architecture, review, and hardening across MCP, skills, tools, and multi-agent workflows.",
  },

  // News Banner
  newsBanner: {
    text: "Watch our latest talk:",
    highlight: "Simply Cyber Firesides — What You Need to Know About AI",
    link: "#news",
  },

  // Mission Section
  mission: {
    title: "Our Mission",
    description: "To help organizations deploy autonomous AI securely through hands-on architecture, purpose-built tooling, and practical strategy. Led by Phil Stafford, we combine deep technical expertise with real-world experience building agent security platforms.",
    cta: "Meet Our Founder",
  },

  // Services Section
  services: {
    title: "Our Services",
    subtitle: "Agent security architecture, review, and strategy — built by a practitioner",
    items: [
      {
        title: "Agent Security Architecture",
        icon: "Shield",
        description: [
          "Threat modeling for agentic pipelines",
          "Secure design for LLM and agent applications",
          "Agent deployment security review",
        ],
      },
      {
        title: "Multi-Agent & Tool Security",
        icon: "Brain",
        description: [
          "Security analysis for autonomous agents",
          "MCP, skill, and tool-use verification via Credence",
          "Agent trust frameworks",
        ],
      },
      {
        title: "Agent Security Strategy",
        icon: "LineChart",
        description: [
          "Agent risk assessments & governance",
          "Frameworks for safe agent adoption",
          "Security roadmaps for agent-forward orgs",
        ],
      },
    ],
    ctaPrimary: "See if we're a fit",
  },

  // Litmus Methodology Section
  litmus: {
    title: "What We Look At",
    subtitle: "When we assess an AI system, we don't just ask \"does it work.\" We ask whether you can trust it. These are the questions that guide our thinking.",
    dimensions: [
      {
        name: "Hallucination Resistance",
        description: "Does it make things up when it doesn't know the answer? Or does it admit uncertainty?",
      },
      {
        name: "Instruction Adherence",
        description: "Does it follow its rules under pressure — or can someone talk it out of its guardrails?",
      },
      {
        name: "Data Boundary Respect",
        description: "Will it leak things it shouldn't? System prompts, other users' data, information outside its scope?",
      },
      {
        name: "Adversarial Robustness",
        description: "Can someone hijack it on purpose — through prompt injection, jailbreaking, or social engineering?",
      },
      {
        name: "Output Consistency",
        description: "Does it give different answers to the same question depending on who's asking or when?",
      },
      {
        name: "Tool Authorization",
        description: "For agentic systems: does it stick to the tools it's allowed to use, or does it improvise?",
      },
      {
        name: "Transparency of Reasoning",
        description: "Can it explain how it got to its answer — and does it flag when it's not sure?",
      },
    ],
    footnote: "Our assessment approach draws on emerging standards including ISO 42001, AIUC-1, and SOC 2, and on peer-reviewed behavioral research.",
  },

  // Stats Section
  stats: {
    title: "By the Numbers",
    subtitle: "Real tools, real analysis, real results",
    items: [
      { number: "15+", label: "Years in IT & Security" },
      { number: "60+", label: "Repositories Analyzed" },
      { number: "2", label: "Security Platforms Shipped" },
      { number: "14+", label: "Vulnerabilities Discovered" },
    ],
  },

  // Team Section
  team: {
    title: "Meet Our Leadership",
    subtitle: "Agent security architecture backed by 15+ years in IT and security",
    cta: "Talk to Phil",
    members: [
      {
        name: "Phil Stafford",
        title: "Founder & Principal Consultant",
        image: "/lovable-uploads/BlueShirt.PNG",
        bio: "Phil Stafford is an agent security architect with over 15 years of experience in IT and security. He builds tools like ThinkTank — a multi-agent system for automated security analysis of AI repositories — and Credence, a trust and verification registry for MCP, skills, and other agent tooling. Phil combines hands-on engineering with strategic consulting to help organizations deploy autonomous AI securely.",
        social: {
          linkedin: "http://www.linkedin.com/in/phillipstafford",
          github: "https://github.com/pestafford",
          medium: "https://medium.com/@pe.stafford",
          youtube: "https://www.youtube.com/@SecuringTheSingularity/",
        },
      },
    ],
  },

  // Why Choose Us Section
  whyChooseUs: {
    title: "Why Choose Us",
    subtitle: "Agent security expertise backed by real tools and real results",
    items: [
      {
        title: "Builder, Not Consultant",
        icon: "Award",
        description: "Ships security tooling. ThinkTank and Credence are real products, not slide decks.",
      },
      {
        title: "Agent-Focused",
        icon: "AlertCircle",
        description: "Specialized on MCP, skills, tool-use, multi-agent orchestration — not a generalist.",
      },
      {
        title: "Research-Driven",
        icon: "BookOpen",
        description: "Speaker at MLOps Community, Simply Cyber, CyberLab Con with active publishing.",
      },
      {
        title: "Practical Focus",
        icon: "CheckCircle2",
        description: "Real vulnerabilities found, real tools deployed — not theoretical frameworks.",
      },
    ],
    cta: "Book a 30-min call",
  },

  // Featured At Section
  featuredAt: {
    title: "Featured At",
    items: [
      {
        name: "Simply Cyber",
        image: "https://static.wixstatic.com/media/6108bc_c901a4d1efdf4dae8343634f4c157600~mv2.png/v1/crop/x_0,y_543,w_2000,h_913/fill/w_143,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2005SubsSCLogo%20.png",
        link: "https://www.youtube.com/live/YFbGLA6a3NM",
      },
      {
        name: "MLOps Community",
        image: "https://unita.co/wp-content/uploads/2022/06/mlops-community-logo.jpg",
        link: "https://home.mlops.community/home/videos/when-ai-agents-argue-structured-dissent-patterns-for-production-reliability-phil-stafford-2025-11-27",
      },
      {
        name: "CyberLab Con 2025",
        image: "https://static.wixstatic.com/media/91d0ba_616a18678ec84102a18c1b25ef81dcc4~mv2.png/v1/fill/w_120,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cyber%20Lab%20Con%20idea%203%20(1).png",
        link: "https://www.cyberspeaklabs.com/cyberlab-con-2025-about",
      },
    ],
  },

  // Recent Work Section
  recentWork: {
    title: "Recent Work",
    subtitle: "Tools shipped, research published — real artifacts, not slide decks",
    items: [
      {
        type: "Tool",
        title: "ThinkTank",
        summary: "Multi-agent security analysis platform. Five-agent deliberation (believer, skeptic, neutral + two) produces structured dissent instead of consensus — surfaces risks single-agent reviewers miss.",
        link: null,
      },
      {
        type: "Tool",
        title: "Credence",
        summary: "Trust and verification registry for MCP servers, skills, and other agent tooling. Pre-action trust assessment — answers 'should this entity be trusted?' before the agent acts.",
        link: "https://credence.securingthesingularity.com",
      },
      {
        type: "Article",
        title: "The Agentic AI Polka",
        summary: "Field notes from a security expo — cutting through AI security marketing to what's genuinely shipping vs. slideware.",
        date: "April 2026",
        link: "https://medium.com/@pe.stafford/the-agentic-ai-polka-8bcda6eca3c4",
      },
      {
        type: "Article",
        title: "Oura Ring MCP Supply Chain Attack",
        summary: "A cloned Oura MCP server poisoned the supply chain — no technical exploit, just missing provenance. The verification gap in MCP, and how to close it.",
        date: "Feb 2026",
        link: "https://medium.com/@pe.stafford/someone-cloned-an-oura-ring-mcp-server-and-poisoned-the-supply-chain-we-can-fix-this-931acfaac8e3",
      },
      {
        type: "Article",
        title: "How to Steal an AI Without Breaking In",
        summary: "How foreign labs replicated Claude-level capability through legitimate API access — and why your API rate limits aren't a security control.",
        date: "Feb 2026",
        link: "https://medium.com/@pe.stafford/how-to-steal-an-ai-without-breaking-in-ca0d9d951705",
      },
      {
        type: "Article",
        title: "Poisoned Pipelines",
        summary: "The AI supply chain attack that doesn't crash anything — legacy dependencies in MCP tools carrying risk that modern scanners don't flag.",
        date: "Jan 2026",
        link: "https://medium.com/@pe.stafford/poisoned-pipelines-the-ai-supply-chain-attack-that-doesnt-crash-anything-93d4a665239e",
      },
    ],
    cta: "Read more on Medium",
    ctaLink: "https://medium.com/@pe.stafford",
  },

  // News Section
  news: {
    title: "News & Announcements",
    subtitle: "Past speaking engagements and industry events",
    items: [
      {
        title: "Simply Cyber Firesides: What You Need to Know About AI",
        image: "https://static.wixstatic.com/media/6108bc_c901a4d1efdf4dae8343634f4c157600~mv2.png/v1/crop/x_0,y_543,w_2000,h_913/fill/w_143,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2005SubsSCLogo%20.png",
        description: "Phil Stafford joined host Gerald Auger, Ph.D. on Simply Cyber Firesides to break down what cybersecurity practitioners actually need to understand about AI — from validation frameworks to multi-agent systems to adopting AI securely and effectively.",
        details: [
          { label: "Date", value: "April 16, 2026" },
          { label: "Format", value: "LinkedIn Live / YouTube Live" },
          { label: "Host", value: "Gerald Auger, Ph.D. — Simply Cyber" },
        ],
        links: {
          recording: "https://www.youtube.com/live/YFbGLA6a3NM",
        },
      },
      {
        title: "MLOps Conference: Agents in Production",
        image: "https://unita.co/wp-content/uploads/2022/06/mlops-community-logo.jpg",
        description: "Phil Stafford spoke at the MLOps Conference on November 18, 2025, presenting 'When AI Agents Argue: Structured Dissent Patterns for Production Reliability' — covering security implications of deploying autonomous AI agents in real-world applications.",
        details: [
          { label: "Date", value: "November 18, 2025" },
          { label: "Format", value: "Online (Zoom livestream)" },
        ],
        links: {
          recording: "https://home.mlops.community/home/videos/when-ai-agents-argue-structured-dissent-patterns-for-production-reliability-phil-stafford-2025-11-27",
        },
      },
      {
        title: "CyberLab Con 2025",
        image: "https://static.wixstatic.com/media/91d0ba_616a18678ec84102a18c1b25ef81dcc4~mv2.png/v1/fill/w_120,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cyber%20Lab%20Con%20idea%203%20(1).png",
        description: "Phil Stafford spoke at CyberLab Con 2025, a free online conference hosted by CyberSpeak Labs in partnership with the Missouri Cyber Center of Excellence (MCCOE).",
        details: [
          { label: "Date", value: "July 17, 2025" },
          { label: "Format", value: "Online (YouTube livestream)" },
        ],
        links: {
          about: "https://www.cyberspeaklabs.com/cyberlab-con-2025-about",
        },
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Ready to Secure Your Agents?",
    subtitle: "Book a 30-minute assessment to discuss your agent security needs — from architecture review to deployment strategy.",
    cta: "Book a 30-min assessment",
    email: "contact@securingthesingularity.com",
  },

  // Footer
  footer: {
    tagline: "Agentic problems require agentic solutions.",
    links: [
      { text: "Services", href: "#services" },
      { text: "About", href: "#about" },
      { text: "Contact", href: "#contact" },
    ],
  },
};

export type SiteContent = typeof siteContent;
