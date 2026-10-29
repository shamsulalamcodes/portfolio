import type { Metadata, Viewport } from "next"
import { Inter, Noto_Serif_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fd" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b1a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://shamsulalamcodes.vercel.app"),
  title: "Shamsul Alam | Full-Stack Developer",
  description:
    "Full-stack developer based in Dhaka, Bangladesh. Building scalable, production-ready web applications with Next.js, React, Node.js, and MongoDB. Open to junior roles and freelance projects.",
  keywords: [
    "Shamsul Alam",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Web Developer Dhaka Bangladesh",
    "Junior Full-Stack Developer",
  ],
  authors: [{ name: "Shamsul Alam", url: "https://github.com/shamsulalamcodes" }],
  creator: "Shamsul Alam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shamsulalamcodes.vercel.app",
    title: "Shamsul Alam | Full-Stack Developer",
    description:
      "Full-stack developer. I take web apps from database to UI with Next.js, React, Node.js, and MongoDB. Available for junior roles and freelance projects.",
    siteName: "Shamsul Alam Portfolio",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Shamsul Alam | Full-Stack Developer",
  //   description:
  //     "Turning ideas into well-polished, production-ready web apps with Next.js, React, Node.js, and MongoDB.",
  // },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/programmer-icon.png", type: "image/png", sizes: "92x92" }],
    shortcut: ["/programmer-icon.png"],
    apple: [{ url: "/programmer-icon.png", type: "image/png", sizes: "92x92" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, notoSerifDisplay.variable, "scroll-smooth")}
    >
      <body className="min-h-screen antialiased bg-[var(--background)] text-[var(--foreground)] selection:bg-[#6d5cf6]/30 selection:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
