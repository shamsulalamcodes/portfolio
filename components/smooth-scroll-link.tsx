"use client"

import * as React from "react"
import Link from "next/link"

const SCROLL_GAP = 16

export function SmoothScrollLink({
  href,
  onClick,
  ...props
}: React.ComponentProps<typeof Link>) {
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event)

      if (event.defaultPrevented) return
      if (typeof href !== "string" || !href.startsWith("#")) return

      const id = href.slice(1)
      const target = id ? document.getElementById(id) : null
      if (!target) return

      event.preventDefault()

      // Measure only the header's top row so the offset stays correct when
      // the mobile menu is expanded.
      const headerRow = document.getElementById("site-header")
        ?.firstElementChild as HTMLElement | null
      const offset = (headerRow?.offsetHeight ?? 72) + SCROLL_GAP
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: prefersReducedMotion ? "auto" : "smooth",
      })

      // Keep the address bar clean instead of appending "#section".
      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        )
      }
    },
    [href, onClick]
  )

  return <Link href={href} onClick={handleClick} {...props} />
}
