# Siddhant Gedekar - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and shadcn/ui components.
## https://sidportfolio-44ww.onrender.com/

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 File Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Landing section with intro
│   │   ├── About.jsx         # About me section
│   │   ├── Skills.jsx        # Technical skills grid
│   │   ├── Projects.jsx      # Project showcase
│   │   ├── Experience.jsx    # Work experience timeline
│   │   ├── Contact.jsx       # Contact information
│   │   └── Footer.jsx        # Footer with navigation
│   ├── App.jsx               # Main app component
│   ├── index.css             # Tailwind + custom styles
│   └── main.jsx              # Entry point
├── public/
│   └── Siddhant_Gedekar_Resume.pdf  # Your resume (add this!)
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## ✅ Setup Checklist

1. **Update Project Links** in `src/components/Projects.jsx`:
   - Replace GitHub URLs with your actual repo links
   - Update live demo URLs with your deployed app links
   - Remove projects you don't want to showcase

2. **Add Your Resume**:
   - Place `Siddhant_Gedekar_Resume.pdf` in the `public/` folder
   - Or update the path in Hero.jsx and Contact.jsx

3. **Update Social Links**:
   - LinkedIn URL in Hero.jsx
   - GitHub profile link (already set to github.com/siddhantgedekar)

4. **Customize Colors** (optional):
   - Edit `tailwind.config.js` to change the color scheme
   - Modify CSS variables in `src/index.css`

## 🎨 Customization

### Change Color Scheme
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary: 222.2 47.4% 11.2%;  /* Main brand color */
  --secondary: 210 40% 96.1%;    /* Accent color */
  /* ... other colors */
}
```

### Add More Projects
Edit `src/components/Projects.jsx` and add to the projects array:
```javascript
{
  title: "Your Project Name",
  description: "What it does",
  tech: ["React", "Node.js"],
  highlights: ["Feature 1", "Feature 2"],
  github: "your-github-link",
  live: "your-live-demo-link"
}
```

## 🚀 Deployment

### Deploy to Netlify (Recommended)
```bash
# Build the project
npm run build

# Deploy dist/ folder to Netlify
# Or connect your GitHub repo for auto-deployment
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 Important Notes

- **Resume Download**: Make sure to add your PDF resume to `public/` folder
- **GitHub Links**: Update all placeholder GitHub URLs in Projects.jsx
- **Live Demos**: Update or remove live demo links if apps aren't deployed yet
- **LinkedIn**: Add your LinkedIn profile URL in Hero.jsx

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons

## 📱 Responsive Design

This portfolio is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🎯 Features

- ✅ Smooth scrolling navigation
- ✅ Responsive design
- ✅ Project showcase with live links
- ✅ Downloadable resume
- ✅ Contact information
- ✅ Professional color scheme
- ✅ Fast loading with Vite

---

Built with ❤️ by Siddhant Gedekar


## Progress Update

### Job Hunting
- Day ?
 - 5 Jobs applied + 3 Internships [wait]