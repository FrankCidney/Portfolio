import { profileData } from '@/data'
import { Briefcase, BookOpen, User, Send, FileText } from 'lucide-react'

export function MobileDock() {
  return (
    <nav
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 md:hidden pointer-events-none"
      aria-label="Mobile Navigation Dock"
    >
      <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-border/80 bg-surface/90 px-2 py-1.5 shadow-2xl backdrop-blur-lg">
        <a
          href="#work"
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground active:scale-95"
          aria-label="Work section"
        >
          <Briefcase className="size-3.5" />
          <span>Work</span>
        </a>

        <a
          href="#writing"
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground active:scale-95"
          aria-label="Writing section"
        >
          <BookOpen className="size-3.5" />
          <span>Writing</span>
        </a>

        <a
          href="#about"
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground active:scale-95"
          aria-label="About section"
        >
          <User className="size-3.5" />
          <span>About</span>
        </a>

        <a
          href="#contact"
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground active:scale-95"
          aria-label="Contact section"
        >
          <Send className="size-3.5" />
          <span>Contact</span>
        </a>

        <div className="h-4 w-px bg-border/80 mx-0.5" />

        <a
          href={profileData.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs text-accent transition-colors hover:text-foreground active:scale-95"
          aria-label="Resume PDF"
        >
          <FileText className="size-3.5" />
          <span>CV</span>
        </a>
      </div>
    </nav>
  )
}
