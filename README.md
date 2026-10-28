<div align="center">

# Shamsul Alam

### Full-Stack Developer · Dhaka, Bangladesh

*Turning ideas into well-polished, production-ready web apps.*

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[**Live Site**](https://YOUR-SITE.vercel.app) · [**LinkedIn**](https://www.linkedin.com/in/shamsulalamcodes/) · [**Email**](mailto:gym.master.0007@gmail.com)

</div>

<!--
  Add a screenshot of your site here, then delete this comment:
  <p align="center"><img src="./public/screenshots/hero.png" alt="Portfolio preview" width="820" /></p>
-->

---

## About

My personal portfolio: a dark-first, fully responsive site that showcases my projects, skills, and experience. It is built end to end with the same stack I use professionally, and every piece of content lives in one file so updating it takes minutes.

> **Open to junior roles & freelance.** If you have something to build, [let's talk](mailto:gym.master.0007@gmail.com).

---

## Features

| | |
|---|---|
| **Dark-first theme** | Deep navy palette with a violet accent and a light-mode toggle powered by `next-themes`. |
| **Accessible by design** | Semantic HTML, visible focus states, keyboard navigation, WCAG AA contrast in both themes, and `prefers-reduced-motion` support. |
| **Content-driven** | Profile, skills, projects, timeline, and social links all come from a single file: `src/data/content.ts`. |
| **Working contact form** | Next.js route handler that forwards messages to Formspree, with server-side validation and a honeypot field against bots. |
| **Editorial typography** | Noto Serif Display for headings and Inter for body text, loaded through `next/font`. |
| **SEO ready** | Title, meta description, and Open Graph tags configured through the App Router metadata API. |
| **Responsive** | Mobile-first layout with subtle scroll and hover animations. |

---

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router, Turbopack) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Icons | [Lucide React](https://lucide.dev/) + custom SVG brand marks |
| Contact | Next.js Route Handler + [Formspree](https://formspree.io/) |
| Hosting | [Vercel](https://vercel.com/) |

---

## Project Structure

```
portfolio/
├── app/                  # App Router: layout, page, and /api/contact route
├── components/           # Section and reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Shared utilities
├── public/               # Static assets
└── src/data/content.ts   # Single source of truth for all site content
```

---

## Getting Started

**Prerequisites:** Node.js 20.9+ and npm (pnpm or yarn also work).

```bash
# 1. Clone the repository
git clone https://github.com/shamsulalamcodes/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |
| `npm run format` | Format `.ts` and `.tsx` files with Prettier |

---

## Editing the Content

Everything you see on the site is configured in [`src/data/content.ts`](./src/data/content.ts). You never need to hunt through component files.

<details>
<summary><b>Profile & hero</b></summary>

```ts
personal: {
  nameFirst: "Shamsul",
  nameLast: "Alam",
  role: "Full-Stack Developer",
  location: "Dhaka, Bangladesh",
  heroBadge: "Open to junior roles & freelance",
  tagline: "Turning ideas into well-polished, production-ready web apps.",
  email: "gym.master.0007@gmail.com",
}
```
</details>

<details>
<summary><b>Skills</b></summary>

```ts
skills: [
  { name: "React", category: "frontend", iconName: "react" },
  { name: "Node.js", category: "backend", iconName: "nodejs" },
  // ...
]
```
</details>

<details>
<summary><b>Projects</b></summary>

```ts
{
  id: "fitlog",
  title: "FitLog",
  subtitle: "Workout Library & Daily Planner",
  description: "...",
  techStack: ["Next.js", "JavaScript", "Tailwind CSS"],
  liveUrl: "https://a6-fitbit.vercel.app",
  githubUrl: "https://github.com/shamsulalamcodes/a6-fitbit",
  featured: true,
}
```
</details>

<details>
<summary><b>Experience & education timeline</b></summary>

```ts
{
  id: "exp-1",
  title: "Full-Stack Web Development",
  role: "Freelance / Project Developer",
  period: "2024 — Present",
  type: "experience", // "experience" | "education"
  description: "...",
  highlights: ["...", "..."],
}
```
</details>

---

## Contact Form Setup

The form posts to `app/api/contact/route.ts`, which validates the input and forwards it to [Formspree](https://formspree.io/). Your endpoint stays on the server and is never exposed to the browser.

1. Create a free form at [formspree.io](https://formspree.io/) and copy its endpoint (it looks like `https://formspree.io/f/xxxxxxxx`).
2. Create a `.env.local` file in the **project root**, next to `package.json`:

   ```bash
   FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
   ```

3. **Restart the dev server.** Next.js reads env files only at startup.
4. Submit the form once and confirm your email when Formspree asks.

> **Development vs. production:** without `FORMSPREE_ENDPOINT`, the form logs submissions to the terminal in development. In production it returns an error instead, so a missing variable never silently drops a real message.

---

## Deployment

The site is built for [Vercel](https://vercel.com/):

1. Push the repository to GitHub.
2. In Vercel, click **Add New → Project** and import this repository.
3. Under **Environment Variables**, add `FORMSPREE_ENDPOINT` with your Formspree URL.
4. Click **Deploy**. Vercel assigns a `*.vercel.app` domain with automatic SSL.

Remember to redeploy after changing environment variables.

---

## Connect

<p>
  <a href="https://github.com/shamsulalamcodes"><img src="https://img.shields.io/badge/GitHub-shamsulalamcodes-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/shamsulalamcodes/"><img src="https://img.shields.io/badge/LinkedIn-shamsulalamcodes-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:gym.master.0007@gmail.com"><img src="https://img.shields.io/badge/Email-Get_in_touch-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

<div align="center">

<sub>Designed and built by <b>Shamsul Alam</b></sub>

</div>