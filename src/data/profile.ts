import type { Profile } from '@/types'

export const profileData: Profile = {
  fullName: 'Francis Awuor',
  preferredName: 'Francis Awuor',
  nickname: 'frank',
  title: 'Full-Stack & Backend Software Engineer',
  tagline:
    'Building resilient backend systems, distributed data pipelines, real-time architectures, and production AI/RAG integrations.',
  bioParagraphs: [
    'I specialize in building robust, performant backend architectures primarily using Go and PostgreSQL. My engineering focus centers on clean API design, concurrent data pipelines, and relational database integrity.',
    'As a Software Development Apprentice at Zone 01 Kisumu, I work on backend systems and distributed services—implementing cryptographic token management, building prioritized background workers, and writing data normalization pipelines.',
  ],
  location: 'Nairobi / Kisumu, Kenya',
  timezone: 'Africa/Nairobi',
  timezoneAbbr: 'EAT',
  timezoneOffset: 3,
  isAvailableForWork: true,
  availabilityStatusText: 'available for full-time roles & high-impact projects',
  email: 'franciscidneyawuor@gmail.com',
  phone: '+254702672470',
  resumeUrl: '/Francis_Cidney_CV.pdf',
  socialLinks: [
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/FrankCidney',
      username: 'FrankCidney',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/francis-awuor',
      username: 'francis-awuor',
    },
    {
      platform: 'devto',
      label: 'Dev.to',
      url: 'https://dev.to/francis_cidney_awuor',
      username: 'francis_cidney_awuor',
    },
  ],
  techStackKeywords: [
    'Go (Golang)',
    'PostgreSQL',
    'Next.js / React',
    'Python',
    'WebSockets',
    'Docker',
    'Redis / Asynq',
    'AWS KMS',
  ],
}
