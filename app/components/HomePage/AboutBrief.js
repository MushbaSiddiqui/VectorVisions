"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

const AboutBrief = () => (
  <motion.section
    className="w-full bg-gray-50 py-20"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-[#1A2238] mb-6">About Vector Visions</h2>
      <p className="text-lg text-gray-700 mb-2">
        At Vector Visions, our mission is to empower brands and creators with world-class vector art, digitizing, and patch design services.
      </p>
      <p className="text-lg text-gray-700 mb-2">
        We value quality, creativity, and reliability—delivering every project with meticulous attention to detail and a passion for design.
      </p>
      <p className="text-lg text-gray-700 mb-2">
        With over a decade of experience and thousands of successful projects, we&apos;re trusted by businesses and creators worldwide.
      </p>
      <p className="text-lg text-gray-700 mb-8">
        Discover how our expertise and commitment can elevate your brand&apos;s visual identity.
      </p>
      <Link
        href="/company"
        className="inline-block px-8 py-3 rounded-full font-semibold bg-amber-500 text-[#1A2238] shadow hover:bg-amber-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
        tabIndex={0}
        aria-label="Learn More About Us"
      >
        Learn More About Us
      </Link>
    </div>
  </motion.section>
)

export default AboutBrief 