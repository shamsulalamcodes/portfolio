"use client"

import * as React from "react"
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"
import { content } from "@/src/data/content"
import { GithubIcon, LinkedinIcon } from "@/components/icons"


type Status = "idle" | "loading" | "success" | "error"

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "", // honeypot, stays empty for real users
}

export function ContactSection() {
  const { personal, socials } = content

  const [formData, setFormData] = React.useState(initialForm)
  const [status, setStatus] = React.useState<Status>("idle")
  const [responseMsg, setResponseMsg] = React.useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    // Clear the old success/error banner once the user starts typing again
    if (status !== "idle") {
      setStatus("idle")
      setResponseMsg("")
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setResponseMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.")
      }

      setStatus("success")
      setResponseMsg(data.message || "Message sent successfully!")
      setFormData(initialForm)
    } catch (err: unknown) {
      setStatus("error")
      setResponseMsg(
        err instanceof Error
          ? err.message
          : "Unable to send your message right now. Please email directly."
      )
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative" aria-label="Contact and Inquiries">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner matching the demo screenshot */}
        <div className="rounded-3xl bg-[var(--card)] border border-[var(--card-border)] p-8 sm:p-10 mb-14 shadow-xl relative overflow-hidden">
          {/* Subtle accent glow inside card */}
          <div
            className="absolute -right-20 -bottom-20 w-80 h-80 bg-[var(--glow-color)] blur-[90px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left side: Heading and call to action */}
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-color)]">
                <MessageSquare className="w-4 h-4" />
                <span>Available for new opportunities</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight">
                Let&apos;s Work Together!
              </h2>
              <p className="text-sm sm:text-base text-[var(--body-muted)] leading-relaxed max-w-lg">
                I&apos;m currently available for junior roles and freelance projects. Let&apos;s build something great together.
              </p>
            </div>

            {/* Quick Contact Info Strip */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--badge-bg)] text-[var(--accent-color)] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-[var(--body-muted)] font-medium">Email</p>
                  <Link
                    href={`mailto:${personal.email}`}
                    className="text-xs sm:text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent-color)] truncate block"
                  >
                    {personal.email}
                  </Link>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--badge-bg)] text-[var(--accent-color)] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[var(--body-muted)] font-medium">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-[var(--foreground)]">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form + Socials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Info & Direct Mailto */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[var(--foreground)] tracking-tight">
                Send a Message
              </h3>
              <p className="text-sm text-[var(--body-muted)] mt-2 leading-relaxed">
                Have a question or a project proposal? Fill out the form or reach out directly via your preferred platform.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--body-muted)]">
                Direct Channels
              </p>

              <div className="space-y-2.5">
                {socials.map((social) => {
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target={social.icon !== "mail" ? "_blank" : undefined}
                      rel={social.icon !== "mail" ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] text-[var(--foreground)] transition-all group focus-visible:outline-2 focus-visible:outline-[var(--accent-color)]"
                    >
                      <div className="flex items-center gap-3">
                        {social.icon === "github" ? (
                          <GithubIcon className="w-4 h-4 text-[var(--accent-color)]" />
                        ) : social.icon === "linkedin" ? (
                          <LinkedinIcon className="w-4 h-4 text-[var(--accent-color)]" />
                        ) : (
                          <Mail className="w-4 h-4 text-[var(--accent-color)]" />
                        )}
                        <span className="text-sm font-medium">{social.name}</span>
                      </div>
                      <span className="text-xs text-[var(--body-muted)] group-hover:text-[var(--accent-color)]">
                        Connect ↗
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Mailto Fallback Notice */}
            <div className="p-4 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs text-[var(--badge-text)] leading-relaxed">
              Prefer your mail app? You can always send an email directly to{" "}
              <Link
                href={`mailto:${personal.email}`}
                className="font-bold underline hover:text-[var(--foreground)]"
              >
                {personal.email}
              </Link>
              .
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[var(--card)] border border-[var(--card-border)] p-6 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]"
                  >
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--body-muted)] text-sm focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]"
                  >
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--body-muted)] text-sm focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Project Inquiry / Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--body-muted)] text-sm focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]"
                >
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--body-muted)] text-sm focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] outline-none transition-colors resize-y"
                />
              </div>

              {/* Status Notifications */}
              {status === "success" && (
                <div
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-sm"
                  role="alert"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>{responseMsg}</span>
                </div>
              )}

              {status === "error" && (
                <div
                  className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center gap-3 text-sm"
                  role="alert"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{responseMsg}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--accent-color)] hover:bg-[var(--accent-color-hover)] text-white text-sm font-semibold transition-all shadow-md shadow-[var(--accent-color)]/25 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-color)]"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
