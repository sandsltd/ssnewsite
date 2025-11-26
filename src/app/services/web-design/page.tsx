import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Marketing Services - Yeovil, Somerset | Saunders Simmons Ltd",
  description: "Professional website design and ongoing marketing support for businesses in Yeovil, Somerset, and Dorset. Complete digital partnership from £795 ex VAT + ongoing support.",
  openGraph: {
    title: "Web Design & Marketing Services - Yeovil, Somerset | Saunders Simmons Ltd",
    description: "Professional website design and ongoing marketing support for businesses in Yeovil, Somerset, and Dorset.",
    url: 'https://www.saunders-simmons.co.uk/services/web-design',
    siteName: 'Saunders Simmons Ltd',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'Saunders Simmons Ltd Services',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Web Design & Marketing Services - Yeovil, Somerset | Saunders Simmons Ltd",
    description: "Professional website design and ongoing marketing support for businesses in Yeovil, Somerset, and Dorset.",
    images: ['/logos/logo.png'],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Web Design & Marketing Services",
            "description": "Complete website design and ongoing marketing support for businesses in Yeovil, Somerset, and Dorset",
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
            "serviceType": "Web Design",
            "offers": {
              "@type": "Offer",
              "price": "795",
              "priceCurrency": "GBP",
              "description": "Website design starting from £795 ex VAT"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 portfolio-hero-gradient relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
            <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
            <span className="text-sm font-semibold">Professional Web Design</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Your Long-Term Digital <span className="text-[#51AACD]">Partnership</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Complete support for your business online from your local web design team based in Yeovil. 
            We build your website, then partner with you for ongoing growth and success.
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
            <linearGradient id="webDesignGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#C4E3EA', stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:'#ffffff', stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#C4E3EA', stopOpacity:1}} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="white" />
          <path 
            d="M0,0 C300,60 900,-40 1200,0 L1200,0 L0,0 Z" 
            fill="url(#webDesignGradient)"
          />
        </svg>
      </div>

      {/* Main Service Offering */}
      <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
              <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
              <span className="text-sm font-semibold">Our Packages</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Affordable Web Design <span className="text-[#51AACD]">Packages</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              We start by building your professional website, then you choose the support level that's right for your business. Includes local SEO services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Choose Your Support Level</h3>
              <p className="text-lg text-gray-600">After we build your website, select the ongoing support that fits your needs</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {/* Step 1: Website Build */}
            <div className="service-card rounded-3xl p-8 lg:p-10">
              <div className="text-center mb-6">
                <div className="w-12 h-12 text-white rounded-xl flex items-center justify-center font-bold mx-auto mb-4 bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] shadow-lg text-lg">1</div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Professional Website Build</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-base">Everything you need for a stunning online presence at an affordable price</p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-sm text-gray-500 mr-2">One-time cost</span>
                  <span className="text-4xl font-bold text-[#51AACD]">£795</span>
                  <span className="text-lg ml-1 text-[#51AACD]">ex VAT</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>5 professionally designed pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Mobile-responsive design (98% performance)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>SEO optimisation for Google rankings</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Contact forms & lead capture</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Google Maps integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Social media integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>SSL security certificate</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">2 weeks turnaround time</span>
                </li>
              </ul>
            </div>

            {/* Step 2A: Basic Hosting */}
            <div className="service-card rounded-3xl p-8 lg:p-10">
              <div className="text-center mb-6">
                <div className="w-12 h-12 text-white rounded-xl flex items-center justify-center font-bold mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 shadow-lg text-sm">2A</div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Basic Hosting</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-base">Essential hosting and maintenance</p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-sm text-gray-500 mr-2">Monthly</span>
                  <span className="text-4xl font-bold text-green-600">£25</span>
                  <span className="text-lg ml-1 text-green-600">/month + VAT</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Reliable web hosting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>SSL certificate maintenance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Basic security monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Technical updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>99.9% uptime guarantee</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Email support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Cancel anytime (no lock-in)</span>
                </li>
              </ul>
            </div>

            {/* Step 2B: Continuous Growth & Support */}
            <div className="service-card rounded-3xl p-8 lg:p-10">
              <div className="text-center mb-6">
                <div className="w-12 h-12 text-white rounded-xl flex items-center justify-center font-bold mx-auto mb-4 bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] shadow-lg text-sm">2B</div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Continuous Growth</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-base">Complete support and marketing</p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-sm text-gray-500 mr-2">Monthly</span>
                  <span className="text-4xl font-bold text-[#51AACD]">£250</span>
                  <span className="text-lg ml-1 text-[#51AACD]">/month + VAT</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Everything in Basic Hosting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Local SEO services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Google Business Profile Management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited content updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Performance optimisation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Google Analytics reporting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Priority IT support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Cancel anytime (no lock-in)</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Single CTA for the complete service */}
          <div className="text-center mt-16">
            <div className="p-10 lg:p-14 rounded-3xl text-white cta-section-gradient max-w-3xl mx-auto">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                Ready to Get Started?
              </h3>
              <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-[#C4E3EA] font-medium">
                Get your professional website built for just £795 ex VAT, then choose between our Basic Hosting or Continuous Growth support options.
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

      {/* Our Process Section */}
      <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
              <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
              <span className="text-sm font-semibold">How We Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Our Proven <span className="text-[#51AACD]">Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              From initial consultation to ongoing success, here's exactly how we work with our Somerset, Dorset, and Yeovil clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1: Welcome Call */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto" style={{backgroundColor: '#51AACD'}}>
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Welcome Call</h3>
              <p className="text-gray-600 text-center mb-4">
                We start with a friendly consultation to understand your business, goals, and vision for your website.
              </p>
              <div className="text-center">
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: '#C4E3EA', color: '#51AACD'}}>
                  30-45 minutes
                </span>
              </div>
            </div>

            {/* Step 2: Research */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto" style={{backgroundColor: '#51AACD'}}>
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">We Research</h3>
              <p className="text-gray-600 text-center mb-4">
                Our team researches your industry, competitors, and local market to create the perfect strategy.
              </p>
              <div className="text-center">
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: '#C4E3EA', color: '#51AACD'}}>
                  1-2 days
                </span>
              </div>
            </div>

            {/* Step 3: Proposal */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto" style={{backgroundColor: '#51AACD'}}>
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Proposal</h3>
              <p className="text-gray-600 text-center mb-4">
                You receive a detailed proposal with mockups, timeline, and clear pricing - no hidden costs.
              </p>
              <div className="text-center">
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: '#C4E3EA', color: '#51AACD'}}>
                  2-3 days
                </span>
              </div>
            </div>

            {/* Step 4: Build */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto" style={{backgroundColor: '#51AACD'}}>
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Build</h3>
              <p className="text-gray-600 text-center mb-4">
                We build your professional website with regular updates so you can see progress every step of the way.
              </p>
              <div className="text-center">
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: '#C4E3EA', color: '#51AACD'}}>
                  1-2 weeks
                </span>
              </div>
            </div>

            {/* Step 5: Approval */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto" style={{backgroundColor: '#51AACD'}}>
                5
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Approval</h3>
              <p className="text-gray-600 text-center mb-4">
                You review the finished website and request any final changes before we go live.
              </p>
              <div className="text-center">
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: '#C4E3EA', color: '#51AACD'}}>
                  2-3 days
                </span>
              </div>
            </div>

            {/* Step 6: Launch */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto" style={{backgroundColor: '#51AACD'}}>
                6
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Launch</h3>
              <p className="text-gray-600 text-center mb-4">
                Your website goes live! We handle all technical aspects and provide you with training and documentation.
              </p>
              <div className="text-center">
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: '#C4E3EA', color: '#51AACD'}}>
                  Launch day
                </span>
              </div>
            </div>
          </div>

          {/* Step 7: Ongoing Updates - Full Width */}
          <div className="mt-8">
            <div className="p-8 rounded-xl shadow-lg text-white" style={{background: 'linear-gradient(135deg, #51AACD 0%, #4A9BC4 100%)'}}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto text-xl">
                  7
                </div>
                <h3 className="text-2xl font-bold mb-4">Regular Updates & Ongoing Support</h3>
                <p className="text-lg mb-6 max-w-3xl mx-auto">
                  This is where the real partnership begins! We provide monthly SEO updates, content changes, 
                  performance monitoring, and continuous improvements to help your business grow online.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                    Monthly SEO Reports
                  </span>
                  <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                    Unlimited Updates
                  </span>
                  <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                    Priority Support
                  </span>
                </div>
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

      {/* Additional Services */}
      <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
              <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
              <span className="text-sm font-semibold">Additional Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              We Can Also Help <span className="text-[#51AACD]">With</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Beyond web design, we offer comprehensive digital solutions to support your business growth and online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Branding */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Branding</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Logo Design
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Brand Design
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Flyers & Marketing Materials
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Business Cards
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Social Media</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Post Creation
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Content Planning
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customer Interaction
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Account Management
                </li>
              </ul>
            </div>

            {/* SEO */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">SEO</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Local Google Business Profile
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Profile Management
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Local Google Ranking Support
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  National Google Ranking Support
                </li>
              </ul>
            </div>

            {/* WordPress Support */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">WordPress Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  WordPress Maintenance
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Security Updates & Fixes
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Performance Optimisation
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <Link href="/wordpress-web-design-yeovil" className="text-orange-600 hover:text-orange-700">
                    Custom Rebuilds
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              All additional services can be included in your ongoing support package or provided as standalone solutions.
            </p>
            <BookCallButton className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200" style={{backgroundColor: '#51AACD'}}>
              Book a Call to Discuss
            </BookCallButton>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
            <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
            <span className="text-sm font-semibold">Service Areas</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            We Help <span className="text-[#51AACD]">Any UK Business</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed font-medium">
            Based in Yeovil, we work with businesses across the entire UK. While we have deep local knowledge of Somerset and Dorset, 
            we're equipped to help any UK business with their website needs through video calls and remote collaboration.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">UK-Wide Service</h3>
              <p className="text-gray-600">We help businesses across the entire United Kingdom with professional website design</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">Based in Yeovil with deep understanding of the South West market</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Remote Collaboration</h3>
              <p className="text-gray-600">Video calls and remote tools enable us to serve clients anywhere in the UK</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 text-sm">
              <strong>We serve businesses across the UK:</strong> While we're based in Yeovil, Somerset, we work with businesses 
              throughout England, Scotland, Wales, and Northern Ireland. Our local focus gives us insight into the South West market, 
              but our expertise extends nationwide. Whether you're in London, Manchester, Edinburgh, Cardiff, or anywhere in between, 
              we can help with your website needs.
            </p>
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

      {/* Professional Credentials */}
      <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
              <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
              <span className="text-sm font-semibold">Trust & Credentials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Professional & <span className="text-[#51AACD]">Trusted Business</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Your peace of mind is our priority. We're fully registered, insured, and committed to delivering excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Registered Company */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Registered Company</h3>
                <p className="text-gray-600 mb-4">Companies House registered for your security and peace of mind</p>
                <div className="px-4 py-2 rounded-lg" style={{backgroundColor: '#C4E3EA'}}>
                  <span className="text-sm font-semibold" style={{color: '#51AACD'}}>Company No: 15839557</span>
                </div>
              </div>
            </div>

            {/* Fully Insured */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.586-2H6a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-4.586a1 1 0 00-.293-.707l-2-2a1 1 0 00-.707-.293z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fully Insured</h3>
                <p className="text-gray-600 mb-4">Comprehensive business insurance covering all our services</p>
                <div className="px-4 py-2 rounded-lg" style={{backgroundColor: '#C4E3EA'}}>
                  <span className="text-sm font-semibold" style={{color: '#51AACD'}}>Professional Indemnity</span>
                </div>
              </div>
            </div>

            {/* VAT Registered */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-200">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">VAT Registered</h3>
                <p className="text-gray-600 mb-4">Fully compliant with all tax regulations and requirements</p>
                <div className="px-4 py-2 rounded-lg" style={{backgroundColor: '#C4E3EA'}}>
                  <span className="text-sm font-semibold" style={{color: '#51AACD'}}>VAT No: 15839557</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 max-w-2xl mx-auto">
              <p className="text-gray-600 mb-2">
                <span className="font-semibold text-gray-900">Established 2020</span> • 
                <span className="font-semibold text-gray-900"> Based in Yeovil, Somerset</span>
              </p>
              <p className="text-sm text-gray-500">
                Serving businesses across the South West with professional web design and digital marketing services
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
            Ready to Start Your <span className="text-[#51AACD]">Digital Partnership?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Join the growing community of Somerset and Dorset businesses we partner with for long-term success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-10">
            <BookCallButton className="cta-button-primary text-gray-900 px-8 py-4 rounded-xl font-bold text-base tracking-tight flex items-center justify-center gap-2.5 group mx-auto sm:mx-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Book Your Welcome Call</span>
              <svg className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </BookCallButton>
            <Link
              href="/blog"
              className="cta-button-secondary text-[#51AACD] px-8 py-4 rounded-xl font-bold text-base tracking-tight flex items-center justify-center gap-2.5 group mx-auto sm:mx-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>Read Success Stories</span>
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
              <span className="text-gray-700 font-semibold">Quick 2-week turnaround</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
