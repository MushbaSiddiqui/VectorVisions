'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-[#1A2238]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Content */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Designs?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Experience our professional vector art and embroidery digitizing services. 
            Let&apos;s bring your creative vision to life.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Portfolio Button */}
            <Link 
              href="/portfolio"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-[#1A2238] transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-amber-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-amber-500 group-hover:bg-amber-500"></span>
              <span className="relative flex items-center gap-2">
                View Our Portfolio
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>

            {/* Quote Button */}
            <Link 
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-amber-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-amber-500 border-2 border-amber-500 group-hover:bg-amber-600"></span>
              <span className="relative flex items-center gap-2">
                Get Free Quote
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Fast Turnaround",
                description: "Quick delivery without compromising quality"
              },
              {
                title: "Expert Team",
                description: "Skilled professionals with years of experience"
              },
              {
                title: "Quality Guarantee",
                description: "100% satisfaction guaranteed on all projects"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-white"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction 