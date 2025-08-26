'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const ServicesList = () => {
  const services = [
    {
      title: "Vector Art Conversion",
      description: "Convert raster images (JPEG, PNG) into clean, scalable vector files (AI, EPS, SVG, PDF).",
      idealFor: "Ideal for screen printing, DTG, vinyl, and sublimation.",
      includes: ["Color separation", "Redrawing", "Logo cleanup"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Embroidery Digitizing",
      description: "Convert logos/art into stitch-ready embroidery files (DST, PES, EXP, etc.).",
      idealFor: "Suitable for caps, jackets, polos, patches, etc.",
      includes: ["Multiple formats", "Thread colors", "Edits"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Custom Patch Design",
      description: "Create patch-ready designs or finished patch artwork.",
      idealFor: "Types: Chenille, Woven, PVC, Embroidered, Iron-on.",
      includes: ["Production files", "Manufacturer specs", "Multiple formats"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Logo Redraw & Cleanup",
      description: "Recreate blurry or low-quality logos.",
      idealFor: "Perfect for businesses that lost original files.",
      includes: ["High-res formats", "Vector output", "Color matching"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    }
  ]

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-8">
                {/* Icon */}
                <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#1A2238] mb-4 group-hover:text-amber-500 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Ideal For */}
                <p className="text-gray-700 font-medium mb-4">
                  {service.idealFor}
                </p>

                {/* Includes */}
                <div className="mb-6">
                  <h4 className="text-[#1A2238] font-semibold mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-block bg-[#1A2238] text-white px-6 py-2 rounded-lg hover:bg-amber-500 transition-colors duration-300 font-medium"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesList 