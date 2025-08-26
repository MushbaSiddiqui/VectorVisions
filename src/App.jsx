import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import ServicesPage from './pages/ServicesPage'
import PricingPage from './pages/PricingPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import AcknowledgementPage from './pages/AcknowledgementPage'
import DigitizationPricingPage from './pages/pricing/DigitizationPricingPage'
import PatchesPricingPage from './pages/pricing/PatchesPricingPage'
import VectorPricingPage from './pages/pricing/VectorPricingPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/pricing/digitization" element={<DigitizationPricingPage />} />
          <Route path="/pricing/patches" element={<PatchesPricingPage />} />
          <Route path="/pricing/vector" element={<VectorPricingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/acknowledgement" element={<AcknowledgementPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
