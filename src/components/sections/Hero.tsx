import { useState, useEffect } from 'react'
import { profileData } from '@/data'
import { HandArrow } from '@/components/ui/HandArrow'
import { ArrowDown, Mail } from 'lucide-react'
import heroPhoto from '@/assets/hero.png'

function useEatTime() {
  const [timeStr, setTimeStr] = useState<string>('')

  useEffect(() => {
    const update = () => {
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: profileData.timezone || 'Africa/Nairobi',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(new Date())
      setTimeStr(formatted)
    }

    update()
    const interval = setInterval(update, 30000)
    return () => clearInterval(interval)
  }, [])

  return timeStr
}

export function Hero() {
  const eatTime = useEatTime()

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px]">
        {/* Left Column: The Pitch */}
        <div className="flex flex-col">
          {/* Availability Beacon */}
          <div className="rise-in inline-flex items-center gap-2 mb-6">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-blink rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
            </span>
            <span className="font-mono text-xs text-muted lowercase">
              {profileData.availabilityStatusText}
            </span>
          </div>

          {/* Heading + Handwriting Aside */}
          <div className="rise-in delay-1 relative">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-foreground leading-[1.05]">
              {profileData.preferredName.toLowerCase()}
            </h1>

            {/* Handwritten 'or just frank' callout */}
            <div className="mt-2 flex items-center gap-1.5 text-accent font-hand text-xl sm:text-2xl select-none">
              <HandArrow direction="down-right" className="size-5 shrink-0 text-accent" />
              <span>or just {profileData.nickname}</span>
            </div>
          </div>

          {/* Value Proposition */}
          <p className="rise-in delay-2 mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-muted font-normal">
            {profileData.tagline}
          </p>

          {/* Location & Live EAT Time */}
          <div className="rise-in delay-3 mt-4 flex items-center gap-2 font-mono text-xs text-faint">
            <span className="size-1.5 rounded-full bg-border" />
            <span className="lowercase">{profileData.location}</span>
            <span>·</span>
            <span>{eatTime ? `${eatTime} ${profileData.timezoneAbbr}` : profileData.timezoneAbbr}</span>
          </div>

          {/* CTA Group */}
          <div className="rise-in delay-4 mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-transform hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              <span>View Projects</span>
              <ArrowDown className="size-4" />
            </a>

            <div className="relative inline-flex items-center gap-2">
              <a
                href={`mailto:${profileData.email}`}
                className="link-draw inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
              >
                <Mail className="size-4 text-faint" />
                <span>{profileData.email}</span>
              </a>

              {/* 'I actually reply' handwriting note */}
              <div className="hidden sm:flex items-center gap-1 text-accent font-hand text-base ml-2 select-none">
                <HandArrow direction="curved" className="size-4 text-accent" />
                <span className="whitespace-nowrap">I actually reply</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="rise-in delay-5 mt-10 border-t border-border/70 pt-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
                Core Stack
              </span>
              <span className="font-hand text-base text-faint">· what I build with</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {profileData.techStackKeywords.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-faint bg-surface/60 border border-border/70 px-2.5 py-1 rounded-md transition-all hover:text-foreground hover:border-border hover:-translate-y-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Professional Photo Frame */}
        <div className="rise-in delay-3 relative justify-self-center md:justify-self-end w-full max-w-[280px] lg:max-w-[320px]">
          {/* Ambient Glow */}
          <div className="absolute -inset-2 rounded-3xl bg-accent/5 blur-2xl -z-10 opacity-70 transition-opacity group-hover:opacity-100" />

          {/* Frame Card */}
          <div className="group relative rounded-2xl border border-border bg-surface/50 p-2 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-accent/40">
            <div className="relative overflow-hidden rounded-xl aspect-[4/5] w-full bg-surface">
              <img
                src={heroPhoto}
                alt={profileData.fullName}
                className="size-full object-cover object-top filter grayscale-[20%] contrast-[1.04] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
                loading="eager"
              />
            </div>

            {/* Corner Sticker Delight */}
            <div className="absolute -bottom-3 -right-2 flex items-center gap-1 font-hand text-base text-accent -rotate-3 select-none bg-surface/90 border border-border/80 px-2 py-0.5 rounded-md shadow-md backdrop-blur-sm">
              <span>that's me</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
