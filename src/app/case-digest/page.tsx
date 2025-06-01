'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { BackgroundAnimation } from '@/components/BackgroundAnimation'
import '@/styles/animations.css'

const caseDigests = [
  {
    title: "Medical Insurance Claim Victory",
    summary: "Successfully overturned a rejected medical claim for a Life Assurance.",
    category: "Health Insurance",
    amount: "Full Settlement",
    date: "22nd May 2025",
    ref: "Ref: MILIMANI SCCCOMM/E9846/2023",
    image: "/images/001.jpg", // Placeholder image path based on image content
    link: "/case-digest/details/medical-insurance-claim"
  }
]

export default function CaseDigest() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/5 via-accent-teal/5 to-primary/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/life-case 2.png"
            alt="Case Digest"
            fill
            className="object-cover brightness-50"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Case Digest
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-4">
                Landmark Insurance Cases That Shape Policyholder Rights
              </h2>
              <p className="text-lg text-white/80">
                Explore our comprehensive collection of insurance cases that have set precedents and protected policyholder rights in Kenya.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Digest Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12">
            {caseDigests.map((digest, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  {digest.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={digest.image}
                        alt={digest.title}
                        fill
                        className="object-cover"
                      />
                      {digest.category && (
                        <span className="absolute bottom-4 left-4 px-3 py-1 bg-teal-600 text-white rounded-full text-sm font-medium z-10">
                          {digest.category}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                      {digest.date && <span>{digest.date}</span>}
                      {digest.ref && <span>{digest.ref}</span>}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{digest.title}</h3>
                    <p className="text-gray-600 mb-4">{digest.summary || ''}</p>

                    <div className="flex justify-between items-center mt-6">
                      {digest.amount && <span className="text-primary font-bold text-lg">{digest.amount}</span>}
                      <Link href={digest.link} className="text-accent-teal flex items-center text-sm font-semibold">
                        Read Full Case
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (Optional) */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Have a case that needs reviewing?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact us today to discuss your insurance claim.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 