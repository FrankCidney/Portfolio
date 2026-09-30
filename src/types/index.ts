// --- Domain TypeScript Interfaces ---

export type ProjectCategory = 'personal' | 'team'
export type ProjectDeploymentStatus = 'deployed' | 'in-progress' | 'case-study'

export interface ProjectLinks {
  live?: string
  github?: string
  caseStudy?: boolean
}

export interface ProjectCaseStudy {
  roleTitle: string
  teamSize?: string
  organization?: string
  overview: string
  architecturePoints: string[]
  subsystems: {
    title: string
    description: string
  }[]
  codeReviewHighlights?: {
    issue: string
    risk: string
    solution: string
  }[]
  metrics: string[]
}

export interface Project {
  id: string
  indexNumber: string // '01', '02', etc.
  title: string
  category: ProjectCategory
  categoryLabel: string // e.g. "Personal Project" or "Internal · Flying Tea Squad"
  hook: string // 1-sentence value statement prefixed by ↳
  problem: string
  solution: string
  outcome: string
  techStack: string[]
  status: ProjectDeploymentStatus
  links: ProjectLinks
  caseStudy?: ProjectCaseStudy
}

export interface Article {
  id: string
  title: string
  description?: string
  publishDate: string
  readTime: string
  platform: string // e.g. "Dev.to"
  url: string
  isPlaceholder?: boolean
}

export interface Hobby {
  id: string
  name: string
  category: string
  description: string
  engineeringTrait: string // The transferable engineering skill (e.g. "Systems Thinking", "Discipline")
  iconName: string // Lucide icon identifier
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'devto' | 'x' | 'email'
  label: string
  url: string
  username: string
}

export interface Profile {
  fullName: string
  preferredName: string
  nickname: string // e.g. "frank"
  title: string
  tagline: string
  bioParagraphs: string[]
  location: string
  timezone: string
  timezoneAbbr: string // "EAT"
  timezoneOffset: number // UTC+3
  isAvailableForWork: boolean
  availabilityStatusText: string
  email: string
  phone?: string
  resumeUrl: string
  socialLinks: SocialLink[]
  techStackKeywords: string[]
}
