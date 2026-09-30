import type { Profile } from '@/types'

export const profileData: Profile = {
  fullName: 'Francis Awuor',
  preferredName: 'Francis Awuor',
  nickname: 'frank',
  title: 'Full-Stack & Backend Software Engineer',
  tagline:
    'Software engineer working with Go, PostgreSQL, and modern web tools. I build backend services, automation tools, data pipelines, and responsive frontends.',
  bioParagraphs: [
    'I build backend services and APIs primarily using Go and PostgreSQL. My work centers on writing clean code, designing relational databases, and handling background tasks and asynchronous pipelines.',
    'Currently a Software Development Apprentice at Zone 01 Kisumu, working on backend systems for team projects like job data pipelines and payment escrow with M-Pesa.',
  ],
  location: 'Nairobi / Kisumu, Kenya',
  timezone: 'Africa/Nairobi',
  timezoneAbbr: 'EAT',
  timezoneOffset: 3,
  isAvailableForWork: true,
  availabilityStatusText: 'open to engineering roles & projects',
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
    'Task Queues',
    'Data Pipelines',
    'Python',
    'Docker',
    'Redis',
    'REST APIs',
  ],
}
