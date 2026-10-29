"use client"

import * as React from "react"
import { Code2, Menu, X, ArrowUpRight } from "lucide-react"
import { content } from "@/src/data/content"
import { ThemeToggle } from "@/components/theme-toggle"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("hero")
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = content.navigation.map((n) => n.href.replace("#", ""))
      const scrollPos = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[var(--header-bg)] backdrop-blur-md border-b border-[var(--card-border)] py-3 shadow-lg shadow-black/5"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <SmoothScrollLink
          href="#hero"
          className="flex items-center gap-2 group text-base font-semibold focus-visible:outline-2 focus-visible:outline-[var(--accent-color)] rounded-lg p-1"
          aria-label={`${content.personal.nameFirst} ${content.personal.nameLast} - Home`}
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-color)] group-hover:scale-105 transition-transform">
            <Code2 className="w-4 h-4" />
          </span>
          <span className="font-serif text-lg tracking-tight">
            <span className="text-[var(--foreground)]">{content.personal.nameFirst} </span>
            <span className="text-[var(--accent-color)]">{content.personal.nameLast}</span>
          </span>
        </SmoothScrollLink>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 bg-[var(--card)]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[var(--card-border)] shadow-xs"
          aria-label="Main Navigation"
        >
          {content.navigation.map((item) => {
            const sectionId = item.href.replace("#", "")
            const isActive = activeSection === sectionId

            return (
              <SmoothScrollLink
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${isActive
                  ? "text-white bg-[var(--accent-color)] shadow-sm"
                  : "text-[var(--body-muted)] hover:text-[var(--foreground)] hover:bg-[var(--badge-bg)]"
                  }`}
              >
                {item.label}
              </SmoothScrollLink>
            )
          })}
        </nav>

        {/* Right Actions: CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <SmoothScrollLink
            target="_blank"
            href={content.resume}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] text-[var(--foreground)] transition-all shadow-xs group"
          >
            <span>My Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </SmoothScrollLink>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-[var(--card-border)] bg-[var(--card)] text-[var(--foreground)] hover:text-[var(--accent-color)] focus-visible:outline-2 focus-visible:outline-[var(--accent-color)] cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--card)] border-b border-[var(--card-border)] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {content.navigation.map((item) => (
              <SmoothScrollLink
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-[var(--body-muted)] hover:text-[var(--foreground)] hover:bg-[var(--badge-bg)] transition-colors"
              >
                {item.label}
              </SmoothScrollLink>
            ))}
            <div className="pt-2">
              <SmoothScrollLink
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[var(--accent-color)] text-white text-sm font-medium shadow-md shadow-[var(--accent-color)]/25"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </SmoothScrollLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
