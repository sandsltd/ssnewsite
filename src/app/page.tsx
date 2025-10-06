import Link from "next/link";
import Image from "next/image";
import BookCallButton from "../components/BookCallButton";
import Script from "next/script";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Facebook SDK Script */}
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v23.0"
        strategy="afterInteractive"
      />
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{background: 'linear-gradient(135deg, #C4E3EA 0%, #ffffff 50%, #C4E3EA 100%)'}}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2351AACD%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Content Side */}
            <div className="text-center lg:text-left">
              
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Professional <span style={{color: '#51AACD'}}>Digital Solutions</span> for UK Businesses
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
                We're a trusted digital agency specialising in web design, SEO marketing, and custom software development.
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {/* Google Rating */}
                <div className="flex flex-col items-center text-center p-4 rounded-lg" style={{backgroundColor: '#C4E3EA'}}>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-lg font-bold text-gray-900">5.0</div>
                  <div className="text-sm text-gray-600">Google Rating</div>
                </div>
                
                {/* Happy Clients */}
                <div className="flex flex-col items-center text-center p-4 rounded-lg" style={{backgroundColor: '#C4E3EA'}}>
                  <div className="text-2xl font-bold text-gray-900 mb-1">100's</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                
                {/* Years Experience */}
                <div className="flex flex-col items-center text-center p-4 rounded-lg" style={{backgroundColor: '#C4E3EA'}}>
                  <div className="text-2xl font-bold text-gray-900 mb-1">4+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <BookCallButton className="text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:opacity-90 text-center bg-white border-2 border-gray-900 hover:bg-gray-50">
                  Book Free Consultation
                </BookCallButton>
                <Link 
                  href="/services" 
                  className="bg-white border-2 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center text-gray-900 border-gray-900 hover:bg-gray-50"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            
            {/* Logo Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-white rounded-full p-8 shadow-2xl border border-gray-100">
                  <Image
                    src="/logos/logo.png"
                    alt="Saunders Simmons Ltd Logo"
                    width={400}
                    height={400}
                    className="w-80 h-80 object-contain"
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 320px, 400px"
                    quality={90}
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center px-4 py-2 rounded-full border mb-6" style={{backgroundColor: '#C4E3EA', borderColor: '#51AACD'}}>
                  <span className="text-sm font-medium" style={{color: '#51AACD'}}>Our Services</span>
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-8">
                  Comprehensive <span style={{color: '#51AACD'}}>Digital Solutions</span>
                </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide end-to-end digital services to help your business thrive online. From professional web design 
              to advanced SEO strategies and custom software development, we're your trusted digital partner.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Web Design Service */}
                <Link href="/services/web-design" className="group bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:border-blue-300">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(135deg, #51AACD 0%, #4A9BC4 100%)'}}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Web Design</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Bespoke websites designed to convert visitors into customers. Mobile-responsive, fast-loading, and optimised for search engines.
                </p>
              
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mobile-responsive design
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SEO optimised
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Contact forms & lead capture
                  </div>
                </div>
                    <div className="text-center">
                      <span className="text-3xl font-bold" style={{color: '#51AACD'}}>From £795</span>
                      <span className="text-lg text-gray-600 ml-1">ex VAT</span>
                    </div>
                    <div className="mt-6 font-semibold group-hover:opacity-80 flex items-center justify-center transition-all duration-300" style={{color: '#51AACD'}}>
                      Learn More <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
              </div>
            </Link>

            {/* SEO Marketing Service */}
            <Link href="/services/seo" className="group bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Marketing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Expert search engine optimisation to boost your online visibility and attract more customers to your business.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Local SEO optimisation
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Google Business Profile management
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Monthly performance reports
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-green-600">From £250</span>
                  <span className="text-lg text-gray-600 ml-1">/month</span>
                </div>
                <div className="mt-6 text-green-600 font-semibold group-hover:text-green-700 flex items-center justify-center">
                  Learn More <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>

            {/* Software Development Service */}
            <Link href="/services/software" className="group bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-orange-200 transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Software Development</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Bespoke software solutions tailored to your business needs. Streamline operations and drive innovation with custom applications.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom web applications
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Business process automation
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Ongoing support & maintenance
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-orange-600">Custom</span>
                  <span className="text-lg text-gray-600 ml-1">Pricing</span>
                </div>
                <div className="mt-6 text-orange-600 font-semibold group-hover:text-orange-700 flex items-center justify-center">
                  Learn More <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
          </div>
          
              {/* Call to Action */}
              <div className="text-center">
                <div className="p-12 rounded-3xl text-white shadow-2xl" style={{background: 'linear-gradient(135deg, #51AACD 0%, #4A9BC4 100%)'}}>
                  <h3 className="text-3xl font-bold mb-4">
                    Ready to Transform Your Digital Presence?
                  </h3>
                  <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: '#C4E3EA'}}>
                    Book a free consultation with our experts. We'll assess your needs and recommend the perfect solution for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <BookCallButton className="bg-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-gray-900">
                      Book Free Consultation
                    </BookCallButton>
                    <Link 
                      href="/services" 
                      className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300"
                      style={{'--hover-text-color': '#51AACD'} as React.CSSProperties}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
        </div>
      </section>

      {/* Our Software Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#C4E3EA'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span style={{color: '#51AACD'}}>Software Products</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've developed specialised software solutions for various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PaperRoute */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/softwarelogos/paperroute_final.png"
                  alt="PaperRoute Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">PaperRoute</h3>
              <p className="text-gray-600 text-sm mb-4">Waste Management Software</p>
              <Link
                href="https://www.paperroute.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold hover:opacity-80 transition-all duration-200"
                style={{color: '#51AACD'}}
              >
                Visit Website →
              </Link>
            </div>

            {/* TicketRush */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/softwarelogos/ticketrush.png"
                  alt="TicketRush Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">TicketRush</h3>
              <p className="text-gray-600 text-sm mb-4">Event Ticketing Platform</p>
              <Link
                href="https://ticketrush.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold hover:opacity-80 transition-all duration-200"
                style={{color: '#51AACD'}}
              >
                Visit Website →
              </Link>
            </div>

            {/* TotBook */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/softwarelogos/TotBook_latest.png"
                  alt="TotBook Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">TotBook</h3>
              <p className="text-gray-600 text-sm mb-4">Car Seat Booking Software</p>
              <Link
                href="https://www.totbook.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold hover:opacity-80 transition-all duration-200"
                style={{color: '#51AACD'}}
              >
                Visit Website →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet <span style={{color: '#51AACD'}}>Nick & Dan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The founders of Saunders Simmons Ltd, dedicated to helping businesses succeed online through professional websites, SEO, and custom software development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Section */}
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-gray-900 relative overflow-hidden rounded-2xl shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/TZvty_HAWCY?rel=0"
                  title="Meet Nick & Dan - Saunders Simmons Ltd"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  style={{ minHeight: '200px' }}
                ></iframe>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  Meet Nick & Dan
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nick Saunders & Dan Simmons</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Together, Nick and Dan bring years of experience in web development, SEO, and software development. 
                    Their passion for helping local businesses thrive online has made Saunders Simmons Ltd 
                    a trusted partner for companies across the South West.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl border-l-4" style={{backgroundColor: '#C4E3EA', borderLeftColor: '#51AACD'}}>
                    <h4 className="font-semibold text-gray-900 mb-2">Nick Saunders</h4>
                    <p className="text-gray-600 text-sm">
                      Lead Developer & Co-Founder. Specialises in creating fast, modern websites and custom software solutions.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border-l-4" style={{backgroundColor: '#C4E3EA', borderLeftColor: '#51AACD'}}>
                    <h4 className="font-semibold text-gray-900 mb-2">Dan Simmons</h4>
                    <p className="text-gray-600 text-sm">
                      Marketing Director & Co-Founder. Expert in SEO, digital marketing, and helping businesses grow their online presence.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl" style={{backgroundColor: '#C4E3EA'}}>
                  <h4 className="font-semibold text-gray-900 mb-3">Our Mission</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We believe every business deserves professional digital solutions. That's why we focus on building long-term business relationships through comprehensive web development, SEO optimisation, and custom software solutions designed to help your business grow and succeed in the digital world.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-900 font-semibold">5.0 Google Rating</span>
                  </div>
                  <div className="text-gray-500">•</div>
                  <div className="text-gray-600">100+ Happy Clients</div>
                  <div className="text-gray-500">•</div>
                  <div className="text-gray-600">Est. 2020</div>
                </div>
                
                <div className="text-center">
                  <BookCallButton className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200" style={{backgroundColor: '#51AACD'}}>
                    Book a Call
                  </BookCallButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Feed Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Follow Our <span style={{color: '#51AACD'}}>Latest Updates</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay connected with our latest news, insights, and digital marketing tips
            </p>
          </div>
          
          <div className="flex justify-center">
            <div 
              className="fb-page"
              data-href="https://www.facebook.com/profile.php?id=61560266678495"
              data-tabs="timeline"
              data-width="500"
              data-height="650"
              data-small-header="false"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote 
                cite="https://www.facebook.com/profile.php?id=61560266678495"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/profile.php?id=61560266678495">
                  Facebook Page
                </a>
              </blockquote>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=61560266678495"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Follow Us on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#C4E3EA'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your <span style={{color: '#51AACD'}}>Digital Journey?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the growing community of businesses we partner with for long-term success. 
            Whether you need a website, SEO optimisation, or custom software, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookCallButton className="text-gray-900 px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 text-lg shadow-lg bg-white border-2 border-gray-900 hover:bg-gray-50">
              Book Your Free Consultation
            </BookCallButton>
            <Link
              href="/services"
              className="bg-white border-2 px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 text-lg"
              style={{color: '#51AACD', borderColor: '#51AACD'}}
            >
              View All Services
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No commitment • Free consultation • Quick turnaround
          </p>
        </div>
      </section>
    </div>
  );
}