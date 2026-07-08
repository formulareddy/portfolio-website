<div align="center">
  <img src="images/1.png" alt="Zenix Studio Preview" width="100%" style="border-radius:12px;margin-bottom:20px">

  <h1 align="center">✦ ZENIX STUDIO ✦</h1>
  <p align="center">
    <strong>Portfolio & Creative Design Agency Website</strong>
    <br>
    Bold · Functional · Unforgettable Digital Experiences
  </p>

  <p align="center">
    <a href="https://formulareddy.github.io/portfolio-website/">🌐 Live Demo</a>
    ·
    <a href="#-features">Features</a>
    ·
    <a href="#-tech-stack">Tech Stack</a>
    ·
    <a href="#-getting-started">Getting Started</a>
    ·
    <a href="#-seo--performance">SEO</a>
  </p>

  <br>

  ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
  ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
  ![Resend](https://img.shields.io/badge/-Resend-000000?style=flat-square&logo=resend&logoColor=white)
  ![GitHub Pages](https://img.shields.io/badge/-GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white)
</div>

---

## ✦ Overview

A premium, dark-themed portfolio website for a creative design studio. Features a responsive layout, smooth animations, interactive blog with category filtering, and a real-time contact form powered by the Resend API.

## ✦ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Dark UI** | Immersive dark theme with neon green accent |
| 📱 **Responsive** | Mobile-first with collapsible hamburger nav |
| ⚡ **Animations** | Scroll reveals, parallax, typing effect, counting stats |
| 📰 **Blog** | Filterable cards with modal article reader |
| ✉️ **Contact Form** | Real-time email delivery via Resend API |
| 🔍 **SEO Optimized** | Meta tags, Open Graph, JSON-LD, sitemap |
| ♿ **Accessible** | Semantic HTML, aria labels, keyboard nav |

## ✦ Tech Stack

```
Frontend         →  HTML5 · CSS3 · Vanilla JavaScript
Backend          →  Node.js · Express.js
Email            →  Resend API
Hosting          →  GitHub Pages
Fonts            →  Google Fonts (Space Grotesk, Inter)
Icons            →  Font Awesome 6
```

## ✦ Getting Started

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

## ✦ SEO & Performance

- ✅ Semantic HTML5 structure
- ✅ Open Graph / Twitter Card meta tags
- ✅ JSON-LD structured data (Person + WebSite schema)
- ✅ Canonical URLs
- ✅ robots.txt + sitemap.xml
- ✅ Preconnect hints for fonts & CDN
- ✅ Lazy-loaded images
- ✅ Optimized Google Fonts loading

## ✦ Project Structure

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

## ✦ Deployment

**Frontend** is deployed on **GitHub Pages**:
```bash
git push origin main
# Then enable GitHub Pages in repo Settings > Pages > Deploy from main branch / root
```

**Backend** can be deployed to Render, Railway, or Fly.io (free tiers available).

## ✦ License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built with passion by <a href="https://github.com/formulareddy">formulareddy</a></sub>
  <br>
  <sub>© 2026 Zenix Studio. All rights reserved.</sub>
</div>
