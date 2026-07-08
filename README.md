<div align="center">
  <img src="images/1.png" alt="Portfolio Preview" width="100%" style="border-radius:12px;margin-bottom:20px">

  <h1 align="center">Portfolio Website</h1>
  <p align="center">
    <strong>A modern, responsive portfolio with a blog, contact form, and SEO</strong>
  </p>

  <p align="center">
    <a href="https://formulareddy.github.io/portfolio-website/">🚀 Live Demo</a>
    ·
    <a href="#features">Features</a>
    ·
    <a href="#tech-stack">Tech Stack</a>
    ·
    <a href="#getting-started">Getting Started</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/github/stars/formulareddy/portfolio-website?style=social" alt="Stars">
    <img src="https://img.shields.io/github/forks/formulareddy/portfolio-website?style=social" alt="Forks">
    <img src="https://img.shields.io/github/issues/formulareddy/portfolio-website?style=social" alt="Issues">
    <br>
    <img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
    <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js">
    <img src="https://img.shields.io/badge/-Resend-000000?style=flat-square&logo=resend&logoColor=white" alt="Resend">
    <img src="https://img.shields.io/badge/-GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white" alt="GitHub Pages">
  </p>
</div>

---

## Features

| Feature | Description |
|---------|-------------|
| 🎨 **Dark UI** | Immersive dark theme with neon green accent |
| 📱 **Responsive** | Mobile-first with collapsible hamburger navigation |
| ⚡ **Animations** | Scroll reveals, parallax effects, typing effect, counting stats |
| 📰 **Blog** | Category-filterable cards with modal article reader |
| ✉️ **Contact Form** | Real-time email delivery via Resend API |
| 🔍 **SEO Optimized** | Meta tags, Open Graph, Twitter Cards, JSON-LD, sitemap, robots.txt |
| ♿ **Accessible** | Semantic HTML, aria labels, keyboard navigation |
| ⚡ **Fast** | Optimized fonts, lazy-loaded images, preconnect hints |

## Tech Stack

```
Frontend         →  HTML5 · CSS3 · Vanilla JavaScript
Backend          →  Node.js · Express.js
Email            →  Resend API
Hosting          →  GitHub Pages
Fonts            →  Google Fonts (Space Grotesk, Inter)
Icons            →  Font Awesome 6
```

## Screenshots

<div align="center">
  <img src="images/1.png" alt="Hero Section" width="80%" style="border-radius:8px;margin:5px">
  <img src="images/2.png" alt="About Section" width="80%" style="border-radius:8px;margin:5px">
  <img src="images/3.png" alt="Work Section" width="80%" style="border-radius:8px;margin:5px">
  <img src="images/4.png" alt="Services Section" width="80%" style="border-radius:8px;margin:5px">
  <img src="images/55.png" alt="Blog Section" width="80%" style="border-radius:8px;margin:5px">
</div>

## Getting Started

### Prerequisites
- Node.js 18+
- Resend API key ([get one free](https://resend.com))

### 1. Clone & Install
```bash
git clone https://github.com/formulareddy/portfolio-website.git
cd portfolio-website
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
# Edit .env with your Resend API key
```

### 3. Run
```bash
npm start          # starts backend on :3001
# Open index.html in browser (or use Live Server)
```

### One-command dev
```bash
npm run dev        # auto-restarts on file changes
```

## SEO & Performance

- ✅ Semantic HTML5 structure
- ✅ Open Graph / Twitter Card meta tags
- ✅ JSON-LD structured data (Person + WebSite schema)
- ✅ Canonical URLs
- ✅ robots.txt + sitemap.xml
- ✅ Preconnect hints for fonts & CDN
- ✅ Lazy-loaded images
- ✅ Optimized Google Fonts loading

## Project Structure

```
portfolio-website/
├── index.html          # Homepage (hero, about, work, services, contact)
├── blog.html           # Blog with filterable cards & modal reader
├── server.js           # Express API (POST /api/contact → Resend)
├── package.json
├── style.css           # Full stylesheet (1600+ lines)
├── .env                # Environment variables (API key, emails)
├── favicon.svg         # SVG favicon
├── sitemap.xml         # XML sitemap for search engines
├── robots.txt          # Crawler rules
├── images/             # Portfolio project images
└── README.md
```

## Deployment

**Frontend** is deployed on **GitHub Pages**:
```bash
git push origin main
# Then enable GitHub Pages in repo Settings > Pages > Deploy from main branch / root
```

**Backend** can be deployed to Render, Railway, or Fly.io (free tiers available).

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built with passion by <a href="https://github.com/formulareddy">formulareddy</a></sub>
  <br>
  <sub>⭐ Star this repo if you find it useful!</sub>
</div>
