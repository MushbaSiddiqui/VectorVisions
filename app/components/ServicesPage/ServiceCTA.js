'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const ServiceCTA = () => {
  return (
    <section className="py-20 px-4 bg-[#1A2238] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Text */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8"
          >
            Need fast and flawless digitizing or vector art?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-12"
          >
            View our portfolio and get a free quote within minutes!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/portfolio"
              className="inline-block bg-amber-500 text-[#1A2238] px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#1A2238] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
            >
              Request a Free Quote
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-gray-300"
          >
            <p className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Quick turnaround within 6-12 hours
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 text-white"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default ServiceCTA 