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
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, #C4E3EA 0%, #ffffff 50%, #C4E3EA 100%)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Custom <span style={{color: '#51AACD'}}>Software Development</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We create custom software solutions for your business needs. From waste management systems to booking platforms, 
            we develop software that streamlines your operations and grows your business.
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

      {/* Our Software Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span style={{color: '#51AACD'}}>Software Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've developed specialized software solutions for various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* PaperRoute */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/softwarelogos/paperroute_final.png"
                    alt="PaperRoute Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">PaperRoute</h3>
                <p className="text-gray-600 mb-4">Waste Management Software</p>
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
                <div className="mt-6 text-center">
                  <Link
                    href="https://www.paperroute.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Visit Website
                  </Link>
                </div>
              </div>
            </div>

            {/* TicketRush */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/softwarelogos/ticketrush.png"
                    alt="TicketRush Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">TicketRush</h3>
                <p className="text-gray-600 mb-4">Ticket Sales Software</p>
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
                <div className="mt-6 text-center">
                  <Link
                    href="https://ticketrush.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Visit Website
                  </Link>
                </div>
              </div>
            </div>

            {/* TotBook */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/softwarelogos/TotBook_latest.png"
                    alt="TotBook Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">TotBook</h3>
                <p className="text-gray-600 mb-4">Car Seat Booking Software</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 text-center">
                  Specialized booking software for car seat resellers, streamlining appointment scheduling and customer management for this niche market.
                </p>
                <ul className="space-y-2">
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
                <div className="mt-6 text-center">
                  <Link
                    href="https://www.totbook.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Visit Website
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Custom Software <span style={{color: '#51AACD'}}>Development</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create custom software solutions tailored to your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Applications */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Web Applications</h3>
              <p className="text-gray-600 text-center">
                Custom web applications built with modern technologies like React, Node.js, and cloud platforms.
              </p>
            </div>

            {/* Business Process Automation */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Process Automation</h3>
              <p className="text-gray-600 text-center">
                Automate repetitive tasks and streamline your business processes with custom software solutions.
              </p>
            </div>

            {/* Database Design */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Database Design</h3>
              <p className="text-gray-600 text-center">
                Custom database solutions designed to store and manage your business data efficiently.
              </p>
            </div>

            {/* API Development */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">API Development</h3>
              <p className="text-gray-600 text-center">
                Custom APIs to integrate your software with other systems and third-party services.
              </p>
            </div>

            {/* Mobile Apps */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Mobile Applications</h3>
              <p className="text-gray-600 text-center">
                Native and cross-platform mobile applications for iOS and Android devices.
              </p>
            </div>

            {/* Maintenance & Support */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#C4E3EA'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#51AACD'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Maintenance & Support</h3>
              <p className="text-gray-600 text-center">
                Ongoing maintenance, updates, and technical support for your custom software solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Development <span style={{color: '#51AACD'}}>Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, here's how we build your custom software
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto" style={{backgroundColor: '#51AACD'}}>
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery</h3>
              <p className="text-gray-600">
                We analyze your business requirements and understand your goals to create the perfect solution.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto" style={{backgroundColor: '#51AACD'}}>
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600">
                We create detailed specifications, wireframes, and a development roadmap for your project.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto" style={{backgroundColor: '#51AACD'}}>
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development</h3>
              <p className="text-gray-600">
                Our team builds your custom software using modern technologies and best practices.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto" style={{backgroundColor: '#51AACD'}}>
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Deployment</h3>
              <p className="text-gray-600">
                We deploy your software, provide training, and offer ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#C4E3EA'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Build Your <span style={{color: '#51AACD'}}>Custom Software?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you need a specialized business application or want to automate your processes, 
            we can create the perfect software solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookCallButton className="text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 text-lg shadow-lg" style={{backgroundColor: '#51AACD'}}>
              Book Your Free Consultation
            </BookCallButton>
            <Link
              href="/services"
              className="bg-white border-2 px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 text-lg" style={{color: '#51AACD', borderColor: '#51AACD'}}
            >
              View All Services
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No commitment • Free consultation • Custom solutions
          </p>
        </div>
      </section>
    </div>
  );
}
