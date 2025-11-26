import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Marketing Services - Yeovil, Somerset | Saunders Simmons Ltd",
  description: "Professional website design and ongoing marketing support for businesses in Yeovil, Somerset, and Dorset. Complete digital partnership from £795 ex VAT + ongoing support.",
  openGraph: {
    title: "Web Design & Marketing Services - Yeovil, Somerset | Saunders Simmons Ltd",
    description: "Professional website design and ongoing marketing support for businesses in Yeovil, Somerset, and Dorset.",
    url: 'https://www.saunders-simmons.co.uk/services',
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
            <span className="text-sm font-semibold">Our Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Complete <span className="text-[#51AACD]">Digital Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Professional web design, SEO marketing, and custom software development to help your business grow online. 
            We're your trusted digital partner for long-term success.
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
              href="/faq" 
              className="hero-cta-secondary px-8 py-4 rounded-xl font-bold text-base tracking-tight flex items-center justify-center gap-2.5 group"
              style={{color: '#1f2937'}}
            >
              <span>View FAQ</span>
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
            <linearGradient id="servicesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#C4E3EA', stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:'#ffffff', stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#C4E3EA', stopOpacity:1}} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="white" />
          <path 
            d="M0,0 C300,60 900,-40 1200,0 L1200,0 L0,0 Z" 
            fill="url(#servicesGradient)"
          />
        </svg>
      </div>

      {/* Services Overview */}
      <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
              <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
              <span className="text-sm font-semibold">Choose Your Service</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Our <span className="text-[#51AACD]">Core Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              We offer three comprehensive services to help your business succeed online. 
              Click on any service to learn more about our packages and pricing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {/* Web Design Service */}
            <Link href="/services/web-design" className="group service-card rounded-3xl p-8 lg:p-10">
              <div className="text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] shadow-lg">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Professional Web Design</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  Bespoke websites designed to convert visitors into customers. Mobile-responsive, fast-loading, and optimised for search engines.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-[#51AACD] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mobile-responsive design
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-[#51AACD] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SEO optimised
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-[#51AACD] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Contact forms & lead capture
                  </div>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl lg:text-4xl font-bold text-[#51AACD]">From £795</span>
                  <span className="text-lg text-gray-600 ml-1">ex VAT</span>
                </div>
                <div className="mt-6 font-semibold text-[#51AACD] group-hover:text-[#3E8BA8] flex items-center justify-center transition-all duration-300">
                  Learn More <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>

            {/* SEO Marketing Service */}
            <Link href="/services/seo" className="group service-card rounded-3xl p-8 lg:p-10">
              <div className="text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon shadow-lg">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">SEO Marketing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  Expert search engine optimisation to boost your online visibility and attract more customers to your business.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Local SEO optimisation
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Google Business Profile management
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Monthly performance reports
                  </div>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl lg:text-4xl font-bold text-green-600">From £250</span>
                  <span className="text-lg text-gray-600 ml-1">/month</span>
                </div>
                <div className="mt-6 text-green-600 font-semibold group-hover:text-green-700 flex items-center justify-center transition-all duration-300">
                  Learn More <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>

            {/* Software Development Service */}
            <Link href="/services/software" className="group service-card rounded-3xl p-8 lg:p-10">
              <div className="text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 service-icon shadow-lg">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Software Development</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  Bespoke software solutions tailored to your business needs. Streamline operations and drive innovation with custom applications.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-[#51AACD] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom web applications
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-[#51AACD] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Business process automation
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-[#51AACD] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Ongoing support & maintenance
                  </div>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl lg:text-4xl font-bold text-orange-600">Custom</span>
                  <span className="text-lg text-gray-600 ml-1">Pricing</span>
                </div>
                <div className="mt-6 text-orange-600 font-semibold group-hover:text-orange-700 flex items-center justify-center transition-all duration-300">
                  Learn More <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Premium Divider */}
          <div className="relative py-12 sm:py-16 overflow-hidden mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#51AACD]/10 to-transparent"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#51AACD]/30 to-[#51AACD]/30"></div>
                <div className="w-3 h-3 rounded-full bg-[#51AACD] shadow-lg shadow-[#51AACD]/30"></div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#51AACD]/30 to-[#51AACD]/30"></div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="p-10 lg:p-14 rounded-3xl text-white cta-section-gradient">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                Not Sure Which Service You Need?
              </h3>
              <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-[#C4E3EA] font-medium">
                Book a free consultation and we'll help you choose the right solution for your business. 
                We'll assess your needs and recommend the perfect service package.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookCallButton className="cta-button-primary px-8 py-4 rounded-xl font-bold text-base tracking-tight text-gray-900 flex items-center justify-center gap-2.5 group">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Book Free Consultation</span>
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

    </div>
  );
}
