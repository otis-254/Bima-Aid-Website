'use client'

import { useState, useEffect } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      setScrollProgress(scrollPercent)
      
      // Clear any existing timeout
      clearTimeout(scrollTimeout)
      
      if (scrollTop > 300 && !isVisible) {
        setIsAnimating(true)
        setIsVisible(true)
      } else if (scrollTop <= 300 && isVisible) {
        setIsAnimating(false)
        // Wait for animation to complete before hiding
        scrollTimeout = setTimeout(() => {
          setIsVisible(false)
        }, 500) // Match animation duration
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [isVisible])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-accent-teal to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-50 group
        ${isAnimating ? 'animate-fly-in' : 'animate-fly-out'}`}
      aria-label="Scroll to top"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Circular Progress */}
        <svg className="w-full h-full -rotate-90 transform">
          <circle
            className="text-gray-200/20"
            strokeWidth="2"
            stroke="currentColor"
            fill="transparent"
            r="20"
            cx="24"
            cy="24"
          />
          <circle
            className="text-white transition-all duration-300"
            strokeWidth="2"
            strokeDasharray={125.6}
            strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="20"
            cx="24"
            cy="24"
          />
        </svg>
        
        {/* Arrow Icon */}
        <ChevronUpIcon className="absolute w-6 h-6 transform transition-transform duration-300 group-hover:-translate-y-1" />
      </div>
    </button>
  )
} 