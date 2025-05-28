import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
})

export const metadata: Metadata = {
  title: 'BIMA-AID - Insurance Claim Assistance',
  description: 'Expert assistance for policyholders facing unfair claim rejections. We help you win against insurance companies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${raleway.variable}`}>
      <body className="min-h-screen bg-secondary text-primary antialiased font-raleway">
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
} 