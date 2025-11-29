'use client'

import { motion } from 'framer-motion'
import { staggerContainer, viewport } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
}

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={viewport}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
