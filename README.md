# Shamsul Alam — Personal Portfolio Website

A modern, high-performance, dark-first personal portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**.

Inspired by modern developer portfolios with an electric violet aesthetic, clean rounded glassmorphic surfaces, verified metric strips, interactive skills lineup, project showcases, timeline history, and a Formspree-ready contact API route.

---

## ✨ Features

- **Dark-First Modern Theme**: Deep midnight dark palette (`#0B0B1A`, `#12122A`, `#25253F`, `#6D5CF6`) with an accessible, high-contrast light mode toggle.
- **Accessible & Contrast Compliant**: Built following WCAG AA standards in both light and dark themes with visible focus indicators and `prefers-reduced-motion` compliance.
- **Typography via `next/font`**: Elegant serif display titles with **Noto Serif Display** and crisp, readable body text with **Inter**.
- **Centralized Content Store**: All profile info, bio, skills, projects, timeline history, and socials are configured in a single file (`src/data/content.ts`).
- **Formspree-Ready Route Handler**: Built-in Next.js API route (`/api/contact`) that seamlessly forwards contact form inquiries to Formspree when configured, with a development fallback and direct mailto link.
- **Production-Ready & Fully Typed**: Zero TypeScript errors, clean ESLint pass, and static pre-rendering with Next.js Turbopack.

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js**: v18.17+ or v20+ recommended
- **npm**, **pnpm**, or **yarn**

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Build and Quality Scripts
- **TypeScript Check**: `npm run typecheck` (`tsc --noEmit`)
- **Linting**: `npm run lint` (`eslint`)
- **Production Build**: `npm run build` (`next build`)
- **Formatting**: `npm run format` (`prettier --write "**/*.{ts,tsx}"`)

---

## 📝 How to Edit Content

All customizable content is located in a single file:
👉 **[`src/data/content.ts`](src/data/content.ts)**

You do not need to hunt through component files to update your portfolio. You can edit:

### Personal Profile & Hero
```typescript
personal: {
  nameFirst: "Shamsul",
  nameLast: "Alam",
  role: "Full-Stack Developer",
  location: "Dhaka, Bangladesh",
  heroBadge: "Open to junior roles & freelance",
  tagline: "Turning ideas into well-polished, production-ready web apps.",
  shortBio: "Full-stack developer. I take web apps from database to UI...",
  aboutBio: "Hi, I'm Shams, a full-stack developer based in Dhaka...",
  email: "gym.master.0007@gmail.com",
  stats: {
    skillsCount: "9+",
    primaryStack: "Next.js · MERN",
    locationShort: "Dhaka, BD",
    statusText: "Open to Work",
  },
}
```

### Skills & Progress
```typescript
skills: [
  { name: "Node.js", level: 85, category: "backend", iconName: "nodejs" },
  { name: "React", level: 90, category: "frontend", iconName: "react" },
  { name: "Tailwind CSS", level: 92, category: "frontend", iconName: "tailwind" },
  // ...
]
```

### Projects
Replace or add projects in the `projects` array:
```typescript
{
  id: "shopsphere",
  title: "ShopSphere",
  subtitle: "Full-Stack E-Commerce Platform",
  description: "...",
  techStack: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
  liveUrl: "https://your-live-demo.com",
  githubUrl: "https://github.com/shamsulalamcodes/shopsphere",
  featured: true,
}
```

### Experience & Education Timeline
Update entries in `timeline`:
```typescript
{
  id: "exp-1",
  title: "Full-Stack Web Development",
  role: "Freelance / Project Developer",
  period: "2024 — Present",
  type: "experience", // "experience" or "education"
  location: "Dhaka, Bangladesh",
  description: "...",
  highlights: ["...", "..."],
}
```

---

## 📬 Setting Up the Contact Form (Formspree)

The contact form sends requests to the internal Next.js route handler at `app/api/contact/route.ts`.

### Steps:
1. Create a free account at [Formspree.io](https://formspree.io) and create a new form.
2. Copy your Formspree Endpoint (e.g. `https://formspree.io/f/mqazkxyz`) or Form ID (`mqazkxyz`).
3. Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```
4. Set your environment variable:
   ```env
   FORMSPREE_ENDPOINT=https://formspree.io/f/mqazkxyz
   ```
   *(Alternatively, set `FORMSPREE_FORM_ID=mqazkxyz`)*

> **Note**: If no environment variable is provided, submissions are logged locally to the server terminal, and a simulated confirmation is returned to the user, with direct `mailto:` links always available as a fallback.

---

## 🌐 Deploying to Vercel

The portfolio is fully optimized for **Vercel** with Next.js App Router:

1. Push your repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete personal portfolio website"
   git remote add origin https://github.com/shamsulalamcodes/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **Add New...** → **Project**.
4. Select your `portfolio` repository from GitHub.
5. In the **Environment Variables** section, add your Formspree endpoint (optional):
   - Key: `FORMSPREE_ENDPOINT`
   - Value: `https://formspree.io/f/your_form_id`
6. Click **Deploy**. Vercel will build and assign you a free `*.vercel.app` production domain with automatic SSL.

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand marks
