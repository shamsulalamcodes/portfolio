import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[#6d5cf6]/30 selection:text-white transition-colors duration-200">
      {/* Sticky Header with Navigation and Theme Toggle */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        {/* <ExperienceSection /> */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}
