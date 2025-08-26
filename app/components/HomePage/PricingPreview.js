"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

const PricingPreview = () => (
  <motion.section
    className="w-full bg-[#1A2238] py-20"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Affordable Pricing Starting From <span className="text-amber-400">PKR 1500</span></h2>
      <p className="text-lg text-gray-200 mb-8">Transparent, competitive rates for all services. No hidden fees—just great value and quality.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/pricing"
          className="px-8 py-3 rounded-full font-semibold bg-amber-500 text-[#1A2238] shadow hover:bg-amber-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
          tabIndex={0}
          aria-label="View Full Pricing"
        >
          View Full Pricing
        </Link>
        <Link
          href="/contact"
          className="px-8 py-3 rounded-full font-semibold bg-white text-[#1A2238] shadow hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          tabIndex={0}
          aria-label="Get a Quote"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  </motion.section>
)

export default PricingPreview 