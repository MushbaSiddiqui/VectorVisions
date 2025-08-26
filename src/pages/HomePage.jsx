import React from 'react'
import HeroSection from '../components/HomePage/HeroSection'
import AboutBrief from '../components/HomePage/AboutBrief'
import FeaturedServices from '../components/HomePage/FeaturedServices'
import WhyChooseUs from '../components/HomePage/WhyChooseUs'
import PortfolioShowcase from '../components/HomePage/portfolioprofessional'
import ClientTestimonials from '../components/HomePage/ClientTestimonials'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutBrief />
      <FeaturedServices />
      <WhyChooseUs />
      <PortfolioShowcase />
      <ClientTestimonials />
    </div>
  )
}

export default HomePage
