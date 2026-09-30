import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'tech' | 'category' | 'accent' | 'subtle'
  className?: string
}

export function Badge({ children, variant = 'tech', className = '' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center font-mono transition-colors'

  const variantClasses = {
    tech: 'text-[11px] text-faint bg-surface/70 border border-border/80 px-2 py-0.5 rounded hover:text-foreground hover:border-border',
    category: 'text-[11px] text-faint lowercase tracking-normal',
    accent: 'text-[11px] text-accent bg-accent-soft/40 border border-accent/20 px-2 py-0.5 rounded',
    subtle: 'text-[10px] uppercase tracking-widest text-faint',
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}
