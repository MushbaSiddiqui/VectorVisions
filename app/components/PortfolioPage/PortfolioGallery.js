'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const PortfolioGallery = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    const styleSheet = document.createElement("style")
    styleSheet.innerText = `
      .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
      }

      .custom-scrollbar::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
      }

      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #1A2238;
        border-radius: 4px;
      }

      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #2a3350;
      }
    `
    document.head.appendChild(styleSheet)

    return () => {
      document.head.removeChild(styleSheet)
    }
  }, [])

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'vector', label: 'Vector Artwork' },
    { id: 'digitizing', label: 'Digitizing Samples' },
    { id: 'patch', label: 'Patch Designs' }
  ]

  const portfolioItems = [
    {
      id: 1,
      category: 'vector',
      title: 'Logo Vectorization',
      thumbnail: '/portfolio-snapshot/vectors/vector-1.jpg',
      beforeImage: '/portfolio-snapshot/vectors/vector-1-before.jpg',
      afterImage: '/portfolio-snapshot/vectors/vector-1.jpg',
      description: 'Vectorized from low-res PNG, 2-color design, 24-hour turnaround',
      formats: ['AI', 'EPS', 'SVG', 'PDF'],
      client: 'Tech Startup',
      industry: 'Technology'
    },
    {
      id: 2,
      category: 'digitizing',
      title: 'Embroidered Logo',
      thumbnail: '/portfolio-snapshot/digitizing/digitizing-1.jpg',
      beforeImage: '/portfolio-snapshot/digitizing/digitizing-1-before.jpg',
      afterImage: '/portfolio-snapshot/digitizing/digitizing-1.jpg',
      description: 'Complex logo digitized for embroidery, 3D puff effect, 12-hour turnaround',
      formats: ['DST', 'PES', 'EXP', 'JEF'],
      client: 'Fashion Brand',
      industry: 'Fashion'
    },
    {
      id: 3,
      category: 'patch',
      title: 'Custom Patch Design',
      thumbnail: '/portfolio-snapshot/patches/patch-1.jpg',
      beforeImage: '/portfolio-snapshot/patches/patch-1-before.jpg',
      afterImage: '/portfolio-snapshot/patches/patch-1.jpg',
      description: 'Custom patch design with metallic thread, 48-hour turnaround',
      formats: ['AI', 'EPS', 'DST', 'PES'],
      client: 'Motorcycle Club',
      industry: 'Automotive'
    },
    // Add more items as needed
  ]

  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#1A2238] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h2 className="text-3xl font-bold text-[#1A2238] mb-2">{selectedItem.title}</h2>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                          {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="text-gray-400 hover:text-[#1A2238] transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full"
                      aria-label="Close modal"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Before/After Comparison */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={selectedItem.beforeImage}
                        alt="Before"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/75 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                        Before
                      </div>
                    </div>
                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={selectedItem.afterImage}
                        alt="After"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                        After
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-[#1A2238] mb-3">Description</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedItem.description}</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-[#1A2238] mb-3">Formats Delivered</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedItem.formats.map(format => (
                          <span
                            key={format}
                            className="px-4 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium shadow-sm"
                          >
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>

                    {(selectedItem.client || selectedItem.industry) && (
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-[#1A2238] mb-3">Client Details</h3>
                        <div className="flex flex-wrap gap-6">
                          {selectedItem.client && (
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-white rounded-lg shadow-sm">
                                <svg className="w-5 h-5 text-[#1A2238]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Client</p>
                                <p className="text-[#1A2238] font-medium">{selectedItem.client}</p>
                              </div>
                            </div>
                          )}
                          {selectedItem.industry && (
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-white rounded-lg shadow-sm">
                                <svg className="w-5 h-5 text-[#1A2238]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Industry</p>
                                <p className="text-[#1A2238] font-medium">{selectedItem.industry}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default PortfolioGallery 