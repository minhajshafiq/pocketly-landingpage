'use client'

import { motion } from 'framer-motion'
import { Rocket, Star, Play } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { WaitlistForm } from '@/components/design-system/WaitlistForm'
import { AnimatedButton } from '@/components/design-system/AnimatedButton'
import { Container } from '@/components/design-system/Container'
import { section, typography } from '@/lib/design-tokens'
import { fadeInUp, viewport } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n/useTranslation'

export function CTA() {
  const { t } = useTranslation()
  return (
    <section
      className={cn(
        'bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground relative overflow-hidden',
        section.padding.combined
      )}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="bg-white/20 text-white border-white/30 px-4 py-2 text-xs md:text-sm font-medium backdrop-blur-sm"
            >
              <Star className="h-3 w-3 md:h-4 md:w-4 mr-2 fill-white text-white" />
              {t('cta.badge') as string}
            </Badge>
          </div>

          {/* Heading */}
          <h2
            className={cn(
              typography.h1.combined,
              'font-bold leading-tight tracking-tight text-white'
            )}
          >
            {t('cta.title') as string}
          </h2>

          {/* Description */}
          <p
            className={cn(
              typography.bodyLg.combined,
              'text-white/90 max-w-3xl mx-auto leading-relaxed font-medium'
            )}
          >
            {t('cta.subtitle') as string}
          </p>

          {/* CTA Buttons - Mobile First */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4">
            <WaitlistForm>
              <AnimatedButton
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-6 md:px-10 py-5 md:py-6 text-base md:text-lg font-bold shadow-xl w-full sm:w-auto cursor-pointer"
              >
                <Rocket className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                {t('cta.joinWaitlist') as string}
              </AnimatedButton>
            </WaitlistForm>

            <AnimatedButton
              size="lg"
              variant="secondary"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-6 md:px-10 py-5 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto cursor-pointer"
            >
              <Play className="h-5 w-5 md:h-6 md:w-6 mr-2" />
              {t('cta.watchDemo') as string}
            </AnimatedButton>
          </div>

          {/* Trust Indicators - Mobile First */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm md:text-base text-white/90 font-medium pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
              <span>{t('cta.freeToStart') as string}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
              <span>{t('cta.secureData') as string}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
              <span>{t('cta.guaranteedSavings') as string}</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
