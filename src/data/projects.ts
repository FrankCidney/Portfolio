import type { Project } from '@/types'

export const projectsData: Project[] = [
  {
    id: 'opportunity-radar',
    indexNumber: '01',
    title: 'Opportunity Radar',
    category: 'personal',
    categoryLabel: 'Personal Project',
    hook: 'Automated job aggregation & scoring engine that saves 10+ research hours per week.',
    problem:
      'Manual job hunting across fragmented boards results in duplicate listings, stale openings, and poor signal-to-noise ratio.',
    solution:
      'A self-hosted automation service that aggregates job postings from multiple boards, normalizes inconsistent payloads into a clean schema, scores roles against user preferences, and sends a daily email digest.',
    outcome:
      'Engineered in Go as a standalone binary with explicit PostgreSQL SQL migrations, an in-process 24h cron scheduler, SHA-based content deduplication, and automated email delivery via the Resend API.',
    techStack: ['Go', 'PostgreSQL', 'Resend API', 'Docker'],
    status: 'in-progress',
    links: {
      github: 'https://github.com/FrankCidney/opportunity-radar',
    },
  },
  {
    id: 'social-network',
    indexNumber: '02',
    title: 'Social Network Platform',
    category: 'team',
    categoryLabel: 'Team Project',
    hook: 'Real-time social platform with sub-millisecond WebSocket chat and granular privacy controls.',
    problem:
      'Building responsive real-time community platforms without heavy third-party SaaS dependencies or polling latency.',
    solution:
      'A full-stack social networking application featuring instant one-on-one and group messaging, live activity feeds, notification broadcasts, and granular follower/group privacy states.',
    outcome:
      'Architected a concurrent Go WebSocket server with mutex-protected client hubs, relational follower approval state machines, session-based cookie authentication, and a Next.js App Router frontend.',
    techStack: ['Go', 'Next.js', 'TypeScript', 'WebSockets', 'SQLite', 'Docker'],
    status: 'in-progress',
    links: {
      github: 'https://github.com/FrankCidney/social-network',
    },
  },
  {
    id: 'guidely',
    indexNumber: '03',
    title: 'Guidely: Knowledge Q&A Assistant',
    category: 'personal',
    categoryLabel: 'Personal Project',
    hook: 'Internal knowledge RAG assistant delivering grounded answers with zero-hallucination citations.',
    problem:
      'Internal support and IT teams waste hours searching unindexed runbooks and risk LLM hallucinations from ungrounded tools.',
    solution:
      'An enterprise Retrieval-Augmented Generation (RAG) assistant that ingests internal documentation (.pdf, .docx, .txt), indexes content into vector space, and generates verified answers citing source documents.',
    outcome:
      'Built with FastAPI and Google Gemini, featuring FAISS vector retrieval and a two-tier caching system (SHA-256 document hashing + SQLite query vector caching) yielding 3.18s median response time with 100% precision on test queries.',
    techStack: ['Python', 'FastAPI', 'FAISS', 'Google Gemini', 'React', 'RAG'],
    status: 'in-progress',
    links: {
      github: 'https://github.com/FrankCidney/guidely',
    },
  },
  {
    id: 'reki',
    indexNumber: '04',
    title: 'Project Reki',
    category: 'organization',
    categoryLabel: 'Organization · Flying Tea Squad',
    hook: 'Graph-powered tech labor market discovery platform indexing verified East African opportunities.',
    problem:
      'Fragmented Kenyan job boards filled with non-tech noise, misleading foreign remote tags, and the "Confidential Company" graph deduplication trap.',
    solution:
      'A contract-driven labor market discovery platform that crawls tech jobs across East Africa, cleans and classifies roles into canonical entities, and provides faceted search over skill and company graphs.',
    outcome:
      'Authored the Python normalization pipeline (PR #120) with 135 passing offline unit tests (<1.2s), wrote pre-expansion pagination Cypher queries in Neo4j for Go Fiber v3, and built the two-panel Next.js 16 discovery UI (PR #135).',
    techStack: ['Go', 'Python', 'Neo4j', 'Next.js 16', 'OpenAPI', 'Cypher'],
    status: 'case-study',
    links: {
      caseStudy: true,
    },
    caseStudy: {
      roleTitle: 'Backend & Systems Engineer',
      teamSize: '7 Engineers (Backend, Pipeline, Frontend, DBA, QA)',
      organization: 'Flying Tea Squad / Zone 01 Kisumu',
      overview:
        'Project Reki is a high-performance tech-job discovery and labor market intelligence platform built specifically for the East African technology ecosystem, decoupling raw crawl provenance from clean canonical graph models.',
      architecturePoints: [
        'Python 3.12 scraping and normalization pipeline extracting raw postings into immutable containers.',
        'Neo4j 5.26 LTS knowledge graph modeling (:SourcePosting)-[:DESCRIBES]->(:Job) to preserve provenance and avoid duplication corruption.',
        'High-throughput Go 1.24 / Fiber v3 read API executing Cypher queries with subquery pre-expansion pagination.',
        'Responsive Next.js 16 frontend with two-panel discovery browsing, facet filtering, and bidirectional URL query sync.',
        'Neutral OpenAPI 3.1 contract driving automated code generation for Go and TypeScript.',
      ],
      subsystems: [
        {
          title: 'Normalization & Tech Inclusion Engine (PR #120)',
          description:
            'Engineered hierarchical regex rules in Python filtering non-tech roles while protecting SRE titles, mapping 40+ Kenyan hubs, rejecting misleading foreign remote postings, and resolving the "Confidential Company" trap.',
        },
        {
          title: 'Next.js 16 Discovery Web Interface (PR #135)',
          description:
            'Built responsive two-panel split browsing, filter drawers for work mode/experience, single-click pill dismissals, and TanStack Query state caching.',
        },
        {
          title: 'Cypher Pre-Expansion Pagination',
          description:
            'Eliminated graph relationship traversal bottlenecks by sorting and paginating Job nodes first, then using CALL subqueries to fetch skill and company links only for the active 10–20 jobs.',
        },
      ],
      codeReviewHighlights: [
        {
          issue: 'Generator Exception Crash in Batch Web Crawler (PR #141)',
          risk: 'Uncaught HTML DOM parsing errors inside a Python generator would terminate the iterator, dropping all remaining unharvested jobs in that batch.',
          solution:
            'Wrapped parser calls in localized try/except blocks with structured warnings, preserving generator continuity.',
        },
        {
          issue: 'Resource Context Ownership in Go Server (PR #116)',
          risk: 'Manual context cancellations risked goroutine leaks on panics, and single corrupt records threw 500 errors across entire list views.',
          solution:
            'Enforced idiomatic defer cancelStartup() and established fault-isolated record skipping in list responses.',
        },
      ],
      metrics: [
        '135 offline unit tests executed in <1.2s',
        'Sub-millisecond Cypher query execution',
        'Zero linter warnings across ruff, golangci-lint, and eslint',
      ],
    },
  },
  {
    id: 'micro-influencer-app',
    indexNumber: '05',
    title: 'Micro-Influencer Marketplace (MIA)',
    category: 'organization',
    categoryLabel: 'Organization · Flying Tea Squad',
    hook: 'Automated micro-influencer escrow marketplace with fraud scoring and instant M-Pesa settlement.',
    problem:
      'Vanity follower fraud, payment insecurity, and slow manual mobile money reconciliation for creators and SMBs.',
    solution:
      'An automated marketplace enabling African SMBs to book verified creators, escrow campaign funds, verify Instagram post deliverables via Meta APIs, and disburse instant M-Pesa payouts.',
    outcome:
      'Engineered zero-trust AES-256-GCM envelope encryption backed by AWS KMS (~137k ops/sec), a 5-queue Asynq/Redis priority worker daemon preventing task starvation, and contract breach monitoring with N-failure thresholds.',
    techStack: ['Go', 'Fiber v3', 'AWS KMS', 'Redis / Asynq', 'PostgreSQL', 'M-Pesa Daraja'],
    status: 'case-study',
    links: {
      caseStudy: true,
    },
    caseStudy: {
      roleTitle: 'Core Backend Engineer',
      teamSize: '4 Engineers (2 Backend, 2 Frontend)',
      organization: 'Flying Tea Squad / Zone 01 Kisumu',
      overview:
        'A high-performance domain-driven marketplace bridging the trust gap between African SMBs and digital micro-influencers through verified post delivery, authenticity scoring, and automated M-Pesa escrow.',
      architecturePoints: [
        'Modular monolith in Go 1.24 with Fiber v3 and clean 3-tier layering (Delivery -> Service -> Repository).',
        'PostgreSQL 16 with monthly range-partitioning on metric_points for high-throughput social time-series data.',
        'Redis 7 + Asynq background worker daemon with 5 weighted priority queues preventing task starvation.',
        'Envelope encryption (AES-256-GCM + AWS KMS) with unique 32-byte DEKs and in-memory key zeroization.',
        'Meta Graph API v21.0 OAuth 2.0 handshake with HMAC-SHA256 CSRF protection and 60-day token exchange.',
      ],
      subsystems: [
        {
          title: 'Zero-Trust Cryptographic Envelope Encryption',
          description:
            'Implemented AES-256-GCM envelope encryption backed by AWS KMS, with per-token DEK zeroization. Designed LocalKMSClient enabling 100% offline unit/integration testing without AWS accounts.',
        },
        {
          title: '5-Queue Weighted Task Worker Daemon',
          description:
            'Eliminated task starvation by assigning weighted priorities (token-refresh: 6, payout: 5, media-poll: 4, verification: 3, payout-retry: 2), ensuring urgent M-Pesa payouts execute ahead of 20,000+ scraping jobs.',
        },
        {
          title: 'Continuous Presence & Breach Monitoring',
          description:
            'Engineered an automated post monitor with N-consecutive failure threshold logic (3 successive confirmed absences over 18 hours), shielding creators from transient Meta API downtime.',
        },
      ],
      codeReviewHighlights: [
        {
          issue: 'Database Connection Pool Exhaustion in Worker Loop (PR #87)',
          risk: 'Executing external Meta Graph API HTTP calls inside an open GORM transaction loop over 50 items held DB connections open for 15-30 seconds, exhausting the pool under load.',
          solution:
            'Refactored to fetch all remote data into memory first, followed by a fast (<5ms) batch database write transaction.',
        },
        {
          issue: 'False Contract Breaches via Error 100 Parsing (PR #83 & #84)',
          risk: 'Meta Graph API returned Error 100 on static photos querying video-only metrics, which the connector mistakenly parsed as "post deleted," falsely penalizing creators.',
          solution:
            'Implemented explicit subcode inspection and media-type-specific metric parameter queries.',
        },
      ],
      metrics: [
        '~137,000 encrypts/sec and ~168,000 decrypts/sec benchmarks',
        '100% pass rate with Go race detector enabled (go test -v -race)',
        'Zero cloud costs during local development via LocalKMSClient and MockEnqueuer',
      ],
    },
  },
]
