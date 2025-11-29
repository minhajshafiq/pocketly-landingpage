'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { cardSpring } from '@/lib/animations'
import { useTranslation } from '@/lib/i18n/useTranslation'

interface PricingCardProps {
  name: string
  price: string
  period: string
  features: string[]
  cta: string
  isPopular?: boolean
  variant?: 'default' | 'featured'
  className?: string
}

export function PricingCard({
  name,
  price,
  period,
  features,
  cta,
  isPopular,
  variant = 'default',
  className,
}: PricingCardProps) {
  const isFeatured = variant === 'featured'
  const { t } = useTranslation()

  return (
    <motion.div
      {...cardSpring}
      className={cn('relative h-full', className)}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-white text-primary border-white/30 px-3 py-1 text-xs font-medium">
            {t('pricing.premium.popular') as string}
          </Badge>
        </div>
      )}

      <Card
        className={cn(
          'h-full flex flex-col border transition-all duration-300',
          isFeatured
            ? 'bg-primary text-primary-foreground border-primary shadow-xl'
            : 'bg-card hover:border-primary/30 shadow-sm hover:shadow-md'
        )}
      >
        <CardHeader className="p-6 md:p-8 pb-4">
          <div className="flex items-center gap-2 mb-4">
            <Star
              className={cn(
                'h-5 w-5',
                isFeatured ? 'text-white fill-white' : 'text-primary fill-primary'
              )}
            />
            <CardTitle
              className={cn(
                'text-2xl md:text-3xl font-bold',
                isFeatured ? 'text-white' : 'text-foreground'
              )}
            >
              {name}
            </CardTitle>
          </div>

          <div className="mb-6">
            <div
              className={cn(
                'text-4xl md:text-5xl font-bold mb-1',
                isFeatured ? 'text-white' : 'text-foreground'
              )}
            >
              {price}
            </div>
            <p
              className={cn(
                'text-sm',
                isFeatured ? 'text-white/80' : 'text-muted-foreground'
              )}
            >
              {period}
            </p>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col flex-1 p-6 md:p-8 pt-0">
          <ul className="space-y-3 md:space-y-4 flex-1 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div
                  className={cn(
                    'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5',
                    isFeatured ? 'bg-white/20' : 'bg-primary/10'
                  )}
                >
                  <Check
                    className={cn(
                      'h-3 w-3',
                      isFeatured ? 'text-white' : 'text-primary'
                    )}
                  />
                </div>
                <span
                  className={cn(
                    'text-sm leading-relaxed',
                    isFeatured ? 'text-white' : 'text-foreground'
                  )}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <Button
            className={cn(
              'w-full rounded-full py-6 font-semibold transition-all duration-300 cursor-pointer',
              isFeatured
                ? 'bg-white hover:bg-white/90 text-primary'
                : 'bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary hover:border-primary/80'
            )}
          >
            {cta}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
