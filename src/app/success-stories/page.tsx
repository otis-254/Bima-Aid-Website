'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import '@/styles/animations.css'

const successStories = [
  {
    title: "Last Expense Claim Victory: Waumini Insurance Forced to Pay Full Settlement",
    description: "Successfully challenged a last expense claim rejection based on ambiguous waiting period clause. The case set a precedent for interpreting insurance contract ambiguities in favor of...",
    category: "Life Insurance",
    amount: "Full Settlement",
    date: "22nd May 2025",
    ref: "Ref: MILIMANI SCCCOMM/E9846/2023",
    image: "/images/life-case.png",
    link: "/success-stories/waumini-case",
    keyDetails: {
      date: "22nd May 2025",
      insuranceCompany: "Waumini Insurance Brokers",
      underwriter: "Prudential Life",
      policyType: "Last Expense Cover"
    }
  },
  {
    title: "Insurance Justice at Last: Jubilee Ordered to Pay",
    description: "Landmark victory where Jubilee Life Insurance was found in breach of law and ordered to pay surrender value after 3 years, overriding their 5-year contract clause. The court affirmed that...",
    category: "Life Insurance",
    amount: "Full Surrender Value",
    date: "1st May 2025",
    ref: "Ref: MILIMANI SCCCOMM/E1213/2024",
    image: "/images/003.jpg",
    link: "/success-stories/jubilee-case",
    keyDetails: {
      date: "1st May 2025",
      insuranceCompany: "Jubilee Life Insurance",
      underwriter: "N/A",
      policyType: "Fanaka Plan / Surrender Value"
    }
  }
]

export default function SuccessStories() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/5 via-accent-teal/5 to-primary/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Victory.png"
            alt="Success Stories"
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
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Success Stories
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Real Stories of Policyholders Who Won Their Fight
              </h2>
              <p className="text-lg text-white/80">
                Discover how we've helped policyholders overcome challenges and secure their rightful claims.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Recent Victories Title */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-[2px] w-24 bg-primary/20"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Recent Victories</h2>
            <div className="h-[2px] w-24 bg-primary/20"></div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  {story.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                      {story.category && (
                        <span className="absolute bottom-4 left-4 px-3 py-1 bg-teal-600 text-white rounded-full text-sm font-medium z-10">
                          {story.category}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                      <span>{story.date}</span>
                      {story.ref && <span>{story.ref}</span>}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                    <p className="text-gray-600 mb-4">{story.description}</p>
                    <div className="flex justify-between items-center mt-6">
                      <span className="text-primary font-bold text-lg">{story.amount}</span>
                      <Link href={story.link || "#"} className="text-accent-teal flex items-center text-sm font-semibold">
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

      {/* Call to Action */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Bubble Effects (Example) */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute w-12 h-12 bg-primary rounded-full left-1/4 top-1/4 animate-bubble" style={{ animationDelay: '0s' }}></div>
          <div className="absolute w-16 h-16 bg-accent-teal rounded-full right-1/4 bottom-1/4 animate-bubble" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-10 h-10 bg-primary rounded-full left-1/2 top-1/2 animate-bubble" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Ready to Share Your Success Story?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Contact us today and let us help you fight for your rightful insurance claim.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                Get Started
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
} 