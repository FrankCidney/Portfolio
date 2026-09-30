import { hobbiesData } from '@/data'
import { Users, Gamepad2, Activity, BookOpen, GraduationCap, Building2 } from 'lucide-react'

const iconMap = {
  Users,
  Gamepad2,
  Activity,
  BookOpen,
}

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-24 border-t border-border/60">
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-mono text-xs tracking-widest uppercase text-faint">
          About & Engineering Philosophy
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
          Engineering with First Principles & Operational Rigor
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative Story & Experience Context */}
        <div className="lg:col-span-6 space-y-5 text-sm sm:text-[15px] leading-relaxed text-muted">
          <p>
            I am a full-stack and backend software engineer based in Kenya, specializing in high-performance, concurrent architectures using <span className="text-foreground font-medium">Go</span>, explicit relational modeling in <span className="text-foreground font-medium">PostgreSQL</span>, and resilient asynchronous pipelines.
          </p>

          <p>
            Currently, as a Software Development Apprentice at <span className="text-foreground font-medium">Zone 01 Kisumu</span>, I lead technical design and backend infrastructure across cross-functional engineering teams. My work spans graph-powered labor market intelligence platforms (Neo4j & Go Fiber), envelope-encrypted token security with AWS KMS, and prioritized background worker daemons with Redis and Asynq.
          </p>

          <p>
            I value engineering predictability over superficial complexity. Whether eliminating database connection leaks in high-load loops or decoupling raw data provenance from normalized canonical entities, I build systems that remain observable, maintainable, and stable under pressure.
          </p>

          {/* Quick Experience Badges */}
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

        {/* Right Column: Transferable Traits & Hobbies */}
        <div className="lg:col-span-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-faint">
              Beyond the Terminal · Transferable Traits
            </span>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {hobbiesData.map((hobby) => {
              const IconComponent = iconMap[hobby.iconName as keyof typeof iconMap] || Activity

              return (
                <div
                  key={hobby.id}
                  className="rounded-xl border border-border/80 bg-surface/40 p-4 transition-all hover:bg-surface/75 hover:border-border"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex size-7 items-center justify-center rounded-md bg-background/80 border border-border/70 text-accent">
                      <IconComponent className="size-3.5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent bg-accent-soft/40 px-2 py-0.5 rounded">
                      {hobby.engineeringTrait}
                    </span>
                  </div>

                  <h3 className="font-medium text-xs sm:text-sm text-foreground mt-2">
                    {hobby.name}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-muted font-normal">
                    {hobby.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
