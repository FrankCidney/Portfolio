import { profileData } from '@/data'
import { GithubIcon, LinkedinIcon, DevtoIcon, XIcon } from '@/components/ui/SocialIcons'
import { ArrowUpRight } from 'lucide-react'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {

  return (
    <footer className="border-t border-border/60 py-12 mt-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* Left: Identity & Copyright */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <span>{profileData.preferredName}</span>
            <span className="font-mono text-xs text-faint">·</span>
            <span className="font-mono text-xs text-faint">
              {profileData.title}
            </span>
          </div>
          <p className="font-mono text-xs text-faint">
            © {CURRENT_YEAR} Francis Cidney Awuor. Designed for clarity & performance.
          </p>
        </div>

        {/* Right: Social Links & Resume */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/FrankCidney"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-surface/40 text-muted transition-all hover:-translate-y-0.5 hover:text-foreground hover:bg-surface hover:border-border/90"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="size-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/francis-awuor-319985226/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-surface/40 text-muted transition-all hover:-translate-y-0.5 hover:text-foreground hover:bg-surface hover:border-border/90"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="size-4" />
          </a>

          <a
            href="https://dev.to/francis_cidney_awuor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-surface/40 text-muted transition-all hover:-translate-y-0.5 hover:text-foreground hover:bg-surface hover:border-border/90"
            aria-label="Dev.to Articles"
          >
            <DevtoIcon className="size-4 text-accent" />
          </a>

          <a
            href="https://x.com/FrankCidney"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-surface/40 text-muted transition-all hover:-translate-y-0.5 hover:text-foreground hover:bg-surface hover:border-border/90"
            aria-label="X Profile"
          >
            <XIcon className="size-4" />
          </a>

          <div className="h-4 w-px bg-border/80 mx-1" />

          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-foreground transition-colors"
          >
            <span>Resume</span>
            <ArrowUpRight className="size-3 text-faint" />
          </a>
        </div>
      </div>
    </footer>
  )
}
