# Singularity Systems Website

Modern, responsive website for cybersecurity consulting services with a focus on AI security.

## 🚀 Quick Start

### Update Content (Non-Developers)
1. Open `src/content/siteContent.ts`
2. Edit the text you want to change
3. Run `npm run build`
4. Push to GitHub

**See [QUICK_UPDATE_GUIDE.md](QUICK_UPDATE_GUIDE.md) for common tasks**
**See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for detailed instructions**

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

## 📁 Project Structure

```
securing-singularity/
├── public/
│   ├── lovable-uploads/     # Images (add your images here)
│   └── fav-singularity.svg  # Favicon
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AnimatedSection.tsx
│   │   ├── BackgroundPattern.tsx
│   │   └── StatsSection.tsx
│   ├── content/
│   │   └── siteContent.ts   # ⭐ UPDATE THIS FOR CONTENT CHANGES
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── pages/
│   │   └── LandingPage.tsx  # Main page component
│   ├── index.css            # Global styles & animations
│   └── main.tsx             # App entry point
├── tailwind.config.ts       # Design system (colors, fonts)
├── index.html               # HTML template
├── CONTENT_GUIDE.md         # 📖 How to update content
├── QUICK_UPDATE_GUIDE.md    # 📖 Quick reference
└── DESIGN_UPDATES.md        # 📖 Technical design docs
```

## 🎨 Design System

### Colors
- **Primary Cyan**: `#1EAEDB` - Brand color, CTAs, links
- **Secondary Navy**: `#0A2540` - Headers, dark sections
- **Accent Teal**: `#14B8A6` - Success, highlights
- **Accent Purple**: `#8B5CF6` - Special sections
- **Accent Orange**: `#F97316` - Urgency, announcements

### Typography
- **Orbitron** - Hero headings, brand
- **Space Grotesk** - Section headings
- **Inter** - Body text

### Sections
Each section has a distinct visual identity:
- Hero: Dark background
- Mission: Light cyan
- Services: White with patterns
- Stats: Gradient background
- Team: Primary gradient
- Why Choose Us: Navy
- Blog: White with gradient cards
- News: Orange accent
- Contact: Purple gradient

## 📝 Content Management

### Easy Updates

**All website content is in ONE file:**
```
src/content/siteContent.ts
```

**Common updates:**
- Email address → Search and replace
- Statistics → Edit `stats.items` array
- Blog posts → Add to `blog.posts` array
- Team bio → Edit `team.members[0].bio`
- Services → Edit `services.items` array
- News → Replace `news.items[0]`

**See guides:**
- [Quick Update Guide](QUICK_UPDATE_GUIDE.md) - 5-minute tasks
- [Content Guide](CONTENT_GUIDE.md) - Comprehensive documentation

### Adding Images

1. Place image in `/public/lovable-uploads/`
2. Reference as `/lovable-uploads/your-image.jpg`
3. Or use external URLs (Medium images, etc.)

## 🛠️ Tech Stack

- **Framework**: React 18.2 + TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React
- **Animations**: CSS keyframes + Intersection Observer
- **Deployment**: GitHub Pages

## 🎯 Features

✅ Fully responsive design
✅ Smooth scroll animations
✅ Background patterns
✅ Gradient effects
✅ Mobile-optimized
✅ Fast loading (~61 kB gzipped)
✅ Accessible (WCAG compliant)
✅ SEO-optimized
✅ GitHub Pages compatible

## 🚢 Deployment

### Automatic Deployment (GitHub Pages)

1. Make your changes
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. GitHub Actions automatically builds and deploys

### Manual Build

```bash
npm run build    # Creates dist/ folder
```

The `dist/` folder contains your production-ready website.

## 📚 Documentation

- **[CONTENT_GUIDE.md](CONTENT_GUIDE.md)** - How to update content
- **[QUICK_UPDATE_GUIDE.md](QUICK_UPDATE_GUIDE.md)** - Quick reference
- **[DESIGN_UPDATES.md](DESIGN_UPDATES.md)** - Technical design documentation

## 🎓 For Non-Developers

### To Update Text on the Website

1. **Open the content file**
   - File: `src/content/siteContent.ts`
   - Use any text editor (VS Code, Notepad++, etc.)

2. **Find what you want to change**
   - Use Ctrl+F (Windows) or Cmd+F (Mac) to search
   - Example: Search for "15+" to find statistics

3. **Edit the text**
   - Change text between quotes: `"old text"` → `"new text"`
   - Be careful with commas and brackets

4. **Save the file**

5. **Build and deploy**
   ```bash
   npm run build
   git add .
   git commit -m "Update content"
   git push
   ```

### Common Tasks

- **Change email**: Search for `contact@securingthesingularity.com` and replace
- **Update stats**: Find `stats.items` and change the numbers
- **Add blog post**: Copy an existing blog post entry and modify it
- **Update bio**: Find `team.members[0].bio` and edit the text

**See [QUICK_UPDATE_GUIDE.md](QUICK_UPDATE_GUIDE.md) for step-by-step instructions**

## 🔧 For Developers

### Project Setup
```bash
git clone <repo-url>
cd securing-singularity
npm install
npm run dev
```

### Key Files
- `src/content/siteContent.ts` - Centralized content
- `src/pages/LandingPage.tsx` - Main page component
- `tailwind.config.ts` - Design tokens
- `src/index.css` - Custom animations

### Adding New Features
1. Create component in `src/components/`
2. Add to `LandingPage.tsx`
3. Update content schema in `siteContent.ts` if needed

### Code Quality
- TypeScript for type safety
- Component-based architecture
- Centralized content management
- Responsive-first design
- Performance optimized

## 📊 Performance

- **Bundle Size**: ~207 kB (~61 kB gzipped)
- **Build Time**: ~10 seconds
- **Lighthouse Scores**:
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 95+

## 🐛 Troubleshooting

### Changes not showing?
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Rebuild: `npm run build`

### Build errors?
1. Check for missing commas in `siteContent.ts`
2. Ensure all quotes match (`"` or `'`)
3. Verify image paths exist

### Dev server not starting?
```bash
npm install        # Reinstall dependencies
npm run dev        # Try again
```

## 📞 Support

- **Content Updates**: See [CONTENT_GUIDE.md](CONTENT_GUIDE.md)
- **Quick Tasks**: See [QUICK_UPDATE_GUIDE.md](QUICK_UPDATE_GUIDE.md)
- **Technical Issues**: Check documentation or contact a developer

## 📄 License

Private - Singularity Systems

---

**Last Updated**: December 8, 2025
**Version**: 2.0 (Visual Design Modernization Complete)
