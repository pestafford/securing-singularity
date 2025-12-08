# Content Management Guide

## Easy Content Updates

This guide shows you how to update website content **without touching any code**. All content is centralized in one file for easy management.

---

## Quick Start - Update Content in 3 Steps

### Step 1: Open the Content File
Open this file in any text editor:
```
src/content/siteContent.ts
```

### Step 2: Find & Edit Your Content
Use the table below to find what you want to change, then edit the text.

### Step 3: Save & Rebuild
```bash
npm run build
```

That's it! Your changes are now in the `dist/` folder ready to deploy.

---

## Content Location Guide

| What to Update | Location in File | Example |
|----------------|------------------|---------|
| **Company name** | `company.name` | "Singularity Systems" |
| **Email address** | `company.email` | "contact@securingthesingularity.com" |
| **Hero headline** | `hero.title` | "Securing Your AI Future" |
| **Hero description** | `hero.subtitle` | "Expert cybersecurity..." |
| **Mission statement** | `mission.description` | "To help organizations..." |
| **Service offerings** | `services.items[]` | Add/edit services |
| **Statistics** | `stats.items[]` | "15+ Years Experience" |
| **Team member bio** | `team.members[0].bio` | Phil's bio text |
| **Social media links** | `team.members[0].social` | LinkedIn, GitHub, Medium |
| **Blog posts** | `blog.posts[]` | Add/remove blog posts |
| **News announcements** | `news.items[]` | Add/edit announcements |
| **Contact info** | `contact.email` | Email address |
| **Footer links** | `footer.links[]` | Navigation links |

---

## Common Updates

### 1. Change Company Email

**File:** `src/content/siteContent.ts`

Find:
```typescript
company: {
  email: "contact@securingthesingularity.com",
```

Change to your new email:
```typescript
company: {
  email: "newemail@yourcompany.com",
```

Also update in:
```typescript
contact: {
  email: "newemail@yourcompany.com",
```

### 2. Update Statistics

**File:** `src/content/siteContent.ts`

Find:
```typescript
stats: {
  items: [
    { number: "15+", label: "Years Experience" },
    { number: "100+", label: "Clients Served" },
```

Change the numbers:
```typescript
stats: {
  items: [
    { number: "20+", label: "Years Experience" },
    { number: "200+", label: "Clients Served" },
```

### 3. Add a New Blog Post

**File:** `src/content/siteContent.ts`

Find the `blog.posts` array and add a new entry:
```typescript
blog: {
  posts: [
    // Existing posts...
    {
      title: "Your New Blog Post Title",
      image: "https://link-to-image.com/image.jpg",
      link: "https://medium.com/@pe.stafford/your-new-post",
    },
  ],
```

### 4. Update Team Member Information

**File:** `src/content/siteContent.ts`

Find `team.members[0]` and edit:
```typescript
members: [
  {
    name: "Phil Stafford",
    title: "Founder & Principal Consultant",
    bio: "Update bio text here...",
    social: {
      linkedin: "http://www.linkedin.com/in/yourprofile",
      github: "https://github.com/yourusername",
      medium: "https://medium.com/@yourusername",
    },
  },
]
```

### 5. Add a New Service

**File:** `src/content/siteContent.ts`

Find `services.items` array and add:
```typescript
services: {
  items: [
    // Existing services...
    {
      title: "New Service Name",
      icon: "Shield", // Options: Lock, Shield, LineChart, etc.
      description: [
        "First benefit or feature",
        "Second benefit or feature",
        "Third benefit or feature",
      ],
    },
  ],
```

### 6. Update News/Announcements

**File:** `src/content/siteContent.ts`

Replace the entire `news.items` array with current news:
```typescript
news: {
  items: [
    {
      title: "Your News Title",
      image: "https://link-to-logo.png",
      description: "Description of the news...",
      details: [
        { label: "Date", value: "Your event date" },
        { label: "Location", value: "Event location" },
      ],
      links: {
        about: "https://link-to-more-info.com",
        register: "https://link-to-registration.com",
      },
    },
  ],
```

### 7. Change Button Text

**File:** `src/content/siteContent.ts`

Find any section's CTA text:
```typescript
services: {
  ctaPrimary: "Schedule Consultation",  // Change this
  ctaSecondary: "Meet the Team",        // Or this
```

---

## Images

### Update Profile Photo

1. Place your new image in: `/public/lovable-uploads/`
2. Update the path in `src/content/siteContent.ts`:

```typescript
team: {
  members: [
    {
      image: "/lovable-uploads/YourNewPhoto.jpg",
```

