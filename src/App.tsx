export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full border border-border bg-surface/50 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-blink rounded-full bg-emerald-500/60"></span>
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-600"></span>
          </span>
          <span className="font-mono text-xs text-muted">phase 1 initialized</span>
        </div>

        <h1 className="text-3xl font-medium tracking-tight text-foreground mb-2">
          Francis Cidney
        </h1>
        <p className="font-hand text-xl text-accent mb-4">
          software engineer · portfolio under construction
        </p>

        <p className="text-sm text-muted leading-relaxed mb-6">
          Tailwind CSS v4, dark mode tokens, fonts (Geist, Geist Mono, Caveat), and micro-interaction animations configured successfully.
        </p>

        <div className="flex items-center gap-4 text-xs font-mono text-faint border-t border-border pt-4">
          <a
            href="https://github.com/FrankCidney"
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw text-muted hover:text-foreground"
          >
            github ↗
          </a>
          <span>·</span>
          <span className="text-faint">ready for phase 2</span>
        </div>
      </div>
    </div>
  )
}
