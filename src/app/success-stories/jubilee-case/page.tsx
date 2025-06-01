'use client'

import { AnimatedSection } from '@/components/AnimatedSection'
import '@/styles/animations.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const caseDetails = {
  title: "INSURANCE JUSTICE AT LAST: Jubilee Ordered to Pay!",
  updateNo: "NO.1",
  issuedBy: "BIMA-AID – Insurance Rights Advocacy Group",
  date: "1st May 2025",
  ref: "REF: MILIMANI COMMERCIAL: CASE NO. SCCCOMM/E1213/2024 – JFO VS JUBILEE INSURANCE COMPANY LTD",
  intro: "We are pleased to announce a landmark victory for policyholders!\nAfter years of denying payouts under the Fanaka Plan, Jubilee Life Insurance has been found in breach of the law and ordered to pay.",
  caseBackground: "JFO (see file), who paid premiums for 42 months, had been unlawfully denied his surrender value after Jubilee claimed he needed to complete the full 5-year term.",
  outcome: [
    "✅ Jubilee must pay him the full surrender value under Section 89 of the Insurance Act",
    "✅ The Judge declared that the 3-year minimum rule in law overrides the 5-year clause in Jubilee's contract",
    "✅ The Court affirmed that policyholders earn value after 3 years, whether or not the policy \"matures\"",
  ],
  whyMatters: "Why this matters:",
  whyMattersDetails: "This landmark case has significant implications for all Fanaka Plan holders and insurance policyholders in general:",
  implications: [
    "Clarifies that 3 years of premium payments entitle you to surrender value",
    "Establishes that insurance law takes precedence over contract terms",
    "Protects policyholders from misleading contract clauses",
    "Sets a precedent for similar cases"
  ],
  callToActionPoints: [
      " Don't be misled by insurance jargon.",
      "Kenyan law is clear: 3 years = your right to value.",
      "Jubilee's contract clause was ruled illegal and unenforceable."
  ],
   keyDetails: { // Added key details structure based on image
    date: "1st May 2025",
    insuranceCompany: "Jubilee Life Insurance",
    underwriter: "N/A", // Not specified in text
    policyType: "Fanaka Plan / Surrender Value"
  },
  category: "Life Insurance", // Assuming based on context
  amount: "Full Surrender Value", // Derived from text
  finalTakeaway: "If you've paid into your policy for at least 3 years, you are entitled to a payout, even if you stopped paying before 5 years. Don't be misled by insurance jargon - Kenyan law is clear: 3 years = your right to value."
}

export default function JubileeCasePage() {
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
            src="/images/003.jpg"
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
         {/* Card 1: Key Details and Intro (mimicking image structure) */}
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

              {/* Key Details Section - mimicking image structure */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Details</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold">Date:</span> {details.keyDetails.date}</p>
                  <p><span className="font-semibold">Insurance Company:</span> {details.keyDetails.insuranceCompany}</p>
                  <p><span className="font-semibold">Underwriter:</span> {details.keyDetails.underwriter}</p>
                  <p><span className="font-semibold">Policy Type:</span> {details.keyDetails.policyType}</p>
                </div>
              </div>

               {/* Case Summary Heading - mimicking image */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Summary</h2>
               <p className="whitespace-pre-wrap">{details.intro}</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Card 2: Case Background */}
        {details.caseBackground && (
          <AnimatedSection delay={0.1}>
            <div className="container-custom">
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 leading-relaxed text-gray-800 max-w-3xl mx-auto">
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Case Background</h3>
                <p>{details.caseBackground}</p>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Card 3: Outcome */}
         {details.outcome && details.outcome.length > 0 && (
          <AnimatedSection delay={0.2}>
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

         {/* Card 4: Why it Matters & Call to Action */}
         {details.finalTakeaway && (
          <AnimatedSection delay={0.7}>
            <div className="container-custom">
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 leading-relaxed text-gray-800 max-w-3xl mx-auto">
                 {/* Why This Matters Heading */}
                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{details.whyMatters}</h3>

                 {/* Explanatory Text */}
                 <p className="text-gray-700 mb-4">{details.whyMattersDetails}</p>

                 {/* Implications List */}
                 {details.implications && details.implications.length > 0 && (
                   <ul className="list-disc list-inside space-y-2 mb-6">
                     {details.implications.map((point, index) => (
                       <li key={index}>{point}</li>
                     ))}
                   </ul>
                 )}

                 {/* Final Takeaway Text */}
                 <p className="text-gray-700 mb-6">{details.finalTakeaway}</p>

                 {/* Contact Link */}
                 <Link href="/contact" className="inline-flex items-center text-accent-teal text-lg font-semibold group">
                   Contact Us for Help
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 duration-300">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                   </svg>
                 </Link>
              </div>
            </div>
          </AnimatedSection>
        )}
      </section>
    </main>
  )
} 