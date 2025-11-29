'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-muted/50 animate-pulse" />
    )
  }

  const isDark = theme === 'dark'

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'relative w-10 h-10 rounded-full flex items-center justify-center',
        'bg-muted/50 hover:bg-muted transition-colors',
        'border border-border/50 hover:border-primary/30 cursor-pointer'
      )}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-5 w-5 text-primary" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-5 w-5 text-primary" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
