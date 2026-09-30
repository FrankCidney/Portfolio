import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { WritingSection } from '@/components/sections/WritingSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/layout/Footer'
import { MobileDock } from '@/components/layout/MobileDock'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-foreground flex flex-col">
      {/* Fixed Desktop Header */}
      <Navbar />

      {/* Main Content Container */}
      <main className="mx-auto w-full max-w-5xl flex-1 px-5 sm:px-8">
        <Hero />
        <ProjectsSection />
        <WritingSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>

      {/* Mobile Floating Pill Dock */}
      <MobileDock />
    </div>
  )
}
