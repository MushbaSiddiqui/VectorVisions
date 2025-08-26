'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const PortfolioCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-[#1A2238] mb-6">
            Like what you see? Let&apos;s work together.
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Upload your artwork now for a free quote or browse our pricing pages for more details.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1A2238] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-[#1A2238]/90 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get a Free Quote
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </Link>

            <Link 
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1A2238] rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl border-2 border-[#1A2238] hover:bg-[#1A2238] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              View Pricing
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-4 text-gray-500"
          >
            <svg 
              className="w-5 h-5 text-amber-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span className="text-sm">Quick turnaround time</span>
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
            <svg 
              className="w-5 h-5 text-amber-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
              />
            </svg>
            <span className="text-sm">Quality guaranteed</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioCTA 