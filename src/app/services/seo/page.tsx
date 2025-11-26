import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Marketing Services - Yeovil, Somerset | Saunders Simmons Ltd",
  description: "Professional SEO marketing services in Yeovil, Somerset. Get found on Google with local SEO, content marketing, and search engine optimisation. Starting from £250/month.",
  openGraph: {
    title: "SEO Marketing Services - Yeovil, Somerset | Saunders Simmons Ltd",
    description: "Professional SEO marketing services in Yeovil, Somerset. Get found on Google with local SEO, content marketing, and search engine optimisation.",
    url: 'https://www.saunders-simmons.co.uk/services/seo',
    siteName: 'Saunders Simmons Ltd',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'Saunders Simmons Ltd SEO Services',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Marketing Services - Yeovil, Somerset | Saunders Simmons Ltd",
    description: "Professional SEO marketing services in Yeovil, Somerset. Get found on Google with local SEO, content marketing, and search engine optimisation.",
    images: ['/logos/logo.png'],
  },
};

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional SEO Marketing Services",
            "description": "Professional SEO marketing services in Yeovil, Somerset. Get found on Google with local SEO, content marketing, and search engine optimisation.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Saunders Simmons Ltd",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "15 Oxford Road, Pen Mill Trading Estate",
                "addressLocality": "Yeovil",
                "addressRegion": "Somerset",
                "postalCode": "BA21 5HR",
                "addressCountry": "GB"
              }
            },
            "areaServed": [
              {
                "@type": "Place",
                "name": "Yeovil"
              },
              {
                "@type": "Place",
                "name": "Somerset"
              },
              {
                "@type": "Place",
                "name": "Dorset"
              }
            ],
            "serviceType": "SEO Marketing",
            "offers": {
              "@type": "Offer",
              "price": "250",
              "priceCurrency": "GBP",
              "description": "SEO marketing services starting from £250/month"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 portfolio-hero-gradient relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
            <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
            <span className="text-sm font-semibold">SEO Marketing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Professional <span className="text-[#51AACD]">SEO Marketing</span> Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Get found on Google and attract more customers with our comprehensive SEO marketing services. 
            We help businesses across the UK rank higher in search results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookCallButton className="hero-cta-primary text-white px-8 py-4 rounded-xl font-bold text-base tracking-tight flex items-center justify-center gap-2.5 group">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Book a Free Consultation</span>
              <svg className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </BookCallButton>
            <Link 
              href="/services" 
              className="hero-cta-secondary px-8 py-4 rounded-xl font-bold text-base tracking-tight flex items-center justify-center gap-2.5 group"
              style={{color: '#1f2937'}}
            >
              <span>View All Services</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SVG Wave Transition */}
      <div className="relative -mt-1">
        <svg 
          className="w-full h-20 sm:h-32" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="seoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#C4E3EA', stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:'#ffffff', stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#C4E3EA', stopOpacity:1}} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="white" />
          <path 
            d="M0,0 C300,60 900,-40 1200,0 L1200,0 L0,0 Z" 
            fill="url(#seoGradient)"
          />
        </svg>
      </div>

      {/* What We Offer */}
      <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
              <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              What We <span className="text-[#51AACD]">Offer</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Comprehensive SEO marketing services to help your business get found online
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Local SEO */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] shadow-lg">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Local SEO</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Optimise your Google Business Profile and local search rankings to attract customers in your area.
              </p>
            </div>

            {/* Content Marketing */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Content Marketing</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Create valuable, SEO-optimised content that attracts and engages your target audience.
              </p>
            </div>

            {/* Technical SEO */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Technical SEO</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Optimise your website's technical aspects for better search engine crawling and indexing.
              </p>
            </div>

            {/* Keyword Research */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Keyword Research</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Identify the right keywords your customers are searching for to improve your rankings.
              </p>
            </div>

            {/* Link Building */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Link Building</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Build high-quality backlinks to improve your domain authority and search rankings.
              </p>
            </div>

            {/* Analytics & Reporting */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Track your SEO progress with detailed monthly reports and analytics insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Divider */}
      <div className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#51AACD]/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#51AACD]/30 to-[#51AACD]/30"></div>
            <div className="w-3 h-3 rounded-full bg-[#51AACD] shadow-lg shadow-[#51AACD]/30"></div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#51AACD]/30 to-[#51AACD]/30"></div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
              <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
              <span className="text-sm font-semibold">Our Packages</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              SEO Marketing <span className="text-[#51AACD]">Packages</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Choose the SEO package that's right for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* Growth SEO */}
            <div className="service-card rounded-3xl p-8 lg:p-10">
              <div className="text-center mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Growth SEO</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-base">Perfect for small businesses getting started</p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-4xl lg:text-5xl font-bold text-[#51AACD]">£250</span>
                  <span className="text-lg ml-1 text-[#51AACD]">/month + VAT</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Google Business Profile optimisation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Monthly Google Business Profile Updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Local SEO optimisation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Monthly blog post</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Monthly SEO report</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Keyword research</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
            </div>

            {/* Advanced SEO */}
            <div className="service-card rounded-3xl p-8 lg:p-10">
              <div className="text-center mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Advanced SEO</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-base">Perfect for growing businesses</p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-4xl lg:text-5xl font-bold text-[#51AACD]">£475</span>
                  <span className="text-lg ml-1 text-[#51AACD]">/month + VAT</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Everything in Growth SEO</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Additional blog posts to support strategy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Weekly Google Business Profile Posts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Advanced keyword research</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Technical SEO audit</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Link building campaign</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Competitor analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="p-10 lg:p-14 rounded-3xl text-white cta-section-gradient max-w-3xl mx-auto">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                Ready to Get Started?
              </h3>
              <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-[#C4E3EA] font-medium">
                Get your business found on Google with our expert SEO services. Free consultation and no setup fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookCallButton className="cta-button-primary px-8 py-4 rounded-xl font-bold text-base tracking-tight text-gray-900 flex items-center justify-center gap-2.5 group">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Book a Free Call</span>
                  <svg className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </BookCallButton>
                <Link 
                  href="/faq" 
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-base tracking-tight flex items-center justify-center gap-2.5 group hover:bg-white hover:text-[#51AACD] transition-all duration-300"
                >
                  <span>View FAQ</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Divider */}
      <div className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#51AACD]/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#51AACD]/30 to-[#51AACD]/30"></div>
            <div className="w-3 h-3 rounded-full bg-[#51AACD] shadow-lg shadow-[#51AACD]/30"></div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#51AACD]/30 to-[#51AACD]/30"></div>
          </div>
        </div>
      </div>

      {/* Process */}
      <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
              <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
              <span className="text-sm font-semibold">How We Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Our SEO <span className="text-[#51AACD]">Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              How we help your business get found on Google
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Step 1 */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-16 h-16 text-white rounded-2xl flex items-center justify-center font-bold mb-6 mx-auto bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] shadow-lg text-xl">
                1
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">SEO Audit</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                We analyse your current website and identify opportunities for improvement.
              </p>
            </div>

            {/* Step 2 */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-16 h-16 text-white rounded-2xl flex items-center justify-center font-bold mb-6 mx-auto bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] shadow-lg text-xl">
                2
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Strategy</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                We develop a customised SEO strategy based on your business goals and target keywords.
              </p>
            </div>

            {/* Step 3 */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-16 h-16 text-white rounded-2xl flex items-center justify-center font-bold mb-6 mx-auto bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] shadow-lg text-xl">
                3
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                We implement technical SEO improvements, create content, and optimise your online presence.
              </p>
            </div>

            {/* Step 4 */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-16 h-16 text-white rounded-2xl flex items-center justify-center font-bold mb-6 mx-auto bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] shadow-lg text-xl">
                4
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Monitor & Report</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                We track your progress and provide monthly reports showing your SEO improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 cta-section relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
            <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
            <span className="text-sm font-semibold">Get Started</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Ready to Get Found on <span className="text-[#51AACD]">Google?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Join the growing community of businesses that are getting more customers through better search rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-10">
            <BookCallButton className="cta-button-primary text-gray-900 px-8 py-4 rounded-xl font-bold text-base tracking-tight flex items-center justify-center gap-2.5 group mx-auto sm:mx-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Book Your Free SEO Consultation</span>
              <svg className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </BookCallButton>
            <Link
              href="/services"
              className="cta-button-secondary text-[#51AACD] px-8 py-4 rounded-xl font-bold text-base tracking-tight flex items-center justify-center gap-2.5 group mx-auto sm:mx-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>View All Services</span>
              <svg className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 font-semibold">No commitment</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-700 font-semibold">Free consultation</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-gray-700 font-semibold">Quick results</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
