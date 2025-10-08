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
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, #C4E3EA 0%, #ffffff 50%, #C4E3EA 100%)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span style={{color: '#51AACD'}}>SEO Marketing</span> Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get found on Google and attract more customers with our comprehensive SEO marketing services. 
            We help businesses in Yeovil, Somerset, and Dorset rank higher in search results.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 font-medium">5.0 Google Rating • Based in Yeovil, Somerset</span>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What We <span style={{color: '#51AACD'}}>Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO marketing services to help your business get found online
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Local SEO */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Local SEO</h3>
              <p className="text-gray-600 text-center">
                Optimize your Google Business Profile and local search rankings to attract customers in your area.
              </p>
            </div>

            {/* Content Marketing */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Content Marketing</h3>
              <p className="text-gray-600 text-center">
                Create valuable, SEO-optimized content that attracts and engages your target audience.
              </p>
            </div>

            {/* Technical SEO */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Technical SEO</h3>
              <p className="text-gray-600 text-center">
                Optimize your website's technical aspects for better search engine crawling and indexing.
              </p>
            </div>

            {/* Keyword Research */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Keyword Research</h3>
              <p className="text-gray-600 text-center">
                Identify the right keywords your customers are searching for to improve your rankings.
              </p>
            </div>

            {/* Link Building */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Link Building</h3>
              <p className="text-gray-600 text-center">
                Build high-quality backlinks to improve your domain authority and search rankings.
              </p>
            </div>

            {/* Analytics & Reporting */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Analytics & Reporting</h3>
              <p className="text-gray-600 text-center">
                Track your SEO progress with detailed monthly reports and analytics insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              SEO Marketing <span style={{color: '#51AACD'}}>Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the SEO package that's right for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Growth SEO */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 transition-all duration-300 relative" style={{borderColor: '#C4E3EA'}}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="text-white px-4 py-2 rounded-full text-xs font-semibold" style={{backgroundColor: '#51AACD'}}>Most Popular</span>
              </div>
              
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth SEO</h3>
                <p className="text-gray-600 mb-4">Perfect for small businesses getting started</p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-4xl font-bold" style={{color: '#51AACD'}}>£250</span>
                  <span className="text-lg ml-1" style={{color: '#51AACD'}}>/month + VAT</span>
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
                  <span>Local SEO optimisation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>2 blog posts per month</span>
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
                  <span>Basic keyword research</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Email support</span>
                </li>
              </ul>
            </div>

            {/* Advanced SEO */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 transition-all duration-300" style={{borderColor: '#C4E3EA'}}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Advanced SEO</h3>
                <p className="text-gray-600 mb-4">Perfect for growing businesses</p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-4xl font-bold" style={{color: '#51AACD'}}>£425</span>
                  <span className="text-lg ml-1" style={{color: '#51AACD'}}>/month + VAT</span>
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
                  <span>4 blog posts per month</span>
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
          
          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 max-w-2xl mx-auto" style={{borderColor: '#C4E3EA'}}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Get your business found on Google with our expert SEO services. Free consultation and no setup fees.
              </p>
              <div className="flex justify-center">
                <BookCallButton className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200" style={{backgroundColor: '#51AACD'}}>
                  Book a Call
                </BookCallButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our SEO <span style={{color: '#51AACD'}}>Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we help your business get found on Google
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto" style={{backgroundColor: '#51AACD'}}>
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO Audit</h3>
              <p className="text-gray-600">
                We analyse your current website and identify opportunities for improvement.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto" style={{backgroundColor: '#51AACD'}}>
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategy</h3>
              <p className="text-gray-600">
                We develop a customised SEO strategy based on your business goals and target keywords.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto" style={{backgroundColor: '#51AACD'}}>
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600">
                We implement technical SEO improvements, create content, and optimize your online presence.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto" style={{backgroundColor: '#51AACD'}}>
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monitor & Report</h3>
              <p className="text-gray-600">
                We track your progress and provide monthly reports showing your SEO improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#C4E3EA'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Found on <span style={{color: '#51AACD'}}>Google?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the growing community of businesses that are getting more customers through better search rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookCallButton className="text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 text-lg shadow-lg" style={{backgroundColor: '#51AACD'}}>
              Book Your Free SEO Consultation
            </BookCallButton>
            <Link
              href="/services"
              className="bg-white border-2 px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 text-lg" style={{color: '#51AACD', borderColor: '#51AACD'}}
            >
              View All Services
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No commitment • Free consultation • Quick results
          </p>
        </div>
      </section>
    </div>
  );
}
