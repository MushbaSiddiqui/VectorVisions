'use client'

import { motion } from 'framer-motion'

const VectorNotesTerms = () => {
  const terms = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Pricing",
      description: "All prices in PKR",
      highlight: "Transparent Pricing"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Delivery Time",
      description: "6–12 hours (standard)",
      highlight: "Fast Turnaround"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Formats Delivered",
      description: "AI, EPS, SVG, PDF, PNG, JPG",
      highlight: "Multiple Formats"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "Payment Methods",
      description: "Jazzcash/Easypaisa/Banking App",
      highlight: "Secure Payment"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Guarantee",
      description: "100% satisfaction guarantee",
      highlight: "Quality Assured"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1A2238] mb-4">Notes & Terms</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clear and transparent terms to ensure a smooth experience with our vector conversion services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {terms.map((term, index) => (
            <motion.div
              key={term.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-amber-50 rounded-lg text-amber-500 group-hover:scale-110 transition-transform duration-300">
                    {term.icon}
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-amber-50 text-amber-600 text-sm font-medium rounded-full mb-2">
                      {term.highlight}
                    </span>
                    <h3 className="text-xl font-bold text-[#1A2238]">
                      {term.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg">
                  {term.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gray-50 px-6 py-4 rounded-lg border border-gray-100">
            <p className="text-gray-600">
              <span className="font-medium text-[#1A2238]">Note:</span> All terms and conditions are subject to change based on project complexity and requirements
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VectorNotesTerms 