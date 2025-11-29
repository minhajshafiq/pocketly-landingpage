'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Container } from '@/components/design-system/Container'
import { SectionTitle } from '@/components/design-system/SectionTitle'
import { section } from '@/lib/design-tokens'
import { fadeInUp, viewport } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n/useTranslation'

export function FAQ() {
  const { t } = useTranslation()

  const faqData = t('faq.items') as unknown as Array<{ question: string; answer: string }>

  const faqs = faqData.map((item, index) => ({
    id: `faq-${index + 1}`,
    question: item.question,
    answer: item.answer,
  }))

  return (
    <section
      id="faq"
      className={cn('bg-background', section.padding.combined)}
    >
      <Container>
        <SectionTitle
          badge={t('faq.badge') as string}
          title={t('faq.title') as string}
          subtitle={t('faq.subtitle') as string}
        />

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={faq.id}
                  className="border border-border/50 rounded-lg px-4 md:px-6 bg-card hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-base md:text-lg font-semibold text-foreground hover:no-underline py-4 md:py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  )
}
