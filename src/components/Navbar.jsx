import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [pricingDropdownOpen, setPricingDropdownOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "COMPANY", path: "/company" },
    { name: "PRICING", path: "#", hasDropdown: true },
    { name: "CONTACT", path: "/contact" }
  ]

  const pricingOptions = [
    { name: "Vector Art", path: "/pricing/vector" },
    { name: "Digitization", path: "/pricing/digitization" },
    { name: "Patches", path: "/pricing/patches" }
  ]

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.img 
              src="/logo.jpg" 
              alt="Vector Vision" 
              className="h-12 w-12"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <h2 className="text-xl font-bold text-gray-900">
              <span className="text-gray-900">Vector</span>
              <span className="text-[#F97316]">Vision</span>
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onMouseEnter={() => setPricingDropdownOpen(true)}
                    onMouseLeave={() => setPricingDropdownOpen(false)}
                    className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm flex items-center gap-1 py-2"
                  >
                    {item.name}
                    <motion.svg
                      className="w-4 h-4"
                      animate={{ rotate: pricingDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  
                  <AnimatePresence>
                    {pricingDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                        onMouseEnter={() => setPricingDropdownOpen(true)}
                        onMouseLeave={() => setPricingDropdownOpen(false)}
                      >
                        {pricingOptions.map((option) => (
                          <Link
                            key={option.name}
                            to={option.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                            onClick={() => setPricingDropdownOpen(false)}
                          >
                            {option.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm py-2 ${
                    location.pathname === item.path ? 'text-orange-600 border-b-2 border-orange-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-orange-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-orange-600 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  item.hasDropdown ? (
                    <div key={item.name} className="px-4 py-2">
                      <div className="text-gray-700 font-medium text-sm mb-2">{item.name}</div>
                      <div className="ml-4 space-y-1">
                        {pricingOptions.map((option) => (
                          <Link
                            key={option.name}
                            to={option.path}
                            onClick={() => setIsOpen(false)}
                            className="block py-1 text-gray-600 hover:text-orange-600 transition-colors duration-300 text-sm"
                          >
                            {option.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-300 text-sm ${
                        location.pathname === item.path ? 'text-orange-600 bg-orange-50' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <div className="px-4 py-2">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-orange-700 transition-colors duration-300 text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
