'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { typography } from '@/lib/design-tokens'
import { fadeInUp, viewport } from '@/lib/animations'
import { Badge } from '@/components/ui/badge'

interface SectionTitleProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={viewport}
      className={cn(
        'mb-8 md:mb-12 space-y-3 md:space-y-4',
        centered && 'text-center',
        className
      )}
    >
      {badge && (
        <div className={cn('flex', centered && 'justify-center')}>
          <Badge
            variant="outline"
            className="text-sm font-medium border-primary/30 text-primary"
          >
            {badge}
          </Badge>
        </div>
      )}

      <h2
        className={cn(
          typography.h1.combined,
          'font-bold tracking-tight leading-tight',
          centered && 'mx-auto max-w-4xl'
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            typography.bodyLg.combined,
            'text-muted-foreground leading-relaxed',
            centered && 'mx-auto max-w-2xl'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
