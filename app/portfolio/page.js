import React from 'react'
import Navbar from '@/app/components/Navbar'
import PortfolioHero from '@/app/components/PortfolioPage/PortfolioHero'
import PortfolioGallery from '@/app/components/PortfolioPage/PortfolioGallery'
import VectorConversionSamples from '@/app/components/PortfolioPage/VectorConversionSamples'
import DigitizingSamples from '@/app/components/PortfolioPage/DigitizingSamples'
import PatchDesignSamples from '@/app/components/PortfolioPage/PatchDesignSamples'
import PortfolioCTA from '@/app/components/PortfolioPage/PortfolioCTA'
import PortfolioSEO from '@/app/components/PortfolioPage/PortfolioSEO'

const PortfolioPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PortfolioHero />
      <VectorConversionSamples />
      <DigitizingSamples />
      <PatchDesignSamples />
      <PortfolioGallery />
      <PortfolioCTA />
      <PortfolioSEO />
    </main>
  )
}

export default PortfolioPage
