# Quick Update Guide - Common Tasks

## 5-Minute Updates

### Update Email Address
**File:** `src/content/siteContent.ts`

Search for: `contact@securingthesingularity.com`
Replace all instances with your new email.

---

### Update Statistics
**File:** `src/content/siteContent.ts`
**Line:** ~88-93

```typescript
stats: {
  items: [
    { number: "15+", label: "Years Experience" },    // ← Change these
    { number: "100+", label: "Clients Served" },     // ← Change these
    { number: "24/7", label: "Support Available" },  // ← Change these
    { number: "100%", label: "Client Satisfaction" },// ← Change these
  ],
}
```

---

### Add Blog Post
**File:** `src/content/siteContent.ts`
**Line:** ~147-164

Add to the `blog.posts` array:
```typescript
{
  title: "Your New Post Title",
  image: "https://your-image-url.jpg",
  link: "https://medium.com/@pe.stafford/your-post",
},
```

---

### Update Bio
**File:** `src/content/siteContent.ts`
**Line:** ~104-108

```typescript
bio: "Phil Stafford is a cybersecurity expert with over 15 years..."
```
Just replace the text between the quotes.

---

### Change Social Media Links
**File:** `src/content/siteContent.ts`
**Line:** ~109-113

```typescript
social: {
  linkedin: "http://www.linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  medium: "https://medium.com/@yourusername",
},
```

---

### Update News/Announcements
**File:** `src/content/siteContent.ts`
**Line:** ~181-196

Replace the entire news item:
```typescript
{
  title: "Your Announcement Title",
  image: "https://event-logo.png",
  description: "Description here...",
  details: [
    { label: "Date", value: "Event date" },
    { label: "Location", value: "Event location" },
  ],
  links: {
    about: "https://more-info-link.com",
    register: "https://registration-link.com",
  },
},
```

---

## After Making Changes

### Build & Deploy

```bash
# 1. Build for production
npm run build

# 2. Test locally (optional)
npm run preview

# 3. Commit and push
git add .
git commit -m "Update content"
git push
```

---

## File Structure Reference

```
securing-singularity/
├── src/
│   └── content/
│       └── siteContent.ts   ← UPDATE THIS FILE
├── public/
│   └── lovable-uploads/     ← ADD IMAGES HERE
├── CONTENT_GUIDE.md         ← FULL DOCUMENTATION
└── QUICK_UPDATE_GUIDE.md    ← THIS FILE
```

---

## Most Common Updates

| What | Where | Line # |
|------|-------|--------|
| Email | `siteContent.ts` | 7, 210 |
| Phone | Add to `company` object | ~5-10 |
| Stats | `stats.items` | ~88-93 |
| Services | `services.items` | ~57-81 |
| Blog Posts | `blog.posts` | ~147-164 |
| News | `news.items` | ~181-196 |
| Team Bio | `team.members[0].bio` | ~104-108 |
| Social Links | `team.members[0].social` | ~109-113 |

---

## Colors Quick Reference

**File:** `tailwind.config.ts`

Current theme:
- Primary: `#1EAEDB` (Cyan)
- Secondary: `#0A2540` (Navy)
- Accent Teal: `#14B8A6`
- Accent Purple: `#8B5CF6`
- Accent Orange: `#F97316`

---

## Need More Help?

See `CONTENT_GUIDE.md` for:
- Detailed explanations
- More examples
- Troubleshooting tips
- Advanced customization

---

**Pro Tip:** Always test changes locally with `npm run dev` before building for production!
