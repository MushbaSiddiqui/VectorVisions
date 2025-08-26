import React from 'react'
import Navbar from '../components/Navbar'
import CompanyHero from '../components/CompanyPage/HeroSection'
import CompanyOverview from '../components/CompanyPage/CompanyOverview'
import MissionVision from '../components/CompanyPage/MissionVision'
import Workflow from '../components/CompanyPage/Workflow'
import CallToAction from '../components/CompanyPage/CallToAction'

const page = () => {
  return (
    <>
      <Navbar/>
      <CompanyHero/>
      <CompanyOverview/>
      <MissionVision/>
      <Workflow/>
      <CallToAction/>
    </>
  )
}

export default page
