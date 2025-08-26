'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const CompanyOverview = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[#1A2238]">Our Story</h2>
              <div className="w-20 h-1 bg-amber-500"></div>
              <p className="text-lg text-gray-700">
                Founded in 2010, Vector Visions has grown from a small design studio to a leading provider of vector art and digitization services. Our journey has been marked by continuous innovation and an unwavering commitment to quality.
              </p>
              <p className="text-lg text-gray-700">
                We are a creative service company offering top-notch vector conversions, embroidery digitizing, and custom patch creation. With over a decade of experience, we&apos;ve served more than 5,000 clients across 30+ countries, helping businesses and creators bring their designs to life.
              </p>
              <p className="text-lg text-gray-700">
                Our team of expert designers and technicians specializes in transforming complex artwork into precise, production-ready files that meet the highest industry standards.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {[
                {
                  title: "Expert Team",
                  description: "Skilled professionals with years of experience",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Global Reach",
                  description: "Serving clients across 30+ countries",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Quality Focus",
                  description: "Commitment to excellence in every project",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Fast Turnaround",
                  description: "Quick delivery without compromising quality",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                }
              ].map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl group hover:bg-[#1A2238] transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-amber-500 group-hover:text-amber-400 transition-colors duration-300">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1A2238] group-hover:text-white transition-colors duration-300 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/company-overview.jpg"
              alt="Vector Visions Design Studio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay with stats */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2238]/90 via-[#1A2238]/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "10+", label: "Years Experience" },
                    { number: "5000+", label: "Projects Completed" },
                    { number: "30+", label: "Countries Served" },
                    { number: "98%", label: "Client Satisfaction" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <p className="text-3xl font-bold text-amber-500 mb-1">{stat.number}</p>
                      <p className="text-sm text-gray-200">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverview 