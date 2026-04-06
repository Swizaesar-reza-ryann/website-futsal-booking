import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  step: number
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({
  step,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('flex items-center gap-3 mb-4', className)}>
      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
        <span className="text-primary-foreground text-sm font-bold">{step}</span>
      </div>
      <div>
        <h2 className="font-semibold text-muted-foreground tracking-wide text-sm uppercase">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
