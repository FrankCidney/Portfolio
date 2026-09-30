import { profileData } from '@/data'
import { ArrowUpRight } from 'lucide-react'

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-5 sm:px-8">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-80"
          aria-label="Home"
        >
          <span>{profileData.preferredName}</span>
          <span className="font-mono text-xs text-faint group-hover:text-accent transition-colors">
            /
          </span>
          <span className="font-hand text-base text-accent">
            {profileData.nickname}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm" aria-label="Main Navigation">
          <a
            href="#work"
            className="link-draw text-muted hover:text-foreground transition-colors"
          >
            Work
          </a>
          <a
            href="#writing"
            className="link-draw text-muted hover:text-foreground transition-colors"
          >
            Writing
          </a>
          <a
            href="#about"
            className="link-draw text-muted hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw inline-flex items-center gap-1 text-muted hover:text-foreground transition-colors"
          >
            <span>Resume</span>
            <ArrowUpRight className="size-3.5 text-faint" />
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background transition-transform hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  )
}
