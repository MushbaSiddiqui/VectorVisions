"use client"
import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ContactCTA = () => {
  const fileInputRef = useRef()
  return (
    <motion.section
      className="w-full bg-white py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1A2238] mb-8">Get a Quick Quote</h2>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Form */}
          <form className="w-full lg:w-2/3 bg-gray-50 p-8 rounded-xl shadow flex flex-col gap-4" autoComplete="off">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none text-gray-800"
                required
                aria-label="Your Name"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none text-gray-800"
                required
                aria-label="Your Email"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <label className="w-full flex flex-col items-start">
                <span className="mb-1 text-sm text-gray-600">Upload Artwork (optional)</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  name="artwork"
                  accept="image/*,.pdf,.ai,.eps,.svg,.psd"
                  className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-amber-100 file:text-amber-700 hover:file:bg-amber-200"
                  aria-label="Upload Artwork"
                />
              </label>
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none text-gray-800"
              required
              aria-label="Your Message"
            />
            <button
              type="submit"
              className="mt-2 px-8 py-3 rounded-full font-semibold bg-amber-500 text-[#1A2238] shadow hover:bg-amber-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Send Quote Request"
            >
              Send Quote Request
            </button>
          </form>
          {/* Info & WhatsApp */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start gap-6">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-lg font-semibold text-[#1A2238] mb-2">Or contact us directly:</span>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-green-600 text-white shadow hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                aria-label="Contact on WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A12.07 12.07 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.22-1.45l-.37-.22-3.69.97.99-3.59-.24-.37A9.94 9.94 0 012 12C2 6.48 6.48 2 12 2c2.54 0 4.93.99 6.73 2.77A9.94 9.94 0 0122 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" /></svg>
                WhatsApp
              </a>
            </div>
            <div className="text-center lg:text-left">
              <span className="block text-lg font-semibold text-[#1A2238] mb-1">Location</span>
              <span className="text-gray-700">Serving clients worldwide from Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactCTA 