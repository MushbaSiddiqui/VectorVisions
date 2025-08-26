'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const VectorConversionSamples = () => {
  const [activeSample, setActiveSample] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const samples = [
    {
      id: 1,
      title: 'Logo Vectorization',
      beforeImage: '/portfolio-snapshot/vectors/vector-1-before.jpg',
      afterImage: '/portfolio-snapshot/vectors/vector-1.jpg',
      description: 'Professional logo vectorization from low-resolution source',
      useCases: ['Print', 'Vinyl', 'Engraving'],
      formats: ['AI', 'EPS', 'SVG', 'PDF', 'PNG']
    },
    {
      id: 2,
      title: 'Complex Illustration',
      beforeImage: '/portfolio-snapshot/vectors/vector-2-before.jpg',
      afterImage: '/portfolio-snapshot/vectors/vector-2.jpg',
      description: 'Detailed illustration converted to clean vector format',
      useCases: ['Print', 'Signage', 'Digital'],
      formats: ['AI', 'EPS', 'SVG', 'PDF', 'PNG']
    },
    {
      id: 3,
      title: 'Artwork Restoration',
      beforeImage: '/portfolio-snapshot/vectors/vector-3-before.jpg',
      afterImage: '/portfolio-snapshot/vectors/vector-3.jpg',
      description: 'Restored and vectorized vintage artwork',
      useCases: ['Print', 'Merchandise', 'Packaging'],
      formats: ['AI', 'EPS', 'SVG', 'PDF', 'PNG']
    }
  ]

  const handlePrevious = () => {
    setActiveSample((prev) => (prev === 0 ? samples.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveSample((prev) => (prev === samples.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1A2238] mb-4">Vector Conversion Samples</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your low-resolution images into high-quality vector graphics perfect for any application
          </p>
        </motion.div>

        {/* Main Sample Display */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={`before-${activeSample}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src={samples[activeSample].beforeImage}
                  alt="Before Vectorization"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 bg-black/75 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                  Before
                </div>
              </motion.div>

              <motion.div
                key={`after-${activeSample}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src={samples[activeSample].afterImage}
                  alt="After Vectorization"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                  After
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300"
            aria-label="Previous sample"
          >
            <svg className="w-6 h-6 text-[#1A2238]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300"
            aria-label="Next sample"
          >
            <svg className="w-6 h-6 text-[#1A2238]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Sample Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSample}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-lg mb-12"
          >
            <h3 className="text-2xl font-bold text-[#1A2238] mb-4">{samples[activeSample].title}</h3>
            <p className="text-gray-600 mb-6">{samples[activeSample].description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-[#1A2238] mb-3">Formats Delivered</h4>
                <div className="flex flex-wrap gap-3">
                  {samples[activeSample].formats.map(format => (
                    <motion.span
                      key={format}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {format}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#1A2238] mb-3">Use Cases</h4>
                <div className="flex flex-wrap gap-3">
                  {samples[activeSample].useCases.map(useCase => (
                    <motion.span
                      key={useCase}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                    >
                      {useCase}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Sample Navigation */}
        <div className="flex justify-center gap-4">
          {samples.map((sample, index) => (
            <button
              key={sample.id}
              onClick={() => setActiveSample(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSample === index
                  ? 'bg-[#1A2238] scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`View sample ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default VectorConversionSamples 