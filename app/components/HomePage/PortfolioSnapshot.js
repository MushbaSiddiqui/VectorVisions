"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const categories = [
  { label: 'Vector Art', value: 'vector' },
  { label: 'Digitizing', value: 'digitizing' },
  { label: 'Patches', value: 'patches' },
]

const samples = [
  { src: '/portfolio-snapshot/vectors/vector-1.jpg', category: 'vector', alt: 'Vector Art Sample 1' },
  { src: '/portfolio-snapshot/vectors/vector-2.jpg', category: 'vector', alt: 'Vector Art Sample 2' },
  { src: '/portfolio-snapshot/vectors/vector-3.jpg', category: 'vector', alt: 'Vector Art Sample 3' },
  { src: '/portfolio-snapshot/digitization/digitize-1.jpg', category: 'digitizing', alt: 'Digitizing Sample 1' },
  { src: '/portfolio-snapshot/digitization/digitize-2.jpg', category: 'digitizing', alt: 'Digitizing Sample 2' },
  { src: '/portfolio-snapshot/digitization/digitize-3.jpg', category: 'digitizing', alt: 'Digitizing Sample 3' },
  { src: '/portfolio-snapshot/patches/patch-1.jpg', category: 'patches', alt: 'Patch Sample 1' },
  { src: '/portfolio-snapshot/patches/patch-2.jpg', category: 'patches', alt: 'Patch Sample 2' },
  { src: '/portfolio-snapshot/patches/patch-3.jpg', category: 'patches', alt: 'Patch Sample 3' },
]

const accentColors = {
  vector: 'border-red-800 text-red-800',
  digitizing: 'border-amber-500 text-amber-500',
  patches: 'border-orange-600 text-orange-600',
}

const PortfolioSnapshot = () => {
  const [active, setActive] = useState('vector')
  const filtered = samples.filter((s) => s.category === active)

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1A2238] mb-10">Portfolio Snapshot</h2>
        <div className="flex justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`px-5 py-2 rounded-full border font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 text-base ${active === cat.value ? accentColors[cat.value] + ' bg-white shadow' : 'border-gray-300 text-gray-500 bg-gray-100 hover:bg-white'}`}
              onClick={() => setActive(cat.value)}
              tabIndex={0}
              aria-label={`Show ${cat.label}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {filtered.slice(0, 6).map((sample, i) => (
              <motion.div
                key={sample.src}
                className="rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <Image
                  src={sample.src}
                  alt={sample.alt}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={400}
                  height={224}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-center">
          <a
            href="/portfolio"
            className="px-8 py-3 rounded-full font-semibold bg-[#1A2238] text-white shadow hover:bg-[#23272F] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            tabIndex={0}
            aria-label="View Full Portfolio"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSnapshot 