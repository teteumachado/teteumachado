'use client'

interface Props {
  tag: string
  active?: boolean
  onClick?: () => void
}

export function TagBadge({ tag, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`border px-2 py-0.5 text-xs transition-colors ${
        active
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-border bg-transparent text-muted-foreground hover:border-primary/30'
      }`}
    >
      {tag}
    </button>
  )
}
