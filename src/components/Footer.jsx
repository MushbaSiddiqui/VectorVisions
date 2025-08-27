import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo and Company Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 pb-8 border-b border-gray-200"
        >
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/logo.jpg" 
              alt="Vector Vision Logo" 
              className="w-16 h-16 mr-4"
            />
            <h2 className="text-3xl font-bold text-gray-900">
              <span className="text-gray-900">Vector</span>
              <span className="text-[#F97316]">Vision</span>
            </h2>
          </div>
          <div className="mt-4 text-gray-600">
            <p>6108 Petersburg St Anchorage, </p>
            <p>AK 99507, USA</p>
            <p>Phone: (847) 701-5918 | Email: info@vectorvision.com</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Customer Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">CUSTOMER SERVICES</h3>
            <div className="space-y-2">
              <p className="text-gray-600">(847) 701-5918</p>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-orange-600 transition-colors duration-300 block"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Business Hours Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">BUSINESS HOURS (UTC-5)</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Monday-Friday : 9am - 5pm</p>
              <p className="text-gray-600">Saturday-Sunday : (Closed)</p>
            </div>
          </motion.div>

          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">COMPANY</h3>
            <div className="space-y-2">
              <Link 
                to="/company" 
                className="text-gray-600 hover:text-orange-600 transition-colors duration-300 block"
              >
                About Us
              </Link>
              <Link 
                to="/portfolio" 
                className="text-gray-600 hover:text-orange-600 transition-colors duration-300 block"
              >
                Portfolio
              </Link>
              <Link 
                to="/company" 
                className="text-gray-600 hover:text-orange-600 transition-colors duration-300 block"
              >
                Why Choose Us
              </Link>
              <Link 
                to="/services" 
                className="text-gray-600 hover:text-orange-600 transition-colors duration-300 block"
              >
                Services
              </Link>
            </div>
          </motion.div>

          {/* Policies Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">POLICIES</h3>
            <div className="space-y-2">
              <Link 
                to="/privacy" 
                className="text-gray-600 hover:text-orange-600 transition-colors duration-300 block"
              >
                Privacy policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-600 hover:text-orange-600 transition-colors duration-300 block"
              >
                Terms of Use
              </Link>
              <Link 
                to="/acknowledgement" 
                className="text-gray-600 hover:text-orange-600 transition-colors duration-300 block"
              >
                Acknowledgement
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-end mb-8"
        >
          <div className="flex space-x-3">
            <motion.a
              href="#"
              className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="font-bold text-sm">f</span>
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="font-bold text-sm">in</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Payment Methods Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">We Accept</h3>
          <div className="flex flex-wrap gap-3">
            <motion.img
              src="/payments/visa.png"
              alt="VISA"
              className="h-12 w-16 object-contain shadow-md rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="/payments/mastercard.png"
              alt="MasterCard"
              className="h-12 w-16 object-contain shadow-md rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="/payments/amex.png"
              alt="American Express"
              className="h-12 w-16 object-contain shadow-md rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="/payments/discover.png"
              alt="Discover"
              className="h-12 w-16 object-contain shadow-md rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="/payments/paypal.png"
              alt="PayPal"
              className="h-12 w-16 object-contain shadow-md rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="/payments/2checkout.png"
              alt="2CO"
              className="h-12 w-16 object-contain shadow-md rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="/payments/creditcard.png"
              alt="Credit Card"
              className="h-12 w-16 object-contain shadow-md rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2024 Vector Vision. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
