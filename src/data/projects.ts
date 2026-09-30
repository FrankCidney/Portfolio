import type { Project } from '@/types'

export const projectsData: Project[] = [
  {
    id: 'opportunity-radar',
    indexNumber: '01',
    title: 'Opportunity Radar',
    category: 'personal',
    categoryLabel: 'Personal Project',
    hook: 'Automated job aggregator that scores roles and sends a daily email digest.',
    problem:
      'Checking multiple job boards every day takes hours, and you run into lots of duplicate postings and irrelevant roles.',
    solution:
      'A Go service that pulls job listings from different sites, cleans the data, scores jobs based on your preferences, and emails you a daily summary.',
    outcome:
      'Built as a single Go binary with PostgreSQL. Runs on a 24-hour schedule with content hashing to remove duplicate jobs, and uses Resend to deliver emails.',
    techStack: ['Go', 'PostgreSQL', 'Resend API', 'Docker'],
    status: 'in-progress',
    links: {
      github: 'https://github.com/FrankCidney/opportunity-radar',
    },
  },
  {
    id: 'micro-influencer-app',
    indexNumber: '02',
    title: 'Micro-Influencer Marketplace (MIA)',
    category: 'team',
    categoryLabel: 'Team · Flying Tea Squad',
    hook: 'Influencer marketplace with M-Pesa escrow and post verification.',
    problem:
      'Small businesses and creators often struggle with trust: creators worry about getting paid, and businesses worry about fake followers or unposted deliverables.',
    solution:
      'A platform where businesses book creators, hold campaign funds in escrow, automatically verify that sponsored Instagram posts were published, and pay creators through M-Pesa.',
    outcome:
      'Built encrypted token storage using AES-256-GCM and AWS KMS, set up background job queues in Redis/Asynq for payouts, and created a monitoring system to track live posts.',
    techStack: ['Go', 'Fiber', 'PostgreSQL', 'Redis / Asynq', 'AWS KMS', 'M-Pesa'],
    status: 'case-study',
    links: {
      caseStudy: true,
    },
    caseStudy: {
      roleTitle: 'Core Backend Engineer',
      teamSize: '4 Engineers (2 Backend, 2 Frontend)',
      organization: 'Flying Tea Squad / Zone 01 Kisumu',
      overview:
        'A marketplace platform helping small businesses and micro-influencers work together safely through deliverable verification, creator engagement checks, and automated M-Pesa escrow.',
      architecturePoints: [
        'Modular backend in Go using Fiber with clean layer separation (handlers, services, repositories).',
        'PostgreSQL database with monthly table partitioning for high-volume social metrics.',
        'Redis and Asynq worker daemon with 5 priority queues to ensure payment tasks run before background scraping.',
        'Token encryption using AES-256-GCM and AWS KMS with local mocks for offline testing.',
        'Meta Graph API integration for Instagram login, token exchange, and post metrics.',
      ],
      subsystems: [
        {
          title: 'Encrypted Token Storage',
          description:
            'Encrypted user social tokens using AES-256-GCM and AWS KMS keys. Built a local mock client so the entire test suite runs offline without AWS costs.',
        },
        {
          title: 'Priority Task Queues',
          description:
            'Set up 5 distinct queues in Asynq with different weights so urgent payouts and token refreshes execute ahead of long-running media polls.',
        },
        {
          title: 'Post Presence Monitoring',
          description:
            'Built a worker to periodically check that sponsored posts stay live, requiring 3 confirmed absences before flagging a post as removed.',
        },
      ],
      codeReviewHighlights: [
        {
          issue: 'Database Connection Pool Exhaustion in Worker',
          risk: 'External Meta API calls were being made inside open database transaction loops, holding connections open for up to 30 seconds.',
          solution:
            'Refactored the code to fetch all external data first, then write the batch to the database in a quick transaction under 5ms.',
        },
        {
          issue: 'False Contract Breaches on Photos',
          risk: 'The Meta API returns Error 100 when querying video metrics on regular photos, which was mistakenly treated as a deleted post.',
          solution:
            'Added media-type checks to only query video metrics for video posts, preventing false breach warnings for creators.',
        },
      ],
      metrics: [
        '~137,000 encrypts/sec local benchmark',
        '100% tests pass with Go race detector enabled',
        'Zero cloud costs during development using local mocks',
      ],
    },
  },
  {
    id: 'reki',
    indexNumber: '03',
    title: 'Project Reki',
    category: 'team',
    categoryLabel: 'Team · Flying Tea Squad',
    hook: 'Tech job board for East Africa with graph-based search.',
    problem:
      'Kenyan job boards are full of non-tech roles, fake "remote" tags that require foreign work permits, and agencies listed as "Confidential Company".',
    solution:
      'A web platform that crawls East African tech jobs, filters out non-tech noise with Python cleaners, and lets users search jobs, skills, and companies using a Neo4j graph database.',
    outcome:
      'Wrote the Python data cleaners with 135 unit tests, tuned Neo4j queries for fast response times in Go Fiber, and built the two-panel browse UI in Next.js.',
    techStack: ['Go', 'Python', 'Neo4j', 'Next.js', 'Cypher'],
    status: 'case-study',
    links: {
      caseStudy: true,
    },
    caseStudy: {
      roleTitle: 'Backend & Systems Engineer',
      teamSize: '7 Engineers (Backend, Pipeline, Frontend, DBA, QA)',
      organization: 'Flying Tea Squad / Zone 01 Kisumu',
      overview:
        'Project Reki is a tech job discovery and labor market platform built for East Africa. It separates raw web crawl data from clean graph models so job seekers can search verified tech opportunities.',
      architecturePoints: [
        'Python web scraping and cleaning pipeline that stores raw posts in immutable containers.',
        'Neo4j graph database linking clean job listings to companies and skills without merging unrelated companies.',
        'Go and Fiber API server running fast Cypher queries with pagination.',
        'Next.js frontend with split-panel browsing, search, and filter drawers.',
        'Shared OpenAPI contract to keep Go backend and TypeScript frontend types in sync.',
      ],
      subsystems: [
        {
          title: 'Python Data Cleaners & Filters',
          description:
            'Wrote rules to filter out non-tech postings, resolve 40+ Kenyan towns, catch foreign remote restrictions, and handle missing company names.',
        },
        {
          title: 'Next.js Job Browsing Interface',
          description:
            'Built the split-view job search layout with filter drawers, URL query sync, and responsive mobile behavior.',
        },
        {
          title: 'Neo4j Query Pagination',
          description:
            'Structured Cypher queries to sort and paginate jobs first before traversing relationships, keeping query responses sub-millisecond.',
        },
      ],
      codeReviewHighlights: [
        {
          issue: 'Parser Exception in Batch Crawler',
          risk: 'Uncaught parsing errors inside a Python generator crashed the entire scraper batch, losing all remaining jobs.',
          solution:
            'Added error handling around page parsing with structured logs so the scraper keeps running through the rest of the batch.',
        },
        {
          issue: 'Context Leaks in Go Server',
          risk: 'Improper startup context cancellations risked resource leaks, and single bad records threw errors across the entire job list.',
          solution:
            'Ensured proper context cancellation cleanup and isolated single-item failures so the rest of the list returns normally.',
        },
      ],
      metrics: [
        '135 offline unit tests running in under 1.2s',
        'Sub-millisecond database queries',
        'Zero lint warnings across Python and Go codebases',
      ],
    },
  },
  {
    id: 'social-network',
    indexNumber: '04',
    title: 'Social Network Platform',
    category: 'team',
    categoryLabel: 'Team Project',
    hook: 'Real-time social app with chat, posts, and privacy controls.',
    problem:
      'Building real-time features like chat and notifications often feels slow or complicated without relying on expensive third-party services.',
    solution:
      'A full-stack social web app where users can create posts, join groups, send direct messages in real time, and control who can see their profile.',
    outcome:
      'Built the backend in Go using WebSockets for instant messaging, modeled user relationships and permissions in SQLite, and built the frontend in Next.js.',
    techStack: ['Go', 'Next.js', 'TypeScript', 'WebSockets', 'SQLite', 'Docker'],
    status: 'in-progress',
    links: {
      github: 'https://github.com/FrankCidney/social-network',
    },
  },
  {
    id: 'guidely',
    indexNumber: '05',
    title: 'Guidely: Knowledge Q&A Assistant',
    category: 'personal',
    categoryLabel: 'Personal Project',
    hook: 'Document Q&A assistant that answers questions with exact citations.',
    problem:
      'Finding specific answers inside lengthy internal documentation, manuals, and runbooks takes too long, and regular AI tools often make things up.',
    solution:
      'A document search and Q&A assistant where you upload files (.pdf, .docx, .txt), and it uses Google Gemini to answer questions with exact citations to the source file.',
    outcome:
      'Built with FastAPI and FAISS for vector search. Added two-tier caching to prevent re-indexing the same file twice, achieving 3.18s median response times.',
    techStack: ['Python', 'FastAPI', 'FAISS', 'Google Gemini', 'React'],
    status: 'in-progress',
    links: {
      github: 'https://github.com/FrankCidney/guidely',
    },
  },
]
