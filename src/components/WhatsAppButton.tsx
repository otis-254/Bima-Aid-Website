'use client'

import { useState, useEffect } from 'react'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsVisible(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = '254790026360' // Your WhatsApp number (without + or spaces)
    const message = 'Hello BIMA-AID Team, I am interested in your insurance claim assistance services. Could you please provide me with more information about how you can help with my claim?'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-24 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-50 flex items-center justify-center
        ${isVisible ? 'animate-fly-in' : 'animate-fly-out'}`}
      aria-label="Chat on WhatsApp"
    >
      <ChatBubbleLeftRightIcon className="w-7 h-7" />
    </button>
  )
} 