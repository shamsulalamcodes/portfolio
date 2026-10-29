import { UserCheck, Sparkles, Send } from "lucide-react"
import { content, Skill } from "@/src/data/content"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"

function SkillIcon({ name }: { name: string }) {
  // Clean branded SVG representations
  switch (name.toLowerCase()) {
    case "react":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 text-cyan-400 fill-none" stroke="currentColor">
          <ellipse rx="11" ry="4.2" strokeWidth="1.2" />
          <ellipse rx="11" ry="4.2" strokeWidth="1.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" strokeWidth="1.2" transform="rotate(120)" />
          <circle r="2" fill="currentColor" />
        </svg>
      )
    case "next.js":
      return (
        <svg viewBox="0 0 180 180" className="w-5 h-5 text-current fill-current">
          <mask height="180" id="mask0_next" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
            <circle cx="90" cy="90" fill="black" r="90" />
          </mask>
          <g mask="url(#mask0_next)">
            <circle cx="90" cy="90" data-framer-name="base" fill="currentColor" r="90" />
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="var(--background)" />
            <rect fill="var(--background)" height="72" width="12" x="115" y="54" />
          </g>
        </svg>
      )
    case "node.js":
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5 text-emerald-500 fill-current">
          <path d="M16 2.3l12 6.9v13.8L16 30 4 23V9.2L16 2.3zm0 2.3L6 10.3v11.5l10 5.7 10-5.7V10.3L16 4.6z" />
          <path d="M16 11c-2.8 0-5 1.8-5 4s2.2 4 5 4 5-1.8 5-4-2.2-4-5-4z" />
        </svg>
      )
    case "mongodb":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-500 fill-current">
          <path d="M12 1.5s-5.8 4.2-5.8 11.2c0 4.5 3.3 8.3 5.8 9.8 2.5-1.5 5.8-5.3 5.8-9.8 0-7-5.8-11.2-5.8-11.2zm.6 18.5c-.2 0-.4-.1-.6-.2v-7.3c0-.3.2-.6.6-.6s.6.3.6.6v7.3c-.2.1-.4.2-.6.2z" />
        </svg>
      )
    case "express.js":
      return (
        <span className="text-xs font-mono font-bold tracking-tighter text-amber-500 bg-amber-500/10 px-1 py-0.5 rounded">
          ex
        </span>
      )
    case "tailwind css":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-teal-400 fill-current">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      )
    case "typescript":
      return (
        <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/15 px-1 py-0.5 rounded">
          TS
        </span>
      )
    case "html5":
      return (
        <span className="text-xs font-mono font-bold text-orange-500 bg-orange-500/15 px-1 py-0.5 rounded">
          H5
        </span>
      )
    case "css3":
      return (
        <span className="text-xs font-mono font-bold text-blue-500 bg-blue-500/15 px-1 py-0.5 rounded">
          C3
        </span>
      )
    default:
      return <Sparkles className="w-5 h-5 text-[var(--accent-color)]" />
  }
}

export function AboutSection() {
  const { personal, skills } = content

  return (
    <section id="about" className="py-20 md:py-28 relative" aria-label="About and Skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: About Me */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--badge-text)] text-xs font-semibold uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Background</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight">
              About Me
            </h2>

            <p className="text-base sm:text-lg text-[var(--body-muted)] leading-relaxed">
              {personal.aboutBio}
            </p>

            <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--card-border)] w-full space-y-3">
              <div className="flex items-center justify-between text-xs font-medium text-[var(--body-muted)]">
                <span>Core Philosophy</span>
                <span className="text-[var(--accent-color)] font-semibold">End-to-End Ownership</span>
              </div>
              <p className="text-xs text-[var(--body-muted)] leading-relaxed">
                From conceptual database schemas in MongoDB to responsive, accessible, high-performance user interfaces in React & Next.js.
              </p>
            </div>

            <SmoothScrollLink
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--accent-color)] text-[var(--foreground)] text-sm font-medium transition-all shadow-xs group focus-visible:outline-2 focus-visible:outline-[var(--accent-color)]"
            >
              <Send className="w-4 h-4 text-[var(--accent-color)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Let&apos;s Connect</span>
            </SmoothScrollLink>
          </div>

          {/* Right Column: My Skills (Line-up matching the demo website) */}
          <div id="skills" className="lg:col-span-7 flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight">
                  My Skills
                </h3>
                <p className="text-xs sm:text-sm text-[var(--body-muted)] mt-1">
                  Technologies I leverage daily to ship production code
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                {skills.length} Technologies
              </span>
            </div>

            {/* Skills List with Progress Bars matching demo */}
            <div className="space-y-4 pt-2">
              {skills.map((skill: Skill) => (
                <div
                  key={skill.name}
                  className="p-3.5 rounded-xl bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--card-hover-border)] transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[var(--badge-bg)] flex items-center justify-center shrink-0">
                        <SkillIcon name={skill.name} />
                      </div>
                      <span className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent-color)] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-medium text-[var(--body-muted)]">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Accessible Progress Bar */}
                  <div
                    className="w-full h-2 rounded-full bg-[var(--card-border)] overflow-hidden"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} proficiency level`}
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--accent-color)] to-indigo-400 transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
