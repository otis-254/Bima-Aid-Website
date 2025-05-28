'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import '@/styles/animations.css'

const successStories = [
  {
    id: 1,
    title: 'Last Expense Claim Victory: Waumini Insurance Forced to Pay Full Settlement',
    category: 'Life Insurance',
    amount: 'Full Settlement',
    description: 'Successfully challenged a last expense claim rejection based on ambiguous waiting period clause. The case set a precedent for interpreting insurance contract ambiguities in favor of policyholders.',
    image: '/images/life-case.png',
    details: '/case-studies/waumini-insurance-settlement',
    date: '22nd May 2025',
    reference: 'MILIMANI SCCCOMM/E9846/2023'
  },
  {
    id: 2,
    title: 'Insurance Justice at Last: Jubilee Ordered to Pay',
    category: 'Life Insurance',
    amount: 'Full Surrender Value',
    description: 'Landmark victory where Jubilee Life Insurance was found in breach of law and ordered to pay surrender value after 3 years, overriding their 5-year contract clause. The court affirmed that policyholders earn value after 3 years, regardless of policy maturity.',
    image: '/images/Jubilee.jpg',
    details: '/case-studies/jubilee-surrender-value',
    date: '1st May 2025',
    reference: 'MILIMANI SCCCOMM/E1213/2024'
  }
]

export default function SuccessStoriesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Victory.png"
            alt="Success Stories - BIMA-AID"
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
              Success Stories
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-semibold text-white">
              Real Stories of Policyholders Who Won Their Fight
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mt-4 text-gray-200">
              Discover how we've helped policyholders overcome insurance challenges and secure their rightful claims.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Victories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <AnimatedSection
                key={story.id}
                delay={index * 0.1}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-sm font-semibold bg-accent-teal/90 px-3 py-1 rounded-full">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{story.date}</span>
                    {story.reference && (
                      <span className="text-xs text-gray-400">Ref: {story.reference}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent-teal transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{story.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-primary font-bold">{story.amount}</span>
                    <Link
                      href={story.details}
                      className="text-accent-teal hover:text-accent-teal/80 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    >
                      Read Full Case
                      <span className="text-lg">→</span>
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