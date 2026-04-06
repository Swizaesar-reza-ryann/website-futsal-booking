import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { Courts } from '@/components/landing/courts'
import { CTA } from '@/components/landing/cta'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Courts />
      <CTA />
      <Footer />
    </main>
  )
}
