# AI Agent Guidelines & Project Context

> **Project:** Personal Engineering Portfolio  
> **Developer / Author:** Francis (Frank) Cidney Awuor Otieno ([@FrankCidney](https://github.com/FrankCidney))  
> **Status:** Active Development  
> **Target Audience:** Recruiters, Engineering Managers, Tech Leads, and Clients

---

## 1. Project Context & Reference Standards

* **Purpose & Value Proposition:**  
  A high-converting, engineering-forward portfolio website designed to pass the **15-second recruiter test**. It proves backend and distributed systems competence (Go, PostgreSQL, WebSockets, RAG/AI, Distributed Queues, Cryptography) through 5 core projects (3 deployed personal projects, 2 deep-dive internal team projects), thought leadership articles, and culture fit.
* **Architecture:**  
  **Pure Frontend Static Web Application** (No backend server or database required).
* **Tech Stack & Tooling:**
  * **Framework:** Next.js (App Router, React 19/18, TypeScript).
  * **Styling:** Tailwind CSS configured with custom dark mode design tokens.
  * **Icons:** Lucide React (clean, tree-shakeable SVG icons).
  * **Typography:** Geist Sans (body/headings), Geist Mono (metadata/code/labels), Caveat (conversational handwriting notes).
  * **Content Architecture:** Type-safe, in-repo static data files (`src/data/*.ts`) for zero latency, instant edge caching, and effortless updates.
  * **Deployment Target:** Vercel / Railway (Static export / Global CDN).
* **Authoritative Project Documents (Single Sources of Truth):**
  * **Design & Aesthetic Spec:** [`docs/dev/design-spec.md`](./design-spec.md) (Colors, dark mode tokens, typography, link-draw underline animation, 3D card tilt, photo frame styling).
  * **Content & Technical Matrix:** [`docs/dev/project-and-resume-context.md`](./project-and-resume-context.md) (CV facts, detailed project breakdowns, architecture flows, metrics, and copywriting hooks for Opportunity Radar, Social Network, Guidely, Reki, and MIA).
  * **Phased Roadmap & Execution:** [`docs/dev/implementation-plan.md`](./implementation-plan.md) (Phase-by-phase implementation checklist and agent handoff protocol).

---

## 2. Working Agreements & AI Guidance Rules

* **Developer Collaboration:**  
  Treat the developer as an intelligent, skilled software engineer who values clean code, architectural rigor, and clear communication.
* **Proactivity:**  
  Proactively suggest high-polish UI patterns, clean component boundaries, accessibility improvements (WCAG AA), responsive layout behaviors, and performance optimizations without waiting for explicit prompting.
* **Transparency & Communication:**  
  Explain *why* certain patterns or tools are chosen. Discuss or verify architectural decisions before making non-obvious choices.
* **Instruction vs. Implementation Mode:**  
  When scoping a new task or phase, outline the plan and component structure in chat first. When authorized to build, execute cleanly and systematically.
* **No "For Now" Shortcuts:**
  * **Color Tokens:** NEVER hardcode arbitrary colors (e.g. `#111`, `#fff`). Always use the standardized design tokens (`--background`, `--foreground`, `--surface`, `--border`, `--muted`, `--faint`, `--accent`).
  * **Copywriting:** NEVER invent generic or fabricated project descriptions. Always pull real technical facts, metrics, and architecture details directly from [`project-and-resume-context.md`](./project-and-resume-context.md).
  * **Type Safety:** Maintain strict TypeScript compliance with zero `any` shortcuts.
* **Production-Grade Standard:**
  * Clean, semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  * Responsive across all screen sizes (mobile 375px+, tablet 768px, desktop 1024px+).
  * Accessible interactive elements with visible focus rings (`focus-visible:ring-1 focus-visible:ring-accent`).
  * Smooth micro-interactions: `.link-draw` hover underlines, tactile button presses (`active:scale-95`), and smooth scroll offsets (`scroll-mt-20`).

---

## 3. Code Documentation & Commenting Rules

* **Natural, Human Developer Tone:**
  * Optimize for clarity and understandability over strict brevity or robotic rules.
  * Write in a natural developer voice without AI clichés or robotic prefixes (avoid `Decision:`, `Caveat:`, or `We use a...`).
  * Clearly explain non-obvious UI math, animation timings, or responsive layout logic.
* **Clean Section Dividers:**
  * Use lightweight, readable dividers: `// --- Section Name ---`.
  * Avoid bulky ASCII banners or walls of `===`.
* **Preserve Documentation Integrity:**
  * Preserve all existing comments and documentation that are unrelated to current code edits.

---

## 4. Git, Branching & Commit Guidelines

* **Commit Messages:** Follow the **Conventional Commits** specification:
  * Format: `<type>(<scope>): <short description in imperative mood>`
  * Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`.
  * Scopes: Component or domain area (e.g., `feat(hero): add framed photo with ambient glow`, `feat(projects): add 3d perspective tilt to project cards`, `docs(dev): update implementation plan`).
* **Incremental Commits:**
  * Make commits in **logical, incremental chunks** (acting as save points to revert to if needed) rather than one massive commit at the very end.
  * Test the build (`npm run build` or `npm test`) before creating commits.
* **Remote Push Policy:**
  * Never push to remote (`git push`) unless explicitly requested by the developer.

---

## 5. Project Tracking & Agent Handoff

* Keep [`docs/dev/implementation-plan.md`](./implementation-plan.md) updated as phases and steps are completed by checking off items.
* When handing off to another agent session, leave a brief summary of the completed step and what the next agent should execute immediately.
