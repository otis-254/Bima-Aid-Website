'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/AnimatedSection'
import '@/styles/animations.css'
import { XCircleIcon, QuestionMarkCircleIcon, HandRaisedIcon, BuildingOfficeIcon, UserGroupIcon, ShieldExclamationIcon, CheckCircleIcon, UserIcon, TrophyIcon } from '@heroicons/react/24/outline'

const values = [
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of professional ethics and transparency.',
    icon: '✨',
  },
  {
    title: 'Empowerment',
    description: 'We equip policyholders with knowledge and tools to fight unfair practices.',
    icon: '💪',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every case, leaving no stone unturned.',
    icon: '🏆',
  },
  {
    title: 'Justice',
    description: 'We believe in fair treatment and just outcomes for all policyholders.',
    icon: '⚖️',
  },
]

const processSteps = [
  {
    title: 'Initial Consultation',
    description: 'We begin with a thorough review of your case and policy details to understand your situation.',
    icon: '📋',
    bgColor: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
  },
  {
    title: 'Case Analysis',
    description: 'Our experts analyze your claim documentation and identify potential areas of dispute.',
    icon: '🔍',
    bgColor: 'bg-purple-500',
    hoverColor: 'hover:bg-purple-600',
  },
  {
    title: 'Strategy Development',
    description: 'We develop a customized approach to maximize your chances of a successful claim.',
    icon: '🎯',
    bgColor: 'bg-teal-500',
    hoverColor: 'hover:bg-teal-600',
  },
  {
    title: 'Claim Resolution',
    description: 'We work tirelessly to negotiate with insurance companies and achieve a fair settlement.',
    icon: '🤝',
    bgColor: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
  },
]

