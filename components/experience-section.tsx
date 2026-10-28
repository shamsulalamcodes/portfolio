import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react"
import { content, TimelineItem } from "@/src/data/content"

export function ExperienceSection() {
  const { timeline } = content

  return (
    <section id="experience" className="py-20 md:py-28 relative" aria-label="Experience and Education">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--badge-text)] text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Path & Growth</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight">
            Experience & Education
          </h2>
          <p className="text-sm sm:text-base text-[var(--body-muted)] mt-2">
            My practical developer journey and software engineering foundations
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[var(--card-border)] ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-8">
          {timeline.map((item: TimelineItem) => {
            const isWork = item.type === "experience"

            return (
              <div key={item.id} className="relative group">
                {/* Timeline Node Icon */}
                <div
                  className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-[var(--card)] border-2 border-[var(--accent-color)] text-[var(--accent-color)] flex items-center justify-center shadow-md shadow-[var(--accent-color)]/20 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                >
                  {isWork ? (
                    <Briefcase className="w-3.5 h-3.5" />
                  ) : (
                    <GraduationCap className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Card Container */}
                <div className="rounded-2xl bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--card-hover-border)] p-6 transition-all duration-200 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-color)]">
                        {item.role}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--foreground)] mt-0.5">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-[var(--body-muted)] font-mono">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--body-muted)] leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-4 space-y-1.5 text-xs text-[var(--body-muted)] border-t border-[var(--card-border)]/60 pt-3">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] mt-1.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
