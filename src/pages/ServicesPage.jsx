import React from 'react'
import { motion } from 'framer-motion'

const ServicesPage = () => {
  const services = [
    {
      title: "Vectorization",
      description: "We take your any raster image and recreate them into clean image ready for vector art.",
      features: [
        "Handmade Vector, no auto vector/tracing",
        "Redrawing",
        "All Major Formats",
        "Outstanding Quality with Fastest Turnaround Time",
        "Virtual Samples"
      ],
      image: "/Home/vector.jpg"
    },
    {
      title: "Digitization",
      description: "We customize files for Embroidery work.",
      features: [
        "Affordable Digitizing without compromising the Quality.",
        "Fastest Turnaround time by 4 to 8 Hours",
        "Provide all Major Format",
        "Expert in Wilcom, Melco and Pulse",
        "Free Minor Editing, Revision and Resizing"
      ],
      image: "/Home/before11.jpg"
    },
    {
      title: "Patches",
      description: "Patches are a great tool for promoting a company's brand and presence. Uniforms can display a vibrant company logo or an employee name. Our patches are fully customizable with multiple options to suit your organization's needs.",
      features: [
        "Custom Design Patches",
        "Company Branding",
        "Employee Name Patches",
        "Multiple Material Options",
        "Professional Quality"
      ],
      image: "/portfolio-snapshot/patches/p4.jpg"
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
            Our <span className="text-[#F97316]">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Professional vector art, embroidery digitization, and custom patch services
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Service Image */}
                <div className="w-full">
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Service Content */}
                <div className="w-full">
                  <h3 className="text-3xl font-extrabold tracking-wide text-[#F97316] mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[#F97316]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
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
              Why Choose Our <span className="text-[#F97316]">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service with a focus on quality, speed, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Quality",
                description: "Professional results with attention to every detail",
                icon: "✨"
              },
              {
                title: "Fast Turnaround",
                description: "Quick delivery without compromising quality",
                icon: "⚡"
              },
              {
                title: "Affordable Pricing",
                description: "Competitive rates for professional services",
                icon: "💰"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
              Ready to Get <span className="text-[#F97316]">Started</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your vision to life with our expert team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#EA580C] transition-colors text-lg"
            >
              Contact Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
