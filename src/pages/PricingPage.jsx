import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PricingPage = () => {
  const pricingPlans = [
    {
      title: "Vectorization",
      description: "Transform your raster images into clean, scalable vector art",
      startingPrice: "$25",
      features: [
        "Handmade Vector, no auto vector/tracing",
        "Redrawing",
        "All Major Formats",
        "Outstanding Quality",
        "Fastest Turnaround Time",
        "Virtual Samples"
      ],
      image: "/featured-services/vector.jpg",
      link: "/pricing/vector"
    },
    {
      title: "Digitization",
      description: "Professional embroidery digitization for all types of designs",
      startingPrice: "$35",
      features: [
        "Affordable Digitizing without compromising Quality",
        "Fastest Turnaround time by 4 to 8 Hours",
        "Provide all Major Format",
        "Expert in Wilcom, Melco and Pulse",
        "Free Minor Editing, Revision and Resizing"
      ],
      image: "/featured-services/digitize.jpg",
      link: "/pricing/digitization"
    },
    {
      title: "Custom Patches",
      description: "Unique patch designs for branding and identification",
      startingPrice: "$45",
      features: [
        "Custom Design Patches",
        "Company Branding",
        "Employee Name Patches",
        "Multiple Material Options",
        "Professional Quality",
        "Bulk Discounts Available"
      ],
      image: "/featured-services/patch.jpg",
      link: "/pricing/patches"
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
            Competitive <span className="text-[#F97316]">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Transparent pricing for all our services. No hidden fees, just quality work at fair prices.
          </motion.p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Plan Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Plan Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-[#F97316]">Starting at {plan.startingPrice}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="text-[#F97316] mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.link}
                    className="block w-full bg-[#F97316] text-white text-center py-3 rounded-md font-semibold hover:bg-[#EA580C] transition-colors"
                  >
                    View Detailed Pricing
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Pricing */}
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
              Why Our <span className="text-[#F97316]">Pricing</span> is the Best
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in providing premium quality services at the most affordable pricing for clients from across the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "No Hidden Fees",
                description: "What you see is what you pay. No surprise charges or additional costs.",
                icon: "💰"
              },
              {
                title: "Quality Guaranteed",
                description: "We never compromise on quality, regardless of the price point.",
                icon: "✨"
              },
              {
                title: "Flexible Options",
                description: "Choose the service level that fits your budget and requirements.",
                icon: "⚙️"
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

      {/* Special Offer */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Special <span className="text-[#F97316]">Offer</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your first design for free! Contact us today to claim this exclusive offer.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#EA580C] transition-colors text-lg"
            >
              Claim Your Free Design
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-[#F97316]">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Do you offer bulk discounts?",
                answer: "Yes, we offer competitive bulk discounts for large orders. Contact us for a custom quote."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major payment methods including credit cards, PayPal, and bank transfers."
              },
              {
                question: "Is there a rush fee for urgent projects?",
                answer: "We offer expedited services for urgent projects. Additional fees may apply based on turnaround time."
              },
              {
                question: "Do you provide revisions?",
                answer: "Yes, we include minor revisions and edits in our standard pricing to ensure your satisfaction."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
