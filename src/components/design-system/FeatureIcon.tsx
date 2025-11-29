'use client'

import { type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureIconProps {
  icon: LucideIcon
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: {
    wrapper: 'w-10 h-10',
    icon: 'w-5 h-5',
  },
  md: {
    wrapper: 'w-12 h-12',
    icon: 'w-6 h-6',
  },
  lg: {
    wrapper: 'w-14 h-14',
    icon: 'w-7 h-7',
  },
}

export function FeatureIcon({ icon: Icon, className, size = 'md' }: FeatureIconProps) {
  const sizes = sizeClasses[size]

  return (
    <div
      className={cn(
        sizes.wrapper,
        'rounded-lg bg-primary/10 flex items-center justify-center',
        'transition-transform duration-300 group-hover:scale-110',
        className
      )}
    >
      <Icon className={cn(sizes.icon, 'text-primary')} />
    </div>
  )
}
