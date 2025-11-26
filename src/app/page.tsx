import Link from "next/link";
import Image from "next/image";
import BookCallButton from "../components/BookCallButton";
import PremiumFacebookSlider from "../components/PremiumFacebookSlider";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden hero-gradient">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#51AACD] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#C4E3EA] opacity-5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Content Side */}
            <div className="text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#51AACD]/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
                <span className="text-sm font-semibold text-[#51AACD]">Trusted Digital Partner</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Professional <span className="text-[#51AACD]">Digital Solutions</span> for UK Businesses
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                We're a trusted digital agency specialising in web design, SEO marketing, and custom software development.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <BookCallButton className="text-white px-8 py-4 rounded-xl font-bold text-base tracking-tight hero-cta-primary flex items-center justify-center gap-2.5 group">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Book Free Consultation</span>
                  <svg className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </BookCallButton>
                <Link 
                  href="/services" 
                  className="hero-cta-secondary px-8 py-4 rounded-xl font-bold text-base tracking-tight text-gray-900 flex items-center justify-center gap-2.5 group"
                >
                  <span>View Our Services</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Browser Mockup Side with Trust Indicators */}
            <div className="flex flex-col items-center lg:items-end gap-6">
              {/* Browser Mockup */}
              <div className="relative w-full max-w-lg">
                <div className="browser-mockup">
                  {/* Browser Header */}
                  <div className="browser-header">
                    <div className="flex gap-2">
                      <div className="browser-dot browser-dot-red"></div>
                      <div className="browser-dot browser-dot-yellow"></div>
                      <div className="browser-dot browser-dot-green"></div>
                    </div>
                    <div className="browser-url-bar">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>saunders-simmons.co.uk</span>
                    </div>
                  </div>
                  
                  {/* Browser Content */}
                  <div className="browser-content relative overflow-hidden">
                    {/* Logo Phase */}
                    <div className="absolute inset-0 flex items-center justify-center browser-logo-show">
                      <Image
                        src="/logos/logo.png"
                        alt="Saunders Simmons Ltd Logo"
                        width={200}
                        height={200}
                        className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain"
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 1024px) 160px, 192px"
                        quality={90}
                      />
                    </div>
                    
                    {/* Website Elements Phase */}
                    <div className="browser-website-elements w-full h-full flex flex-col">
                      {/* Header Bar */}
                      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#51AACD] to-[#3E8BA8]"></div>
                          <div className="h-4 w-24 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                          <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                          <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Hero Section */}
                      <div className="px-4 mb-4">
                        <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>
                        <div className="h-4 w-1/2 bg-gray-200 rounded mb-3"></div>
                        <div className="flex gap-2">
                          <div className="h-8 w-24 bg-[#51AACD] rounded"></div>
                          <div className="h-8 w-24 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      
                      {/* Content Blocks */}
                      <div className="px-4 space-y-3 flex-1">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-16 bg-gray-100 rounded"></div>
                          <div className="h-16 bg-gray-100 rounded"></div>
                          <div className="h-16 bg-gray-100 rounded"></div>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-gray-100 to-gray-50 rounded"></div>
                        <div className="flex gap-2">
                          <div className="h-12 flex-1 bg-gray-100 rounded"></div>
                          <div className="h-12 w-12 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Trust Indicators - Moved to right side */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
                {/* Google Rating */}
                <div className="hero-trust-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">5.0</div>
                  <div className="text-xs text-gray-600 font-medium">Google Rating</div>
                </div>
                
                {/* Happy Clients */}
                <div className="hero-trust-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-[#51AACD] mb-1">100's</div>
                  <div className="text-xs text-gray-600 font-medium">Happy Clients</div>
                </div>
                
                {/* Years Experience */}
                <div className="hero-trust-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-[#51AACD] mb-1">4+</div>
                  <div className="text-xs text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
            
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
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#C4E3EA', stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:'#ffffff', stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#C4E3EA', stopOpacity:1}} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="white" />
          <path 
            d="M0,0 C300,60 900,-40 1200,0 L1200,0 L0,0 Z" 
            fill="url(#heroGradient)"
          />
        </svg>
      </div>

      {/* Services Section */}
      <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 lg:mb-20">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
                  <span className="text-sm font-semibold">Our Services</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Comprehensive <span className="text-[#51AACD]">Digital Solutions</span>
                </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              We provide end-to-end digital services to help your business thrive online. From professional web design 
              to advanced SEO strategies and custom software development, we're your trusted digital partner.
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
          
              {/* Call to Action */}
              <div className="text-center">
                <div className="p-10 lg:p-14 rounded-3xl text-white cta-section-gradient">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                    Ready to Transform Your Digital Presence?
                  </h3>
                  <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-[#C4E3EA] font-medium">
                    Book a free consultation with our experts. We'll assess your needs and recommend the perfect solution for your business.
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
                      href="/services" 
                      className="cta-button-secondary px-8 py-4 rounded-xl font-bold text-base tracking-tight text-white flex items-center justify-center gap-2.5 group"
                    >
                      <span>View All Services</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
        </div>
      </section>

      {/* Flowing SVG Transition to Software */}
      <div className="relative -mt-1">
        <svg 
          className="w-full h-16 sm:h-24" 
          viewBox="0 0 1200 80" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,40 Q600,80 1200,40 L1200,80 L0,80 Z" 
            fill="#C4E3EA"
          />
        </svg>
      </div>

      {/* Our Software Products */}
      <section className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#C4E3EA'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
              <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
              <span className="text-sm font-semibold">Our Products</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Our <span className="text-[#51AACD]">Software Products</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              We've developed specialised software solutions for various industries, helping businesses streamline operations and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* PaperRoute */}
            <div className="software-product-card rounded-3xl p-8 lg:p-10 text-center group">
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

            {/* TicketRush */}
            <div className="software-product-card rounded-3xl p-8 lg:p-10 text-center group">
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

            {/* TotBook */}
            <div className="software-product-card rounded-3xl p-8 lg:p-10 text-center group">
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
      </section>

      {/* Layered Wave Transition to About */}
      <div className="relative">
        <svg 
          className="w-full h-20 sm:h-32" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          style={{backgroundColor: '#C4E3EA'}}
        >
          <path 
            d="M0,80 C400,40 800,120 1200,80 L1200,120 L0,120 Z" 
            fill="white"
            opacity="0.7"
          />
          <path 
            d="M0,90 C300,50 900,130 1200,90 L1200,120 L0,120 Z" 
            fill="white"
          />
        </svg>
      </div>

      {/* About Section */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
              <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
              <span className="text-sm font-semibold">Meet the Team</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Meet <span className="text-[#51AACD]">Nick & Dan</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              The founders of Saunders Simmons Ltd, dedicated to helping businesses succeed online through professional websites, SEO, and custom software development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: Video & Mission */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="aspect-video bg-gray-900 relative overflow-hidden rounded-3xl video-container">
                <iframe
                  src="https://www.youtube.com/embed/TZvty_HAWCY?rel=0"
                  title="Meet Nick & Dan - Saunders Simmons Ltd"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg font-medium">
                  Meet Nick & Dan
                </div>
              </div>
              
              <div className="mission-box p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-xl">Our Mission</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  We believe every business deserves professional digital solutions. That's why we focus on building long-term business relationships through comprehensive web development, SEO optimisation, and custom software solutions designed to help your business grow and succeed in the digital world.
                </p>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">Nick Saunders & Dan Simmons</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Together, Nick and Dan bring years of experience in web development, SEO, and software development. 
                    Their passion for helping local businesses thrive online has made Saunders Simmons Ltd 
                    a trusted partner for companies across the South West.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="founder-card p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg">Nick Saunders</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Lead Developer & Co-Founder. Specialises in creating fast, modern websites and custom software solutions.
                    </p>
                  </div>
                  <div className="founder-card p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg">Dan Simmons</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Marketing Lead & Co-Founder. Expert in SEO, digital marketing, and helping businesses grow their online presence.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">5.0</div>
                      <div className="text-xs text-gray-600 font-medium">Google Rating</div>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[#51AACD]">100+</div>
                    <div className="text-xs text-gray-600 font-medium">Happy Clients</div>
                  </div>
                  <div className="w-px h-10 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[#51AACD]">Est. 2020</div>
                    <div className="text-xs text-gray-600 font-medium">Years Experience</div>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <BookCallButton className="text-white px-8 py-4 rounded-xl font-bold text-base tracking-tight hero-cta-primary flex items-center justify-center gap-2.5 group mx-auto">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Book a Free Consultation</span>
                    <svg className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </BookCallButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Divider Section */}
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

      {/* Social Media Feed Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Follow Our <span style={{color: '#51AACD'}}>Latest Updates</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Follow us for the latest updates, web design tips, and client success stories. 
              <strong> Your business could be our next success story!</strong>
            </p>
          </div>
          
          <PremiumFacebookSlider />
          
        </div>
      </section>

      {/* Diagonal Flow Transition to CTA */}
      <div className="relative">
        <svg 
          className="w-full h-24 sm:h-40" 
          viewBox="0 0 1200 160" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 L1200,80 L1200,160 L0,160 Z" 
            fill="#C4E3EA"
          />
          <path 
            d="M0,20 Q600,60 1200,100 L1200,160 L0,160 Z" 
            fill="#C4E3EA"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 cta-section relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
            <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
            <span className="text-sm font-semibold">Get Started</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Ready to Start Your <span className="text-[#51AACD]">Digital Journey?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Join the growing community of businesses we partner with for long-term success. 
            Whether you need a website, SEO optimisation, or custom software, we're here to help.
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
              <span className="text-gray-700 font-semibold">Quick turnaround</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}