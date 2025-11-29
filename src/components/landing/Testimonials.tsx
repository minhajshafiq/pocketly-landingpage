'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Container } from '@/components/design-system/Container'
import { SectionTitle } from '@/components/design-system/SectionTitle'
import { section } from '@/lib/design-tokens'
import { fadeInUp, cardSpring, viewport } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n/useTranslation'

export function Testimonials() {
  const { t } = useTranslation()

  const testimonialsData = t('testimonials.items') as unknown as Array<{ name: string; role: string; text: string }>

  const testimonials = testimonialsData.map((item, index) => ({
    id: index + 1,
    name: item.name,
    role: item.role,
    avatar: `/avatars/${item.name.split(' ')[0].toLowerCase()}.jpg`,
    initials: item.name.split(' ').map((n: string) => n[0]).join(''),
    rating: 5,
    text: item.text,
  }))

  return (
    <section
      id="testimonials"
      className={cn('bg-muted/30', section.padding.combined)}
    >
      <Container>
        <SectionTitle
          badge={t('testimonials.badge') as string}
          title={t('testimonials.title') as string}
          subtitle={t('testimonials.subtitle') as string}
        />

        {/* Testimonials Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: index * 0.1 }}
              {...cardSpring}
            >
              <Card className="h-full border border-border/50 hover:border-primary/30 transition-all duration-300 bg-card shadow-sm">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 flex-1">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm md:text-base text-foreground truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground truncate">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
