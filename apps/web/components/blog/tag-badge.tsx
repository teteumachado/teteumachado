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
      className={`text-xs px-2 py-0.5 border transition-colors ${
        active
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-transparent text-muted-foreground border-border hover:border-primary/30'
      }`}
    >
      {tag}
    </button>
  )
}
