"use client"
import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fast Turnaround',
    description: 'Most orders delivered within 4–12 hours. We pride ourselves on speed without sacrificing quality.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" />
      </svg>
    ),
    title: 'Affordable Pricing',
    description: 'Get top-tier vector and digitization services at competitive, transparent prices. No hidden fees.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: '100% Satisfaction Guarantee',
    description: 'We work with you until you are completely satisfied. Unlimited revisions on all projects.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
      </svg>
    ),
    title: 'Experience',
    description: 'Over 10 years in the industry and thousands of successful orders delivered worldwide.'
  }
]

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
}

const WhyChooseUs = () => (
  <section className="w-full bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-[#1A2238] mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={i}
            variants={fadeInVariant}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#1A2238]">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default WhyChooseUs 