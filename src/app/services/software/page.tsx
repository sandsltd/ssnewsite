import Link from "next/link";
import Image from "next/image";
import BookCallButton from "@/components/BookCallButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development - Yeovil, Somerset | Saunders Simmons Ltd",
  description: "Professional custom software development in Yeovil, Somerset. We create PaperRoute waste management software, TicketRush ticket sales software, and TotBook booking software. Custom solutions for your business.",
  openGraph: {
    title: "Custom Software Development - Yeovil, Somerset | Saunders Simmons Ltd",
    description: "Professional custom software development in Yeovil, Somerset. We create PaperRoute waste management software, TicketRush ticket sales software, and TotBook booking software.",
    url: 'https://www.saunders-simmons.co.uk/services/software',
    siteName: 'Saunders Simmons Ltd',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'Saunders Simmons Ltd Software Development',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Custom Software Development - Yeovil, Somerset | Saunders Simmons Ltd",
    description: "Professional custom software development in Yeovil, Somerset. We create PaperRoute waste management software, TicketRush ticket sales software, and TotBook booking software.",
    images: ['/logos/logo.png'],
  },
};

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Professional custom software development in Yeovil, Somerset. We create PaperRoute waste management software, TicketRush ticket sales software, and TotBook booking software.",
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
            "serviceType": "Software Development"
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 portfolio-hero-gradient relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
            <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
            <span className="text-sm font-semibold">Software Development</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Custom <span className="text-[#51AACD]">Software Development</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            We create custom software solutions for your business needs. From waste management systems to booking platforms, 
            we develop software that streamlines your operations and grows your business.
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
            <linearGradient id="softwareGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#C4E3EA', stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:'#ffffff', stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#C4E3EA', stopOpacity:1}} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="white" />
          <path 
            d="M0,0 C300,60 900,-40 1200,0 L1200,0 L0,0 Z" 
            fill="url(#softwareGradient)"
          />
        </svg>
      </div>

      {/* Our Software Products */}
      <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
              <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
              <span className="text-sm font-semibold">Our Products</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Our <span className="text-[#51AACD]">Software Products</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              We've developed specialised software solutions for various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* PaperRoute */}
            <div className="software-product-card rounded-3xl p-8 lg:p-10 text-center group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 lg:w-24 lg:h-24 software-logo-container rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Image
                    src="/softwarelogos/paperroute_final.png"
                    alt="PaperRoute Logo"
                    width={80}
                    height={80}
                    className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                  />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">PaperRoute</h3>
                <p className="text-gray-600 mb-6 text-base font-medium">Waste Management Software</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 text-center">
                  Designed specifically for destruction service businesses, PaperRoute streamlines waste management operations with comprehensive tracking and reporting features.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Waste tracking and management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Compliance reporting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Client management</span>
                  </li>
                </ul>
                <Link
                  href="https://www.paperroute.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#51AACD] font-semibold hover:text-[#3E8BA8] transition-all duration-300 group/link"
                >
                  <span>Visit Website</span>
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* TicketRush */}
            <div className="software-product-card rounded-3xl p-8 lg:p-10 text-center group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 lg:w-24 lg:h-24 software-logo-container rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Image
                    src="/softwarelogos/ticketrush.png"
                    alt="TicketRush Logo"
                    width={80}
                    height={80}
                    className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                  />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">TicketRush</h3>
                <p className="text-gray-600 mb-6 text-base font-medium">Event Ticketing Platform</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 text-center">
                  A comprehensive ticket sales platform that handles everything from event creation to payment processing, making ticket sales simple and efficient.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Event management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Customer management</span>
                  </li>
                </ul>
                <Link
                  href="https://ticketrush.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#51AACD] font-semibold hover:text-[#3E8BA8] transition-all duration-300 group/link"
                >
                  <span>Visit Website</span>
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* TotBook */}
            <div className="software-product-card rounded-3xl p-8 lg:p-10 text-center group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 lg:w-24 lg:h-24 software-logo-container rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Image
                    src="/softwarelogos/TotBook_latest.png"
                    alt="TotBook Logo"
                    width={80}
                    height={80}
                    className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                  />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">TotBook</h3>
                <p className="text-gray-600 mb-6 text-base font-medium">Car Seat Booking Software</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 text-center leading-relaxed text-base">
                  Specialised booking software for car seat resellers, streamlining appointment scheduling and customer management for this niche market.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Appointment booking</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Customer scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Inventory management</span>
                  </li>
                </ul>
                <Link
                  href="https://apps.apple.com/gb/app/totbook/id6749780830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group/link hover:opacity-80 transition-opacity duration-300"
                >
                  <Image
                    src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                    alt="Download on the App Store"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
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

      {/* What We Offer */}
      <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
              <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Custom Software <span className="text-[#51AACD]">Development</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              We create custom software solutions tailored to your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Web Applications */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] shadow-lg">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Web Applications</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Custom web applications built with modern technologies like React, Node.js, and cloud platforms.
              </p>
            </div>

            {/* Business Process Automation */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Process Automation</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Automate repetitive tasks and streamline your business processes with custom software solutions.
              </p>
            </div>

            {/* Database Design */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Database Design</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Custom database solutions designed to store and manage your business data efficiently.
              </p>
            </div>

            {/* API Development */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">API Development</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Custom APIs to integrate your software with other systems and third-party services.
              </p>
            </div>

            {/* Mobile Apps */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Mobile Applications</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Native and cross-platform mobile applications for iOS and Android devices.
              </p>
            </div>

            {/* Maintenance & Support */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Maintenance & Support</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Ongoing maintenance, updates, and technical support for your custom software solutions.
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

      {/* Process */}
      <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
              <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
              <span className="text-sm font-semibold">How We Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Our Development <span className="text-[#51AACD]">Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              From concept to deployment, here's how we build your custom software
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Step 1 */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-16 h-16 text-white rounded-2xl flex items-center justify-center font-bold mb-6 mx-auto bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] shadow-lg text-xl">
                1
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Discovery</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                We analyse your business requirements and understand your goals to create the perfect solution.
              </p>
            </div>

            {/* Step 2 */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-16 h-16 text-white rounded-2xl flex items-center justify-center font-bold mb-6 mx-auto bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] shadow-lg text-xl">
                2
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                We create detailed specifications, wireframes, and a development roadmap for your project.
              </p>
            </div>

            {/* Step 3 */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-16 h-16 text-white rounded-2xl flex items-center justify-center font-bold mb-6 mx-auto bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] shadow-lg text-xl">
                3
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Development</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Our team builds your custom software using modern technologies and best practices.
              </p>
            </div>

            {/* Step 4 */}
            <div className="service-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-16 h-16 text-white rounded-2xl flex items-center justify-center font-bold mb-6 mx-auto bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] shadow-lg text-xl">
                4
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Deployment</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                We deploy your software, provide training, and offer ongoing support and maintenance.
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
            Ready to Build Your <span className="text-[#51AACD]">Custom Software?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Whether you need a specialised business application or want to automate your processes, 
            we can create the perfect software solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-10">
            <BookCallButton className="cta-button-primary text-gray-900 px-8 py-4 rounded-xl font-bold text-base tracking-tight flex items-center justify-center gap-2.5 group mx-auto sm:mx-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Book Your Free Consultation</span>
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
              <span className="text-gray-700 font-semibold">Custom solutions</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
