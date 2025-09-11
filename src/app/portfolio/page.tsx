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

      {/* Featured Customer Success Stories */}
      <div id="success-stories">
        <CustomerSuccessSection 
          title="Featured Client Success Stories"
          subtitle="Real results from real businesses. See how our web design and digital marketing solutions have transformed companies across Somerset and Dorset."
          showVideoTestimonials={true}
          showMoreSuccessStories={true}
        />
      </div>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More Portfolio Content <span className="text-blue-600">Coming Soon</span>
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
