"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

const subscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )

  if (!mounted) {
    return (
      <div
        className="w-9 h-9 rounded-xl border border-[var(--card-border)] bg-[var(--card)] opacity-50"
        aria-hidden="true"
      />
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex items-center justify-center w-9 h-9 rounded-xl border border-[var(--card-border)] bg-[var(--card)] text-[var(--body-muted)] hover:text-[var(--foreground)] hover:border-[var(--accent-color)] hover:bg-[var(--accent-color)]/10 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent-color)] cursor-pointer"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-violet-600 transition-transform hover:-rotate-12" />
      )}
    </button>
  )
}
