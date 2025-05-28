'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon, MagnifyingGlassMinusIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline'

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Handle pinch zoom start
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      )
      setTouchStart(distance)
    } else {
      setTouchEnd(null)
      setTouchStart(e.targetTouches[0].clientX)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Handle pinch zoom
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      )
      if (touchStart) {
        const newScale = (scale * distance) / touchStart
        setScale(Math.min(Math.max(1, newScale), 4))
      }
    } else {
      setTouchEnd(e.targetTouches[0].clientX)
    }
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  const handleWheel = (e: React.WheelEvent) => {
    if (isFullScreen) {
      e.preventDefault()
      const delta = e.deltaY * -0.01
      const newScale = Math.min(Math.max(1, scale + delta), 4)
      setScale(newScale)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const resetZoom = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setDirection('right')
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
    resetZoom()
    setTimeout(() => setIsTransitioning(false), 500)
  }, [images.length, isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setDirection('left')
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
    resetZoom()
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isFullScreen) {
      switch (e.key) {
        case 'ArrowLeft':
          prevSlide()
          break
        case 'ArrowRight':
          nextSlide()
          break
        case 'Escape':
          setIsFullScreen(false)
          resetZoom()
          break
      }
    }
  }, [isFullScreen, nextSlide, prevSlide])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
    resetZoom()
  }

  return (
    <>
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden group">
        {/* Main Image */}
        <div 
          className="relative w-full h-full cursor-pointer"
          onClick={toggleFullScreen}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentIndex 
                    ? 'translate-x-0 opacity-100' 
                    : index < currentIndex 
                      ? '-translate-x-full opacity-0' 
                      : 'translate-x-full opacity-0'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === currentIndex}
                />
              </div>
            ))}
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning) return
                setDirection(index > currentIndex ? 'right' : 'left')
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Full Screen Modal */}
      {isFullScreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          {/* Close Button */}
          <button
            onClick={toggleFullScreen}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
            aria-label="Close full screen view"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>

          {/* Zoom Controls */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 rounded-full p-2">
            <button
              onClick={() => setScale(Math.max(1, scale - 0.5))}
              className="text-white hover:text-gray-300 transition-colors duration-300 p-2"
              aria-label="Zoom out"
            >
              <MagnifyingGlassMinusIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => setScale(Math.min(4, scale + 0.5))}
              className="text-white hover:text-gray-300 transition-colors duration-300 p-2"
              aria-label="Zoom in"
            >
              <MagnifyingGlassPlusIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Full Screen Image */}
          <div 
            className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4 overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentIndex 
                    ? 'translate-x-0 opacity-100' 
                    : index < currentIndex 
                      ? '-translate-x-full opacity-0' 
                      : 'translate-x-full opacity-0'
                }`}
                style={{
                  transform: index === currentIndex 
                    ? `translate(${position.x}px, ${position.y}px) scale(${scale})`
                    : undefined,
                  cursor: scale > 1 ? 'move' : 'default'
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  priority={index === currentIndex}
                />
              </div>
            ))}
          </div>

          {/* Full Screen Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>

          {/* Full Screen Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-lg">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
} 