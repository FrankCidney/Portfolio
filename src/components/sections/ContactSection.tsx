import { useState } from 'react'
import { profileData } from '@/data'
import { HandArrow } from '@/components/ui/HandArrow'
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react'

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    } catch {
      // Fallback
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-24 border-t border-border/60">
      <div className="relative rounded-2xl border border-border bg-surface/30 p-8 sm:p-12 backdrop-blur-sm overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 size-64 rounded-full bg-accent/5 blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest uppercase text-faint">
            Let's Collaborate
          </span>

          <h2 className="mt-2 text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
            Have an open role or a system that needs building?
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-normal">
            I am currently open to full-time engineering opportunities and high-impact distributed systems work. Whether you want to discuss backend architecture, Go pipelines, or explore a role, my inbox is open.
          </p>

          {/* Interactive Contact Actions */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Direct Mailto Button */}
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-transform hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              <Mail className="size-4" />
              <span>Send an Email</span>
            </a>

            {/* Copy Email Button with Feedback */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/80 px-5 py-2.5 font-mono text-xs text-muted transition-colors hover:text-foreground hover:bg-surface active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="size-3.5 text-faint" />
                  <span>{profileData.email}</span>
                </>
              )}
            </button>

            {/* Direct Resume Link */}
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-foreground transition-colors self-center sm:self-auto ml-1"
            >
              <span>Download CV</span>
              <ArrowUpRight className="size-3.5 text-faint" />
            </a>
          </div>

          {/* Handwriting Note Aside */}
          <div className="mt-6 flex items-center gap-1.5 text-accent font-hand text-base select-none">
            <HandArrow direction="curved" className="size-4 text-accent shrink-0" />
            <span>I typically respond within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  )
}
