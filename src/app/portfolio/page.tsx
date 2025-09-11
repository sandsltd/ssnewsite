import { Metadata } from 'next'
import Link from 'next/link'
import CustomerSuccessSection from '@/components/CustomerSuccessSection'
import BookCallButton from '@/components/BookCallButton'

export const metadata: Metadata = {
  title: 'Portfolio | Our Work | Saunders Simmons Ltd',
  description: 'View our portfolio of successful web design projects across Somerset and Dorset. Real client testimonials and case studies from businesses we\'ve helped grow online.',
  keywords: [
    'web design portfolio',
    'client work examples',
    'Somerset web design case studies',
    'Dorset website examples',
    'Yeovil web design portfolio',
    'customer testimonials',
    'website redesign before after',
    'business growth case studies'
  ].join(', '),
}

export default function Portfolio() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across Somerset and Dorset transform their online presence 
            and achieve remarkable growth through professional web design and digital marketing.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">5.0</div>
              <div className="text-gray-600">Google Rating</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookCallButton className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg">
              Start Your Project
            </BookCallButton>
            <Link 
              href="#success-stories"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>


      {/* Featured Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured <span className="text-blue-600">Case Studies</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real projects, real results. See how we've transformed businesses across Somerset and Dorset.
            </p>
          </div>

          {/* BSR Decorating Case Study */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative bg-gray-100 p-4 flex items-center justify-center">
                <img 
                  src="/portfolio/bsrdecorating.png" 
                  alt="BSR Decorating Website Design"
                  className="w-full h-auto object-contain max-w-full"
                />
                <div className="absolute top-8 left-8">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Live Project
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    BSR Decorating
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">Professional Decorating Services</p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A modern, professional website for a leading decorating company, designed to showcase 
                    their expertise and attract new customers across Somerset and the surrounding areas.
                  </p>
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Modern</div>
                    <div className="text-sm text-gray-600">Design</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">Mobile</div>
                    <div className="text-sm text-gray-600">Optimised</div>
                  </div>
                </div>

                {/* Services Provided */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Services Provided:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Custom Website Design
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Mobile Responsive Development
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      SEO Optimisation
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Professional Hosting
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.bsrdecorating.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                  >
                    Visit Website
                  </a>
                  <BookCallButton className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                    Start Your Project
                  </BookCallButton>
                </div>
              </div>
            </div>
          </div>

          {/* Diamond Vision Cleaning Case Study */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    Diamond Vision Cleaning
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">Professional Exterior Cleaning Services</p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A comprehensive website for a leading exterior cleaning company serving Yeovil and surrounding areas. 
                    Features advanced booking systems, before/after galleries, and comprehensive service showcases.
                  </p>
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600 mb-1">25+</div>
                    <div className="text-xs text-gray-600">Service Areas</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-600 mb-1">8</div>
                    <div className="text-xs text-gray-600">Services</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-xl font-bold text-orange-600 mb-1">Pro</div>
                    <div className="text-xs text-gray-600">Features</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Before & After Image Gallery
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Free Quote System
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Customer Testimonials
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Service Area Coverage Map
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.diamondvisioncleaning.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                  >
                    Visit Website
                  </a>
                  <BookCallButton className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                    Start Your Project
                  </BookCallButton>
                </div>
              </div>
              
              {/* Image Section */}
              <div className="relative bg-gray-100 p-4 flex items-center justify-center order-1 lg:order-2">
                <img 
                  src="/portfolio/diamondvisionexteriorcleaning.png" 
                  alt="Diamond Vision Cleaning Website Design"
                  className="w-full h-auto object-contain max-w-full"
                />
                <div className="absolute top-8 right-8">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Live Project
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lotus Beauty Lounge Case Study */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative bg-gray-100 p-4 flex items-center justify-center">
                <img 
                  src="/portfolio/lotusbeautylounge.png" 
                  alt="Lotus Beauty Lounge Website Design"
                  className="w-full h-auto object-contain max-w-full"
                />
                <div className="absolute top-8 left-8">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Live Project
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    Lotus Beauty Lounge
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">Premium Beauty & Wellness Services</p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    An elegant and sophisticated website for a premium beauty salon, designed to showcase luxury 
                    treatments and create an online booking experience that matches their high-end service quality.
                  </p>
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-2xl font-bold text-pink-600 mb-1">Elegant</div>
                    <div className="text-sm text-gray-600">Design</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Luxury</div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                </div>

                {/* Services Provided */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Services Provided:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Luxury Website Design
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Online Booking System
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Service Showcase
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Mobile Optimisation
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.lotusbeautylounge.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                  >
                    Visit Website
                  </a>
                  <BookCallButton className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                    Start Your Project
                  </BookCallButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories Break */}
      <div id="success-stories">
        <CustomerSuccessSection 
          title="Client Success Stories & Testimonials"
          subtitle="Real results from real businesses. Hear directly from our clients about how our web design and digital marketing solutions have transformed their companies."
          showVideoTestimonials={true}
          showMoreSuccessStories={false}
        />
      </div>

      {/* More Portfolio Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              More <span className="text-blue-600">Portfolio Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Continuing our showcase of successful projects across diverse industries and business types.
            </p>
          </div>

          {/* SK Taxi Case Study */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    SK Taxi
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">Professional Taxi & Transport Services</p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A modern, user-friendly website for a reliable taxi service, designed to make booking quick and easy 
                    while showcasing their professional transport solutions across Somerset and surrounding areas.
                  </p>
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="text-xl font-bold text-yellow-600 mb-1">24/7</div>
                    <div className="text-xs text-gray-600">Service</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600 mb-1">Easy</div>
                    <div className="text-xs text-gray-600">Booking</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-600 mb-1">Local</div>
                    <div className="text-xs text-gray-600">Coverage</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Quick Booking System
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Service Area Coverage
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Contact Integration
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Mobile-First Design
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.sktaxi.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                  >
                    Visit Website
                  </a>
                  <BookCallButton className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                    Start Your Project
                  </BookCallButton>
                </div>
              </div>
              
              {/* Image Section */}
              <div className="relative bg-gray-100 p-4 flex items-center justify-center order-1 lg:order-2">
                <img 
                  src="/portfolio/sktaxis.png" 
                  alt="SK Taxi Website Design"
                  className="w-full h-auto object-contain max-w-full"
                />
                <div className="absolute top-8 right-8">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Live Project
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chris Letts Plumbing Case Study */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative bg-gray-100 p-4 flex items-center justify-center">
                <img 
                  src="/portfolio/chrislettsplumbing.png" 
                  alt="Chris Letts Plumbing Website Design"
                  className="w-full h-auto object-contain max-w-full"
                />
                <div className="absolute top-8 left-8">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Live Project
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    Chris Letts Plumbing
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">Professional Plumbing & Heating Services</p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A professional website for an experienced plumber, designed to build trust and make it easy for 
                    customers to find reliable plumbing services across Somerset and surrounding areas.
                  </p>
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Trusted</div>
                    <div className="text-sm text-gray-600">Local Expert</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-1">Emergency</div>
                    <div className="text-sm text-gray-600">Call-outs</div>
                  </div>
                </div>

                {/* Services Provided */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Services Provided:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Professional Website Design
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Service Showcase
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Emergency Contact System
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Local SEO Optimisation
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.chrislettsplumbing.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                  >
                    Visit Website
                  </a>
                  <BookCallButton className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                    Start Your Project
                  </BookCallButton>
                </div>
              </div>
            </div>
          </div>

          {/* Bickerstaff Solutions Case Study */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    Bickerstaff Solutions
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">Professional Business Solutions</p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A sophisticated corporate website designed to showcase professional business solutions and 
                    consulting services, built to establish credibility and attract high-value clients.
                  </p>
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="text-center p-3 bg-indigo-50 rounded-lg">
                    <div className="text-xl font-bold text-indigo-600 mb-1">Pro</div>
                    <div className="text-xs text-gray-600">Corporate</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-600 mb-1">Expert</div>
                    <div className="text-xs text-gray-600">Solutions</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600 mb-1">B2B</div>
                    <div className="text-xs text-gray-600">Focus</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Corporate Website Design
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Professional Credibility
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Service Portfolio
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Lead Generation Forms
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.bickerstaffsolutions.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                  >
                    Visit Website
                  </a>
                  <BookCallButton className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                    Start Your Project
                  </BookCallButton>
                </div>
              </div>
              
              {/* Image Section */}
              <div className="relative bg-gray-100 p-4 flex items-center justify-center order-1 lg:order-2">
                <img 
                  src="/portfolio/bickerstaffsolutions.png" 
                  alt="Bickerstaff Solutions Website Design"
                  className="w-full h-auto object-contain max-w-full"
                />
                <div className="absolute top-8 right-8">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Live Project
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* More Success Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              More <span className="text-blue-600">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Additional client testimonials and success stories from businesses we've helped transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Success Story 1 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The website has completely transformed our online presence. We're now ranking on page 1 of Google for our main keywords and bookings have doubled."
              </p>
              <div className="font-semibold text-gray-900">Rachel Green</div>
              <div className="text-sm text-gray-600">Fitness Studio Owner</div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Amazing ROI on our website investment. Within 3 months we'd generated enough new business to pay for the entire project twice over."
              </p>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-600">Accounting Firm</div>
            </div>

            {/* Success Story 3 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Professional service from start to finish. The team understood our needs perfectly and delivered a website that truly represents our brand."
              </p>
              <div className="font-semibold text-gray-900">Sophie Turner</div>
              <div className="text-sm text-gray-600">Interior Designer</div>
            </div>

            {/* Success Story 4 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Our online sales have increased by 250% since launching the new website. The mobile experience is fantastic and customers love it."
              </p>
              <div className="font-semibold text-gray-900">Tom Richards</div>
              <div className="text-sm text-gray-600">E-commerce Business</div>
            </div>

            {/* Success Story 5 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Excellent communication throughout the project. They kept us informed at every stage and delivered exactly what we asked for, on time and on budget."
              </p>
              <div className="font-semibold text-gray-900">Amanda Foster</div>
              <div className="text-sm text-gray-600">Property Management</div>
            </div>

            {/* Success Story 6 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The website perfectly captures our company culture and values. We've received so many compliments from clients and partners."
              </p>
              <div className="font-semibold text-gray-900">David Martinez</div>
              <div className="text-sm text-gray-600">Construction Company</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross Cut Shredding Case Study */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional <span className="text-blue-600">Portfolio Project</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Another successful project showcasing our expertise across different business sectors.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative bg-gray-100 p-4 flex items-center justify-center">
                <img 
                  src="/portfolio/crosscutshreddingltd.png" 
                  alt="Cross Cut Shredding Ltd Website Design"
                  className="w-full h-auto object-contain max-w-full"
                />
                <div className="absolute top-8 left-8">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Live Project
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    Cross Cut Shredding Ltd
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">Professional Document Shredding Services</p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A secure and professional website for a leading document shredding company, designed to build trust 
                    and showcase their comprehensive data destruction and confidential waste management services.
                  </p>
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-xl font-bold text-red-600 mb-1">Secure</div>
                    <div className="text-xs text-gray-600">Data Destruction</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600 mb-1">Trust</div>
                    <div className="text-xs text-gray-600">Building</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-600 mb-1">GDPR</div>
                    <div className="text-xs text-gray-600">Compliant</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Professional Website Design
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Security & Trust Focus
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Service Area Coverage
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      GDPR Compliance Focus
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.crosscutshredding.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                  >
                    Visit Website
                  </a>
                  <BookCallButton className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                    Start Your Project
                  </BookCallButton>
                </div>
              </div>
            </div>
          </div>

          {/* Lodge House B&B Somerset Case Study */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    Lodge House B&B Somerset
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">Luxury Bed & Breakfast Accommodation</p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    An elegant and welcoming website for a premium bed & breakfast in Somerset, designed to showcase 
                    luxury accommodations and attract guests seeking a peaceful countryside retreat.
                  </p>
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="text-center p-3 bg-amber-50 rounded-lg">
                    <div className="text-xl font-bold text-amber-600 mb-1">Luxury</div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-600 mb-1">Booking</div>
                    <div className="text-xs text-gray-600">System</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600 mb-1">Local</div>
                    <div className="text-xs text-gray-600">Tourism</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Luxury Hospitality Design
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Room Showcase Gallery
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Online Booking Integration
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Local Area Information
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.lodgehousebandbsomerset.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                  >
                    Visit Website
                  </a>
                  <BookCallButton className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                    Start Your Project
                  </BookCallButton>
                </div>
              </div>
              
              {/* Image Section */}
              <div className="relative bg-gray-100 p-4 flex items-center justify-center order-1 lg:order-2">
                <img 
                  src="/portfolio/lodgehouseb&b.png" 
                  alt="Lodge House B&B Somerset Website Design"
                  className="w-full h-auto object-contain max-w-full"
                />
                <div className="absolute top-8 right-8">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Live Project
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More Case Studies <span className="text-blue-600">Coming Soon</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We're constantly working on exciting new projects and gathering amazing results for our clients. 
            Check back soon for more detailed case studies, before & after showcases, and client stories.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Coming Soon Item 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Detailed Case Studies</h3>
              <p className="text-gray-600">
                In-depth analysis of our most successful projects, including challenges, solutions, and measurable results.
              </p>
            </div>

            {/* Coming Soon Item 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Before & After Showcases</h3>
              <p className="text-gray-600">
                Visual transformations showing the dramatic improvements we've made to client websites and their impact.
              </p>
            </div>

            {/* Coming Soon Item 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ROI & Performance Data</h3>
              <p className="text-gray-600">
                Real metrics and performance improvements our clients have achieved, including traffic, conversions, and revenue growth.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-gray-600 mb-6">
              Want to be featured in our next case study?
            </p>
            <BookCallButton className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
              Start Your Success Story
            </BookCallButton>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xl font-bold text-gray-900 ml-2">5.0</span>
              <span className="text-gray-600">• 9 Google Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Outstanding service from start to finish. Our new website has transformed our business and we're getting more enquiries than ever before."
              </p>
              <div className="font-semibold text-gray-900">Sarah Williams</div>
              <div className="text-sm text-gray-600">Local Business Owner</div>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Professional, reliable, and excellent value for money. They understood exactly what we needed and delivered beyond our expectations."
              </p>
              <div className="font-semibold text-gray-900">Mark Thompson</div>
              <div className="text-sm text-gray-600">Restaurant Owner</div>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The team at Saunders Simmons are fantastic. They made the whole process easy and our website looks amazing. Highly recommended!"
              </p>
              <div className="font-semibold text-gray-900">Emma Davis</div>
              <div className="text-sm text-gray-600">Boutique Owner</div>
            </div>

            {/* Review 4 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Incredible attention to detail and excellent communication throughout. Our website perfectly represents our brand and has boosted our credibility."
              </p>
              <div className="font-semibold text-gray-900">James Clarke</div>
              <div className="text-sm text-gray-600">Consultant</div>
            </div>

            {/* Review 5 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Fast, efficient, and professional service. They delivered exactly what they promised and on time. Will definitely use them again."
              </p>
              <div className="font-semibold text-gray-900">Lisa Brown</div>
              <div className="text-sm text-gray-600">Service Provider</div>
            </div>

            {/* Review 6 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Exceptional work and great value. They took our vision and made it reality. Our customers love the new website and it's so easy to use."
              </p>
              <div className="font-semibold text-gray-900">David Wilson</div>
              <div className="text-sm text-gray-600">Retail Business</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="https://share.google/wcU0M8ghl2JDHbQh3" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              View All Google Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Portfolio?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create your success story. From website design to digital marketing, 
            we'll help your business achieve remarkable growth online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookCallButton className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Book Your Free Consultation
            </BookCallButton>
            <Link 
              href="/services"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
