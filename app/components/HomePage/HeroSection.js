'use client'

import { useState, useEffect } from 'react'
import { scroller } from 'react-scroll'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  const slides = [
    {
      image: '/images/hero-1.jpg'
    },
    {
      image: '/images/hero-2.jpg'
    },
    {
      image: '/images/hero-3.jpg'
    }
  ]

  useEffect(() => {
    // Set initial load to false after component mounts
    setIsInitialLoad(false)

    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 2000)
    }, 8000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide
          const isNext = index === (currentSlide + 1) % slides.length

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
                isActive || (isNext && isTransitioning)
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
              style={{
                zIndex: isNext && isTransitioning ? 20 : isActive ? 10 : 0
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[8000ms] ease-in-out"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform: `scale(${
                    isInitialLoad && isActive
                      ? '2'
                      : isActive || (isNext && isTransitioning)
                      ? '1.2'
                      : '2'
                  })`,
                  opacity: isActive || (isNext && isTransitioning) ? 1 : 0
                }}
              />
            </div>
          )
        })}
      </section>
      <button
        className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center gap-1 px-2 py-1 bg-transparent outline-none cursor-pointer z-30 group"
        tabIndex={0}
        aria-label="Scroll Down"
        onClick={() => {
          scroller.scrollTo('main-content', {
            duration: 1400,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: 0
          })
        }}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            scroller.scrollTo('main-content', {
              duration: 1400,
              delay: 0,
              smooth: 'easeInOutQuart',
              offset: 0
            })
          }
        }}
      >
        <svg
          className="w-16 h-16 text-white drop-shadow-lg group-hover:text-blue-300 group-focus:text-blue-300 transition-colors duration-200 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="7" y="2" width="10" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="12" y1="6" x2="12" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-xs font-medium text-white drop-shadow-lg group-hover:text-blue-300 group-focus:text-blue-300 transition-colors duration-200">Scroll Down</span>
      </button>
    </>
  )
}

export default HeroSection 