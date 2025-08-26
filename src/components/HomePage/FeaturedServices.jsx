import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const FeaturedServices = () => {
  const services = [
    {
      title: "Vector Art",
      description: "Professional vector art services for logos, illustrations, and designs",
      path: "/pricing/vector",
      icon: (
        <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Digitization",
      description: "Expert embroidery digitization for perfect machine-readable files",
      path: "/pricing/digitization",
      icon: (
        <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Custom Patches",
      description: "Unique patch designs for branding and identification",
      path: "/pricing/patches",
      icon: (
        <svg className="w-16 h-16 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 4v2h6V4M9 4v2h6V4" />
        </svg>
      ),
      color: "from-pink-500 to-purple-500"
    }
  ]

  return (
    <section className="w-full bg-gray-900 py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(249,115,22,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,146,60,0.1),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-8 py-3 rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SPECIAL OFFER: 20% OFF ALL SERVICES
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Featured</span> Services
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our premium design services that transform your ideas into stunning reality
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02 
              }}
              className="relative group cursor-pointer"
            >
              {/* 3D Card Container */}
              <div className="relative transform-gpu transition-all duration-500">
                {/* Glowing Border */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000`} />
                
                {/* Main Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl overflow-hidden">
                  {/* Service Icon */}
                  <motion.div
                    className="mb-6 text-center"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-600 text-center mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-center"
                  >
                    <Link
                      to={service.path}
                      className={`inline-block bg-gradient-to-r ${service.color} text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-12 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10"
              whileHover={{ color: "#F97316" }}
              transition={{ duration: 0.3 }}
            >
              Ready to Transform Your Designs?
            </motion.h3>
            
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              Let's create something amazing together. Get in touch with our expert team today!
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
              >
                Start Your Project
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedServices
