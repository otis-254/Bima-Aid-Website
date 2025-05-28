'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { BackgroundAnimation } from '@/components/BackgroundAnimation'
import '@/styles/animations.css'

export default function JubileeCaseStudy() {
  return (
    <main className="pt-20">
      <BackgroundAnimation />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/life-case.png"
            alt="Jubilee Insurance Case Study"
            fill
            className="object-cover brightness-50"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <AnimatedSection>
            <Link 
              href="/success-stories" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors duration-300"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Back to Success Stories
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Insurance Justice at Last: Jubilee Ordered to Pay
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Case Reference: MILIMANI SCCCOMM/E1213/2024
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Content */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <AnimatedSection>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-accent-teal font-semibold">Life Insurance</span>
                    <h2 className="text-2xl font-bold mt-2">Case Summary</h2>
                  </div>
                  <span className="text-primary font-bold">Full Surrender Value</span>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4">Key Details</h3>
                  <ul className="space-y-2">
                    <li><strong>Date:</strong> 1st May 2025</li>
                    <li><strong>Insurance Company:</strong> Jubilee Life Insurance</li>
                    <li><strong>Policy Type:</strong> Fanaka Plan</li>
                    <li><strong>Premium Payment Period:</strong> 42 months</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">The Case</h3>
                <p className="mb-4">
                  JFO had been paying premiums into his Fanaka Plan for 42 months when he requested the surrender value of his policy. Jubilee Life Insurance denied his request, claiming that he needed to complete the full 5-year term as specified in their contract.
                </p>
                <p className="mb-4">
                  This denial was in direct conflict with Section 89 of the Insurance Act, which clearly states that policyholders are entitled to surrender value after 3 years of premium payments.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="mb-4">
                  The main issues in this case were:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Jubilee's 5-year minimum term clause in their contract</li>
                  <li>Conflict between contract terms and insurance law</li>
                  <li>Misleading policyholders about their rights</li>
                </ul>
                <p className="mb-4">
                  The insurance company was using contract terms to override statutory rights, a practice that needed to be challenged in court.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">The Victory</h3>
                <p className="mb-4">
                  On 20th March 2025, the Small Claims Court (Milimani) delivered a landmark ruling in favor of the policyholder:
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-green-800 font-semibold mb-4">Court Ruling</h4>
                  <ul className="space-y-2 text-green-800">
                    <li>✅ Jubilee must pay the full surrender value under Section 89 of the Insurance Act</li>
                    <li>✅ The 3-year minimum rule in law overrides the 5-year clause in Jubilee's contract</li>
                    <li>✅ Policyholders earn value after 3 years, regardless of policy maturity</li>
                    <li>✅ Jubilee's contract clause was declared illegal and unenforceable</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">Why This Matters</h3>
                <p className="mb-4">
                  This landmark case has significant implications for all Fanaka Plan holders and insurance policyholders in general:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Clarifies that 3 years of premium payments entitle you to surrender value</li>
                  <li>Establishes that insurance law takes precedence over contract terms</li>
                  <li>Protects policyholders from misleading contract clauses</li>
                  <li>Sets a precedent for similar cases</li>
                </ul>
                <p className="mb-4">
                  If you've paid into your policy for at least 3 years, you are entitled to a payout, even if you stopped paying before 5 years. Don't be misled by insurance jargon - Kenyan law is clear: 3 years = your right to value.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80 font-semibold"
                >
                  Contact Us for Help
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
} 