### Update Blog Post Images

Just change the URL in the blog post entry:
```typescript
{
  title: "Post Title",
  image: "https://new-image-url.com/image.jpg",
  link: "https://medium.com/@pe.stafford/post",
},
```

---

## Advanced: Using the Content in Code

If you need to reference content in a component (for developers):

```typescript
import { siteContent } from '../content/siteContent';

// Use anywhere in your component
<h1>{siteContent.hero.title}</h1>
<p>{siteContent.hero.subtitle}</p>
<a href={`mailto:${siteContent.company.email}`}>
  {siteContent.company.email}
</a>
```

---

## Available Icons

When adding services or features, you can use these icon names:
- `Shield` - Security/protection
- `Lock` - Privacy/access control
- `LineChart` - Analytics/metrics
- `Award` - Achievement/certification
- `AlertCircle` - Important notices
- `CheckCircle2` - Verification/success
- `BookOpen` - Learning/documentation
- `Star` - Ratings/highlights

---

## Color Customization

### Changing Theme Colors

**File:** `tailwind.config.ts`

Current colors:
```typescript
colors: {
  primary: {
    DEFAULT: '#1EAEDB',  // Main cyan
    dark: '#1795BD',     // Darker cyan
    light: '#4DC4E6',    // Lighter cyan
  },
  secondary: {
    DEFAULT: '#0A2540',  // Navy blue
    light: '#1E3A5F',
  },
  accent: {
    teal: '#14B8A6',
    purple: '#8B5CF6',
    orange: '#F97316',
  }
}
```

To change the primary color:
1. Pick your new color (use a color picker)
2. Replace the hex codes
3. Save and rebuild

**Example - Change to Green:**
```typescript
primary: {
  DEFAULT: '#10B981',  // Green
  dark: '#059669',
  light: '#34D399',
}
```

---

## Typography Customization

### Changing Fonts

**File:** `index.html`

Current fonts loaded:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@500;700;900&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

To use different fonts:
1. Go to [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Copy the new `<link>` tag
4. Replace in `index.html`
5. Update `tailwind.config.ts` font families

---

## Deployment

### After Making Changes

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Preview locally (optional):**
   ```bash
   npm run preview
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```

   GitHub Actions will automatically deploy your changes.

---

## Testing Your Changes

### Local Development Server

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:5173 in your browser

3. Make changes to `src/content/siteContent.ts`

4. Save the file - changes appear instantly (hot reload)

5. Check everything looks good

6. Build for production when ready

---

## Troubleshooting

### Changes Not Showing?

1. **Hard refresh your browser:** `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. **Clear browser cache**
3. **Check the file saved properly**
4. **Rebuild:** `npm run build`

### Build Errors?

1. **Check for syntax errors** - missing commas, quotes, brackets
2. **Validate URLs** - ensure all links are complete
3. **Check image paths** - ensure images exist at specified paths

### Common Mistakes

- ❌ Missing comma between items in arrays
- ❌ Unmatched quotes (`"` vs `'`)
- ❌ Missing closing brackets `}` or `]`
- ❌ Broken image URLs

**Example of correct syntax:**
```typescript
items: [
  { number: "15+", label: "Years" },  // ← comma here
  { number: "100+", label: "Clients" }, // ← comma here
  { number: "24/7", label: "Support" }, // ← comma here (optional on last)
],
```

---

## Getting Help

### Questions About Content Updates?

1. Check this guide first
2. Look at examples in `src/content/siteContent.ts`
3. Compare with working examples in the file
4. Test changes on local dev server first

### Need to Add New Sections?

While you can add new items to existing arrays (services, blog posts, etc.), adding entirely new sections requires code changes. Contact a developer for:
- New page sections
- New page layouts
- New interactive features
- Custom components

---

## Quick Reference

### File Locations
- **Content:** `src/content/siteContent.ts`
- **Colors:** `tailwind.config.ts`
- **Fonts:** `index.html`
- **Images:** `/public/lovable-uploads/`

### Common Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Content Structure
```
siteContent
├── company (name, email, tagline)
├── hero (title, subtitle, CTAs)
├── valueProp (headline, description)
├── mission (title, description, CTA)
├── services (title, subtitle, items, CTAs)
├── stats (title, subtitle, items)
├── team (title, members, social links)
├── whyChooseUs (title, items)
├── blog (title, posts, CTAs)
├── news (title, items)
├── contact (title, email, CTA)
└── footer (tagline, links)
```

---

**Last Updated:** December 8, 2025
**Need Help?** Email contact@securingthesingularity.com
