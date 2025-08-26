import React from 'react'
import Navbar from '@/app/components/Navbar'
import PricingHero from '@/app/components/PricingPage/PricingHero'

const PatchesPricingPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PricingHero title="Patch Pricing" description="We offer affordable, high-quality vector conversions with quick turnaround and unlimited revisions. Below are our standard prices. For custom or bulk work, contact us for a quote." additionalInfo1="6-12 Hours Turnaround" additionalInfo2="Unlimited Revisions" additionalInfo3="Multiple Formats"/>
    </main>
  )
}

export default PatchesPricingPage
