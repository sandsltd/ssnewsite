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
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, #C4E3EA 0%, #ffffff 50%, #C4E3EA 100%)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span style={{color: '#51AACD'}}>Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Complete digital solutions for your business. We offer web design, SEO marketing, and custom software development to help your business grow online.
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

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your <span style={{color: '#51AACD'}}>Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer three core services to help your business succeed online. Click on any service to learn more about our packages and pricing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Web Design Service */}
            <Link href="/services/web-design" className="bg-white p-8 rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl group" style={{borderColor: '#C4E3EA'}}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300" style={{backgroundColor: '#C4E3EA'}}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Design</h3>
                <p className="text-gray-600 mb-6">
                  Professional websites that convert visitors into customers. Responsive, fast, and optimised for search engines.
                </p>
                <div className="text-center">
                  <span className="text-3xl font-bold" style={{color: '#51AACD'}}>From £795</span>
                  <span className="text-lg text-gray-600 ml-1">ex VAT</span>
                </div>
                <div className="mt-4 font-semibold group-hover:opacity-80 transition-all duration-200" style={{color: '#51AACD'}}>
                  Learn More →
                </div>
              </div>
            </Link>

            {/* SEO Marketing Service */}
            <Link href="/services/seo" className="bg-white p-8 rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl group" style={{borderColor: '#C4E3EA'}}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300" style={{backgroundColor: '#C4E3EA'}}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Boost your online visibility and attract more customers with our expert search engine optimisation strategies.
                </p>
                <div className="text-center">
                  <span className="text-3xl font-bold" style={{color: '#51AACD'}}>From £250</span>
                  <span className="text-lg text-gray-600 ml-1">/month</span>
                </div>
                <div className="mt-4 font-semibold group-hover:opacity-80 transition-all duration-200" style={{color: '#51AACD'}}>
                  Learn More →
                </div>
              </div>
            </Link>

            {/* Software Development Service */}
            <Link href="/services/software" className="bg-white p-8 rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl group" style={{borderColor: '#C4E3EA'}}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300" style={{backgroundColor: '#C4E3EA'}}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Software Development</h3>
                <p className="text-gray-600 mb-6">
                  Custom software solutions to streamline your operations, enhance efficiency, and drive innovation.
                </p>
                <div className="text-center">
                  <span className="text-3xl font-bold" style={{color: '#51AACD'}}>Custom</span>
                  <span className="text-lg text-gray-600 ml-1">Pricing</span>
                </div>
                <div className="mt-4 font-semibold group-hover:opacity-80 transition-all duration-200" style={{color: '#51AACD'}}>
                  Learn More →
                </div>
              </div>
            </Link>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 max-w-2xl mx-auto" style={{borderColor: '#C4E3EA'}}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Not Sure Which Service You Need?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a free consultation and we'll help you choose the right solution for your business.
              </p>
              <div className="flex justify-center">
                <BookCallButton className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200" style={{backgroundColor: '#51AACD'}}>
                  Book a Free Consultation
                </BookCallButton>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
