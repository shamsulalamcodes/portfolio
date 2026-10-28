import {
  ArrowRight,
  Code2,
  Layers,
  MapPin,
  Sparkles,
  Mail,
  FolderGit2,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { content } from "@/src/data/content"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"

export function HeroSection() {
  const { personal, socials } = content

  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* Background radial gradient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--glow-color)] blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--badge-text)] text-xs sm:text-sm font-medium shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{personal.heroBadge}</span>
            </div>

            {/* Two-Tone Name */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1]">
              <span>{personal.nameFirst} </span>
              <span className="text-[var(--accent-color)]">{personal.nameLast}</span>
            </h1>

            {/* Role & Tagline */}
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl font-semibold text-[var(--foreground)] tracking-tight">
                {personal.role}
              </p>
              <p className="text-base sm:text-lg text-[var(--body-muted)] max-w-xl leading-relaxed">
                {personal.tagline} {personal.shortBio}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <SmoothScrollLink
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-color)] text-white font-medium text-sm hover:bg-[var(--accent-color-hover)] transition-all shadow-md shadow-[var(--accent-color)]/25 group focus-visible:outline-2 focus-visible:outline-[var(--accent-color)]"
              >
                <span>View my work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </SmoothScrollLink>

              <SmoothScrollLink
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--accent-color)] text-[var(--foreground)] font-medium text-sm transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-[var(--accent-color)]"
              >
                <FolderGit2 className="w-4 h-4 text-[var(--accent-color)]" />
                <span>Contact me</span>
              </SmoothScrollLink>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-4 border-t border-[var(--card-border)]/60 w-full sm:w-auto">
              <span className="text-xs uppercase tracking-wider text-[var(--body-muted)] font-medium">
                Follow me on
              </span>
              <div className="flex items-center gap-2">
                {socials.map((social) => {
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target={social.icon !== "mail" ? "_blank" : undefined}
                      rel={social.icon !== "mail" ? "noopener noreferrer" : undefined}
                      className="p-2 rounded-xl bg-[var(--card)] border border-[var(--card-border)] text-[var(--body-muted)] hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent-color)]"
                      aria-label={social.name}
                    >
                      {social.icon === "github" ? (
                        <GithubIcon className="w-4 h-4" />
                      ) : social.icon === "linkedin" ? (
                        <LinkedinIcon className="w-4 h-4" />
                      ) : (
                        <Mail className="w-4 h-4" />
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait with Glow & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 flex items-center justify-center">
              {/* Radial violet circle backdrop matching demo */}
              {/* <div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6d5cf6]/40 via-[#6d5cf6]/80 to-[#8b5cf6] blur-sm opacity-90 shadow-2xl shadow-[#6d5cf6]/30"
                aria-hidden="true"
              /> */}

              {/* Decorative dot matrix pattern */}
              <div
                className="absolute -top-4 -right-4 w-28 h-28 opacity-25 grid grid-cols-4 gap-2 pointer-events-none"
                aria-hidden="true"
              >
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
                ))}
              </div>

              {/* Central Graphic Container */}
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-6 border-white/20 bg-linear-to-b from-[#1c1c38] to-[#0b0b1a] flex items-end justify-center shadow-inner">
                {/* Clean Vector Developer Portrait Representation */}
                <Image
                  src="/imag.png"
                  alt="Avatar"
                  width={250}
                  height={250}
                  className="object-top rounded-full border-2 shadow-lg"
                />
              </div>

              {/* Floating Badge 1 (Left): Full-Stack */}
              <div className="absolute -left-4 sm:-left-6 top-16 z-20 bg-[var(--card)]/90 backdrop-blur-md border border-[var(--card-border)] rounded-2xl p-3 shadow-xl flex items-center gap-3 transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="w-9 h-9 rounded-xl bg-[var(--badge-bg)] text-[var(--accent-color)] flex items-center justify-center font-bold text-sm">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--foreground)]">Full-Stack</p>
                  <p className="text-[10px] text-[var(--body-muted)]">Database to UI</p>
                </div>
              </div>

              {/* Floating Badge 2 (Right): Availability */}
              <div className="absolute -right-4 sm:-right-6 bottom-16 z-20 bg-[var(--card)]/90 backdrop-blur-md border border-[var(--card-border)] rounded-2xl p-3 shadow-xl flex items-center gap-3 transform rotate-3 hover:rotate-0 transition-transform">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--foreground)]">Available</p>
                  <p className="text-[10px] text-[var(--body-muted)]">Junior & Freelance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Stats Strip Below Hero */}
        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-5 sm:p-6 shadow-md shadow-black/5">
            {/* 1: Skills Count */}
            <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3">
              <div className="w-11 h-11 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-color)] flex items-center justify-center shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">
                  {personal.stats.skillsCount}
                </p>
                <p className="text-xs sm:text-sm text-[var(--body-muted)] font-medium">
                  Core Technologies
                </p>
              </div>
            </div>

            {/* 2: Primary Stack */}
            <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3">
              <div className="w-11 h-11 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-color)] flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-[var(--foreground)] tracking-tight">
                  {personal.stats.primaryStack}
                </p>
                <p className="text-xs sm:text-sm text-[var(--body-muted)] font-medium">
                  Primary Stack
                </p>
              </div>
            </div>

            {/* 3: Location */}
            <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3">
              <div className="w-11 h-11 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-color)] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-[var(--foreground)] tracking-tight">
                  {personal.stats.locationShort}
                </p>
                <p className="text-xs sm:text-sm text-[var(--body-muted)] font-medium">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* 4: Availability */}
            <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3">
              <div className="w-11 h-11 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-color)] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-[var(--foreground)] tracking-tight">
                  {personal.stats.statusText}
                </p>
                <p className="text-xs sm:text-sm text-[var(--body-muted)] font-medium">
                  Junior & Freelance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
