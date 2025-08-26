import Link from 'next/link'
import HeroSection from './components/HomePage/HeroSection'
import Navbar from './components/Navbar'
import FeaturedServices from './components/HomePage/FeaturedServices'
import WhyChooseUs from './components/HomePage/WhyChooseUs'
import PortfolioSnapshot from './components/HomePage/PortfolioSnapshot'
import ClientTestimonials from './components/HomePage/ClientTestimonials'
import PricingPreview from './components/HomePage/PricingPreview'
import AboutBrief from './components/HomePage/AboutBrief'
import ContactCTA from './components/HomePage/ContactCTA'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Navbar />
      <FeaturedServices />
      <WhyChooseUs />
      <PortfolioSnapshot />
      <ClientTestimonials />
      <PricingPreview />
      <AboutBrief />
      <ContactCTA />
    </main>
  )
}
