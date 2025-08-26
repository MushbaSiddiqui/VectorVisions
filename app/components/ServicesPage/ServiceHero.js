'use client'

import { motion } from 'framer-motion'

const ServiceHero = () => {
  return (
    <section className="relative py-20 px-4 bg-[#1A2238] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Services
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-amber-500 mx-auto mb-8"
          />

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed"
          >
            We offer high-quality graphic and embroidery services tailored for apparel decorators, 
            printers, branding agencies, and promotional product businesses. Fast delivery, 
            production-ready files, and unbeatable accuracy.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10"
          >
            <a
              href="#services"
              className="inline-block bg-amber-500 text-[#1A2238] px-8 py-3 rounded-lg font-medium hover:bg-amber-400 transition-colors duration-300"
              aria-label="View our services"
            >
              Explore Services
            </a>
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

export default ServiceHero 