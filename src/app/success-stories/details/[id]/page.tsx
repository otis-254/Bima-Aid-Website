'use client'

import { useEffect, useState } from 'react'
import { AnimatedSection } from '@/components/AnimatedSection'
import '@/styles/animations.css'

// In a real app, you would fetch the case data based on the ID from the URL.
// For demonstration, we'll use the provided content directly.
const caseDetails = {
  title: "INSURANCE JUSTICE AT LAST: Waumini Forced to Settle!",
  updateNo: "NO.2",
  issuedBy: "BIMA-AID – Insurance Rights Advocacy Group",
  date: "22nd May 2025",
  ref: "REF: MILIMANI SCCCOMM/E9846/2023 – PM VS WAUMINI INSURANCE BROKERS LTD",
  intro: "We are proud to report another breakthrough for insurance consumers!\nAfter initially rejecting a valid Last Expense claim, Waumini Insurance Brokers and their underwriter Guardian Assurance have been forced to settle in full — following relentless advocacy and legal pressure.",
  caseSummary: [
    "PM took out a last expense cover on the life of her father. Premium was paid on 14 October 2021, and her father sadly passed away on 12 January 2022 — the 91st day after inception.",
    "Waumini repudiated the claim, arguing that death occurred “within the 3-month waiting period.”",
  ],
  catchPoint: "But here's the catch:",
  catchDetails: [
    "- The Policyholder's waiting period was defined in days (30 days)",
    "- The Dependent's waiting period was stated vaguely as "3 months"",
    "- There is no constant definition of a month in days. As shown below, "3 months" can mean 89 to 92 days depending on the start date. January to April = 91 days.",
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
  whyMattersDetails: "If you or a loved one has had a claim denied under vague "waiting period" clauses — you may be entitled to full compensation.",
  callToAction: "Are you affected?",
  contactMethods: [
    "- DM BIMA-AID or email",
    "- Learn more at: www.bima-aid.com",
  ]
}

export default function CaseDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would use params.id to fetch the specific case data.
  // For now, we use the hardcoded data above.
  const [details, setDetails] = useState(caseDetails)

  // Simulate fetching data based on ID if needed in the future
  useEffect(() => {
    // Example: fetch(`/api/cases/${params.id}`).then(res => res.json()).then(data => setDetails(data));
  }, [params.id])


  if (!details) {
    return <main className="pt-20"><div className="container-custom">Loading...</div></main>; // Or a 404 page
  }

  return (
    <main className="pt-20 bg-gray-100">
      <section className="py-12">
        <div className="container-custom">
          <AnimatedSection>
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 leading-relaxed">
              {/* Header */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <p className="text-sm text-gray-600 font-semibold mb-2">{details.updateNo} ✨ PUBLIC UPDATE – CONSUMER VICTORY! ✨</p>
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{details.title}</h1>
                <p className="text-sm text-gray-600">Issued by: <span className="font-semibold">{details.issuedBy}</span></p>
                <p className="text-sm text-gray-600">Date: <span className="font-semibold">{details.date}</span></p>
              </div>

              {/* Reference */}
              {details.ref && (
                <p className="text-sm text-gray-700 italic mb-6">{details.ref}</p>
              )}

              {/* Introduction */}
              {details.intro && (
                <p className="text-gray-700 mb-6 whitespace-pre-wrap">{details.intro}</p>
              )}

              {/* Case Summary */}
              {details.caseSummary && details.caseSummary.length > 0 && (
                <div className="mb-6">
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    {details.caseSummary.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Catch Point */}
              {details.catchPoint && (
                <p className="text-gray-700 font-semibold mb-4">{details.catchPoint}</p>
              )}

              {/* Catch Details */}
              {details.catchDetails && details.catchDetails.length > 0 && (
                <div className="mb-6">
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    {details.catchDetails.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Month Days Table */}
              {details.monthDaysTable && details.monthDaysTable.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Days in 3 Months:</h4>
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
              )}

              {/* Legal Principle */}
              {details.legalPrinciple && (
                <p className="text-gray-700 italic mb-6 whitespace-pre-wrap">✨ {details.legalPrinciple}</p>
              )}

              {/* Outcome */}
              {details.outcome && details.outcome.length > 0 && (
                <div className="mb-6">
                  <ul className="list-none text-gray-700 space-y-2">
                    {details.outcome.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Why this matters */}
              {details.whyMatters && (
                <p className="text-primary font-semibold mb-2">📍 {details.whyMatters}</p>
              )}
              {details.whyMattersDetails && (
                <p className="text-gray-700 mb-6">{details.whyMattersDetails}</p>
              )}

              {/* Call to Action */}
              {details.callToAction && (
                <p className="text-primary font-semibold mb-4">✅ {details.callToAction}</p>
              )}
              {details.contactMethods && details.contactMethods.length > 0 && (
                <ul className="list-none text-gray-700 space-y-2">
                  {details.contactMethods.map((method, index) => (
                    <li key={index}>{method}</li>
                  ))}
                </ul>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
} 