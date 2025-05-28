'use client'

import { useRef, useEffect } from 'react'

export const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animation properties
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      type: 'shield' | 'scale' | 'check'
    }[] = []

    // Create particles
    const createParticles = () => {
      const types: ('shield' | 'scale' | 'check')[] = ['shield', 'scale', 'check']
      for (let i = 0; i < 15; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 20 + 10,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.1 + 0.05,
          type: types[Math.floor(Math.random() * types.length)]
        })
      }
    }
    createParticles()

    // Draw symbols
    const drawSymbol = (x: number, y: number, size: number, type: 'shield' | 'scale' | 'check', opacity: number) => {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 2

      switch (type) {
        case 'shield':
          // Draw shield shape
          ctx.beginPath()
          ctx.moveTo(x, y - size)
          ctx.lineTo(x + size, y)
          ctx.lineTo(x, y + size)
          ctx.lineTo(x - size, y)
          ctx.closePath()
          ctx.stroke()
          break

        case 'scale':
          // Draw justice scale
          ctx.beginPath()
          ctx.moveTo(x, y - size)
          ctx.lineTo(x, y + size)
          ctx.moveTo(x - size, y)
          ctx.lineTo(x + size, y)
          ctx.stroke()
          break

        case 'check':
          // Draw checkmark
          ctx.beginPath()
          ctx.moveTo(x - size/2, y)
          ctx.lineTo(x, y + size/2)
          ctx.lineTo(x + size, y - size/2)
          ctx.stroke()
          break
      }
      ctx.restore()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Draw particle
        drawSymbol(particle.x, particle.y, particle.size, particle.type, particle.opacity)
      })

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.1 }}
    />
  )
} 