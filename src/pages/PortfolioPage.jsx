import React, { useState } from 'react'
import { motion } from 'framer-motion'

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image, title) => {
    setSelectedImage({ image, title });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const portfolioCategories = [
    {
      title: "Vectorization",
      description: "Transform your raster images into clean, scalable vector art",
      samples: [
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d1.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d2.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d3.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d4.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d5.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d6.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d7.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d8.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d9.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d35.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d13.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d14.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d15.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d16.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d17.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d18.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d19.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d20.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d21.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d22.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d23.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d24.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d25.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d26.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d28.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d29.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d30.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d31.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d32.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d33.jpeg" },
        { title: "Vectorization", image: "/portfolio-snapshot/vector/d34.jpeg" }
      ]
    },
    {
      title: "Digitization",
      description: "Professional embroidery digitization for all types of designs",
      samples: [
        { title: "Digitization", image: "/portfolio-snapshot/digitization/d1.jpeg" },
        { title: "Digitization", image: "/portfolio-snapshot/digitization/d2.jpeg" },
        { title: "Digitization", image: "/portfolio-snapshot/digitization/d3.jpeg" },
        { title: "Digitization", image: "/portfolio-snapshot/digitization/d4.jpeg" },
        { title: "LOGO Digitization", image: "/portfolio-snapshot/digitization/d5.jpeg" },
        { title: "Digitization", image: "/portfolio-snapshot/digitization/d6.jpeg" },
        { title: "Digitization", image: "/portfolio-snapshot/digitization/d7.jpeg" },
        { title: "Digitization", image: "/portfolio-snapshot/digitization/d8.jpeg" },
        { title: "Digitization", image: "/portfolio-snapshot/digitization/d9.jpeg" },
        { title: "Digitization", image: "/portfolio-snapshot/digitization/d10.jpeg" },
        { title: "Digitization", image: "/portfolio-snapshot/digitization/d11.jpeg" },
        { title: "Digitization", image: "/portfolio-snapshot/digitization/d12.jpeg" },
        { title: "Digitization", image: "/portfolio-snapshot/digitization/d13.jpeg" },
        { title: "Digitization", image: "/portfolio-snapshot/digitization/d14.jpeg" },
        { title: "Digitization", image: "/portfolio-snapshot/digitization/d15.jpeg" }
        
      ]
    },
    {
      title: "Patches",
      description: "Unique patch designs for branding and identification",
      samples: [
        { title: "Patches", image: "/portfolio-snapshot/patches/p11.jpg" },
        { title: "Patches", image: "/portfolio-snapshot/patches/p3.jpg" },
        { title: "Patches", image: "/portfolio-snapshot/patches/p4.jpg" },
        { title: "Patches", image: "/portfolio-snapshot/patches/before1.jpg" },
        { title: "Patches", image: "/portfolio-snapshot/patches/before4.jpg" },
        { title: "Patches", image: "/portfolio-snapshot/patches/before5.jpg" },

        
      ]
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-[#F97316]">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Take a look at our recent work and see the quality we deliver
          </motion.p>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {portfolioCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.samples.map((sample, sampleIndex) => (
                    <motion.div
                      key={sampleIndex}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: sampleIndex * 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => openModal(sample.image, sample.title)}
                    >
                      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-200 hover:border-orange-300 hover:scale-[1.02]">
                        <div className="h-56 w-full overflow-hidden">
                          <img
                            src={sample.image}
                            alt={sample.title}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-3 bg-white">
                          <h3 className="text-sm font-semibold text-gray-800 text-center leading-tight">
                            {sample.title}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#F97316]">Achievements</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that speak for our quality and dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24hrs", label: "Fastest Turnaround" },
              { number: "50+", label: "Happy Clients" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#F97316] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-[#F97316]">Project</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your vision to life with our expert team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#EA580C] transition-colors text-lg"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={selectedImage?.image}
                alt={selectedImage?.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Image Title */}
            {selectedImage?.title && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-center">{selectedImage.title}</h3>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default PortfolioPage