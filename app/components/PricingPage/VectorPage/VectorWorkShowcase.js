'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const VectorWorkShowcase = () => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const examples = [
    {
      tier: "Basic",
      title: "Simple Logo Vectorization",
      image: "/portfolio-snapshot/vectors/vector-1.jpg",
      description: "Clean, precise conversion of simple logos and basic artwork",
      features: [
        "Clean line work",
        "Perfect curves",
        "Color separation",
        "Multiple formats"
      ]
    },
    {
      tier: "Standard",
      title: "Moderate Detail Conversion",
      image: "/portfolio-snapshot/vectors/vector-2.jpg",
      description: "Detailed conversion with font matching and color optimization",
      features: [
        "Font matching",
        "Color optimization",
        "Detail preservation",
        "Format conversion"
      ]
    },
    {
      tier: "Complex",
      title: "High-Detail Vector Art",
      image: "/portfolio-snapshot/vectors/vector-3.jpg",
      description: "Complex artwork with gradients, shadows, and custom elements",
      features: [
        "Gradient effects",
        "Shadow details",
        "Custom elements",
        "Print-ready files"
      ]
    }
  ]

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value)
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1A2238] mb-6">Our Work Samples</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See the quality of our vector conversion work across different complexity levels
          </p>
        </motion.div>

        {/* Examples Grid */}
        <div className="space-y-20">
          {examples.map((example, index) => (
            <motion.div
              key={example.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Image Comparison */}
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl group">
                {/* Overlay with Info */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white p-6">
                    <span className="block text-amber-500 font-medium mb-2">{example.tier} Tier</span>
                    <h3 className="text-2xl font-bold mb-2">{example.title}</h3>
                    <p className="text-gray-200">{example.description}</p>
                  </div>
                </div>
                
                {/* Image Container */}
                <div className="relative w-full h-full">
                  <Image
                    src={example.image}
                    alt={`${example.title} comparison`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  
                  {/* Slider Overlay */}
                  <div 
                    className="absolute inset-0 bg-black/60 transition-opacity duration-300"
                    style={{ 
                      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                      opacity: isDragging ? 0.8 : 0.6
                    }}
                  />
                  
                  {/* Slider Control */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-ew-resize"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                  >
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPosition}
                      onChange={handleSliderChange}
                      className="w-full h-full opacity-0 cursor-ew-resize"
                    />
                    <div 
                      className="absolute top-0 bottom-0 w-0.5 bg-amber-500 transition-all duration-300"
                      style={{ 
                        left: `${sliderPosition}%`,
                        boxShadow: isDragging ? '0 0 20px rgba(245, 158, 11, 0.5)' : 'none'
                      }}
                    >
                      <div 
                        className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center transition-transform duration-300 ${
                          isDragging ? 'scale-110' : 'scale-100'
                        }`}
                      >
                        <svg 
                          className={`w-5 h-5 text-white transition-transform duration-300 ${
                            isDragging ? 'rotate-90' : 'rotate-0'
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-black/75 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    After
                  </div>

                  {/* Instructions */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Drag to compare
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#1A2238] mb-4">{example.title}</h3>
                  <p className="text-gray-600">{example.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#1A2238] mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {example.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-[#1A2238] font-medium hover:text-amber-500 transition-colors duration-300"
                  >
                    View More Examples
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/portfolio"
            className="inline-block bg-[#1A2238] text-white px-8 py-4 rounded-lg hover:bg-amber-500 transition-colors duration-300 font-medium text-lg"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default VectorWorkShowcase 