export default function AboutPage() {
  return (
    <main className="pt-20 bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero About.jpg"
            alt="BIMA-AID team in action"
            fill
            className="object-cover brightness-75"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-teal via-white to-accent-teal" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-teal via-white to-accent-teal" />

        <div className="container-custom relative z-10 text-center text-white">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Welcome to BIMA-AID
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-semibold text-white">
              Protecting Policyholders. Enforcing Accountability.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  BIMA-AID – Insurance Consumer Protection That Works for You
                </h2>
                <p className="text-lg text-gray-700">
                  We are a team of former insurance insiders—consulting practitioners who've left the industry to stand with the public. After years within the system, we know how claims are delayed, denied, or ignored. At BIMA-AID, we've made it our mission to fight back—for you.
                </p>
                <p className="text-lg text-gray-700">
                  We operate with the highest professional standards and a singular goal:
                </p>
                <p className="text-xl font-semibold text-primary">
                  To get your valid insurance claim paid—fast, fairly, and without compromising your legal rights.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                {/* Replace src with your image path once provided */}
                <Image
                  src="/images/Insurance.png"
                  alt="BIMA-AID team working"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                ⚖️ What We Do
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have you experienced any of the following?
              </p>
            </div>
          </AnimatedSection>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={0.2}>
              <div className="group relative bg-white p-6 pt-12 rounded-xl border border-gray-100 hover:border-accent-teal/30 transition-all duration-500 hover:shadow-xl overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 z-20">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center shadow-md">
                      <XCircleIcon className="w-8 h-8 text-red-500" />
                    </div>
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-primary mb-2 text-center group-hover:text-accent-teal transition-colors duration-300">Claim Rejection</h3>
                  <p className="text-gray-700 text-center group-hover:text-gray-800 transition-colors duration-300">Your claim was rejected by the insurance company</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="group relative bg-white p-6 pt-12 rounded-xl border border-gray-100 hover:border-accent-teal/30 transition-all duration-500 hover:shadow-xl overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 z-20">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center shadow-md">
                      <QuestionMarkCircleIcon className="w-8 h-8 text-yellow-500" />
                    </div>
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-primary mb-2 text-center group-hover:text-accent-teal transition-colors duration-300">Unfair Treatment</h3>
                  <p className="text-gray-700 text-center group-hover:text-gray-800 transition-colors duration-300">You believe the rejection was unfair and unjustified</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="group relative bg-white p-6 pt-12 rounded-xl border border-gray-100 hover:border-accent-teal/30 transition-all duration-500 hover:shadow-xl overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 z-20">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-accent-teal/20 flex items-center justify-center shadow-md">
                      <HandRaisedIcon className="w-8 h-8 text-accent-teal" />
                    </div>
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-primary mb-2 text-center group-hover:text-accent-teal transition-colors duration-300">Need Support</h3>
                  <p className="text-gray-700 text-center group-hover:text-gray-800 transition-colors duration-300">You need professional help to get what you're owed</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Solution Section */}
          <AnimatedSection>
            <div className="bg-gradient-to-br from-primary/10 to-accent-teal/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                If so, BIMA-AID is ready to step in:
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatedSection delay={0.2}>
                  <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md">
                    <div className="text-2xl">✅</div>
                    <p className="text-gray-700">We'll issue a fresh, reasoned demand to the insurer</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md">
                    <div className="text-2xl">✅</div>
                    <p className="text-gray-700">If they still refuse, we'll take them to court</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md">
                    <div className="text-2xl">✅</div>
                    <p className="text-gray-700">You pay nothing upfront—not now, not later during proceedings</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.5}>
                  <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md">
                    <div className="text-2xl">✅</div>
                    <p className="text-gray-700">Our fee is recovered only if we win</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.6}>
                  <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md">
                    <div className="text-2xl">✅</div>
                    <p className="text-gray-700">If we lose, you owe nothing—zero</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What We're Not Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                What We're Not
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Understanding our independence is key to our strength.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 via-red-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0" />
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                      <BuildingOfficeIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-red-600 transition-colors duration-300">Not an Insurance Company</h3>
                  </div>
                  <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    We are not an insurance company, but rather your advocate against them.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 via-red-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0" />
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                      <UserGroupIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-red-600 transition-colors duration-300">Not a Broker</h3>
                  </div>
                  <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    We are not a broker, agent, or industry affiliate. We work solely for you.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 via-red-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0" />
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                      <ShieldExclamationIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-red-600 transition-colors duration-300">Not Tied to Insurers</h3>
                  </div>
                  <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    We are not tied to any insurer or regulatory body. Our loyalty is to you.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 via-green-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0" />
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                      <CheckCircleIcon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-green-600 transition-colors duration-300">Independent Power</h3>
                  </div>
                  <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    We are independent—and that's our power. We fight for what's right.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 via-red-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0" />
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                      <UserIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-red-600 transition-colors duration-300">Policyholder Only</h3>
                  </div>
                  <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    We do not handle third party claims. You must be the <span className="font-semibold text-primary">POLICYHOLDER</span>.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-teal/10 rounded-full animate-float-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/10 rounded-full animate-float-medium" />
          <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-accent-teal/10 rounded-full animate-float-fast" />
          
          {/* Animated Lines */}
          <div className="absolute top-1/2 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-accent-teal/30 to-transparent animate-slide-right" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-accent-teal/30 to-transparent animate-slide-left" />
          
          {/* Animated Dots */}
          <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-accent-teal/30 rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-accent-teal/30 rounded-full animate-pulse-medium" />
          <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-accent-teal/30 rounded-full animate-pulse-fast" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Our Values
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/30 via-accent-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent-teal transition-colors duration-300">Integrity</h3>
                  <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    We maintain the highest standards of professional ethics and transparency in all our dealings.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/30 via-accent-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent-teal transition-colors duration-300">Excellence</h3>
                  <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    We strive for excellence in every aspect of our work, from legal representation to client service.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/30 via-accent-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent-teal transition-colors duration-300">Advocacy</h3>
                  <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    We are committed to advocating for the rights and interests of policyholders.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Track Record Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/video.mp4" type="video/mp4" /> {/* Replace with your video path */}
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay for text visibility */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="h-[3px] w-24 bg-primary/20"></div> {/* Adjusted line thickness */}
              <h2 className="text-4xl md:text-5xl font-bold text-white">Our Track Record</h2>
              <div className="h-[3px] w-24 bg-primary/20"></div> {/* Adjusted line thickness */}
            </div>

            {/* Testimonial/Statement */}
            <p className="text-xl md:text-2xl font-semibold text-white mb-12 max-w-3xl mx-auto">
              We have won every single case we&apos;ve taken on, a testament to our unwavering dedication and expertise in navigating the complexities of insurance law.;
            </p>

            {/* Icon and Badge */}
            <div className="flex justify-center items-center space-x-6 mb-16">
               {/* Success Rate Badge */}
               <div className="bg-accent-teal text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg relative overflow-hidden animated-border">
                  <span className="relative z-10">100% Success Rate</span>
               </div>
            </div>

            {/* Feature Cards - Adjusted for better visibility on dark background */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-center border border-transparent hover:border-primary transition duration-300"> {/* Changed card background to white */}
                 <span className="text-4xl mb-4">🧠</span> {/* Emoji Icon */}
                 <h3 className="text-xl font-bold text-primary mb-2">Smart Strategy</h3>
                 <p className="text-gray-700">
                   Analyzing every angle to build the strongest case possible.
                 </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-center border border-transparent hover:border-primary transition duration-300"> {/* Changed card background to white */}
                 <span className="text-4xl mb-4">💪</span> {/* Emoji Icon */}
                 <h3 className="text-xl font-bold text-primary mb-2">Relentless Pursuit</h3>
                 <p className="text-gray-700">
                   Fighting tirelessly until justice is served.
                 </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-center border border-transparent hover:border-primary transition duration-300"> {/* Changed card background to white */}
                 <span className="text-4xl mb-4">🤝</span> {/* Emoji Icon */}
                 <h3 className="text-xl font-bold text-primary mb-2">On Your Side</h3>
                 <p className="text-gray-700">
                   Your trusted partner through every step of the process.
                 </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      {/* ... existing code ... */}
    </main>
  )
} 