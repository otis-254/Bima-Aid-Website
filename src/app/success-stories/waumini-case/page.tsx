'use client'

import { AnimatedSection } from '@/components/AnimatedSection'
import '@/styles/animations.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// In a real app, you would fetch the case data based on the ID from the URL.
// For demonstration, we'll use the provided content directly.
const caseDetails = {
  title: "Last Expense Claim Victory: Waumini Insurance Forced to Pay Full Settlement", // Adjusted title for consistency with image hero
  updateNo: "NO.2",
  issuedBy: "BIMA-AID – Insurance Rights Advocacy Group",
  date: "22nd May 2025",
  ref: "REF: MILIMANI SCCCOMM/E9846/2023",
  intro: "We are proud to report another breakthrough for insurance consumers!\nAfter initially rejecting a valid Last Expense claim, Waumini Insurance Brokers and their underwriter Guardian Assurance have been forced to settle in full — following relentless advocacy and legal pressure.",
  caseSummaryText: [
    "PM took out a last expense cover on the life of her father. Premium was paid on 14 October 2021, and her father sadly passed away on 12 January 2022 — the 91st day after inception.",
    "Waumini repudiated the claim, arguing that death occurred \"within the 3-month waiting period.\"",
  ],
  catchPoint: "But here's the catch:",
  catchDetails: [
    "- The Policyholder's waiting period was defined in days (30 days)",
    "- The Dependent's waiting period was stated vaguely as \"3 months\"",
    "- There is no constant definition of a month in days. As shown below, \"3 months\" can mean 89 to 92 days depending on the start date. January to April = 91 days.",
  ],
  monthDaysTable: [
    { month: "October", days: 92 },
    { month: "November", days: 92 },
    { month: "December", days: 90 },
    { month: "January", days: 90 },
    { month: "February", days: 89 },
    { month: "March", days: 92 },
    { month: "April", days: 91 },
  ],
  legalPrinciple: "In law, ambiguities in insurance contracts are interpreted against the insurer.\nPM's father died on the 91st day — and the insurer's vague wording backfired.",
  outcome: [
    "✅ The underwriter eventually agreed to settle in full.",
    "✅ It was NOT ex-gratia.",
    "✅ This was a legal obligation.",
  ],
  whyMatters: "Why this matters:",
  whyMattersDetails: "If you or a loved one has had a claim denied under vague \"waiting period\" clauses — you may be entitled to full compensation.",
  callToAction: "Are you affected?",
  contactMethods: [
    "- DM BIMA-AID or email",
    "- Learn more at: www.bima-aid.com",
  ],
  keyDetails: { // Added key details structure based on image
    date: "22nd May 2025",
    insuranceCompany: "Waumini Insurance Brokers",
    underwriter: "Prudential Life", // Assuming based on image, adjust if needed
    policyType: "Last Expense Cover"
  },
  category: "Life Insurance", // Added category for the first card
  amount: "Full Settlement", // Added amount for the first card
}

