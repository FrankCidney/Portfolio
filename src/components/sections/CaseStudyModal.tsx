import { useEffect } from 'react'
import type { Project } from '@/types'
import { X, ExternalLink, ShieldCheck, Cpu, GitPullRequest, Layers } from 'lucide-react'

interface CaseStudyModalProps {
  project: Project | null
  onClose: () => void
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project || !project.caseStudy) return null

  const { caseStudy } = project

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-background/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-surface p-6 sm:p-8 md:p-10 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex size-8 items-center justify-center rounded-full border border-border bg-surface/80 text-muted transition-colors hover:text-foreground hover:bg-surface active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          aria-label="Close case study modal"
        >
          <X className="size-4" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-border/80 pb-6 pr-8">
          <div className="flex items-center gap-2 font-mono text-xs text-accent">
            <span>{project.indexNumber}</span>
            <span>·</span>
            <span className="uppercase tracking-widest">{project.categoryLabel}</span>
          </div>

          <h2
            id="case-study-title"
            className="mt-2 text-2xl sm:text-3xl font-medium tracking-tight text-foreground"
          >
            {project.title}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-faint">
            <span>{caseStudy.roleTitle}</span>
            {caseStudy.teamSize && (
              <>
                <span>·</span>
                <span>{caseStudy.teamSize}</span>
              </>
            )}
            {caseStudy.organization && (
              <>
                <span>·</span>
                <span>{caseStudy.organization}</span>
              </>
            )}
          </div>
        </div>

        {/* Overview */}
        <div className="mt-6">
          <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint mb-2">
            <Layers className="size-3.5 text-accent" />
            <span>Executive Overview</span>
          </h3>
          <p className="text-sm leading-relaxed text-muted font-normal">
            {caseStudy.overview}
          </p>
        </div>

        {/* Architecture Highlights */}
        {caseStudy.architecturePoints.length > 0 && (
          <div className="mt-8">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint mb-3">
              <Cpu className="size-3.5 text-accent" />
              <span>Core Architectural Highlights</span>
            </h3>
            <ul className="space-y-2 border-l border-border/70 pl-4">
              {caseStudy.architecturePoints.map((point, idx) => (
                <li key={idx} className="text-sm leading-relaxed text-muted">
                  <span className="text-accent mr-1.5 font-mono text-xs">▸</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Subsystems Built */}
        {caseStudy.subsystems.length > 0 && (
          <div className="mt-8">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint mb-3">
              <ShieldCheck className="size-3.5 text-accent" />
              <span>Engineered Subsystems</span>
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {caseStudy.subsystems.map((sub, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border/80 bg-background/40 p-4 transition-colors hover:border-border"
                >
                  <h4 className="font-mono text-xs font-medium text-foreground mb-1.5">
                    {sub.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Code Review & Architecture Leadership */}
        {caseStudy.codeReviewHighlights && caseStudy.codeReviewHighlights.length > 0 && (
          <div className="mt-8">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint mb-3">
              <GitPullRequest className="size-3.5 text-accent" />
              <span>Technical Review & Production Guardrails</span>
            </h3>
            <div className="space-y-3">
              {caseStudy.codeReviewHighlights.map((review, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border/70 bg-background/50 p-4 font-mono text-xs"
                >
                  <div className="text-foreground font-medium mb-1">
                    {review.issue}
                  </div>
                  <div className="text-muted/80 text-[11px] mb-2 leading-relaxed">
                    <span className="text-accent uppercase tracking-wider text-[10px]">Risk:</span> {review.risk}
                  </div>
                  <div className="text-emerald-500 text-[11px] leading-relaxed">
                    <span className="uppercase tracking-wider text-[10px]">Solution:</span> {review.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Link Footer */}
        <div className="mt-10 flex items-center justify-between border-t border-border/80 pt-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] text-faint bg-background/60 border border-border/60 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw inline-flex items-center gap-1.5 font-mono text-xs text-foreground hover:text-accent transition-colors"
            >
              <span>Repository</span>
              <ExternalLink className="size-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
