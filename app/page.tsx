import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturedTours } from '@/components/home/featured-tours'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <FeaturedTours />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
