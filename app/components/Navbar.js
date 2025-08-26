'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Company', href: '/company' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' }
]

const pricingDropdown = [
  { name: 'Vector', href: '/pricing/vector' },
  { name: 'Digitization', href: '/pricing/digitization' },
  { name: 'Patches', href: '/pricing/patches' }
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pricingOpen, setPricingOpen] = useState(false)

  const handleMobileToggle = () => setMobileOpen((open) => !open)
  const handlePricingToggle = () => setPricingOpen((open) => !open)
  const handleCloseMenus = () => {
    setMobileOpen(false)
    setPricingOpen(false)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  return (
    <nav id="navbar" className="w-full z-40 sticky top-0 bg-white border-b border-gray-200 shadow-sm">
      <div id="main-content" className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-[#1A2238] font-bold text-2xl tracking-tight" aria-label="Vector Visions Home">
          <Image src="/logo.jpg" alt="Vector Visions Logo" width={64} height={64} className="w-20 h-20 object-contain" />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.slice(0, 3).map((link) => (
            <Link key={link.name} href={link.href} className="text-[#1A2238] hover:text-[#2563EB] font-medium px-2 py-1 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400" tabIndex={0} aria-label={link.name}>
              {link.name}
            </Link>
          ))}
          {/* Pricing Dropdown */}
          <div className="relative group">
            <button
              className="text-[#1A2238] hover:text-[#2563EB] font-medium px-2 py-1 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center gap-1"
              aria-haspopup="true"
              aria-expanded={pricingOpen}
              aria-controls="pricing-menu"
              onClick={handlePricingToggle}
              onBlur={() => setPricingOpen(false)}
              tabIndex={0}
            >
              Pricing
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div
              id="pricing-menu"
              className={`absolute left-0 mt-2 min-w-[160px] bg-white rounded shadow-lg py-2 transition-all duration-200 ${pricingOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} group-hover:opacity-100 group-hover:visible`}
              onMouseEnter={() => setPricingOpen(true)}
              onMouseLeave={() => setPricingOpen(false)}
            >
              {pricingDropdown.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-[#1A2238] hover:bg-[#2563EB]/10 hover:text-[#2563EB] transition-colors duration-150"
                  tabIndex={0}
                  aria-label={item.name}
                  onClick={handleCloseMenus}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.slice(3).map((link) => (
            <Link key={link.name} href={link.href} className="text-[#1A2238] hover:text-[#2563EB] font-medium px-2 py-1 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400" tabIndex={0} aria-label={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center text-[#1A2238] focus:outline-none focus:ring-2 focus:ring-blue-400 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={handleMobileToggle}
        >
          <svg 
            className="w-6 h-6 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={2} 
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link href="/" className="flex items-center gap-3" onClick={handleCloseMenus}>
              <Image src="/logo.jpg" alt="Vector Visions Logo" width={40} height={40} className="w-10 h-10 object-contain" />
              <span className="text-[#1A2238] font-bold text-xl">Vector Visions</span>
            </Link>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={handleMobileToggle}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-[#1A2238] text-lg font-medium rounded-lg hover:bg-[#2563EB]/10 hover:text-[#2563EB] transition-colors duration-200"
                  onClick={handleCloseMenus}
                >
                  {link.name}
                </Link>
              ))}

              {/* Pricing Dropdown in Mobile */}
              <div className="px-4 py-3">
                <button
                  className="w-full flex items-center justify-between text-[#1A2238] text-lg font-medium rounded-lg hover:bg-[#2563EB]/10 hover:text-[#2563EB] transition-colors duration-200"
                  onClick={handlePricingToggle}
                >
                  <span>Pricing</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      pricingOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {pricingOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    {pricingDropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-[#1A2238] rounded-lg hover:bg-[#2563EB]/10 hover:text-[#2563EB] transition-colors duration-200"
                        onClick={handleCloseMenus}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-gray-200">
            <Link
              href="/quote"
              className="block w-full px-4 py-3 text-center bg-[#1A2238] text-white font-medium rounded-lg hover:bg-[#1A2238]/90 transition-colors duration-200"
              onClick={handleCloseMenus}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 