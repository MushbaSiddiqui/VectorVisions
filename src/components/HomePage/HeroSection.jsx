import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  
  const heroImages = [
    '/Home/before8.jpg',
    '/Home/before9.jpg',
    '/Home/before11.jpg',
    '/Home/before7.jpg',
    '/portfolio-snapshot/patches/p3.jpg'
  ]

  // Preload images to prevent white flash
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = heroImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = reject
          img.src = src
        })
      })
      
      try {
        await Promise.all(imagePromises)
        setImagesLoaded(true)
      } catch (error) {
        console.error('Error loading images:', error)
        setImagesLoaded(true) // Continue anyway
      }
    }
    
    loadImages()
  }, [heroImages])

  useEffect(() => {
    if (!imagesLoaded) return
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [heroImages.length, imagesLoaded])

  if (!imagesLoaded) {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </section>
    )
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Crossfade */}
      {heroImages.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentImage ? 1 : 0,
            scale: index === currentImage ? 1 : 1.05
          }}
          transition={{ 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <motion.img
            src={image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
            animate={{
              scale: index === currentImage ? [1, 1.08, 1] : 1
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: index === currentImage ? Infinity : 0,
              repeatType: "reverse"
            }}
          />
          <div className="absolute inset-0 bg-gray-900/60" />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Transform Your
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 block">Designs</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
        >
          Professional vector art services for logos, embroidery, and custom patches. 
          Bring your vision to life with our expert team.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/services"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Our Services
          </Link>
          <Link
            to="/portfolio"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg"
          >
            View Portfolio
          </Link>
        </motion.div>
      </motion.div>

      {/* Image Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3"
      >
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-orange-500 scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2.5, ease: "linear" }}
        key={currentImage}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 to-red-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.5, ease: "linear" }}
        />
      </motion.div>
    </section>
  )
}

export default HeroSection
