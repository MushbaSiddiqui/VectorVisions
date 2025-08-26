"use client"
import Link from 'next/link'
import Image from 'next/image'

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
  ) },
  { href: 'https://instagram.com', label: 'Instagram', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.635.401 3.678 1.358 2.721 2.315 2.448 3.451 2.39 4.732 2.332 6.012 2.32 6.421 2.32 12c0 5.579.012 5.988.07 7.268.058 1.281.331 2.417 1.288 3.374.957.957 2.093 1.23 3.374 1.288C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.417-.331 3.374-1.288.957-.957 1.23-2.093 1.288-3.374.058-1.28.07-1.689.07-7.268 0-5.579-.012-5.988-.07-7.268-.058-1.281-.331-2.417-1.288-3.374C19.365.401 18.229.128 16.948.07 15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
  ) },
  { href: 'https://wa.me/923001234567', label: 'WhatsApp', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A12.07 12.07 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.22-1.45l-.37-.22-3.69.97.99-3.59-.24-.37A9.94 9.94 0 012 12C2 6.48 6.48 2 12 2c2.54 0 4.93.99 6.73 2.77A9.94 9.94 0 0122 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
  ) },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
  ) },
]

const paymentIcons = [
  { label: 'Visa', icon: (
    <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none" aria-hidden="true"><rect width="48" height="32" rx="4" fill="#fff"/><text x="24" y="21" textAnchor="middle" fontSize="14" fill="#1A2238" fontWeight="bold">VISA</text></svg>
  ) },
  { label: 'MasterCard', icon: (
    <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none" aria-hidden="true"><rect width="48" height="32" rx="4" fill="#fff"/><circle cx="19" cy="16" r="8" fill="#EA580C"/><circle cx="29" cy="16" r="8" fill="#F59E42"/><text x="24" y="21" textAnchor="middle" fontSize="10" fill="#1A2238" fontWeight="bold">MC</text></svg>
  ) },
  { label: 'PayPal', icon: (
    <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none" aria-hidden="true"><rect width="48" height="32" rx="4" fill="#fff"/><text x="24" y="21" textAnchor="middle" fontSize="12" fill="#1A2238" fontWeight="bold">PayPal</text></svg>
  ) },
]

const Footer = () => (
  <footer className="w-full bg-[#1A2238] text-gray-200 pt-12 pb-6 px-4 mt-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
      {/* Logo & Customer Service */}
      <div className="flex flex-col gap-4 md:col-span-1 items-start">
        <Image src="/logo.jpg" alt="Vector Visions Logo" width={120} height={40} className="mb-2 rounded shadow" />
        <div className="mt-2">
          <span className="font-semibold text-white text-base">Customer Service</span>
          <div className="flex items-center gap-2 mt-1">
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-1.516 2.485l-.3.06a11.042 11.042 0 005.516 5.516l.06-.3a2 2 0 012.485-1.516l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" /></svg>
            <a href="tel:8477015918" className="hover:text-amber-400 transition-colors" aria-label="Call Customer Service">(847) 701-5918</a>
          </div>
          <Link href="/contact" className="mt-2 inline-block text-amber-400 hover:underline text-sm font-medium" aria-label="Contact Us">Contact Us</Link>
        </div>
      </div>
      {/* Business Hours */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-white text-base">Business Hours (UTC-5)</span>
        <span className="text-sm">Monday-Friday: <span className="text-amber-400">9am - 5pm</span></span>
        <span className="text-sm">Saturday-Sunday: <span className="text-gray-400">Closed</span></span>
      </div>
      {/* Company */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-white text-base">Company</span>
        <Link href="/company" className="hover:text-amber-400 transition-colors text-sm" aria-label="About Us">About Us</Link>
        <Link href="/company#mission" className="hover:text-amber-400 transition-colors text-sm" aria-label="Mission & Vision">Mission & Vision</Link>
        <Link href="/company#why" className="hover:text-amber-400 transition-colors text-sm" aria-label="Why Choose Us">Why Choose Us</Link>
      </div>
      {/* Services & Policies */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-white text-base">Services</span>
        <Link href="/services" className="hover:text-amber-400 transition-colors text-sm" aria-label="Services">Services</Link>
        <span className="font-semibold text-white text-base mt-4">Policies</span>
        <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors text-sm" aria-label="Privacy Policy">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-amber-400 transition-colors text-sm" aria-label="Terms of Use">Terms of Use</Link>
        <Link href="/acknowledgement" className="hover:text-amber-400 transition-colors text-sm" aria-label="Acknowledgement">Acknowledgement</Link>
      </div>
      {/* Payments & Social */}
      <div className="flex flex-col gap-4 items-start">
        <span className="font-semibold text-white text-base">We Accept</span>
        <div className="flex gap-3 mb-2">
          {paymentIcons.map((p) => (
            <span key={p.label} title={p.label} className="inline-flex items-center">{p.icon}</span>
          ))}
        </div>
        <span className="font-semibold text-white text-base mt-2">Social Media</span>
        <div className="flex gap-4">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 rounded">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
      © {new Date().getFullYear()} Vector Visions. All rights reserved.
    </div>
  </footer>
)

export default Footer 