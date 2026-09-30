import type { Profile } from '@/types'

export const profileData: Profile = {
  fullName: 'Francis Cidney Awuor Otieno',
  preferredName: 'Francis Cidney',
  nickname: 'frank',
  title: 'Full-Stack & Backend Software Engineer',
  tagline:
    'Building resilient backend systems, distributed data pipelines, real-time architectures, and production AI/RAG integrations.',
  bioParagraphs: [
    'I specialize in building robust, performant backend architectures primarily using Go and PostgreSQL. My engineering background spans distributed task queues, cryptographic token security, and real-time event-driven platforms.',
    'Currently serving as a Software Development Apprentice at Zone 01 Kisumu, I lead technical architecture and backend infrastructure on production systems—from graph-powered labor intelligence engines to creator economy marketplaces with M-Pesa escrow.',
  ],
  location: 'Nairobi / Kisumu, Kenya',
  timezone: 'Africa/Nairobi',
  timezoneAbbr: 'EAT',
  timezoneOffset: 3,
  isAvailableForWork: true,
  availabilityStatusText: 'available for full-time roles & high-impact projects',
  email: 'frankcidney@gmail.com',
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
      url: 'https://www.linkedin.com/in/francis-awuor-319985226/',
      username: 'francis-awuor-319985226',
    },
    {
      platform: 'devto',
      label: 'Dev.to',
      url: 'https://dev.to/frankcidney',
      username: 'frankcidney',
    },
    {
      platform: 'x',
      label: 'X (Twitter)',
      url: 'https://x.com/FrankCidney',
      username: '@FrankCidney',
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
