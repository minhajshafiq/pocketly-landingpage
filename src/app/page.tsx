import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"
import { Hero } from "@/components/landing/Hero"
import { Features } from "@/components/landing/Features"
import { Pricing } from "@/components/landing/Pricing"
import { FAQ } from "@/components/landing/FAQ"
import { Roadmap } from "@/components/landing/Roadmap"
import { CTA } from "@/components/landing/CTA"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        {/* <Testimonials /> */}
        <FAQ />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
