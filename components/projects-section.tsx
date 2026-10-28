import Link from "next/link"
import { ExternalLink, Sparkles } from "lucide-react"
import { content, Project } from "@/src/data/content"
import { GithubIcon } from "@/components/icons"

export function ProjectsSection() {
  const { projects } = content

  return (
    <section id="projects" className="py-20 md:py-28 relative" aria-label="Featured Projects">
      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[var(--glow-color)] blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--badge-text)] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-[var(--body-muted)] mt-2 max-w-xl">
              A selection of full-stack and web applications crafted with Next.js, React, Node.js, and MongoDB.
            </p>
          </div>

          <Link
            href="https://github.com/shamsulalamcodes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-color)] hover:underline group shrink-0"
          >
            <span>View All on GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--card-hover-border)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              {/* Project Window Mockup Header */}
              <div className="relative h-48 w-full bg-gradient-to-br from-[#181836] to-[#0d0d22] border-b border-[var(--card-border)] overflow-hidden flex flex-col justify-between p-4">
                {/* Browser dots header */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-[10px] font-mono text-white/40 tracking-wider">
                    {project.id}.app
                  </span>
                </div>

                {/* Conceptual UI Preview Graphic */}
                <div className="my-auto text-center transform group-hover:scale-105 transition-transform duration-300">
                  <div className="inline-block p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <p className="font-serif text-lg font-bold text-white tracking-wide">
                      {project.title}
                    </p>
                    <p className="text-xs text-indigo-300 font-mono mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Subtle bottom shine line */}
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--accent-color)]/40 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent-color)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--body-muted)] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Technologies used">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="pt-4 border-t border-[var(--card-border)]/60 flex items-center justify-between">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-color)] hover:underline group/link focus-visible:outline-2 focus-visible:outline-[var(--accent-color)]"
                    aria-label={`Open live demo for ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>

                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-[var(--body-muted)] hover:text-[var(--foreground)] hover:bg-[var(--badge-bg)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent-color)]"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
