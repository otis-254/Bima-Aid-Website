'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const slides = [
  {
    title: 'Fight for Your Insurance Rights',
    description: 'Expert assistance for policyholders facing unfair claim rejections. We help you win against insurance companies.',
    image: '/images/001.jpg',
    ctaText: 'Get Started',
    ctaLink: '/contact',
    buttonGradient: 'from-accent to-accent-dark',
  },
  {
    title: 'Professional Legal Support',
    description: 'Access comprehensive legal expertise and guidance to maximize your claim success.',
    image: '/images/002.jpeg',
    ctaText: 'Learn More',
    ctaLink: '/services',
    buttonGradient: 'from-accent-dark to-accent',
  },
  {
    title: 'Proven Success Rate',
    description: 'Join thousands of satisfied clients who have successfully won their insurance claims.',
    image: '/images/003.jpg',
    ctaText: 'View Success Stories',
    ctaLink: '/success-stories',
    buttonGradient: 'from-accent to-accent-dark',
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentSlide])

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4">
              <div className="flex items-center h-full">
                <div className="max-w-2xl bg-gradient-to-r from-primary/95 to-primary-dark/95 p-8 rounded-lg backdrop-blur-md shadow-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed drop-shadow-md">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.ctaLink}
                    className={`inline-block px-8 py-4 rounded-lg bg-gradient-to-r ${slide.buttonGradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/80 backdrop-blur-sm text-white hover:bg-accent transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/80 backdrop-blur-sm text-white hover:bg-accent transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-accent scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
} 