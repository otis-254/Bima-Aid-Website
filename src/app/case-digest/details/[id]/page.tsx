'use client';

import { AnimatedSection } from '@/components/AnimatedSection';
import '@/styles/animations.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImageCarousel from '@/components/ImageCarousel'; // Import the carousel component

// Placeholder data for a single case study (replace with actual data fetching based on id)
const caseStudyDetails = {
  title: "Medical Insurance Claim Victory",
  ref: "Case Reference",
  heroImage: "/images/Jubilee 002.png", 
  sections: [
    {
      heading: "Case Overview",
      content: "This case involved a fraudulent claim attempting to gain compensation based on staged accident photos and conflicting witness statements. Our investigation uncovered inconsistencies that led to the claim's denial."
    },
    {
      heading: "Investigation Findings",
      content: "Key findings included:\n- Analysis of photographic evidence revealed staging discrepancies.\n- Witness testimonies contradicted each other and the photographic evidence.\n- Further inquiries into the claimant's history raised red flags."
    },
    {
      heading: "Outcome",
      content: "Based on the compelling evidence of fraud gathered during the investigation, the insurance company successfully denied the claim, preventing an unwarranted payout."
    }
    // Add more sections as needed
  ],
  images: [
    "/images/Case 001.jpg", 
    "/images/case 002.jpg",
    "/images/case 003.jpg"
  ]
};

export default function CaseStudyDetailPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch case study data based on params.id
  const [details, setDetails] = useState(caseStudyDetails);

  // useEffect(() => {
  //   // Fetch data based on params.id
  //   fetch(`/api/case-studies/${params.id}`)
  //     .then(res => res.json())
  //     .then(data => setDetails(data));
  // }, [params.id]);

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
            src={details.heroImage}
            alt="Case Study Hero"
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
              <Link href="/case-digest" className="inline-flex items-center text-sm font-semibold hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Case Digest
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

      {/* Image Carousel Section */}
      {details.images && details.images.length > 0 && (
        <section className="py-12 bg-gray-100">
          <div className="container-custom">
            <ImageCarousel images={details.images} />
          </div>
        </section>
      )}
    </main>
  );
} 