'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { gsap } from 'gsap'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/design-system/Container'
import { GradientText } from '@/components/design-system/GradientText'
import { typography, section } from '@/lib/design-tokens'
import { fadeInUp, scaleIn, viewport } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n/useTranslation'

export function Hero() {
  const phoneRefs = useRef<(HTMLDivElement | null)[]>([])
  const titleRef = useRef<HTMLHeadingElement>(null)
  const { t } = useTranslation()

  const titleWords = (t('hero.title') as string || '').split(' ').filter(Boolean)
  const highlightWords = (t('hero.titleHighlight') as string || '').split(' ').filter(Boolean)
  const allWords = [...titleWords, ...highlightWords]

  useEffect(() => {
    if (titleRef.current) {
      const timer = setTimeout(() => {
        const words = titleRef.current?.querySelectorAll('.word')
        const wordGroup = titleRef.current?.querySelector('.word-group')
        
        if (words && words.length > 0) {
          const titleWords = Array.from(words).filter((word) => {
            const el = word as HTMLElement
            return !el.closest('.word-group')
          })
          
          gsap.set(titleWords, { opacity: 0, y: 20 })
          
          gsap.to(titleWords, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.3,
          })
          
          if (wordGroup) {
            gsap.set(wordGroup, { opacity: 0, y: 20 })
            gsap.to(wordGroup, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              delay: 0.3 + (titleWords.length * 0.1),
            })
          }
        }
      }, 200)
      
      return () => clearTimeout(timer)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      phoneRefs.current.forEach((phone, index) => {
        if (phone) {
          const depth = (index + 1) * 0.02
          const moveX = (clientX - centerX) * depth
          const moveY = (clientY - centerY) * depth

          gsap.to(phone, {
            x: moveX,
            y: moveY,
            duration: 0.5,
            ease: 'power2.out',
          })
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5',
        'min-h-screen flex flex-col items-center justify-center',
        section.padding.combined
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      <Container className="relative z-10">
        {/* Hero Content - Mobile First */}
        <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto mb-8 md:mb-12">
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            viewport={viewport}
            className="flex justify-center"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 md:px-6 py-2 text-xs md:text-sm font-medium">
              {t('hero.badge') as string}
            </Badge>
          </motion.div>

          {/* Main Headline with GSAP word animation */}
          <h1
            ref={titleRef}
            className={cn(
              typography.display.combined,
              'font-bold tracking-tight leading-[1.1] text-foreground'
            )}
          >
            {titleWords.map((word, index) => (
              <span key={`title-${index}`}>
                <span className="word inline-block">{word}</span>{' '}
              </span>
            ))}
            {highlightWords.length > 0 && (
              <span className="word-group">
                {' '}
                <GradientText>
                  {highlightWords.map((word, index) => (
                    <span key={`highlight-${index}`}>
                      <span className="word inline-block">{word}</span>
                      {index < highlightWords.length - 1 && ' '}
                    </span>
                  ))}
                </GradientText>
              </span>
            )}
          </h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            viewport={viewport}
            transition={{ delay: 0.4 }}
            className={cn(
              typography.bodyLg.combined,
              'text-muted-foreground max-w-3xl mx-auto leading-relaxed'
            )}
          >
            {t('hero.subtitle') as string}{' '}
            <span className="font-semibold text-foreground">{t('hero.subtitle2') as string}</span>
            {t('hero.subtitle3') as string}
          </motion.p>

          {/* App Store Buttons - Mobile First */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            viewport={viewport}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-2 md:pt-4"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300 cursor-pointer inline-block w-full sm:w-auto max-w-[200px]"
              aria-label={t('hero.downloadAppStore') as string}
            >
              <Image
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt={t('hero.downloadAppStore') as string}
                width={180}
                height={60}
                className="h-12 md:h-14 w-full"
              />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300 cursor-pointer inline-block w-full sm:w-auto max-w-[200px]"
              aria-label={t('hero.downloadPlayStore') as string}
            >
              <Image
                src="/GetItOnGooglePlay_Badge_Web_color_English.svg"
                alt={t('hero.downloadPlayStore') as string}
                width={200}
                height={60}
                className="h-12 md:h-14 w-full"
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Phone Mockups - Mobile First Responsive */}
        <motion.div
          variants={scaleIn}
          initial="initial"
          animate="animate"
          viewport={viewport}
          transition={{ delay: 0.6 }}
          className="relative flex justify-center items-center mt-4 md:mt-8"
        >
          {/* Mobile: Single centered phone */}
          <div className="block md:hidden">
            <div className="relative w-[280px] mx-auto">
              <Image
                src="/mockup.png"
                alt="Pocketly App"
                width={280}
                height={600}
                className="w-full h-auto drop-shadow-2xl rounded-3xl"
              />
            </div>
          </div>

          {/* Desktop: Three overlapping phones with parallax */}
          <div className="hidden md:block relative w-full max-w-5xl h-[500px] lg:h-[600px]">
            {/* Left Phone */}
            <div
              ref={(el) => {
                if (el) phoneRefs.current[0] = el
              }}
              className="absolute left-0 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-[220px] lg:w-[280px]"
              style={{ rotate: '-12deg' }}
            >
              <Image
                src="/mockup.png"
                alt="Pocketly App - Suivi des dépenses"
                width={280}
                height={600}
                className="w-full h-auto drop-shadow-2xl rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl pointer-events-none" />
            </div>

            {/* Center Phone - Most prominent */}
            <div
              ref={(el) => {
                if (el) phoneRefs.current[1] = el
              }}
              className="absolute left-1/2 -translate-x-1/2 top-0 z-20 w-[280px] lg:w-[340px]"
            >
              <Image
                src="/mockup.png"
                alt="Pocketly App - Gestion financière"
                width={340}
                height={700}
                className="w-full h-auto drop-shadow-2xl rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl pointer-events-none" />
            </div>

            {/* Right Phone */}
            <div
              ref={(el) => {
                if (el) phoneRefs.current[2] = el
              }}
              className="absolute right-0 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-[220px] lg:w-[280px]"
              style={{ rotate: '12deg' }}
            >
              <Image
                src="/mockup.png"
                alt="Pocketly App - Budget et épargne"
                width={280}
                height={600}
                className="w-full h-auto drop-shadow-2xl rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
