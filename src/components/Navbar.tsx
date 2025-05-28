'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/images/logo.png"
              alt="BIMA-AID"
              width={200}
              height={60}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="relative text-primary group hover:text-accent-teal transition-colors duration-300">
              <span className="relative z-10">Home</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-teal transition-all duration-300 ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link href="/about" className="relative text-primary group hover:text-accent-teal transition-colors duration-300">
              <span className="relative z-10">About</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-teal transition-all duration-300 ${
                isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link href="/success-stories" className="relative text-primary group hover:text-accent-teal transition-colors duration-300">
              <span className="relative z-10">Success Stories</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-teal transition-all duration-300 ${
                isActive('/success-stories') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link href="/contact" className="relative text-primary group hover:text-accent-teal transition-colors duration-300">
              <span className="relative z-10">Contact</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-teal transition-all duration-300 ${
                isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link href="/case-digest" className="relative text-primary group hover:text-accent-teal transition-colors duration-300">
              <span className="relative z-10">Case Digest</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-teal transition-all duration-300 ${
                isActive('/case-digest') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-2 bg-accent-teal text-secondary-light rounded-lg hover:bg-accent-dark transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-10 p-2 text-primary hover:text-accent transition-colors duration-300"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="container-custom h-full flex flex-col justify-center items-center space-y-8">
          <Link 
            href="/" 
            className="relative text-2xl text-primary group hover:text-accent-teal transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative z-10">Home</span>
            <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-teal transition-all duration-300 ${
              isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          <Link 
            href="/about" 
            className="relative text-2xl text-primary group hover:text-accent-teal transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative z-10">About</span>
            <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-teal transition-all duration-300 ${
              isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          <Link 
            href="/success-stories" 
            className="relative text-2xl text-primary group hover:text-accent-teal transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative z-10">Success Stories</span>
            <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-teal transition-all duration-300 ${
              isActive('/success-stories') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          <Link 
            href="/contact" 
            className="relative text-2xl text-primary group hover:text-accent-teal transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative z-10">Contact</span>
            <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-teal transition-all duration-300 ${
              isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          <Link 
            href="/case-digest" 
            className="relative text-2xl text-primary group hover:text-accent-teal transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative z-10">Case Digest</span>
            <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-teal transition-all duration-300 ${
              isActive('/case-digest') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-3 bg-accent-teal text-secondary-light rounded-lg hover:bg-accent-dark transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
} 