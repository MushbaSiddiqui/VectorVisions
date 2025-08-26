import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PatchesPricingPage = () => {

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
            Custom Patches <span className="text-[#F97316]">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Unique patch designs for branding and identification with competitive pricing
          </motion.p>
        </div>
      </section>

      {/* Patches Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Patches <span className="text-[#F97316]">(On Quote)</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Custom patch pricing varies based on design complexity, materials, and quantity. 
              Contact us for a personalized quote tailored to your specific needs.
            </p>
            
            {/* Request Quote Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-[#F97316] text-white px-12 py-4 rounded-lg font-semibold hover:bg-[#EA580C] transition-colors text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Request a Quote
              </Link>
            </motion.div>
          </motion.div>

          {/* Patch Types Grid */}
          <div className="grid grid-cols-1 gap-8 mt-12">
              {[
                {
                  name: "Embroidered Patches",
                  image: "/portfolio-snapshot/patches/p11.jpg"
                },
                {
                  name: "Chenille Patches",
                  image: "/portfolio-snapshot/patches/p3.jpg"
                },
                {
                  name: "Chenille Patches",
                  image: "/portfolio-snapshot/patches/p4.jpg"
                },
                {
                  name: "Leather Patches",
                  image: "/portfolio-snapshot/patches/before5.jpg"
                }
              ].map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={type.image}
                      alt={type.name}
                      className="w-full h-80 object-cover rounded-lg shadow-md"
                      onError={(e) => {
                        console.error(`Failed to load image: ${type.image}`);
                        e.target.style.display = 'none';
                      }}
                      onLoad={() => console.log(`Image loaded successfully: ${type.image}`)}
                    />
                    {type.name && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                        <h3 className="font-semibold">{type.name}</h3>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>



      {/* Why Choose Our Patches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-[#F97316]">Our Patches</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional quality patches with custom designs tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Design",
                description: "Unique patches designed specifically for your brand and requirements",
                icon: "🎨"
              },
              {
                title: "Quality Materials",
                description: "Premium materials ensuring durability and professional appearance",
                icon: "✨"
              },
              {
                title: "Fast Turnaround",
                description: "Quick production and delivery to meet your timeline",
                icon: "⚡"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Process Section */}
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
              Our <span className="text-[#F97316]">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Design", description: "Create your custom patch design" },
              { step: "2", title: "Review", description: "We review and optimize the design" },
              { step: "3", title: "Production", description: "Manufacture your patches" },
              { step: "4", title: "Deliver", description: "Ship your patches worldwide" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#F97316] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perfect for <span className="text-[#F97316]">Every Business</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Custom patches are ideal for various industries and applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Branding",
                description: "Company logos and brand identity patches",
                icon: "🏢"
              },
              {
                title: "Uniform Identification",
                description: "Employee name and role patches",
                icon: "👔"
              },
              {
                title: "Military & Law Enforcement",
                description: "Professional identification patches",
                icon: "🛡️"
              }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create <span className="text-[#F97316]">Custom Patches</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our professional custom patch services today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#F97316] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#EA580C] transition-colors text-lg"
              >
                Get Started Now
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-colors text-lg"
              >
                View Samples
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PatchesPricingPage
