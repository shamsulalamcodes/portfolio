"use client"

import Link from "next/link"
import { Code2, ChevronUp, Mail } from "lucide-react"
import { content } from "@/src/data/content"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"

export function Footer() {
  const { personal, socials, navigation } = content
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      className="border-t border-[var(--card-border)] bg-[var(--card)] py-12 transition-colors"
      aria-label="Footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <SmoothScrollLink
              href="#hero"
              className="flex items-center gap-2 group font-semibold text-sm"
              aria-label="Scroll back to top"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[var(--badge-bg)] text-[var(--accent-color)] group-hover:scale-105 transition-transform">
                <Code2 className="w-3.5 h-3.5" />
              </span>
              <span className="font-serif text-base">
                <span className="text-[var(--foreground)]">{personal.nameFirst} </span>
                <span className="text-[var(--accent-color)]">{personal.nameLast}</span>
              </span>
            </SmoothScrollLink>
            <p className="text-xs text-[var(--body-muted)]">
              © {currentYear} {personal.nameFirst} {personal.nameLast}. All rights reserved.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <nav
            className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[var(--body-muted)]"
            aria-label="Footer Navigation"
          >
            {navigation.map((item) => (
              <SmoothScrollLink
                key={item.href}
                href={item.href}
                className="hover:text-[var(--accent-color)] transition-colors"
              >
                {item.label}
              </SmoothScrollLink>
            ))}
          </nav>

          {/* Right: Socials & Back to Top Button */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {socials.map((social) => {
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target={social.icon !== "mail" ? "_blank" : undefined}
                    rel={social.icon !== "mail" ? "noopener noreferrer" : undefined}
                    className="p-2 rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--body-muted)] hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent-color)]"
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

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] hover:text-white hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] transition-all shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-color)]"
              aria-label="Back to top"
              title="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
