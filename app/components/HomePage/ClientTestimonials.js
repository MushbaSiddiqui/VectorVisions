"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    text: 'Vector Visions delivered our logo vectorization in just a few hours. The quality was outstanding and the communication was top-notch. Highly recommended!',
    name: 'Sarah M.',
    business: 'Brandify Studio',
    rating: 5
  },
  {
    text: 'We needed digitized files for embroidery and they nailed it! Fast turnaround and perfect results every time.',
    name: 'Mike L.',
    business: 'StitchWorks',
    rating: 5
  },
  {
    text: 'The custom patches were exactly what we wanted. Great attention to detail and very professional service.',
    name: 'Emily R.',
    business: 'Urban Apparel',
    rating: 4
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

const StarRating = ({ rating }) => (
  <div className="flex items-center justify-center mb-2">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-5 h-5 ${star <= rating ? 'text-amber-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
      </svg>
    ))}
  </div>
)

const getCardsPerView = () => {
  if (typeof window === 'undefined') return 1
  if (window.innerWidth >= 1024) return 3
  if (window.innerWidth >= 640) return 2
  return 1
}

const ClientTestimonials = () => {
  const [active, setActive] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1) // SSR-safe

  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView())
    setCardsPerView(getCardsPerView()) // Set on mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate which testimonials to show
  const total = testimonials.length
  let visible = []
  for (let i = 0; i < cardsPerView; i++) {
    visible.push((active + i) % total)
  }

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1A2238] mb-12">Client Testimonials</h2>
        <div className="relative flex items-center">
          {/* Slider Controls */}
          <button
            className="p-2 rounded-full bg-gray-100 shadow hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 absolute left-0 top-1/2 -translate-y-1/2 z-10"
            onClick={() => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence initial={false}>
              {visible.map((idx, i) => (
                <motion.div
                  key={testimonials[idx].text}
                  className="relative bg-gray-50 p-8 rounded-xl shadow flex flex-col items-center text-center min-h-[260px] border-t-4 border-amber-400"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  {/* Quote Icon */}
                  <span className="absolute left-6 top-6 text-amber-400 opacity-30 text-4xl select-none">“</span>
                  <StarRating rating={testimonials[idx].rating} />
                  <p className="text-lg text-gray-700 mb-4 font-medium">{testimonials[idx].text}</p>
                  <div className="font-semibold text-[#1A2238]">{testimonials[idx].name}</div>
                  <div className="text-sm text-gray-500">{testimonials[idx].business}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <button
            className="p-2 rounded-full bg-gray-100 shadow hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 absolute right-0 top-1/2 -translate-y-1/2 z-10"
            onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        {/* Mobile Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${visible.includes(i) ? 'bg-gray-700' : 'bg-gray-300'} transition-colors`}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientTestimonials 