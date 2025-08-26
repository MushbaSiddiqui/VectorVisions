'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const VectorCTA = () => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: '',
    file: null
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#1A2238] mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your image and receive a free quote within minutes
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {!showForm ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 bg-[#1A2238] text-white px-8 py-4 rounded-lg hover:bg-amber-500 transition-colors duration-300 font-medium text-lg group"
              >
                <svg 
                  className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" 
                  />
                </svg>
                Upload Artwork / Get a Quote
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Your Artwork
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      required
                      accept="image/*"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
                    />
                  </div>
                </div>

                {/* Comments Field */}
                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Comments
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                    placeholder="Any specific requirements or details about your project"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-gray-600 hover:text-[#1A2238] transition-colors duration-300"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="bg-[#1A2238] text-white px-8 py-3 rounded-lg hover:bg-amber-500 transition-colors duration-300 font-medium"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}

export default VectorCTA 