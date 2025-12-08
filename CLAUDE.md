# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript marketing/landing page for Singularity Systems, a cybersecurity consulting firm specializing in AI security, GRC solutions, and fractional CISO services. The site is a single-page application built with Vite and styled with Tailwind CSS.

## Build and Development Commands

```bash
# Start development server
npm run dev

# Build for production (TypeScript check + Vite build)
npm run build

# Preview production build locally
npm run preview
```

## Architecture

### Single-Page Application Structure

This is a minimal SPA with all content in one React component:
- Entry point: `src/main.tsx` renders `<LandingPage />` into `#root`
- All UI logic: `src/pages/LandingPage.tsx` (single 369-line component)
- No routing, no separate components directory - everything is inline

### Styling Approach

- **Tailwind CSS** with custom Orbitron font for headings
- Path alias `@/*` maps to `./src/*` (configured in both `vite.config.ts` and `tsconfig.json`)
- Tailwind config in `tailwind.config.ts` includes custom `fontFamily.orbitron`
- Base styles in `src/index.css` import Tailwind directives

### Key Design Patterns

1. **Inline Components**: All components (`Banner`, `TeamMemberCard`, `TestimonialCard`, `CaseStudyCard`) are defined inside `LandingPage` function
2. **Static Content**: No external data fetching - all content is hardcoded
3. **Section-Based Layout**: Uses semantic `<section>` elements with `id` attributes for anchor navigation
4. **Backdrop Blur Cards**: Content sections use `bg-white/80 backdrop-blur-md` for semi-transparent overlays over background image

### Static Assets

- Deployed to `dist/` directory (excluded from git via `.gitignore`)
- Assets reference `/lovable-uploads/*` for images
- Custom favicon at `/fav-singularity.svg`
- Background image: `/lovable-uploads/Singularity Poster.png`

## Important Constraints

### DO NOT EDIT `index.html`

The `<script>` tag and comment at lines 27-28 in `index.html` are critical:
```html
<!-- IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT! -->
<script type="module" src="/src/main.tsx"></script>
```
This must remain unchanged for the build process.

### Base Path Configuration

`vite.config.ts` sets `base: './'` for relative path deployment (likely for GitHub Pages or similar static hosting).

### TypeScript Configuration

- `strict: true` with relaxed `noUnusedLocals` and `noUnusedParameters` (both set to `false`)
- Target: ES2020
- Module resolution: bundler mode (no Node.js)

## Content Structure

The landing page includes these sections (in order):
1. Banner (header with logo and navigation)
2. Value Proposition banner
3. News Banner (CyberLab Con 2025 announcement)
4. Mission section
5. Hero section with Office Astronaut image
6. Services (Fractional CISO, GRC Solutions, AI Security)
7. Team/Leadership (Phil Stafford profile)
8. Why Choose Us (4 value props)
9. Blog Preview (3 Medium articles)
10. News & Announcements (CyberLab Con 2025 details)
11. Contact section
12. Footer

## External Links

- Medium blog: `http://medium.com/@pe.stafford/`
- LinkedIn: `http://www.linkedin.com/in/phillipstafford`
- GitHub: `https://github.com/pestafford`
- Contact email: `contact@securingthesingularity.com`
- CyberLab Con: `https://www.cyberspeaklabs.com/cyberlab-con-2025-about`
