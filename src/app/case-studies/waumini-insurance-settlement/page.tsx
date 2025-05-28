'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { BackgroundAnimation } from '@/components/BackgroundAnimation'
import '@/styles/animations.css'

export default function WauminiCaseStudy() {
  return (
    <main className="pt-20">
      <BackgroundAnimation />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/life-case.png"
            alt="Waumini Insurance Case Study"
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
              Last Expense Claim Victory: Waumini Insurance Forced to Pay Full Settlement
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Case Reference: MILIMANI SCCCOMM/E9846/2023
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
                  <span className="text-primary font-bold">Full Settlement</span>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4">Key Details</h3>
                  <ul className="space-y-2">
                    <li><strong>Date:</strong> 22nd May 2025</li>
                    <li><strong>Insurance Company:</strong> Waumini Insurance Brokers</li>
                    <li><strong>Underwriter:</strong> Prudential Life</li>
                    <li><strong>Policy Type:</strong> Last Expense Cover</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">The Case</h3>
                <p className="mb-4">
                  PM took out a last expense cover on the life of her father. Premium was paid on 14 October 2021, and her father sadly passed away on 12 January 2022 — the 91st day after inception.
                </p>
                <p className="mb-4">
                  Waumini repudiated the claim, arguing that death occurred "within the 3-month waiting period."
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="mb-4">
                  The policy contained ambiguous waiting period clauses:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>The Policyholder's waiting period was defined in days (30 days)</li>
                  <li>The Dependent's waiting period was stated vaguely as "3 months"</li>
                </ul>
                <p className="mb-4">
                  There is no constant definition of a month in days. As shown below, "3 months" can mean 89 to 92 days depending on the start date. January to April = 91 days.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h4 className="font-semibold mb-4">Waiting Period Analysis</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Start Month</p>
                    <ul className="mt-2 space-y-1">
                      <li>October</li>
                      <li>November</li>
                      <li>December</li>
                      <li>January</li>
                      <li>February</li>
                      <li>March</li>
                      <li>April</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Days in 3 Months</p>
                    <ul className="mt-2 space-y-1">
                      <li>92</li>
                      <li>92</li>
                      <li>90</li>
                      <li>90</li>
                      <li>89</li>
                      <li>92</li>
                      <li>91</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">The Victory</h3>
                <p className="mb-4">
                  In law, ambiguities in insurance contracts are interpreted against the insurer. PM's father died on the 91st day — and the insurer's vague wording backfired.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-green-800 font-semibold mb-4">Outcome</h4>
                  <ul className="space-y-2 text-green-800">
                    <li>✅ The underwriter eventually agreed to settle in full</li>
                    <li>✅ It was NOT ex-gratia</li>
                    <li>✅ This was a legal obligation</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">Why This Matters</h3>
                <p className="mb-4">
                  If you or a loved one has had a claim denied under vague "waiting period" clauses — you may be entitled to full compensation.
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