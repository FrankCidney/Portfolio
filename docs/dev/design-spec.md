# Portfolio Design System & UI Specification

> **Reference Source:** [Shahroz Ahmad Portfolio](https://www.shahrozahmad.com/)  
> **Theme:** Dark Mode Only  
> **Status:** Standard Design Specification for Development

---

## 1. Aesthetic Vision & Tone

The design embodies a **refined, minimalist, engineering-forward dark aesthetic**:
* **Calm & High Contrast:** Deep, warm near-black surfaces (`#0a0a0a`) paired with soft off-white typography (`#edebe6`) and hair-thin borders (`#232320`), avoiding harsh pure white or flat grays.
* **Typographic Hierarchy:** Triple-font pairing of crisp modern neo-grotesque sans-serif, precise technical monospace for metadata/labels, and expressive warm handwriting for personality accents.
* **Micro-Delight & Kinetic Polish:** Subtle entrance stagger, custom underline draws, 3D card tilt on hover, tactile button scaling, and pulsing live availability indicators.
* **Content First:** High information density without visual clutter. Proof of competence delivered via structured "Problem $\rightarrow$ Solution $\rightarrow$ Outcome" project cards.

---

## 2. Color System (Dark Theme Tokens)

All interface elements strictly use these color tokens:

| Token Name | Hex Code | Role & Usage |
| :--- | :--- | :--- |
| `--background` | `#0a0a0a` | Main page background (deep obsidian, warm dark) |
| `--surface` | `#141412` | Elevated card backgrounds, button surfaces, input fields |
| `--border` | `#232320` | Subtle hairline dividers, container borders, card outlines |
| `--foreground` | `#edebe6` | Primary high-contrast text, active headings, solid buttons |
| `--muted` | `#a1a099` | Secondary body text, descriptions, inactive nav links |
| `--faint` | `#85847d` | Tertiary metadata, dates, uppercase labels, card indices (`01`) |
| `--accent` | `#fbbf24` | Warm amber/gold for handwritten notes, arrows, highlights, focus rings |
| `--accent-soft` | `#292003` | Ambient glows, subtle highlight tags, badges |
| `--status-emerald` | `#00bb7f` | Live availability pulsing dot (`bg-emerald-500`) |
| `--status-emerald-dark`| `#009767` | Live availability dot core (`bg-emerald-600`) |

### CSS Variables Definition
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
  --color-emerald-500: #00bb7f;
  --color-emerald-600: #009767;
}
```

---

## 3. Typography System

### Font Families
1. **Sans (Body & Headings):** `Geist Sans` (or `Inter` fallback)
   * CSS: `font-family: var(--font-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;`
   * Weights: `400` (Regular), `500` (Medium).
   * Tracking: Headlines use negative tracking: `tracking-tight` (`-0.025em`) or `tracking-tighter` (`-0.05em`).
2. **Mono (Labels, Metadata, Dates, Code, Indices):** `Geist Mono` (or `ui-monospace`, `JetBrains Mono`)
   * CSS: `font-family: var(--font-mono), monospace;`
   * Usage: Card sequence numbers (`01`), uppercase section badges (`WORK`, `EXPERIENCE`), tech badges, date ranges, and time indicators.
3. **Handwriting (Personality Notes & Asides):** `Caveat`
   * CSS: `font-family: "Caveat Variable", "Caveat", cursive;`
   * Usage: Conversational notes with curved SVG arrows (e.g. *"I actually reply"*, *"or just Frank"*, *"try this"*).

### Typographic Scale
* **Hero Headline:** `text-5xl sm:text-7xl font-medium tracking-tighter leading-none`
* **Section Heading:** `text-2xl sm:text-3xl font-medium tracking-tight text-foreground`
* **Section Eyebrow:** `font-mono text-xs tracking-widest uppercase text-faint`
* **Card Title:** `text-lg font-medium tracking-tight text-foreground`
* **Body / Subtitle:** `text-[15px] sm:text-lg leading-relaxed text-muted`
* **Mini Labels (dt):** `font-mono text-[10px] uppercase tracking-widest text-faint`
* **Metadata / Dates:** `font-mono text-[11px] text-faint`

---

## 4. Key Animations & Micro-Interactions

### A. The Signature Underline Draw (`.link-draw`)
Interactive links feature a smooth underline that expands from 0% to 100% width on hover.

```css
.link-draw {
  position: relative;
  text-decoration: none;
}

.link-draw::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: currentColor;
  transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.link-draw:hover::after,
.link-draw:focus-visible::after {
  width: 100%;
}
```

### B. Entrance Animation (`.rise-in`)
Elements glide upward and fade into view on load or scroll with staggered delays:

```css
@keyframes rise-in {
  0% {
    opacity: 0;
    transform: translateY(14px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.rise-in {
  animation: 0.5s cubic-bezier(0.16, 1, 0.3, 1) backwards rise-in;
}

/* Stagger delays across children */
.delay-1 { animation-delay: 0.05s; }
.delay-2 { animation-delay: 0.12s; }
.delay-3 { animation-delay: 0.20s; }
.delay-4 { animation-delay: 0.30s; }
.delay-5 { animation-delay: 0.42s; }
```

### C. Live Status Indicator Pulse (`.animate-blink`)
Used beside the "Open to opportunities" badge in the hero:

```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}

.animate-blink {
  animation: 2.4s ease-in-out infinite blink;
}
```

HTML snippet:
```html
<span class="relative flex size-2">
  <span class="absolute inline-flex h-full w-full animate-blink rounded-full bg-emerald-500/60"></span>
  <span class="relative inline-flex size-2 rounded-full bg-emerald-600"></span>
</span>
```

### D. 3D Card Hover Tilt
Project cards apply a subtle 3D perspective tilt on cursor hover (max 4deg tilt), with depth perspective:
```css
.card-perspective {
  perspective: 800px;
  transform-style: preserve-3d;
}

.card-tilt {
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease;
}

.card-tilt:hover {
  background-color: rgba(20, 20, 18, 0.7); /* hover:bg-surface/70 */
}
```

### E. Tactile Button & Icon Click Feedback
* Buttons: `active:scale-95 transition-transform`
* Tool badges & Social icons: `transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground hover:bg-surface`

---

## 5. Component Anatomy & Layout Blueprint

### Max Width & Container
* Central container: `max-w-5xl mx-auto px-5 sm:px-8`
* Section vertical padding: `py-20 sm:py-24`
* Section scroll margin: `scroll-mt-20` (prevents sticky nav overlap when jumping to anchors)

---

### A. Navigation System
1. **Desktop Header (`hidden md:flex`):**
   * Position: `fixed inset-x-0 top-0 z-50 h-14 border-b border-border/60 bg-background/75 backdrop-blur-md`
   * Left: Logo / Brand name in `font-medium tracking-tight text-foreground`
   * Right: Clean text links (`Projects`, `Articles`, `About`, `Resume`) using `.link-draw text-muted hover:text-foreground text-sm`
   * Direct CTA pill button: `rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background active:scale-95`
2. **Mobile Floating Pill Dock (`flex md:hidden`):**
   * Position: `fixed inset-x-0 bottom-4 z-50 flex justify-center px-3`
   * Wrapper: `rounded-full border border-border bg-background/85 px-2 py-1.5 shadow-lg backdrop-blur-md flex items-center gap-1`
   * Links: Pill items with `rounded-full px-2.5 py-1.5 text-[13px] text-muted hover:text-foreground`

---

### B. Hero Section
* **Grid:** 2-column layout on desktop (`grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] gap-10 items-center`).
* **Left Column (The Pitch):**
  1. *Live status:* Blinking green dot + `font-mono text-xs text-muted` ("Available for full-time & high-impact projects").
  2. *Name Title:* `text-5xl sm:text-7xl font-medium tracking-tighter text-foreground` with handwriting annotation beside it (`font-hand text-accent text-xl`).
  3. *Supporting Value Proposition:* `mt-5 max-w-xl text-lg sm:text-xl text-muted` (Focus on what you build, solve, and deliver).
  4. *Location & Local Time:* `font-mono text-xs text-faint` (e.g. `nairobi, kenya · dynamic local time`).
  5. *Action CTAs:*
     * Primary button: `rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background active:scale-95` ("View Projects").
     * Secondary link: Direct email with `.link-draw text-sm text-muted hover:text-foreground`.
     * Handwritten arrow aside: *"I actually reply"* with curved SVG pointer.
  6. *Tech Stack Row:* Circular icon buttons (`size-10 rounded-full border border-border bg-surface text-muted hover:-translate-y-1 hover:text-foreground`) + *"my stack"* in `font-hand text-faint`.
* **Right Column (Professional Photo Framing):**
  * **Placement & Responsive Behavior:**
    * *Desktop (`md` and `lg`):* Positioned cleanly on the right of the Hero grid (`md:w-[280px] lg:w-[320px] shrink-0 justify-self-end`).
    * *Mobile (`< md`):* Stacks gracefully below the introductory name/value prop or as an avatar alongside the title, keeping mobile vertical rhythm tight.
  * **Frame & Border Treatment:**
    * Outer wrapper: `relative group rounded-2xl border border-border bg-surface/50 p-2 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-accent/40`.
    * Ambient backdrop glow: Soft warm backlight behind the photo using `absolute -inset-1 rounded-2xl bg-accent/5 blur-xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity`.
    * Image container: `relative overflow-hidden rounded-xl aspect-[4/5] sm:aspect-square md:aspect-[4/5] w-full bg-surface`.
    * Image properties: `size-full object-cover object-top filter grayscale-[25%] contrast-[1.05] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]`.
  * **Handwritten Accent Sticker (Optional Delight):**
    * A subtle hand-drawn caption anchored to the photo corner (e.g. `font-hand text-lg text-accent -rotate-6 absolute -bottom-3 -right-2` with a curved SVG arrow pointing to it, reading *"the human behind the terminal"* or *"that's me"*).

---

### C. Projects Section ("Proof of Shipped Things")
* **Header:**
  * Eyebrow: `font-mono text-xs tracking-widest uppercase text-faint` ("PROOF OF SHIPPED WORK")
  * Heading: `text-2xl sm:text-3xl font-medium tracking-tight text-foreground`
  * Tab / Toggle (Optional): Segment between `[All]`, `[Production / Team]`, `[Personal / Live]`.
* **Project Card Anatomy (`rounded-2xl border border-border bg-surface/40 p-6 sm:p-7 hover:bg-surface/70 transition-colors`):**
  1. *Card Header:*
     * Number: `font-mono text-[11px] text-faint group-hover:text-accent` (`01`, `02`)
     * Category / Team Tag: `font-mono text-[11px] text-faint lowercase` (`Internal / Flying Tea Squad` or `Personal Project`)
  2. *Title:* `mt-4 text-xl font-medium tracking-tight text-foreground`
  3. *Outcome Hook:* `mt-1.5 text-[15px] leading-snug text-foreground flex items-baseline gap-1.5`
     * Prefix with `↳` in `text-accent` (e.g. `↳ Automated opportunity aggregation engine saving 10+ research hours/week.`)
  4. *Description Table (The Problem $\rightarrow$ Solution Breakdown):*
     * Container: `mt-6 border-t border-border/70`
     * Row 1 (Problem):
       * `dt`: `font-mono text-[10px] uppercase tracking-widest text-faint w-16` ("PROBLEM")
       * `dd`: `text-sm leading-relaxed text-muted`
     * Row 2 (Role / Solution):
       * `dt`: `font-mono text-[10px] uppercase tracking-widest text-faint w-16` ("SOLUTION")
       * `dd`: `text-sm leading-relaxed text-muted`
  5. *Card Footer:*
     * Left: Tech stack badges / string in `font-mono text-[11px] text-faint` (`next.js · fastapi · postgresql`)
     * Right: Action links:
       * Live Demo link (`.link-draw font-mono text-xs text-foreground flex items-center gap-1`)
       * GitHub repo icon/link
       * Or "Team / Case Study" badge if internal.

---

### D. Writing & Technical Articles Section
* **Header:**
  * Eyebrow: `font-mono text-xs tracking-widest uppercase text-faint` ("WRITING & INSIGHTS")
  * Heading: `text-2xl sm:text-3xl font-medium tracking-tight text-foreground` ("Notes on engineering & architecture")
* **Article List Item:**
  * Container: `border-b border-border first:border-t`
  * Link: `group flex items-baseline justify-between gap-4 py-5`
  * Title: `<span class="link-draw font-medium text-foreground group-hover:text-accent transition-colors">Article Title</span>`
  * Date / Platform: `<span class="shrink-0 font-mono text-[11px] text-faint">Dev.to · Sep 2026</span>`

---

### E. About Me & Relevant Hobbies
* **Layout:** Clean 2-column or structured block:
  1. *Engineering Philosophy:* 2 concise paragraphs covering engineering principles, clean code, architectural curiosity, and collaborative delivery.
  2. *Relevant Hobbies:* Framed as transferable technical/problem-solving traits:
     * Card / pill format with icon, hobby name, and 1-line engineering tie-in:
       * E.g., Open Source Mentorship $\rightarrow$ *Communication & Code Review*
       * E.g., Endurance Running / Fitness $\rightarrow$ *Discipline & Iterative Growth*
       * E.g., Strategy Gaming / Chess $\rightarrow$ *Systems Thinking & Long-term Planning*

---

### F. Footer & Contact Section
* **Callout Box:**
  * Heading: `text-2xl sm:text-3xl font-medium tracking-tight text-foreground` ("Have an open role or a project in mind?")
  * Subtext: `text-sm text-muted mt-2` ("Always open to chatting about engineering opportunities, tech stacks, or collaboration.")
  * Direct Email: Large styled email link with `.link-draw font-medium text-foreground text-lg`.
* **Bottom Bar:**
  * Border: `border-t border-border mt-16 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6`
  * Social Links Row:
    * Icons for **LinkedIn, GitHub, Dev.to, X**
    * Styling: `flex size-9 items-center justify-center rounded-full text-muted transition-all hover:-translate-y-0.5 hover:bg-surface hover:text-foreground`
  * Resume: High-visibility download button (`Resume (PDF)`).
  * Copyright: `font-mono text-xs text-faint` ("© 2026 Frank — Built with precision").

---

## 6. Implementation Guidelines for Agents

When implementing or editing code for this portfolio:
1. **Always use Dark Theme Tokens:** Never hardcode arbitrary hex colors like `#222` or `#fff`. Use `var(--background)`, `var(--foreground)`, `var(--surface)`, `var(--border)`, `var(--muted)`, `var(--faint)`, and `var(--accent)`.
2. **Preserve the Micro-Interactions:**
   * Any interactive link should have `.link-draw`.
   * Any interactive button must have `active:scale-95`.
   * Cards must use `rounded-2xl border border-border bg-surface/40 hover:bg-surface/70`.
3. **Follow the Card Schema:** Project cards must adhere to the Number $\rightarrow$ Title $\rightarrow$ Hook (`↳`) $\rightarrow$ Problem/Role list $\rightarrow$ Tech/Links footer layout.
4. **Responsive Integrity:** Test both desktop (`max-w-5xl`) and mobile (ensure the bottom floating pill dock activates smoothly on mobile screens `< 768px`).
