'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/design-system/Container'
import { SectionTitle } from '@/components/design-system/SectionTitle'
import { PricingCard } from '@/components/design-system/PricingCard'
import { section } from '@/lib/design-tokens'
import { fadeInUp, viewport } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n/useTranslation'

export function Pricing() {
  const { t } = useTranslation()

  const plans = [
    {
      name: t('pricing.basic.name'),
      price: t('pricing.basic.price'),
      period: t('pricing.basic.period'),
      features: t('pricing.basic.features') as unknown as string[],
      cta: t('pricing.basic.cta'),
      variant: 'default' as const,
    },
    {
      name: t('pricing.premium.name'),
      price: t('pricing.premium.price'),
      period: t('pricing.premium.period'),
      isPopular: true,
      features: t('pricing.premium.features') as unknown as string[],
      cta: t('pricing.premium.cta'),
      variant: 'featured' as const,
    },
    {
      name: t('pricing.yearly.name'),
      price: t('pricing.yearly.price'),
      period: t('pricing.yearly.period'),
      features: t('pricing.yearly.features') as unknown as string[],
      cta: t('pricing.yearly.cta'),
      variant: 'default' as const,
    },
  ]

  return (
    <section
      id="pricing"
      className={cn('bg-muted/30', section.padding.combined)}
    >
      <Container>
        <SectionTitle
          title={t('pricing.title') as string}
          subtitle={t('pricing.subtitle') as string}
        />

        {/* Pricing Cards Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name as string}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: index * 0.1 }}
            >
              <PricingCard
                name={plan.name as string}
                price={plan.price as string}
                period={plan.period as string}
                features={plan.features}
                cta={plan.cta as string}
                isPopular={plan.isPopular}
                variant={plan.variant}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
