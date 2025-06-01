'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/AnimatedSection'
import '@/styles/animations.css'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, GlobeAltIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    policyNumber: '',
    correspondence: '',
    lawyers: '',
    claimDetails: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/5 via-accent-teal/5 to-primary/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Contacts.png"
            alt="BIMA-AID Contact"
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
                Ready to Fight Back? Start Here.
              </h1>
              <p className="text-xl text-white/90 mb-8">
                We don't waste time—and we don't waste yours.
                If your insurer has let you down, we want to hear from you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPinIcon className="w-6 h-6 text-accent-teal mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Office</h3>
                      <p className="text-gray-600">288 Milimani</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <PhoneIcon className="w-6 h-6 text-accent-teal mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600">+254 111 689 543</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <EnvelopeIcon className="w-6 h-6 text-accent-teal mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@bima-aid.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <GlobeAltIcon className="w-6 h-6 text-accent-teal mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Website</h3>
                      <p className="text-gray-600">www.bima-aid.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Tell Us Your Story</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name (as it appears on the policy)
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="policyNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Policy Number
                    </label>
                    <input
                      type="text"
                      id="policyNumber"
                      name="policyNumber"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="correspondence" className="block text-sm font-medium text-gray-700 mb-1">
                      Correspondence with Insurer
                    </label>
                    <textarea
                      id="correspondence"
                      name="correspondence"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="lawyers" className="block text-sm font-medium text-gray-700 mb-1">
                      Communication with Lawyers
                    </label>
                    <textarea
                      id="lawyers"
                      name="lawyers"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="claimDetails" className="block text-sm font-medium text-gray-700 mb-1">
                      Why do you believe your claim is valid?
                    </label>
                    <textarea
                      id="claimDetails"
                      name="claimDetails"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent-teal text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300"
                  >
                    Submit Your Case
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-teal/20 mb-4">
                  <ClockIcon className="w-6 h-6 text-accent-teal" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">What Happens Next?</h2>
                <p className="text-gray-600">
                  You'll hear from us within 24 hours.
                  If we can assist, we'll explain the next steps.
                  If we can't, we'll tell you immediately—no runaround, no excuses.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-4">
                  <ExclamationTriangleIcon className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Please Note</h3>
                    <p className="text-gray-600">
                      To ensure faster response times and efficient handling of cases, we do not take phone calls at the initial stage.
                      All first contact is handled via WhatsApp or email—powered by AI and supported by real professionals.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-20 bg-primary text-white mb-20">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-6">BIMA-AID</h2>
            <p className="text-xl text-white/90">Smart. Relentless. On Your Side.</p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
} 