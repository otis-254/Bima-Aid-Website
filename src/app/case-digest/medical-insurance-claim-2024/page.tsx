'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { BackgroundAnimation } from '@/components/BackgroundAnimation'
import { ImageCarousel } from '@/components/ImageCarousel'
import '@/styles/animations.css'

const caseImages = [
  {
    src: '/images/Case 001.jpg',
    alt: 'Medical Insurance Claim Documentation'
  },
  {
    src: '/images/Case 003.jpg',
    alt: 'Hospital Records and Bills'
  },
  {
    src: '/images/case 002.jpg',
    alt: 'Insurance Policy Documents'
  }
]

export default function MedicalInsuranceCase() {
  return (
    <main className="pt-20">
      <BackgroundAnimation />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Victory.png"
            alt="Medical Insurance Case Study"
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
              href="/case-digest" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors duration-300"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Back to Case Digest
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Medical Insurance Claim Victory
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              A Landmark Case in Health Insurance Claims
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Content */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Case Documentation</h3>
                <div className="mb-8">
                  <ImageCarousel images={caseImages} />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Click through the images above to view the key documents that helped win this case
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
} 