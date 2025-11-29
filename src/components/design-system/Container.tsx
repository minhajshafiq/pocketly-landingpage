import { cn } from '@/lib/utils'
import { container } from '@/lib/design-tokens'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'article'
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full',
        container.padding.combined,
        className
      )}
      style={{ maxWidth: container.maxWidth }}
    >
      {children}
    </Component>
  )
}
