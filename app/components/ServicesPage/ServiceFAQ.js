'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What file types do you accept?",
      answer: "We accept a wide range of file formats including JPG, PNG, PDF, AI, EPS, PSD, and more. For best results, we recommend providing high-resolution images or vector files. If you're unsure about your file format, feel free to contact us and we'll guide you through the process."
    },
    {
      question: "What's your turnaround time?",
      answer: "Our standard turnaround time is 6-12 hours for most projects. However, this may vary depending on the complexity of the design and current workload. We always strive to deliver your files as quickly as possible without compromising on quality."
    },
    {
      question: "Do you offer rush services?",
      answer: "Yes, we offer rush services for urgent projects. Our express service can deliver your files within 2-4 hours, subject to project complexity. Please contact us for rush service pricing and availability."
    },
    {
      question: "What embroidery formats do you provide?",
      answer: "We provide all major embroidery machine formats including DST, PES, EXP, JEF, HUS, VIP, VP3, XXX, and more. We can also convert between different formats if needed. Our files are compatible with most commercial and home embroidery machines."
    },
    {
      question: "How many revisions are included?",
      answer: "We offer unlimited revisions until you're completely satisfied with the results. Our goal is to ensure your design meets your exact requirements. We work closely with you to make any necessary adjustments to achieve the perfect outcome."
    }
  ]

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1A2238] mb-6">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Find answers to common questions about our services
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => handleToggle(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-[#1A2238]">{faq.question}</span>
                <motion.svg
                  className="w-6 h-6 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-600 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 mb-6">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#1A2238] text-white px-8 py-3 rounded-lg hover:bg-amber-500 transition-colors duration-300 font-medium"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceFAQ 