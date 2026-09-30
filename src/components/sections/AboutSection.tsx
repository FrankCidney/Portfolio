import { BookOpen, GraduationCap, Building2 } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-24 border-t border-border/60">
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-mono text-xs tracking-widest uppercase text-faint">
          About & Engineering Focus
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
          Writing Code with First Principles & Operational Clarity
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative Story & Experience Context */}
        <div className="lg:col-span-7 space-y-5 text-sm sm:text-[15px] leading-relaxed text-muted">
          <p>
            I am a software engineer based in Kenya focused on backend services, automation tools, and web applications, primarily working with <span className="text-foreground font-medium">Go</span> and <span className="text-foreground font-medium">PostgreSQL</span>.
          </p>

          <p>
            Currently, as a Software Development Apprentice at <span className="text-foreground font-medium">Zone 01 Kisumu</span>, I spend my time coding backend services, designing relational database schemas, and building asynchronous data pipelines. My engineering work has involved implementing envelope encryption with AWS KMS, building prioritized task queues with Redis and Asynq, and writing data normalization engines.
          </p>

          <p>
            I believe good backend code should be straightforward to reason about, well-tested, and resilient to failure modes. I focus on writing clear code with well-defined boundaries, understanding database query behavior, and eliminating concurrency traps before they hit production.
          </p>

          {/* Quick Experience & Education Badges */}
          <div className="pt-4 border-t border-border/60 space-y-3 font-mono text-xs">
            <div className="flex items-center gap-3 text-muted">
              <Building2 className="size-4 text-accent shrink-0" />
              <span>Software Development Apprentice · Zone 01 Kisumu (2026–Present)</span>
            </div>
            <div className="flex items-center gap-3 text-muted">
              <GraduationCap className="size-4 text-accent shrink-0" />
              <span>B.Sc. in Computer Science (Upper Division) · Multimedia University of Kenya</span>
            </div>
          </div>
        </div>

        {/* Right Column: Reading & Technical Interests */}
        <div className="lg:col-span-5">
          <div className="mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-faint">
              When I'm Not Coding
            </span>
          </div>

          <div className="rounded-2xl border border-border/80 bg-surface/40 p-6 transition-all hover:bg-surface/70 hover:border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex size-9 items-center justify-center rounded-lg bg-background/80 border border-border text-accent">
                <BookOpen className="size-4" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent bg-accent-soft/50 border border-accent/20 px-2.5 py-0.5 rounded-full">
                Primary Interest
              </span>
            </div>

            <h3 className="text-base font-medium text-foreground">
              Reading
            </h3>

            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted font-normal">
              When I'm not writing code, I spend a lot of my free time reading. What I read mostly covers philosophy, science, coding, biographies, and business.
            </p>

            <div className="mt-5 border-t border-border/60 pt-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-faint block mb-2">
                What I Read
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Philosophy', 'Science', 'Coding', 'Biographies', 'Business'].map((topic) => (
                  <span
                    key={topic}
                    className="font-mono text-[11px] text-faint bg-background/50 border border-border/60 px-2 py-0.5 rounded"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
