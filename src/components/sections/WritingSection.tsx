import { articlesData } from '@/data'
import { ArrowUpRight } from 'lucide-react'
import { DevtoIcon } from '@/components/ui/SocialIcons'

export function WritingSection() {
  return (
    <section id="writing" className="scroll-mt-20 py-16 sm:py-24 border-t border-border/60">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <span className="font-mono text-xs tracking-widest uppercase text-faint">
            Writing & Insights
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
            Notes on Engineering & Architecture
          </h2>
          <p className="mt-2 text-sm text-muted max-w-xl">
            Practical reflections on Go concurrency patterns, pipeline structures, architectural layering, and backend gotchas.
          </p>
        </div>

        <a
          href="https://dev.to/francis_cidney_awuor"
          target="_blank"
          rel="noopener noreferrer"
          className="link-draw inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-foreground transition-colors self-start sm:self-auto"
        >
          <DevtoIcon className="size-3.5 text-accent" />
          <span>Follow on Dev.to</span>
          <ArrowUpRight className="size-3 text-faint" />
        </a>
      </div>

      {/* Article List */}
      <div className="divide-y divide-border/60 border-y border-border/60">
        {articlesData.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 py-6 transition-colors hover:bg-surface/30 px-2 -mx-2 rounded-lg"
          >
            <div className="max-w-2xl">
              <h3 className="link-draw text-base sm:text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                {article.title}
              </h3>
              {article.description && (
                <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed font-normal">
                  {article.description}
                </p>
              )}
            </div>

            <div className="shrink-0 flex items-center gap-2.5 font-mono text-[11px] text-faint self-start sm:self-auto">
              <span className="text-muted/80">{article.platform}</span>
              <span>·</span>
              <span>{article.readTime}</span>
              <ArrowUpRight className="size-3 text-faint transition-transform group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
