import type { Project } from '@/types'
import { ArrowUpRight, FileSearch } from 'lucide-react'
import { GithubIcon } from '@/components/ui/SocialIcons'

interface ProjectCardProps {
  project: Project
  onOpenCaseStudy?: (project: Project) => void
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface/40 p-6 sm:p-7 transition-all duration-300 hover:border-border/90 hover:bg-surface/75 hover:shadow-xl">
      <div>
        {/* Card Header: Index & Category */}
        <div className="flex items-center justify-between font-mono text-[11px] text-faint">
          <span className="transition-colors group-hover:text-accent font-semibold">
            {project.indexNumber}
          </span>
          <span className="lowercase">
            {project.categoryLabel}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-foreground">
          {project.title}
        </h3>

        {/* Outcome Hook */}
        <p className="mt-1.5 flex items-baseline gap-1.5 text-sm sm:text-[15px] leading-snug text-foreground/90 font-normal">
          <span className="text-accent font-mono select-none">↳</span>
          <span>{project.hook}</span>
        </p>

        {/* Problem -> Solution -> Outcome Breakdown */}
        <dl className="mt-6 border-t border-border/60 pt-4 space-y-3.5">
          <div className="grid grid-cols-[68px_1fr] items-baseline gap-2">
            <dt className="font-mono text-[10px] uppercase tracking-widest text-faint">
              Problem
            </dt>
            <dd className="text-xs sm:text-sm leading-relaxed text-muted font-normal">
              {project.problem}
            </dd>
          </div>

          <div className="grid grid-cols-[68px_1fr] items-baseline gap-2">
            <dt className="font-mono text-[10px] uppercase tracking-widest text-faint">
              Solution
            </dt>
            <dd className="text-xs sm:text-sm leading-relaxed text-muted font-normal">
              {project.solution}
            </dd>
          </div>

          <div className="grid grid-cols-[68px_1fr] items-baseline gap-2">
            <dt className="font-mono text-[10px] uppercase tracking-widest text-faint">
              Outcome
            </dt>
            <dd className="text-xs sm:text-sm leading-relaxed text-foreground/80 font-normal">
              {project.outcome}
            </dd>
          </div>
        </dl>
      </div>

      {/* Card Footer: Tech Badges & Interactive Links */}
      <div className="mt-8 border-t border-border/60 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] text-faint bg-background/50 border border-border/60 px-2 py-0.5 rounded transition-colors group-hover:border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 shrink-0">
          {project.links.caseStudy && onOpenCaseStudy && (
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="link-draw inline-flex items-center gap-1 font-mono text-xs font-medium text-accent transition-colors hover:text-accent/80 active:scale-95 cursor-pointer"
            >
              <FileSearch className="size-3.5" />
              <span>Deep Dive ↗</span>
            </button>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-foreground transition-colors"
              aria-label={`Source code for ${project.title}`}
            >
              <GithubIcon className="size-3.5" />
              <span>Code ↗</span>
            </a>
          )}

          {project.links.live && project.links.live !== project.links.github && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw inline-flex items-center gap-1 font-mono text-xs text-foreground hover:text-accent transition-colors"
              aria-label={`Live demo for ${project.title}`}
            >
              <span>Demo</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