export default function WauminiCasePage() {
  // In a real app, you would use params.id to fetch the specific case data.
  // For now, we use the hardcoded data above.
  const [details, setDetails] = useState(caseDetails)

  // Simulate fetching data based on ID if needed in the future
  useEffect(() => {
    // Example: fetch(`/api/cases/${params.id}`).then(res => res.json()).then(data => setDetails(data));
  }, [])


  if (!details) {
    return <main className="pt-20"><div className="container-custom">Loading...</div></main>; // Or a 404 page
  }

  return (
    <main className="pt-20 bg-gray-100">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/5 via-accent-teal/5 to-primary/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/life-case.png"
            alt="Case Detail Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="container-custom relative z-10 text-white text-center">
          <AnimatedSection>
            {/* Back Link */}
            <div className="mb-8">
              <Link href="/success-stories" className="inline-flex items-center text-sm font-semibold hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Success Stories
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {details.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Case Reference: {details.ref}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content Sections as Cards */}
      <section className="py-12 space-y-8 bg-gray-100">
        {/* Card 1: Case Summary and Key Details (mimicking image) */}
        <AnimatedSection>
          <div className="container-custom">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 leading-relaxed text-gray-800 max-w-3xl mx-auto">
              {/* Top Info - mimicking image */}
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                 <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                   {details.category}
                 </span>
                 <span className="text-primary font-bold text-lg">{details.amount}</span>
               </div>

              {/* Case Summary Heading - mimicking image */}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Case Summary</h2>

              {/* Key Details Section - mimicking image structure */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Details</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold">Date:</span> {details.keyDetails.date}</p>
                  <p><span className="font-semibold">Insurance Company:</span> {details.keyDetails.insuranceCompany}</p>
                  <p><span className="font-semibold">Underwriter:</span> {details.keyDetails.underwriter}</p>
                  <p><span className="font-semibold">Policy Type:</span> {details.keyDetails.policyType}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Card 2: Introduction */}
        {details.intro && (
          <AnimatedSection delay={0.1}>
            <div className="container-custom">
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 leading-relaxed text-gray-800 max-w-3xl mx-auto">
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Introduction</h3>
                <p className="whitespace-pre-wrap">{details.intro}</p>
              </div>
            </div>
          </AnimatedSection>
        )}

         {/* Card 3: Case Background */}
        {details.caseSummaryText && details.caseSummaryText.length > 0 && (
          <AnimatedSection delay={0.2}>
            <div className="container-custom">
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 leading-relaxed text-gray-800 max-w-3xl mx-auto">
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Case Background</h3>
                <ul className="list-disc list-inside space-y-3">
                  {details.caseSummaryText.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Card 4: Catch Point */}
         {details.catchPoint && details.catchDetails && details.catchDetails.length > 0 && (
          <AnimatedSection delay={0.3}>
            <div className="container-custom">
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 leading-relaxed text-gray-800 max-w-3xl mx-auto">
                 <h3 className="text-xl font-bold text-gray-900 mb-4">{details.catchPoint}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {details.catchDetails.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Card 5: Month Days Table */}
         {details.monthDaysTable && details.monthDaysTable.length > 0 && (
          <AnimatedSection delay={0.4}>
            <div className="container-custom">
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 leading-relaxed text-gray-800 max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Month Days Calculation</h3>
                 <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Month</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days in 3 Months</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {details.monthDaysTable.map((row, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.month}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.days}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

         {/* Card 6: Legal Principle */}
         {details.legalPrinciple && (
          <AnimatedSection delay={0.5}>
            <div className="container-custom">
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 leading-relaxed text-gray-800 max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Principle</h3>
                <p className="italic whitespace-pre-wrap">✨ {details.legalPrinciple}</p>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Card 7: Outcome */}
         {details.outcome && details.outcome.length > 0 && (
          <AnimatedSection delay={0.6}>
            <div className="container-custom">
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 leading-relaxed text-gray-800 max-w-3xl mx-auto">
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Outcome</h3>
                <ul className="list-none space-y-2">
                  {details.outcome.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        )}

         {/* Card 8: Why it Matters & Call to Action */}
         {(details.whyMatters || details.callToAction) && (
          <AnimatedSection delay={0.7}>
            <div className="container-custom">
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 leading-relaxed text-gray-800 max-w-3xl mx-auto">
                 {details.whyMatters && (
                   <div className="mb-6">
                     <h3 className="text-xl font-bold text-gray-900 mb-4">{details.whyMatters}</h3>
                     <p>{details.whyMattersDetails}</p>
                   </div>
                 )}
                 {details.callToAction && (
                   <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-4">{details.callToAction}</h3>
                     {details.contactMethods && details.contactMethods.length > 0 && (
                        <ul className="list-none space-y-2">
                          {details.contactMethods.map((method, index) => (
                           <li key={index}>{method}</li>
                          ))}
                       </ul>
                     )}
                   </div>
                 )}
              </div>
            </div>
          </AnimatedSection>
        )}
      </section>
    </main>
  )
} 