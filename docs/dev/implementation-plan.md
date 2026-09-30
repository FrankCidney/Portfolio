# Portfolio Implementation Plan & Engineering Roadmap

> **Author:** Francis Cidney Awuor Otieno ([@FrankCidney](https://github.com/FrankCidney))  
> **Target:** Step-by-step master plan for constructing the portfolio web application.  
> **Design Specification:** [`docs/dev/design-spec.md`](./design-spec.md)  
> **Content & Technical Matrix:** [`docs/dev/project-and-resume-context.md`](./project-and-resume-context.md)  
> **Target Aesthetic:** Minimalist, engineering-forward, calm dark mode inspired by [Shahroz Ahmad](https://www.shahrozahmad.com/).  
> **Theme:** Dark Mode Only (`#0a0a0a`)

---

## 1. Executive Summary & Goals

The objective is to engineer a portfolio that passes the **15-second recruiter/engineering manager test**, demonstrating technical competence, distributed systems thinking, and clean code before inviting the visitor into deeper case studies and frictionless contact.

### Mandatory Requirements Implemented:
1. **Hero with Professional Photo:** 2-column desktop layout featuring a warm, high-contrast framed photo on the right, balanced with a clear value proposition, live availability beacon, and quick CTAs on the left.
2. **Deployed Personal Projects (3):** Opportunity Radar, Social Network, and Guidely (complete with Problem $\rightarrow$ Solution $\rightarrow$ Outcome copywriting, tech tags, and links to live demos/code).
3. **Internal / Team Projects (2):** Project Reki and Micro-Influencer App (MIA) (highlighting technical leadership, AWS KMS cryptography, Asynq priority queues, and Neo4j graph modeling).
4. **Writing & Articles Section:** Clean list linking to technical insights/Dev.to articles.
5. **About Me & Relevant Hobbies:** Engineering philosophy paired with intentional hobbies framed through problem-solving and systems-thinking lenses.
6. **Socials & Resume:** Frictionless links to GitHub, LinkedIn, Dev.to, and X, with direct resume viewing and downloading.

---

## 2. Recommended Tech Stack & Architecture

| Layer | Selected Tool | Rationale |
| :--- | :--- | :--- |
| **Framework & Bundler** | **React + Vite (TypeScript, SPA)** | Pure client-side static application. Lightning-fast HMR, sub-second builds, zero server complexity, and clean modular React components. |
| **Styling** | **Tailwind CSS** | Utility-first CSS configured with custom dark mode tokens (`#0a0a0a`), bespoke animations (`link-draw`, `rise-in`, `blink`), and zero runtime overhead. |
| **Icons** | **Lucide React** | Clean, minimalist, tree-shakeable SVG icons for GitHub, LinkedIn, external links, and tech badges. |
| **Fonts** | **Web Fonts** (`Geist`, `Geist Mono`, `Caveat`) | Clean typography pairing: Geist Sans for headings/body, Geist Mono for code/metadata, and Caveat for conversational handwriting notes. |
| **Content Architecture** | **Type-Safe In-Repo Data (`src/data/*.ts`)** | Structured TypeScript data models (`projects.ts`, `profile.ts`, `articles.ts`, `hobbies.ts`). Fast, version-controlled, zero external CMS dependency. |
| **Deployment Target** | **Vercel / Railway / GitHub Pages** | Zero-configuration continuous deployment serving pre-built static assets from the `dist/` directory. |

---

## 3. Repository File Structure Blueprint

```text
portfolio/
├── docs/
│   └── dev/
│       ├── design-spec.md                     # Design tokens, CSS, animations
│       ├── project-and-resume-context.md      # Project matrix & CV details
│       ├── implementation-plan.md             # This master execution roadmap
│       ├── AGENTS.md                          # AI agent guidelines & workflow
│       ├── PORTFOLIO_BREAKDOWN_MICRO_INFLUENCER.md
│       └── PORTFOLIO_BREAKDOWN_REKI.md
├── public/
│   ├── images/
│   │   ├── profile.jpg                        # Professional portrait
│   │   └── og-image.png                       # Social preview card
│   └── Francis_Cidney_CV.pdf                  # Direct resume PDF
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                     # Fixed desktop blur header
│   │   │   ├── MobileDock.tsx                 # Floating pill dock for mobile
│   │   │   └── Footer.tsx                     # Social links, dynamic EAT time, copyright
│   │   ├── sections/
│   │   │   ├── Hero.tsx                       # Bio, availability beacon, photo frame
│   │   │   ├── ProjectsSection.tsx            # Proof of Shipped Things (Filterable)
│   │   │   ├── ProjectCard.tsx                # Card with 3D tilt, tags, outcome hook
│   │   │   ├── CaseStudyModal.tsx             # Interactive deep-dive modal for Reki & MIA
│   │   │   ├── WritingSection.tsx             # Technical articles list with link-draw
│   │   │   ├── AboutSection.tsx               # Narrative bio & relevant hobbies
│   │   │   └── ContactSection.tsx             # Final callout, email with copy feedback
│   │   └── ui/
│   │       ├── Badge.tsx                      # Tech stack & status badge
│   │       ├── Button.tsx                     # Tactile pill button (active:scale-95)
│   │       └── HandArrow.tsx                  # Hand-drawn curved SVG arrows
│   ├── data/
│   │   ├── profile.ts                         # Bio, contact, socials, local time config
│   │   ├── projects.ts                        # 5 projects with full schema
│   │   ├── articles.ts                        # Technical writing list
│   │   └── hobbies.ts                         # Relevant hobbies & engineering traits
│   ├── types/
│   │   └── index.ts                           # Project, Article, Profile TypeScript types
│   ├── App.tsx                                # Root application component
│   ├── index.css                              # Design tokens, link-draw, animations
│   └── main.tsx                               # React entry point
├── index.html                                 # HTML entry with font links & metadata
├── vite.config.ts                             # Vite configuration with @ path alias
├── tailwind.config.ts                         # Tailwind theme & color tokens
├── postcss.config.js                          # PostCSS config
├── tsconfig.json                              # TypeScript compiler configuration
└── package.json                               # Dependencies & build scripts
```

---

## 4. Phase-by-Phase Implementation Roadmap

---

### Phase 1: Environment & Project Scaffolding
*Goal: Initialize the React + Vite project, install dependencies, and configure the custom dark theme system.*

- [ ] **Step 1.1: Project Initialization**
  * Bootstrap Vite with React and TypeScript.
- [ ] **Step 1.2: Dependencies Setup**
  * Install Tailwind CSS, PostCSS, Autoprefixer, Lucide React, and utility packages:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npm install lucide-react clsx tailwind-merge
    ```
- [ ] **Step 1.3: Design Tokens & CSS Configuration**
  * In `src/index.css`, configure Tailwind directives and strict dark theme CSS variables matching [`docs/dev/design-spec.md`](./design-spec.md):
    ```css
    :root {
      --background: #0a0a0a;
      --foreground: #edebe6;
      --muted: #a1a099;
      --faint: #85847d;
      --surface: #141412;
      --border: #232320;
      --accent: #fbbf24;
      --accent-soft: #292003;
      --status-emerald: #00bb7f;
      --status-emerald-dark: #009767;
    }
    ```
  * Implement utility classes:
    * `.link-draw` (pseudo-element underline expanding from 0 to 100% on hover).
    * `@keyframes blink` (live availability indicator).
    * `@keyframes rise-in` (staggered entrance transition).
    * `perspective: 800px` for 3D card tilt.
- [ ] **Step 1.4: Typography & HTML Entry**
  * In `index.html`, load Google Fonts (`Geist`, `Geist Mono`, `Caveat`).
  * Ensure `<html class="dark h-full">` and `<body class="bg-background text-foreground antialiased selection:bg-accent/20">`.
  * Configure `vite.config.ts` with path alias `@/*` -> `./src/*`.

---

### Phase 2: Type Definitions & Content Modeling
*Goal: Populate all structured data models from the verified context documents.*

- [ ] **Step 2.1: TypeScript Domain Types (`src/types/index.ts`)**
  * Define interfaces: `Project`, `ProjectCategory ('personal' | 'internal')`, `Article`, `Hobby`, `SocialLink`.
- [ ] **Step 2.2: Profile Data (`src/data/profile.ts`)**
  * Name: Francis Cidney Awuor Otieno (Frank Cidney).
  * Headline: "Full-Stack Software Engineer building resilient distributed systems, data pipelines, and real-time architectures."
  * Location: "Kisumu / Nairobi, Kenya · East Africa Time (UTC+3)".
  * Availability: "Open to full-time engineering roles & high-impact contracts".
  * Social Links: LinkedIn, GitHub, Dev.to, X.
  * Direct email & resume paths.
- [ ] **Step 2.3: Project Data Matrix (`src/data/projects.ts`)**
  * Populate all 5 projects with full Problem, Role/Solution, Outcome metrics, and Case Study narratives:
    1. **Opportunity Radar:** Self-hosted Go job automation service, PostgreSQL explicit SQL, 24h scheduler, Resend digest.
    2. **Social Network:** Full-stack Go WebSocket server, goroutine hub, Next.js App Router, relational privacy models.
    3. **Guidely:** Enterprise RAG Q&A Assistant, FAISS vector index, Gemini 3.6 Flash, SHA-256 two-tier caching, 3.18s median latency.
    4. **Project Reki:** Tech Lead: Graph-powered labor market platform, Python tech inclusion filters (PR #120), Next.js 16 discovery UI (PR #135), Neo4j Cypher.
    5. **Micro-Influencer App (MIA):** Core Backend: Go 1.24 / Fiber v3, AWS KMS envelope encryption, Asynq 5-queue priority worker, breach monitoring DFA.
- [ ] **Step 2.4: Writing & Hobbies Data (`src/data/articles.ts`, `src/data/hobbies.ts`)**
  * Technical articles on Dev.to (Go concurrency, RAG caching, envelope encryption).
  * 3–4 intentional hobbies highlighting problem-solving, discipline, and systems thinking (e.g. Open-source tooling, competitive chess/strategy, endurance running).

---

### Phase 3: Core UI Component Construction
*Goal: Build the responsive, accessible UI components following the design system.*

- [ ] **Step 3.1: Header Navigation (`Navbar.tsx` & `MobileDock.tsx`)**
  * **Desktop Header:** Fixed top bar (`fixed inset-x-0 top-0 z-50 h-14 border-b border-border/60 bg-background/75 backdrop-blur-md max-w-5xl mx-auto`).
    * Name logo on left.
    * Links (`#work`, `#writing`, `#about`) with `.link-draw`.
    * Direct "Resume" button and "Get in touch" CTA pill.
  * **Mobile Floating Dock:** Bottom floating capsule (`fixed inset-x-0 bottom-4 z-50 flex justify-center md:hidden`).
- [ ] **Step 3.2: Hero Section (`Hero.tsx`)**
  * **Left Column:**
    * Live status pill: Pulsing green emerald beacon (`animate-blink`) + "open to engineering roles".
    * Hero Heading: "francis cidney" in `text-5xl sm:text-7xl font-medium tracking-tighter` with staggered `.rise-in` animation.
    * Handwritten aside: `font-hand text-accent text-xl` with curved SVG arrow ("or just frank").
    * Value Proposition paragraph: What you build and solve.
    * Dynamic location / time badge: `nairobi, kenya · [live local time] eat`.
    * Primary CTA (`View Projects`) + Email link with `.link-draw` + *"I actually reply"* handwritten pointer.
    * Tech Stack pills with hover lift (`Go`, `PostgreSQL`, `Next.js`, `Python`, `Docker`, `WebSockets`).
  * **Right Column (Professional Photo Frame):**
    * Desktop right-aligned frame: `aspect-[4/5] rounded-2xl border border-border bg-surface/50 p-2 shadow-xl`.
    * Ambient glow: `absolute -inset-1 rounded-2xl bg-accent/5 blur-xl -z-10`.
    * Image hover: Subtle micro-scale (`group-hover:scale-[1.02]`) and contrast enhancement.
    * Corner sticker: Optional handwriting accent (*"the human behind the terminal"*).
- [ ] **Step 3.3: Projects Section (`ProjectsSection.tsx` & `ProjectCard.tsx`)**
  * Segmented filter tabs: `[All]`, `[Personal / Deployed]`, `[Internal / Team]`.
  * Grid: `grid gap-5 sm:grid-cols-2`.
  * Card Anatomy:
    * Sequence number: `01`, `02` in `font-mono text-faint group-hover:text-accent`.
    * Category badge: `personal project` vs. `internal · flying tea squad`.
    * Project Title & Outcome Hook with `↳` in `text-accent`.
    * Structured Definition List (`grid grid-cols-[64px_1fr]`):
      * `PROBLEM`: 1-sentence architectural or user pain point.
      * `ROLE`: Exactly what Francis engineered.
      * `OUTCOME`: Measurable metric or status.
    * Footer: Tech tags + Action buttons (`Live Demo ↗`, `Source Code ↗`, `View Case Study ↗`).
- [ ] **Step 3.4: Deep-Dive Case Study Modal / Drawer (`CaseStudyModal.tsx`)**
  * When a visitor clicks "View Case Study" on Reki or MIA, a slide-over drawer or modal opens.
  * Displays the full dossier: Executive Summary, System Architecture diagram, Francis's Subsystems, and Code Review Stories (e.g. PR #87 connection pool fix, PR #141 generator crash fix).
- [ ] **Step 3.5: Writing & Articles Section (`WritingSection.tsx`)**
  * Eyebrow: `font-mono text-xs tracking-widest uppercase text-faint` ("THOUGHT LEADERSHIP").
  * Heading: "Notes on engineering & architecture".
  * List items with `border-b border-border first:border-t`.
  * Titles with `.link-draw` and publication date/platform on the right.
- [ ] **Step 3.6: About Me & Relevant Hobbies (`AboutSection.tsx`)**
  * Narrative: Engineering philosophy, apprenticeship background at Zone 01 Kisumu, and core technical drivers.
  * Hobbies Grid: Card badges linking personal interests to technical traits (e.g., Open Source Mentorship $\rightarrow$ *Code Review & Communication*; Strategy Games $\rightarrow$ *Systems Modeling*).
- [ ] **Step 3.7: Contact Section & Site Footer (`ContactSection.tsx`, `Footer.tsx`)**
  * Pitch: "Have an open role or a distributed system that needs building?"
  * One-click copy email button with visual confirmation ("Copied to clipboard!").
  * Bottom bar with complete social links (LinkedIn, GitHub, Dev.to, X) and direct `Resume (PDF)` download link.

---

### Phase 4: Assets & Visual Polish
*Goal: Place real image/resume assets and test responsive polish.*

- [ ] **Step 4.1: Photo & Resume Assets**
  * Copy `CV.pdf` to `public/Francis_Cidney_CV.pdf`.
  * Add professional photo to `public/images/profile.jpg` (or SVG avatar placeholder pending user photo file).
- [ ] **Step 4.2: Micro-Interactions & Accessibility Verification**
  * Verify keyboard navigation (`Tab` navigation with visible outline `focus-visible:ring-1 focus-visible:ring-accent`).
  * Verify responsive layouts across mobile (375px), tablet (768px), and desktop (1280px+).
  * Ensure high text contrast ratios meeting WCAG AA standards.

---

### Phase 5: Build, Test & Deployment
*Goal: Production build verification and deployment readiness.*

- [ ] **Step 5.1: Build Verification**
  * Run `npm run lint` and `npm run build` to verify zero TypeScript errors or broken imports.
- [ ] **Step 5.2: OpenGraph & SEO Verification**
  * Configure `generateMetadata` with Twitter card, canonical URL, and schema.org `Person` JSON-LD.
- [ ] **Step 5.3: Deployment to Railway / Vercel**
  * Connect repo to Vercel/Railway for automated continuous deployment.

---

## 5. Agent Handoff Protocol & Execution Guide

Any AI agent or developer continuing work should follow this checklist:

1. **Check Completed Steps:** Review the checkboxes in **Section 4** above to identify where the last turn stopped.
2. **Read the Design Spec:** Always consult [`docs/dev/design-spec.md`](./design-spec.md) before writing CSS to maintain strict adherence to color tokens, font families, and animation curves.
3. **Use the Context Matrix:** All project descriptions, metrics, and copywriting MUST be pulled directly from [`docs/dev/project-and-resume-context.md`](./project-and-resume-context.md). Do not invent generic filler copy.
4. **Keep Scope Tight:** Implement one phase or step at a time, verify using `npm run build`, and check off the completed item.
