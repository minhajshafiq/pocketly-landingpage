'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BarChart3, CreditCard, PiggyBank, RefreshCw, Bell, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedButton } from '@/components/design-system/AnimatedButton'
import { Container } from '@/components/design-system/Container'
import { SectionTitle } from '@/components/design-system/SectionTitle'
import { FeatureIcon } from '@/components/design-system/FeatureIcon'
import { section } from '@/lib/design-tokens'
import { fadeInUp, viewport } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n/useTranslation'

gsap.registerPlugin(ScrollTrigger)

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const { t } = useTranslation()

  const features = [
    {
      id: 1,
      title: t('features.smartBudget.title'),
      description: t('features.smartBudget.description'),
      icon: BarChart3,
    },
    {
      id: 2,
      title: t('features.transactions.title'),
      description: t('features.transactions.description'),
      icon: CreditCard,
    },
    {
      id: 3,
      title: t('features.savings.title'),
      description: t('features.savings.description'),
      icon: PiggyBank,
    },
    {
      id: 4,
      title: t('features.subscriptions.title'),
      description: t('features.subscriptions.description'),
      icon: RefreshCw,
    },
    {
      id: 5,
      title: t('features.notifications.title'),
      description: t('features.notifications.description'),
      icon: Bell,
    },
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    // GSAP ScrollTrigger for stagger animation
    const cards = cardsRef.current.filter(Boolean)

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: index * 0.1,
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="features"
      className={cn('bg-background', section.padding.combined)}
    >
      <Container>
        <SectionTitle
          title={t('features.title') as string}
          subtitle={t('features.subtitle') as string}
        />

        {/* 3-Column Layout - Mobile First */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 lg:items-stretch">
          {/* Left Column - 2 Cards */}
          <div className="lg:col-span-1 space-y-4 md:space-y-6 flex flex-col">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className="flex-1 flex"
              >
                <Card className="w-full min-h-[220px] md:min-h-[240px] flex flex-col group cursor-pointer hover:border-primary/30 transition-all duration-300 border rounded-lg shadow-sm hover:shadow-md">
                  <CardHeader className="p-4 md:p-6 flex-1 flex flex-col">
                    <FeatureIcon icon={feature.icon} className="mb-3" />
                    <CardTitle className="text-lg md:text-xl font-bold text-foreground mb-2">
                      {feature.title as string}
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                      {feature.description as string}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0 mt-auto">
                    <Button
                      variant="ghost"
                      className="w-full text-primary hover:text-primary hover:bg-primary/10 font-medium text-sm border border-primary/20 hover:border-primary/40"
                    >
                      {t('features.learnMore') as string}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Center Column - Phone Mockup */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="lg:col-span-1 flex items-center justify-center order-first lg:order-none my-8 lg:my-0"
          >
            <div className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] mx-auto">
              <Image
                src="/Group 84-portrait.png"
                alt="Pocketly App Preview"
                width={320}
                height={640}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - 2 Cards */}
          <div className="lg:col-span-1 space-y-4 md:space-y-6 flex flex-col">
            {features.slice(2, 4).map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => {
                  if (el) cardsRef.current[index + 2] = el
                }}
                className="flex-1 flex"
              >
                <Card className="w-full min-h-[220px] md:min-h-[240px] flex flex-col group cursor-pointer hover:border-primary/30 transition-all duration-300 border rounded-lg shadow-sm hover:shadow-md">
                  <CardHeader className="p-4 md:p-6 flex-1 flex flex-col">
                    <FeatureIcon icon={feature.icon} className="mb-3" />
                    <CardTitle className="text-lg md:text-xl font-bold text-foreground mb-2">
                      {feature.title as string}
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                      {feature.description as string}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0 mt-auto">
                    <Button
                      variant="ghost"
                      className="w-full text-primary hover:text-primary hover:bg-primary/10 font-medium text-sm border border-primary/20 hover:border-primary/40"
                    >
                      {t('features.learnMore') as string}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Full Width Card */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <div ref={(el) => {
            if (el) cardsRef.current[4] = el
          }}>
            <Card className="group cursor-pointer hover:border-primary/30 transition-all duration-300 border rounded-lg shadow-sm hover:shadow-md">
              <CardHeader className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                  <FeatureIcon icon={features[4].icon} size="lg" className="flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {features[4].title as string}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {features[4].description as string}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* CTA Button */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="text-center"
          >
            <AnimatedButton
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold shadow-lg cursor-pointer"
            >
              {t('features.cta') as string}
              <ArrowRight className="ml-2 h-5 w-5" />
            </AnimatedButton>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
