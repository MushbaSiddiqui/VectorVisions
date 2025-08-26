import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const VectorPricingPage = () => {
  const [expandedPlan, setExpandedPlan] = useState(null)

  const togglePlan = (index) => {
    setExpandedPlan(expandedPlan === index ? null : index)
  }

  const vectorServices = [
    {
      title: "Basic Vector",
      price: "$10",
      description: "Simple logo or artwork conversion",
      features: [
        "Single color design",
        "Basic shapes and text",
        "Standard formats (AI, EPS, SVG)",
        "2 revisions included",
        "3-5 business days turnaround"
      ],
      bestFor: "Simple logos, basic designs"
    },
    {
      title: "Standard Vector",
      price: "$25",
      description: "Complex logo or artwork conversion",
      features: [
        "Multi-color designs",
        "Complex shapes and gradients",
        "All vector formats",
        "3 revisions included",
        "2-3 business days turnaround"
      ],
      bestFor: "Medium complexity designs"
    },
    {
      title: "Premium Vector",
      price: "$50 Onwards",
      description: "Professional artwork and detailed designs",
      features: [
        "Highly detailed artwork",
        "Custom color palettes",
        "All formats and variations",
        "Unlimited revisions",
        "1-2 business days turnaround",
        "Priority support"
      ],
      bestFor: "Complex artwork, premium quality"
    }
  ]

  const additionalServices = [
    {
      service: "Rush Service",
      price: "+$25",
      description: "Same day turnaround"
    },
    {
      service: "Custom Formats",
      price: "+$15",
      description: "Additional file formats"
    },
    {
      service: "Multiple Variations",
      price: "+$20",
      description: "Different color schemes"
    },
    {
      service: "Bulk Orders",
      price: "10% off",
      description: "10+ items"
    }
  ]

  const vectorTypes = [
    {
      name: "AI Generated Vectors",
      description: "AI-powered vector creation from descriptions",
      icon: "🤖"
    },
    {
      name: "Hand Drawn Vectors",
      description: "Custom hand-drawn vector artwork",
      icon: "✏️"
    },
    {
      name: "Logo Conversion",
      description: "Convert existing logos to vector format",
      icon: "🔄"
    },
    {
      name: "Artwork Vectorization",
      description: "Convert raster images to vector format",
      icon: "🎨"
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Vector Art <span className="text-[#F97316]">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Professional vector art services with competitive pricing for all your design needs
          </motion.p>
        </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is <span className="text-[#F97316]">Vector Art</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Vector art consists of scalable graphics that maintain their quality at any size. 
                Unlike raster images, vectors are perfect for logos, illustrations, and designs 
                that need to be resized without losing clarity.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-[#F97316]">✓</span>
                  Scalable to any size
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#F97316]">✓</span>
                  Perfect for printing
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
                  Easy to edit
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
                src="/Home/before9.jpg"
                alt="Vector Art Service"
                className="rounded-lg shadow-lg mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vector Types */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Available <span className="text-[#F97316]">Vector Types</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our wide variety of vector art services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vectorTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-lg hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:scale-105"
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
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
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
              Select the perfect plan for your vector art needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {vectorServices.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 ${
                  index === 1 ? 'ring-2 ring-[#F97316] scale-105 bg-gradient-to-br from-white via-orange-50 to-yellow-50' : ''
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

      {/* Additional Services */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Additional <span className="text-[#F97316]">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your vector art project with these optional services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.service}</h3>
                <div className="text-2xl font-bold text-[#F97316] mb-2">{service.price}</div>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50">
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
              { step: "1", title: "Design", description: "Create your vector design concept" },
              { step: "2", title: "Vectorize", description: "Convert to vector format" },
              { step: "3", title: "Review", description: "Quality check and revisions" },
              { step: "4", title: "Deliver", description: "Send final vector files" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
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
      <section className="py-16 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50">
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
              Vector art is essential for various industries and applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Branding & Marketing",
                description: "Logos, business cards, and marketing materials",
                icon: "🎯"
              },
              {
                title: "Web Design",
                description: "Website graphics and user interface elements",
                icon: "💻"
              },
              {
                title: "Print Media",
                description: "Brochures, flyers, and large format printing",
                icon: "🖨️"
              }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-white via-orange-50 to-red-50 rounded-lg hover:shadow-lg transition-all duration-300 border border-orange-100 hover:border-orange-200 hover:scale-105"
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
      <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create <span className="text-[#F97316]">Vector Art</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our professional vector art services today
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
        </div>
      </section>
    </div>
  )
}

export default VectorPricingPage
