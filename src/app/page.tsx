'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheckIcon, ScaleIcon, UserGroupIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { AnimatedSection } from '@/components/AnimatedSection'
import { HeroCarousel } from '@/components/HeroCarousel'
import '@/styles/animations.css'
import { useEffect, useRef } from 'react'

const features = [
  {
    title: 'Expert Guidance',
    description: 'Get professional assistance from experienced insurance claim consultants.',
    icon: ShieldCheckIcon,
    gradient: 'from-blue-500 to-accent-teal',
  },
  {
    title: 'Legal Support',
    description: 'Access comprehensive legal support for your insurance claim disputes.',
    icon: ScaleIcon,
    gradient: 'from-primary to-blue-600',
  },
  {
    title: 'Client Success',
    description: 'Join hundreds of satisfied clients who have won their insurance claims.',
    icon: UserGroupIcon,
    gradient: 'from-accent-teal to-primary',
  },
]

const process = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'We review your case and provide a detailed assessment of your claim.',
    icon: '📋',
    color: 'from-primary to-accent',
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Our experts create a customized plan to maximize your claim success.',
    icon: '🎯',
    color: 'from-accent to-primary',
  },
  {
    step: '03',
    title: 'Documentation',
    description: 'We help gather and organize all necessary documents and evidence.',
    icon: '📑',
    color: 'from-primary to-accent-dark',
  },
  {
    step: '04',
    title: 'Claim Resolution',
    description: 'We negotiate with insurance companies and fight for your rights.',
    icon: '⚖️',
    color: 'from-accent-dark to-primary',
  },
]

const testimonials = [
  {
    quote: "BIMA-AID helped me win my medical claim after months of struggle. Their expertise made all the difference.",
    author: "Kavya Moses",
    role: "Medical Claim Client",
    image: "/images/Cleint 001.jpg"
  },
  {
    quote: "Professional, dedicated, and successful. They fought for my property damage claim and won!",
    author: "Zachary Opiyo",
    role: "Property Insurance Client",
    image: "/images/Cleint 002.jpg"
  },
  {
    quote: "The team at BIMA-AID is exceptional. They made the complex claim process simple and successful.",
    author: "Jeniffer Wangui",
    role: "Life Insurance Client",
    image: "/images/Cleint 003.jpg"
  },
]

export default function HomePage() {
  const testimonialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => { 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-testimonial-reveal')
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    const testimonials = testimonialsRef.current?.querySelectorAll('.testimonial-card')
    testimonials?.forEach((card) => observer.observe(card))

    return () => {
      testimonials?.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <main>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose BIMA-AID?</h2>
            <p className="text-secondary-light text-center max-w-2xl mx-auto mb-12">
              We combine expertise, legal knowledge, and dedication to help you win your insurance claims.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                delay={index * 0.1}
                className="group"
              >
                <div className="relative h-full p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent-teal transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-light leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent-teal to-primary group-hover:w-full transition-all duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative section-padding bg-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Process</h2>
              <p className="text-primary/70 text-lg">
                A simple, transparent process to help you win your insurance claim
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <AnimatedSection
                key={step.step}
                delay={index * 0.1}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-teal/0 via-accent-teal/0 to-accent-teal/0 group-hover:from-accent-teal/20 group-hover:via-primary/10 group-hover:to-accent-teal/5 transition-all duration-500 transform translate-y-full group-hover:translate-y-0" />
                  
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-primary/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:border-accent-teal group-hover:shadow-accent-teal/20">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-4xl font-bold text-primary/10 mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent-teal transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-primary/70 leading-relaxed group-hover:text-primary/80">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-teal/0 via-accent-teal/0 to-accent-teal/0 group-hover:from-accent-teal group-hover:via-primary group-hover:to-accent-teal transition-all duration-500 transform translate-y-full group-hover:translate-y-0" />
                </div>

                {/* Arrow for all except last item */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRightIcon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>

          {/* Bottom CTA */}
          <AnimatedSection className="text-center mt-16">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-secondary-light font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Claim Process
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Client Success Stories</h2>
            <p className="text-secondary-light text-center max-w-2xl mx-auto mb-12">
              Hear from our satisfied clients who have successfully won their claims
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8" ref={testimonialsRef}>
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={testimonial.author}
                delay={index * 0.1}
                className="group"
              >
                <div className="testimonial-card relative h-full p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 opacity-0">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">{testimonial.author}</h3>
                      <p className="text-accent-teal">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-secondary-light italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center text-accent-teal">
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    <span className="text-sm font-semibold">Successful Claim</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding pb-48 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/90 to-primary-dark/90" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-teal via-white to-accent-teal" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-teal via-white to-accent-teal" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Fight for Your Claim?
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                Don't let insurance companies deny your rightful claims. 
                Let us help you get the compensation you deserve.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="group relative px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us Today
                    <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-teal to-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
                </Link>
                <Link 
                  href="/success-stories" 
                  className="group px-8 py-4 text-white border-2 border-white/30 hover:border-white rounded-lg transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    View Success Stories
                    <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>
    </main>
  )
} 