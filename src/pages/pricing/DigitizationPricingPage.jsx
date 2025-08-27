import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const DigitizationPricingPage = () => {
  const [expandedPlan, setExpandedPlan] = useState(null)

  const togglePlan = (index) => {
    setExpandedPlan(expandedPlan === index ? null : index)
  }

  const digitizationServices = [
    {
      title: "Hats and Left Chest logo Digitization",
      price: "$10",
      description: "Simple logo or artwork digitization",
      features: [
        "Single color design",
        "Basic shapes and text",
        "Standard formats (DST, EXP, PES)",
        "1-2 revisions included",
        "2-5 business days turnaround"
      ],
      bestFor: "Simple logos, basic designs"
    },
    {
      title: "Mid-Size Digitization",
      price: "$25",
      description: "Complex logo or artwork digitization",
      features: [
        "Multi-color designs",
        "Complex shapes and patterns",
        "All embroidery formats",
        "1-2 revisions included",
        "2-3 business days turnaround"
      ],
      bestFor: "Medium complexity designs"
    },
    {
      title: "Jacket's Back Logo Digitization",
      price: "$50 Onwards",
      description: "Professional artwork and detailed designs",
      features: [
        "Highly detailed artwork",
        "Custom stitch patterns",
        "All formats and variations",
        "1-2 revisions",
        "1-3 business days turnaround",
        "Priority support"
      ],
      bestFor: "Complex artwork, premium quality"
    }
  ]

  const additionalServices = [
    {
      service: "Rush Service",
      price: "+$20",
      description: "Same day turnaround"
    },
    {
      service: "Custom Formats",
      price: "+$15",
      description: "Additional embroidery formats"
    },
    {
      service: "Multiple Sizes",
      price: "+$10",
      description: "Different embroidery sizes"
    },
    {
      service: "Bulk Orders",
      price: "10% off",
      description: "10+ items"
    }
  ]

  const digitizationTypes = [
    {
      name: "Logo Digitization",
      description: "Convert logos for embroidery machines",
      icon: "🏷️"
    },
    {
      name: "Artwork Digitization",
      description: "Transform artwork into embroidery files",
      icon: "🎨"
    },
    {
      name: "Text Digitization",
      description: "Convert text and fonts for embroidery",
      icon: "📝"
    },
    {
      name: "Complex Designs",
      description: "Detailed patterns and intricate artwork",
      icon: "✨"
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Digitization <span className="text-[#F97316]">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Professional embroidery digitization services with competitive pricing
          </motion.p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is <span className="text-[#F97316]">Digitization</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Digitization is the process of converting artwork, logos, or designs into 
                embroidery machine-readable files. This ensures your designs can be 
                perfectly stitched onto fabric with precision and quality.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-[#F97316]">✓</span>
                  Machine-readable files
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#F97316]">✓</span>
                  Professional quality
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#F97316]">✓</span>
                  Multiple formats
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#F97316]">✓</span>
                  Fast turnaround
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#F97316]">✓</span>
                  Expert craftsmanship
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <img
                src="/Home/before17.jpg"
                alt="Digitization Service"
                className="rounded-lg shadow-lg mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digitization Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Available <span className="text-[#F97316]">Digitization Types</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our wide variety of digitization services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitizationTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-gray-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-[#F97316]">Plan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the perfect plan for your digitization needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {digitizationServices.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow ${
                  index === 1 ? 'ring-2 ring-[#F97316] scale-105' : ''
                }`}
              >
                {index === 1 && (
                  <div className="bg-[#F97316] text-white text-center py-2 px-4 rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold text-[#F97316] mb-4">{plan.price}</div>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-[#F97316] mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <button
                    onClick={() => togglePlan(index)}
                    className="flex items-center justify-between w-full text-left text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <strong>Best for:</strong> {plan.bestFor}
                    {expandedPlan === index ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                  
                  {expandedPlan === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 p-3 bg-gray-50 rounded-md"
                    >
                      <p className="text-sm text-gray-600">{plan.bestFor}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        This plan is ideal for {plan.bestFor.toLowerCase()} and includes all the features listed above.
                      </p>
                    </motion.div>
                  )}
                </div>

                <Link
                  to="/contact"
                  className="block w-full bg-[#F97316] text-white text-center py-3 rounded-md font-semibold hover:bg-[#EA580C] transition-colors"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#F97316]">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Upload", description: "Send us your artwork or logo" },
              { step: "2", title: "Analyze", description: "We review and plan the digitization" },
              { step: "3", title: "Digitize", description: "Create embroidery machine files" },
              { step: "4", title: "Deliver", description: "Send your digitized files" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#F97316] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perfect for <span className="text-[#F97316]">Every Business</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Digitization is essential for various embroidery applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Branding",
                description: "Company logos on uniforms and merchandise",
                icon: "🏢"
              },
              {
                title: "Fashion & Apparel",
                description: "Custom designs on clothing and accessories",
                icon: "👕"
              },
              {
                title: "Promotional Items",
                description: "Branded merchandise and giveaways",
                icon: "🎁"
              }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-[#F97316]">Digitize</span> Your Design?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our professional digitization services today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#F97316] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#EA580C] transition-colors text-lg"
              >
                Get Started Now
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-colors text-lg"
              >
                View Samples
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DigitizationPricingPage
