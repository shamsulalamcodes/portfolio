export interface Skill {
  name: string
  level: number // percentage 0 - 100
  category: "frontend" | "backend" | "core"
  iconName: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  techStack: string[]
  liveUrl: string
  githubUrl: string
  imagePlaceholderColor?: string
  featured: boolean
}

export interface TimelineItem {
  id: string
  title: string
  role: string
  period: string
  type: "experience" | "education"
  location: string
  description: string
  highlights?: string[]
}

export interface SocialLink {
  name: string
  url: string
  icon: "github" | "linkedin" | "mail"
}

export interface SiteContent {
  personal: {
    nameFirst: string
    nameLast: string
    role: string
    location: string
    country: string
    heroBadge: string
    tagline: string
    shortBio: string
    aboutBio: string
    availability: string
    email: string
    stats: {
      skillsCount: string
      primaryStack: string
      locationShort: string
      statusText: string
    }
  }
  socials: SocialLink[]
  skills: Skill[]
  projects: Project[]
  timeline: TimelineItem[]
  navigation: {
    label: string
    href: string
  }[]
}

export const content: SiteContent = {
  personal: {
    nameFirst: "Shamsul",
    nameLast: "Alam",
    role: "Full-Stack Developer",
    location: "Dhaka, Bangladesh",
    country: "Bangladesh",
    heroBadge: "Open to junior roles & freelance",
    tagline: "Turning ideas into well-polished, production-ready web apps.",
    shortBio:
      "Full-stack developer. I take web apps from database to UI with Next.js, React, Node.js, and MongoDB. Available for junior roles and freelance projects.",
    aboutBio:
      "Hi, I'm Shams, a full-stack developer based in Dhaka. I like owning a project end to end: designing the data model, building the API, and shaping the UI. My go-to stack is Next.js, React, Node.js, and MongoDB. I'm open to junior roles and freelance work, so if you have something to build, let's talk.",
    availability: "Available for Hire",
    email: "gym.master.0007@gmail.com",
    stats: {
      skillsCount: "9+",
      primaryStack: "Next.js · MERN",
      locationShort: "Dhaka, BD",
      statusText: "Open to Work",
    },
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/shamsulalamcodes",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shamsulalamcodes/",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:gym.master.0007@gmail.com",
      icon: "mail",
    },
  ],
  skills: [
    { name: "HTML5", level: 95, category: "core", iconName: "html5" },
    { name: "CSS3", level: 92, category: "core", iconName: "css3" },
    { name: "Tailwind CSS", level: 92, category: "frontend", iconName: "tailwind" },
    { name: "JavaScript", level: 82, category: "core", iconName: "javascript" },
    { name: "TypeScript", level: 85, category: "core", iconName: "typescript" },
    { name: "Node.js", level: 85, category: "backend", iconName: "nodejs" },
    { name: "React", level: 90, category: "frontend", iconName: "react" },
    { name: "Next.js", level: 88, category: "frontend", iconName: "nextjs" },
    { name: "MongoDB", level: 82, category: "backend", iconName: "mongodb" },
    { name: "Express.js", level: 84, category: "backend", iconName: "express" },
  ],
  projects: [
    {
      id: "bazar-dor",
      title: "Bazar Dor (বাজার দর)",
      subtitle: "Bengali Grocery Price Tracker",
      description:
        "Bengali-language web app for tracking daily essential-goods prices, with a live price ticker, top risers and fallers, category pages with sorting, product detail views, and BetterAuth email and social login protecting routes.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "BetterAuth"],
      liveUrl: "https://bazardor-one.vercel.app",
      githubUrl: "https://github.com/shamsulalamcodes/Bazar-Dor",
      imagePlaceholderColor: "from-emerald-600/30 to-teal-600/30",
      featured: true,
    },
    {
      id: "fitlog",
      title: "FitLog",
      subtitle: "Workout Library & Daily Planner",
      description:
        "Dark-themed gym companion where you browse a workout library, view exercise details, and build a daily plan or saved list with live stats for exercises, minutes, and calories, plus sorting and toast feedback.",
      techStack: ["Next.js", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://a6-fitbit.vercel.app",
      githubUrl: "https://github.com/shamsulalamcodes/a6-fitbit",
      imagePlaceholderColor: "from-lime-500/30 to-emerald-600/30",
      featured: true,
    },
    {
      id: "dev-stack",
      title: "Dev Stack Builder",
      subtitle: "Interactive Tech Stack Picker",
      description:
        "Browse a catalog of frontend, backend, database, and DevOps technologies, then add them to a personal stack panel with duplicate protection, remove controls, toast alerts, and a shared gradient brand theme.",
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      liveUrl: "https://b14-a5-shamsulalamcodes.netlify.app/",
      githubUrl: "https://github.com/shamsulalamcodes/a5-devstack",
      imagePlaceholderColor: "from-orange-500/30 to-violet-600/30",
      featured: true,
    },
  ],
  timeline: [
    {
      id: "exp-1",
      title: "Full-Stack Web Development",
      role: "Freelance / Project Developer",
      period: "2024 — Present",
      type: "experience",
      location: "Dhaka, Bangladesh",
      description:
        "Developing end-to-end full-stack web applications with Next.js, Express, and MongoDB. Focusing on responsive UIs, clean architecture, and REST API design.",
      highlights: [
        "Built responsive SPAs and full-stack apps with Next.js & React",
        "Designed MongoDB schemas and implemented secure Express REST APIs",
      ],
    },
    {
      id: "edu-1",
      title: "Full-Stack Software Engineering",
      role: "Advanced MERN & Web Curriculum",
      period: "2023 — 2024",
      type: "education",
      location: "Dhaka, Bangladesh",
      description:
        "Intensive practical training focusing on modern JavaScript, TypeScript, React ecosystem, Node.js server architectures, and database modeling.",
      highlights: [
        "Hands-on project development from requirement analysis to deployment",
        "Proficiency in asynchronous programming, state management, and Git collaboration",
      ],
    },
    {
      id: "edu-2",
      title: "Academic Studies",
      role: "Higher Secondary & Foundation",
      period: "2021 — 2023",
      type: "education",
      location: "Dhaka, Bangladesh",
      description:
        "Solid foundation in science, analytical problem solving, and computational logic.",
    },
  ],
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    // { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
}
