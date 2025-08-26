import React from 'react'
import { motion } from 'framer-motion'

const AcknowledgementPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Acknowledgement
            </h1>
            <p className="text-xl text-gray-600">
              Recognition and appreciation
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Commitment to Excellence</h2>
            <p className="text-gray-700 mb-6">
              At Vector Vision, we acknowledge the importance of transparency, trust, and professional relationships with our clients, partners, and stakeholders. This acknowledgement page serves as a testament to our commitment to maintaining the highest standards in our industry.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Client Recognition</h2>
            <p className="text-gray-700 mb-6">
              We extend our sincere gratitude to all our valued clients who have trusted us with their creative projects. Your confidence in our services has been the driving force behind our continuous improvement and innovation in vector art, digitization, and custom patch services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Industry Standards</h2>
            <p className="text-gray-700 mb-6">
              We acknowledge and adhere to the highest industry standards in embroidery digitization, vector art creation, and custom patch manufacturing. Our commitment to quality, precision, and customer satisfaction remains unwavering.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Technology and Innovation</h2>
            <p className="text-gray-700 mb-6">
              We acknowledge the rapid evolution of technology in our field and commit to staying at the forefront of innovation. Our investment in cutting-edge tools and software ensures that we deliver exceptional results that meet modern industry demands.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Team Excellence</h2>
            <p className="text-gray-700 mb-6">
              We acknowledge the dedication and expertise of our talented team members who work tirelessly to deliver outstanding results. Their commitment to craftsmanship and attention to detail is what sets Vector Vision apart in the industry.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Continuous Improvement</h2>
            <p className="text-gray-700 mb-6">
              We acknowledge that excellence is a journey, not a destination. We are committed to continuous learning, improvement, and adaptation to meet the evolving needs of our clients and the industry.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ethical Business Practices</h2>
            <p className="text-gray-700 mb-6">
              We acknowledge our responsibility to conduct business with integrity, honesty, and respect for all stakeholders. Our commitment to ethical practices extends to every aspect of our operations, from client relationships to environmental responsibility.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Future Commitment</h2>
            <p className="text-gray-700 mb-6">
              As we look to the future, we acknowledge our responsibility to continue pushing boundaries, embracing new technologies, and maintaining the high standards that our clients have come to expect from Vector Vision.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg my-8">
              <p className="text-orange-800 font-medium">
                "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives - choice, not chance, determines destiny."
              </p>
              <p className="text-orange-600 text-sm mt-2">- Aristotle</p>
            </div>

            <div className="text-center text-sm text-gray-500 mt-8 pt-6 border-t border-gray-200">
              <p>This document was last updated on {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AcknowledgementPage
