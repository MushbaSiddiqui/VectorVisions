'use client'

import { motion } from 'framer-motion'

const VectorPricingCards = () => {
  const pricingPlans = [
    {
      title: "Basic Vector Conversion",
      price: "PKR 1,500 – 3,000",
      description: "Perfect for simple logos and basic artwork",
      features: [
        "Simple artwork or logo tracing",
        "Up to 3 colors",
        "Delivered in AI, EPS, PDF, PNG",
        "1–2 Revisions"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Standard Vector Conversion",
      price: "PKR 3,000 – 5,000",
      description: "Ideal for moderate complexity designs",
      features: [
        "Moderate detail",
        "Up to 5 colors",
        "Font matching or simple redrawing",
        "Multiple file formats",
        "Unlimited revisions"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      popular: true
    },
    {
      title: "Complex / Detailed Vector Artwork",
      price: "PKR 5,000 – 10,000+",
      description: "For high-detail and complex designs",
      features: [
        "High-detail designs (gradients, shadows, illustrations)",
        "Custom redraws",
        "Print-ready formats (CMYK/RGB)",
        "Unlimited revisions"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1A2238] mb-6">Choose Your Plan</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Select the perfect vector conversion package for your needs. All plans include our quality guarantee and professional service.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-amber-500 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Card Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="text-amber-500 mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1A2238] mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-[#1A2238]">{plan.price}</div>
              </div>

              {/* Features List */}
              <div className="p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <svg className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="p-8 pt-0">
                <a
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-amber-500 text-white hover:bg-amber-600'
                      : 'bg-[#1A2238] text-white hover:bg-[#1A2238]/90'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 text-gray-600"
        >
          <p>Need a custom solution? Contact us for a personalized quote.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default VectorPricingCards 