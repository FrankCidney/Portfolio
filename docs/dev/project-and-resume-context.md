# Portfolio Content Matrix & Technical Context

> **Target:** Authoritative content reference for portfolio copywriting and development.  
> **Source Materials:** `CV.pdf`, GitHub repositories (`opportunity-radar`, `social-network`, `guidely`), and Zone 01 apprenticeship records.  
> **Audience:** Recruiters, Engineering Managers, Technical Leads, and Clients.

---

## 1. Professional Narrative & Profile Summary

### Core Identity & Positioning
* **Name:** Francis Cidney Awuor Otieno (Frank Cidney)
* **Title:** Full-Stack & Backend Software Engineer
* **Primary Focus:** High-performance backend architectures with **Go** and **PostgreSQL**, robust data pipelines, real-time WebSocket systems, and production AI/RAG integrations.
* **Education:** Multimedia University of Kenya — B.Sc. in Computer Science | Second Class Honours (Upper Division) (2019 – 2023).
* **Current Status:** Software Development Apprentice at **Zone 01 Kisumu** (Jan 2026 – Present).
* **Location:** Kisumu / Nairobi, Kenya (East Africa Time, UTC+3).
* **Contact & Links:**
  * **Email:** frankcidney@gmail.com *(or configured professional email)*
  * **Phone:** +254 702 672 470
  * **GitHub:** [github.com/FrankCidney](https://github.com/FrankCidney)
  * **LinkedIn:** [linkedin.com/in/frank-cidney](https://linkedin.com/in/frank-cidney) *(or active handle)*
  * **Dev.to / X:** *(to be linked in hero and footer)*

### Technical Skill Matrix

| Domain | Technologies & Tools |
| :--- | :--- |
| **Languages** | **Go (Golang)**, **JavaScript / TypeScript**, **Python**, **SQL** |
| **Backend & APIs** | Go Standard Library `net/http`, Fiber, GORM, FastAPI, REST APIs, WebSockets, gRPC/LND |
| **Databases & Storage** | **PostgreSQL** (Explicit SQL, indexing, relational constraints), **SQLite**, **FAISS** (Vector Index), AWS S3/KMS |
| **Frontend & UI** | **Next.js** (App Router), **React**, Tailwind CSS, Vite, HTML5 Templates |
| **AI & Search** | Google Gemini (`gemini-3.6-flash`, `gemini-embedding-001`), RAG Pipelines, Semantic Search |
| **DevOps & Infrastructure** | Docker, Docker Compose, Linux/Unix, Git, GitHub Actions, Railway, Resend API |
| **Domain Verticals** | FinTech & Lightning Payments (LND, multisig), Automated Ingestion/Pipelines, Real-Time Social, Enterprise Knowledge Retrieval |

---

## 2. Professional Experience Breakdown

### A. Zone 01 Kisumu — Software Development Apprentice
* **Duration:** January 2026 – Present
* **Core Responsibilities & Impact:**
  * **MIA (Micro-Influencer App):** Core contributor to a micro-influencer marketing platform. Implemented Meta Graph API integrations for Instagram/Facebook account verification and campaign telemetry. Architected secure token management and credential rotation leveraging **AWS KMS**.
  * **FinTech & Messaging SDKs:** Designed and built idiomatic **Go SDKs** providing unified, resilient interfaces for Kenyan payment gateways (e.g., M-Pesa/mobile money APIs) and SMS/messaging backends.
  * **Labor Data Systems:** Contributed to data aggregation engines analyzing regional labor market trends and technical opportunity matching.

### B. JaGedo — Frontend Developer (Contract)
* **Duration:** June 2024 – August 2024
* **Core Responsibilities & Impact:**
  * Built responsive, dynamic enterprise dashboard interfaces using **Next.js** and Tailwind CSS.
  * Integrated complex RESTful backend endpoints with optimistic UI updates, client-side validation, and state caching.

---

## 3. Detailed Project Breakdown (Deployed Projects)

---

### Project 1: Opportunity Radar
* **Category:** Personal Project / Automation Engine (Deployed)
* **Repository:** [FrankCidney/opportunity-radar](https://github.com/FrankCidney/opportunity-radar)
* **Live Target:** Railway Cloud Deployment with PostgreSQL & Resend

#### A. The Problem
Job hunting across disparate tech boards is fragmented, noisy, and inefficient. Engineers spend hours manually sifting through boards, repeatedly encountering duplicate postings, outdated openings, and roles that fail to match their specific tech stack or compensation expectations.

#### B. The Solution
A self-hosted, continuous Go service that automatically extracts job listings from multiple sources, standardizes inconsistent raw payloads into a canonical relational schema, algorithmically scores opportunities against custom user preferences, and delivers curated top-tier digests to the user's inbox on a scheduled 24-hour cadence.

#### C. Architecture & Technical Anatomy
* **Language & Runtime:** Go (Single-binary architecture for high operability and zero external daemon dependency).
* **Database & Migrations:** PostgreSQL with explicit SQL queries and automated startup migrations (no bulky ORM; full index visibility).
* **Pipeline Stages:**
  ```
  Scraper (Raw Sources) 
    ──> Normalization (RawJob ──> Canonical Job) 
    ──> Company Resolution (Get or Create) 
    ──> Algorithmic Scoring (Preferences Profile) 
    ──> PostgreSQL Persistence (Deduplication via Uniqueness Constraints) 
    ──> Scheduled Digest Generator 
    ──> Resend API Dispatch
  ```
* **Process-Local Scheduler:** Engineered an in-process, non-sleeping scheduler with configurable intervals (`24h`), startup run triggers, and graceful 30-minute run timeouts.
* **Deduplication Engine:** Leverages unique identity indexing and SHA-based content hashing to prevent duplicate listings across successive ingest runs.
* **Delivery & Interface:** Admin HTTP console with server-rendered HTML templates for live profile tuning, combined with transactional email delivery via the **Resend API**.

#### D. Copywriting Card Summary
* **Hook (`↳`):** Automated opportunity aggregation & scoring engine that saves 10+ research hours per week.
* **Problem:** Manual job hunting across fragmented boards results in duplicate listings and poor signal-to-noise ratio.
* **Role / Solution:** Designed and engineered the end-to-end Go ingestion pipeline, scoring algorithm, and automated Resend email digest.
* **Tags:** `Go` · `PostgreSQL` · `Resend API` · `Docker` · `Railway`

---

### Project 2: Social Network
* **Category:** Personal Project / Real-Time Full-Stack Platform (Deployed)
* **Repository:** [FrankCidney/social-network](https://github.com/FrankCidney/social-network)
* **Stack:** Go, Next.js (App Router), TypeScript, WebSockets, SQLite, Tailwind CSS, Docker Compose.

#### A. The Problem
Modern community platforms often suffer from monolithic bloat, excessive latency in private messaging, and opaque data control. Creating a responsive social experience requires synchronizing high-concurrency real-time events (chat, notifications, presence) with strict relational privacy boundaries (followers, private profiles, group governance).

#### B. The Solution
A full-stack, event-driven social networking platform featuring instant bi-directional messaging, real-time notification broadcasts, and granular social graph management. Driven by a concurrent Go backend WebSocket hub and a modular Next.js App Router frontend.

#### C. Architecture & Technical Anatomy
* **Backend Core (Go):**
  * Modular package design: `auth`, `chat`, `comment`, `follow`, `groups`, `notification`, `post`, `websocket`, `apperror`.
  * **WebSocket Hub:** Goroutine-backed connection manager utilizing thread-safe mutex locks for client registration, broadcast routing, and clean unregister/teardown.
  * **Session-Based Auth:** Secure HTTP-only cookies, password hashing with `bcrypt`, and authenticated context middleware.
* **Social Graph & Privacy Engine:**
  * Public vs. Private account toggling.
  * Follower relationship state machine (`pending` approval vs. `accepted`).
  * Group subsystem: Group creation, invite/request workflows, role-based moderation, and group-scoped event posts.
* **Frontend Core (Next.js 14+ & TypeScript):**
  * Grouped route organization: `(auth)` for login/register and `(main)` for `feed`, `messages`, `groups`, `notifications`, `profile`.
  * Real-time UI updates with persistent WebSocket listeners and optimistic feed updates.
* **Containerization:** Multi-stage Dockerfiles unified via `docker-compose.yml` with persistent volume management for SQLite storage.

#### D. Copywriting Card Summary
* **Hook (`↳`):** Real-time social platform with sub-millisecond WebSocket chat and granular privacy controls.
* **Problem:** Building responsive real-time community tools without heavy third-party SaaS dependencies or polling latency.
* **Role / Solution:** Built the concurrent Go WebSocket server, relational follower/group permission model, and Next.js frontend.
* **Tags:** `Go` · `Next.js` · `TypeScript` · `WebSockets` · `SQLite` · `Docker`

---

### Project 3: Guidely
* **Category:** Personal Project / Enterprise AI Assistant (Deployed)
* **Repository:** [FrankCidney/guidely](https://github.com/FrankCidney/guidely)
* **Stack:** Python 3.10+, FastAPI, FAISS, Google Gemini (`gemini-3.6-flash`, `gemini-embedding-001`), React + Vite, Tailwind CSS.

#### A. The Problem
Support engineers, IT operators, and internal teams waste hours daily searching through hundreds of pages of unindexed internal policies, incident runbooks, and technical guidelines. Generic LLM tools often hallucinate answers and fail to provide verifiable source citations.

#### B. The Solution
**Guidely** is an enterprise Retrieval-Augmented Generation (RAG) assistant that unifies multi-format document ingestion (`.pdf`, `.docx`, `.txt`, `.md`), high-speed vector retrieval via FAISS, and grounded natural-language answering powered by Google Gemini with strict source citations.

#### C. Architecture & Technical Anatomy
* **Two-Tier Cost & Latency Caching System:**
  1. *Document Ingestion Caching:* SHA-256 byte-level file hashing prevents duplicate vectorization upon re-uploading documents ($100\%$ cache hit, $0$ embedding cost).
  2. *Query Embedding Caching:* Persistent SQLite table caches 768-dimensional query vectors, providing instant retrieval for identical and repeated questions.
* **RAG Pipeline Flow:**
  ```
  Document Ingestion:
  File (.pdf, .docx, .txt, .md) ──> SHA-256 Check ──> Text Extract 
    ──> Sliding-Window Chunking (500 words, 50 overlap) 
    ──> Gemini 768-dim Embeddings ──> FAISS IndexFlatIP (L2 Normalized)

  Query Execution:
  User Query ──> Contextual Reformulation (History) 
    ──> Query Cache Check ──> FAISS Cosine Retrieval (Top-3) 
    ──> Grounded Generation (Gemini 3.6 Flash) ──> Verified Citations Response
  ```
* **Hallucination Prevention Guardrails:** System prompts enforce strict grounding—answers must cite exact document filenames and snippets. If context lacks evidence, it explicitly returns *"I could not find the answer in the available documentation."*
* **Telemetry & Audit Logging:** Measures median and p95 latencies, tracks query volume, records exact citations, and allows CSV log export for compliance.

#### D. Verified Metrics & Audit Results
* **Retrieval Accuracy:** $100\%$ precision on standard internal query sets.
* **Response Latency:** Median response time of **3.18s** (including full LLM streaming synthesis), with tail p95 latency under **3.95s**.
* **Cache Efficiency:** $100\%$ duplicate upload detection; instantaneous cache retrieval.

#### E. Copywriting Card Summary
* **Hook (`↳`):** Internal knowledge RAG assistant delivering grounded answers with zero-hallucination citations.
* **Problem:** Internal teams waste time searching fragmented documentation and risk LLM hallucinations from ungrounded tools.
* **Role / Solution:** Architected the multi-format RAG pipeline, two-tier SHA/SQLite caching, FAISS vector indexing, and FastAPI backend.
* **Tags:** `Python` · `FastAPI` · `FAISS` · `Gemini AI` · `React` · `RAG`

---

## 4. Internal & Team Projects (Flying Tea Squad / Zone 01 Kisumu)

---

### Project 4: Project Reki — Graph-Powered Tech Labor Market Intelligence
* **Category:** Internal / Team Project (Description & Case Study)
* **Organization & Repo:** Flying-Tea-Squad (`Flying-Tea-Squad/reki`)
* **Role:** **Technical Lead & Backend / Systems Engineer** (7-person cross-functional team)
* **Stack:** Python 3.12, Neo4j 5.26 LTS, Go 1.24/1.26, Fiber v3, Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, OpenAPI 3.1, TanStack Query.

#### A. The Problem
In emerging tech hubs like Nairobi ("Silicon Savannah"), tech job postings are scattered across dozens of fragmented job boards (BrighterMonday, Fuzu, MyJobMag). Job seekers face severe data friction:
1. *Extreme Noise:* General boards mix tech roles with drivers, accountants, nurses, and administrative clerks.
2. *The "Confidential Company" Graph Deduplication Trap:* Kenyan recruitment agencies frequently list jobs as *"Company: Confidential"*. Naive deduplication algorithms merge hundreds of unrelated jobs under a single fake company entity.
3. *Misleading Remote Opportunities:* Postings advertised as "remote" frequently bury disqualifiers (*"Must have US citizenship"*, *"EU work permit required"*), wasting local engineers' time.
4. *Data Loss in Scraper Pipelines:* Ingestion pipelines that mutate data in-flight destroy original web provenance, preventing bug fixes without re-crawling.

#### B. The Solution & Architecture
A contract-driven, graph-powered labor intelligence platform:
* **Python Normalization Engine (`pipeline/cleaners`):** Authored by Francis ([PR #120](https://github.com/Flying-Tea-Squad/reki/pull/120)). Hierarchical fast-fail tech-role classification rules, Kenyan locality mapping (40+ hubs), negative remote restriction regexes, company name sanitization, and resilient temporal parsing with 135 passing offline unit tests.
* **Graph Database (Neo4j 5.26 LTS):** Decoupled `(:SourcePosting)-[:DESCRIBES]->(:Job)` model, preserving raw source links and HTML provenance while linking canonical jobs to company and skill nodes.
* **High-Throughput Go API (Fiber v3):** Subquery pre-expansion pagination in Cypher (`CALL (job) { ... }`), paginating jobs *before* relationship traversal to guarantee deterministic sub-millisecond responses.
* **Discovery Frontend (Next.js 16 App Router):** Authored by Francis ([PR #135](https://github.com/Flying-Tea-Squad/reki/pull/135)). Two-panel responsive browse layout, multi-facet filter drawer, bidirectional URL query state synchronization, and TanStack Query caching.
* **Neutral OpenAPI 3.1 Contract:** Authoritative contract driving Go Fiber and TypeScript codegen, catching routing drift prior to deployment.

#### C. Technical Leadership & Critical Reviews
* **Prevented Crawler Batch Drops (PR #141):** Wrapped detail page parsing in localized exception handling, preventing unhandled DOM parsing errors in Python generators from killing entire crawling batches.
* **Context Ownership in Go (PR #116):** Remediated startup context cancellation leaks (`defer cancelStartup()`) and isolated single-job parsing failures to protect list views.
* **Release Management:** Authored the multi-stage PR merge sequence and sprint integration roadmap across Python, Go, and Next.js teams.

#### D. Copywriting Card Summary
* **Hook (`↳`):** Graph-powered tech labor market discovery platform indexing verified East African opportunities.
* **Problem:** Fragmented Kenyan job boards filled with non-tech noise, fake remote tags, and broken deduplication.
* **Role / Solution:** Tech Lead: Built the Python tech-filtering normalization pipeline, Next.js 16 discovery UI, and Neo4j Cypher queries.
* **Tags:** `Go` · `Python` · `Neo4j` · `Next.js 16` · `OpenAPI` · `Cypher`

---

### Project 5: Micro-Influencer Marketplace (MIA)
* **Category:** Internal / Team Project (Description & Case Study)
* **Organization & Repo:** Flying-Tea-Squad (`Flying-Tea-Squad/micro_influencer_app`)
* **Role:** **Core Backend & Distributed Infrastructure Engineer** (Team of 4)
* **Stack:** Go 1.24, Fiber v3, PostgreSQL 16 + GORM 2.0 (monthly partitioned `metric_points`), Redis 7 + Asynq, AES-256-GCM + AWS KMS, Safaricom Daraja B2C API, Meta Graph API v21.0, Next.js 15.

#### A. The Problem
In emerging creator economies like Kenya, influencer marketing is plagued by vanity metric fraud (bought bot followers), payment insecurity (brands fear paying upfront; creators fear non-payment), and tax/disbursement friction with local mobile money (M-Pesa).

#### B. The Solution & Subsystems Built by Francis
* **Zero-Trust Token Cryptography (`backend/pkg/crypto`):**
  * Envelope encryption combining **AES-256-GCM** with **AWS KMS** (FIPS 140-3 HSM). Unique 32-byte Data Encryption Keys (DEKs) generated per token with in-memory zeroization upon return.
  * Designed `LocalKMSClient` mock enabling 100% offline unit/integration test execution without AWS costs or internet connection (~137,000 ops/sec).
* **Distributed Task Queue & Worker Daemon (`backend/cmd/worker`):**
  * Standalone Asynq/Redis daemon with **5 weighted priority queues** (`token-refresh: 6`, `payout: 5`, `media-poll: 4`, `verification: 3`, `payout-callback-retry: 2`).
  * Eliminates task starvation: urgent M-Pesa payouts and token refreshes execute instantly ahead of 20,000+ background media scraping jobs.
* **Meta Graph API v21.0 Integration (`backend/internal/social`):**
  * Complete OAuth 2.0 handshake for Instagram/Facebook with HMAC-SHA256 CSRF protection and 60-day long-lived token exchange. Zero-leak DTO architecture.
* **Contract Lifecycle State Machine (DFA):**
  * Deterministic 8-state automaton ($\text{invited} \rightarrow \text{accepted} \rightarrow \text{posted} \rightarrow \text{verified} \rightarrow \text{monitoring} \rightarrow \text{completed}$).
* **Continuous Presence & Breach Monitoring (`backend/internal/monitoring/breach`):**
  * $N$-consecutive failure threshold logic: requires 3 successive confirmed absent polls over 18 hours before declaring a contract breached, completely protecting creators from transient Meta API downtime.
* **Creator Authenticity Scoring Engine:**
  * Mathematical heuristic ($0 \dots 100$) evaluating follower-to-following ratios, comment-to-like distributions, and unnatural engagement spikes to detect purchased bot followers.

#### C. Code Review Leadership
* **Prevented DB Connection Pool Exhaustion (PR #87):** Caught external Meta API HTTP calls executed inside an open GORM database transaction loop over 50 items. Refactored to fetch-then-write pattern, preserving pool capacity.
* **Prevented False Contract Breaches (PR #83 & #84):** Remediated naive Meta Graph API Error 100 parsing that mistakenly classified static photo queries as deleted posts.

#### D. Copywriting Card Summary
* **Hook (`↳`):** Automated micro-influencer escrow marketplace with fraud scoring and instant M-Pesa settlement.
* **Problem:** Vanity follower fraud, payment insecurity, and slow manual mobile money reconciliation for creators.
* **Role / Solution:** Core Backend Engineer: Engineered AWS KMS envelope encryption, 5-queue Asynq worker daemon, and contract breach monitor.
* **Tags:** `Go` · `Fiber v3` · `AWS KMS` · `Redis/Asynq` · `PostgreSQL` · `M-Pesa Daraja`

---

## 5. Copywriting Formula Reference for Portfolio Cards

Whenever generating UI cards or case studies, adhere strictly to this schema:

```
[Card Number: 01] • [Category: Personal Project | Internal Project]
[Title: Project Name]
↳ [Hook: Measurable outcome or 1-sentence value statement]

PROBLEM:  [Clear 1-sentence user / architectural pain point]
ROLE:     [What Francis engineered, designed, and delivered]
OUTCOME:  [Concrete technical achievement, metric, or live deployment]

[Tech Stack Badges]                      [Live Demo ↗] [Source Code ↗]
```
