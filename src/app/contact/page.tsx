'use client'

import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { ContactFormData, submitContactForm, validateContactForm } from '@/utils/formHandler'
import { AnimatedSection } from '@/components/AnimatedSection'
import '@/styles/animations.css'

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: [ '+254 111 689 543'],
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: ['info@bima-aid.com'],
  },
  {
    icon: MapPinIcon,
    title: 'Office',
    details: ['288 Milimani', 'Nairobi,  Kenya'],
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    policyType: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const { isValid, errors: validationErrors } = validateContactForm(formData)
    if (!isValid) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await submitContactForm(formData)
      setSubmitStatus(result)
      if (result.success) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          policyType: '',
          message: '',
        })
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-primary-dark">
        <div className="container-custom relative z-10 text-center text-white">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Get in touch with our team of insurance claim experts
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              {submitStatus && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="policyType" className="block text-sm font-medium text-secondary mb-2">
                    Insurance Policy Type
                  </label>
                  <select
                    id="policyType"
                    name="policyType"
                    value={formData.policyType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
                      errors.policyType ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  >
                    <option value="">Select Policy Type</option>
                    <option value="health">Health Insurance</option>
                    <option value="life">Life Insurance</option>
                    <option value="property">Property Insurance</option>
                    <option value="auto">Auto Insurance</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.policyType && (
                    <p className="mt-1 text-sm text-red-600">{errors.policyType}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={0.2} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-secondary-light mb-8">
                  Our team is ready to help you with your insurance claim. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <info.icon className="h-6 w-6 text-accent-teal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-secondary-light">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <p className="text-secondary-light">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-secondary-light">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-secondary-light">Sunday: Closed</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
} 