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
      'Engineered a self-hosted Go service featuring explicit SQL migrations, an in-process 24h scheduler, algorithmic profile scoring, and automated Resend API email digests.',
    outcome:
      'Single-binary reliability with zero external broker dependencies, hash-based deduplication, sub-second query console, and scheduled automated inbox digests.',
    techStack: ['Go', 'PostgreSQL', 'Resend API', 'Docker', 'Railway'],
    status: 'deployed',
    links: {
      github: 'https://github.com/FrankCidney/opportunity-radar',
      live: 'https://github.com/FrankCidney/opportunity-radar',
    },
  },
  {
    id: 'social-network',
    indexNumber: '02',
    title: 'Social Network Platform',
    category: 'personal',
    categoryLabel: 'Personal Project',
    hook: 'Real-time social platform with sub-millisecond WebSocket chat and granular privacy controls.',
    problem:
      'Building responsive real-time community platforms without heavy third-party SaaS dependencies or polling latency.',
    solution:
      'Architected a concurrent Go backend with goroutine-backed WebSocket client hubs, relational follower/group permission states, and a Next.js App Router frontend.',
    outcome:
      'Sub-millisecond local messaging, bi-directional live notifications, public/private profile states, and multi-stage Docker Compose containerization.',
    techStack: ['Go', 'Next.js', 'TypeScript', 'WebSockets', 'SQLite', 'Docker'],
    status: 'deployed',
    links: {
      github: 'https://github.com/FrankCidney/social-network',
      live: 'https://github.com/FrankCidney/social-network',
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
      'Engineered an enterprise RAG assistant with multi-format parsing (.pdf, .docx, .txt), FAISS vector indexing, Gemini 3.6 Flash grounded synthesis, and two-tier caching.',
    outcome:
      '100% retrieval precision on test suites, 3.18s median query latency, 100% duplicate file detection (SHA-256), and persistent query cache with CSV audit export.',
    techStack: ['Python', 'FastAPI', 'FAISS', 'Google Gemini', 'React', 'RAG'],
    status: 'deployed',
    links: {
      github: 'https://github.com/FrankCidney/guidely',
      live: 'https://github.com/FrankCidney/guidely',
    },
  },
  {
    id: 'reki',
    indexNumber: '04',
    title: 'Project Reki',
    category: 'internal',
    categoryLabel: 'Internal · Flying Tea Squad',
    hook: 'Graph-powered tech labor market discovery platform indexing verified East African opportunities.',
    problem:
      'Fragmented Kenyan job boards filled with non-tech noise, fake remote tags, and the "Confidential Company" graph deduplication trap.',
    solution:
      'Technical Lead: Authored the Python normalization pipeline (PR #120), Next.js 16 discovery UI (PR #135), and pre-expansion pagination Cypher queries in Neo4j.',
    outcome:
      '135 offline unit tests (<1.2s execution), sub-millisecond graph queries, and automated OpenAPI 3.1 client/server contract codegen.',
    techStack: ['Go', 'Python', 'Neo4j', 'Next.js 16', 'OpenAPI', 'Cypher'],
    status: 'case-study',
    links: {
      github: 'https://github.com/Flying-Tea-Squad/reki',
      caseStudy: true,
    },
    caseStudy: {
      roleTitle: 'Technical Lead & Backend / Systems Engineer',
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
    category: 'internal',
    categoryLabel: 'Internal · Flying Tea Squad',
    hook: 'Automated micro-influencer escrow marketplace with fraud scoring and instant M-Pesa settlement.',
    problem:
      'Vanity follower fraud, payment insecurity, and slow manual mobile money reconciliation for creators and SMBs.',
    solution:
      'Core Backend Engineer: Engineered AWS KMS envelope encryption, a 5-queue Asynq/Redis priority worker daemon, and contract presence breach monitoring.',
    outcome:
      '~137k encrypts/sec benchmarks, 100% offline dev mock (LocalKMSClient), eliminated task starvation, and prevented DB connection pool exhaustion (PR #87).',
    techStack: ['Go', 'Fiber v3', 'AWS KMS', 'Redis / Asynq', 'PostgreSQL', 'M-Pesa Daraja'],
    status: 'case-study',
    links: {
      github: 'https://github.com/Flying-Tea-Squad/micro_influencer_app',
      caseStudy: true,
    },
    caseStudy: {
      roleTitle: 'Core Backend & Distributed Infrastructure Engineer',
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
