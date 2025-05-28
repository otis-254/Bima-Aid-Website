'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { BackgroundAnimation } from '@/components/BackgroundAnimation'
import '@/styles/animations.css'

interface CaseStudy {
  id: number
  title: string
  category: string
  amount: string
  description: string
  image: string
  details: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Medical Insurance Claim Victory',
    category: 'Health Insurance',
    amount: 'Full Settlement',
    description: 'Successfully overturned a rejected medical claim for a Life Insurance.',
    image: '/images/life-case 2.png',
    details: '/case-digest/medical-insurance-claim-2024',
  }
]

export default function CaseDigestPage() {
  return (
    <main className="pt-20">
      <BackgroundAnimation />
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/life-case 2.png"
            alt="Insurance Justice - BIMA-AID"
            fill
            className="object-cover brightness-50"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-teal via-white to-accent-teal" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-teal via-white to-accent-teal" />

        <div className="container-custom relative z-10 text-center text-white">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Case Digest
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-semibold text-white">
              Landmark Insurance Cases That Shape Policyholder Rights
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mt-4 text-gray-200">
              Explore our comprehensive collection of insurance cases that have set precedents and protected policyholder rights in Kenya.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link 
                href="#recent-cases" 
                className="btn-primary bg-white text-primary hover:bg-gray-100"
              >
                View Recent Cases
              </Link>
              <Link 
                href="/contact" 
                className="btn-outline text-white border-white hover:bg-white/10"
              >
                Need Legal Help?
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input
                type="text"
                placeholder="Search cases..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent">
                <option value="">All Categories</option>
                <option value="health">Health Insurance</option>
                <option value="property">Property Insurance</option>
                <option value="life">Life Insurance</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <AnimatedSection
                key={caseStudy.id}
                delay={index * 0.1}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative h-48">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-sm font-semibold">{caseStudy.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">{caseStudy.amount}</span>
                    <Link
                      href={caseStudy.details}
                      className="text-accent hover:text-accent-dark font-semibold flex items-center gap-2"
                    >
                      Read Full Case
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help With Your Claim?</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't let insurance companies deny your rightful claims. Let us help you fight for what you deserve.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Get Started Today
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
} 