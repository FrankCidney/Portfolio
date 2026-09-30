import { useState, useMemo } from 'react'
import { projectsData } from '@/data'
import type { Project, ProjectCategory } from '@/types'
import { ProjectCard } from './ProjectCard'
import { CaseStudyModal } from './CaseStudyModal'

type FilterOption = 'all' | ProjectCategory

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData
    return projectsData.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  const counts = useMemo(() => {
    return {
      all: projectsData.length,
      personal: projectsData.filter((p) => p.category === 'personal').length,
      team: projectsData.filter((p) => p.category === 'team').length,
    }
  }, [])

  return (
    <section id="work" className="scroll-mt-20 py-16 sm:py-24 border-t border-border/60">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <div>
          <span className="font-mono text-xs tracking-widest uppercase text-faint">
            Engineering Projects
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
            Featured Systems & Projects
          </h2>
          <p className="mt-2 text-sm text-muted max-w-xl">
            A selection of personal tools and collaborative team systems built with Go, PostgreSQL, Python, and modern web tools.
          </p>
        </div>

        {/* Clean 3-Tab Filter (All, Personal, Team) */}
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-surface/60 p-1 self-start sm:self-auto shrink-0">
          <button
            onClick={() => setActiveFilter('all')}
            className={`rounded-full px-3.5 py-1 text-xs font-mono transition-colors cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-foreground text-background font-medium'
                : 'text-muted hover:text-foreground'
            }`}
          >
            all ({counts.all})
          </button>

          <button
            onClick={() => setActiveFilter('personal')}
            className={`rounded-full px-3.5 py-1 text-xs font-mono transition-colors cursor-pointer ${
              activeFilter === 'personal'
                ? 'bg-foreground text-background font-medium'
                : 'text-muted hover:text-foreground'
            }`}
          >
            personal ({counts.personal})
          </button>

          <button
            onClick={() => setActiveFilter('team')}
            className={`rounded-full px-3.5 py-1 text-xs font-mono transition-colors cursor-pointer ${
              activeFilter === 'team'
                ? 'bg-foreground text-background font-medium'
                : 'text-muted hover:text-foreground'
            }`}
          >
            team ({counts.team})
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
          />
        ))}
      </div>

      {/* Deep-Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  )
}
