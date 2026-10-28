import { NextResponse } from "next/server"

// Max lengths protect against oversized or abusive payloads
const LIMITS = { name: 100, email: 254, subject: 150, message: 5000 } as const
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface ContactRequestBody {
  name?: unknown
  email?: unknown
  subject?: unknown
  message?: unknown
  website?: unknown // honeypot: hidden field real users never fill
}

// Safely read a trimmed string from untrusted input
const str = (value: unknown) => (typeof value === "string" ? value.trim() : "")

const fail = (error: string, status: number) =>
  NextResponse.json({ error }, { status })

export async function POST(request: Request) {
  try {
    let body: ContactRequestBody
    try {
      body = await request.json()
    } catch {
      return fail("Invalid request.", 400)
    }

    // Honeypot: bots fill hidden fields. Pretend success so they don't retry.
    if (str(body.website)) {
      return NextResponse.json({ success: true, message: "Message sent." })
    }

    const name = str(body.name)
    const email = str(body.email)
    const subject = str(body.subject)
    const message = str(body.message)

    // Validation
    if (!name) return fail("Please provide your name.", 400)
    if (!EMAIL_REGEX.test(email)) {
      return fail("Please provide a valid email address.", 400)
    }
    if (message.length < 5) {
      return fail("Please enter a message with at least 5 characters.", 400)
    }
    if (
      name.length > LIMITS.name ||
      email.length > LIMITS.email ||
      subject.length > LIMITS.subject ||
      message.length > LIMITS.message
    ) {
      return fail("One of the fields is too long.", 400)
    }

    const endpoint =
      process.env.FORMSPREE_ENDPOINT ||
      (process.env.FORMSPREE_FORM_ID
        ? `https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`
        : null)

    // No endpoint configured
    if (!endpoint) {
      // In production this must fail loudly, otherwise real messages get lost
      if (process.env.NODE_ENV === "production") {
        console.error("Contact form: FORMSPREE_ENDPOINT is not set")
        return fail("The contact form isn't available right now. Please email me directly.", 500)
      }

      // Development only: log locally so you can test the UI
      console.log("Contact form submitted (dev fallback):", {
        name,
        email,
        subject: subject || "No subject",
        message,
        timestamp: new Date().toISOString(),
      })
      return NextResponse.json({
        success: true,
        message: "Message received! (Dev mode: Formspree not configured, logged to console.)",
      })
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email, // Formspree uses "email" as the reply-to address
        _subject: subject || "New Portfolio Inquiry", // Formspree's special subject field
        message,
      }),
      signal: AbortSignal.timeout(10_000), // don't hang forever if Formspree is slow
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      const errorMsg =
        errorData?.errors?.[0]?.message || "Failed to submit your message. Please try again."
      return fail(errorMsg, 502)
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    })
  } catch (error) {
    console.error("Error in /api/contact handler:", error)
    return fail("An unexpected server error occurred. Please try again later.", 500)
  }
}