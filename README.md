# THD — Landing Page

A modern, premium landing page built with **React**, **Tailwind CSS v4**, and **parallax scrolling animations**.

## ✨ Features

- ⚡ **Vite** — Lightning-fast dev server and optimized builds
- ⚛️ **React 19** — Latest React with modern patterns
- 🎨 **Tailwind CSS v4** — Utility-first styling with custom design tokens
- 🌀 **Parallax Scrolling** — Immersive scroll-driven effects via `react-scroll-parallax`
- 🎬 **Framer Motion** — Smooth entrance animations and micro-interactions
- 📱 **Fully Responsive** — Mobile-first design that works on all screens
- 🪟 **Glassmorphism** — Modern glass-effect UI components
- 🚀 **GitHub Pages Ready** — Auto-deploy workflow included

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| react-scroll-parallax | Parallax effects |
| React Router DOM | Routing (ready) |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
THD/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── About.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app shell
│   ├── App.css          # App-level styles
│   ├── index.css        # Tailwind + design tokens
│   └── main.jsx         # Entry point with providers
├── index.html           # HTML template with fonts
├── vite.config.js       # Vite + Tailwind config
└── package.json
```

## 📦 Deployment

This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages when you push to `main`.

## 📄 License

MIT
