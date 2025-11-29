'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { WaitlistForm } from '@/components/design-system/WaitlistForm'
import { ThemeToggle } from '@/components/design-system/ThemeToggle'
import { LanguageToggle } from '@/components/design-system/LanguageToggle'
import { AnimatedButton } from '@/components/design-system/AnimatedButton'
import { LogoText } from '@/components/ui/logo'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n/useTranslation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const navItems = [
    { title: t('nav.home'), href: '/' },
    { title: t('nav.features'), href: '#features' },
    { title: t('nav.pricing'), href: '#pricing' },
    { title: t('nav.roadmap'), href: '#roadmap' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 md:h-18 items-center justify-between px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1200px' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center z-50 cursor-pointer">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <LogoText className="transition-transform duration-300" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium text-muted-foreground transition-all duration-300',
                'hover:text-foreground relative group cursor-pointer'
              )}
            >
              {item.title as string}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Dark Mode + Language */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <WaitlistForm>
            <AnimatedButton
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 cursor-pointer"
            >
              {t('nav.joinWaitlist') as string}
            </AnimatedButton>
          </WaitlistForm>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            'md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors',
            'relative z-50 cursor-pointer'
          )}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6 text-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6 text-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-16 left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border/50 shadow-lg"
          >
            <nav className="container mx-auto px-4 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'block px-4 py-3 text-base font-medium text-foreground',
                      'rounded-lg hover:bg-primary/10 transition-colors',
                      'border border-transparent hover:border-primary/20 cursor-pointer'
                    )}
                  >
                    {item.title as string}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Dark Mode + Language + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                className="pt-4 space-y-3"
              >
                <div className="flex justify-center gap-3">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
                <WaitlistForm>
                  <AnimatedButton
                    size="default"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold cursor-pointer"
                  >
                    {t('nav.joinWaitlist') as string}
                  </AnimatedButton>
                </WaitlistForm>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
