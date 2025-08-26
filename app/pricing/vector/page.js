import React from 'react'
import Navbar from '@/app/components/Navbar'
import PricingHero from '@/app/components/PricingPage/PricingHero'
import VectorPricingCards from '@/app/components/PricingPage/VectorPage/VectorPricingCards'
import VectorWorkShowcase from '@/app/components/PricingPage/VectorPage/VectorWorkShowcase'
import VectorNotesTerms from '@/app/components/PricingPage/VectorPage/VectorNotesTerms'
import VectorCTA from '@/app/components/PricingPage/VectorPage/VectorCTA'

const VectorPricingPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PricingHero title="Vector Art Services – Pricing" description="We offer affordable, high-quality vector conversions with quick turnaround and unlimited revisions. Below are our standard prices. For custom or bulk work, contact us for a quote." additionalInfo1="6-12 Hours Turnaround" additionalInfo2="Unlimited Revisions" additionalInfo3="Multiple Formats"/>
      <VectorPricingCards />
      <VectorWorkShowcase />
      <VectorNotesTerms />
      <VectorCTA />
    </main>
  )
}

export default VectorPricingPage
