import Link from "next/link";
import { Metadata } from "next";
import BookCallButton from "../../components/BookCallButton";
import PricingSection from "../../components/PricingSection";
import AboutUsSection from "../../components/AboutUsSection";
import CustomerSuccessSection from "../../components/CustomerSuccessSection";

export const metadata: Metadata = {
  title: "Web Design Dorset | Professional Website Design Services | Saunders Simmons",
  description: "Expert web design services across Dorset. Local website designers creating stunning, mobile-responsive websites for Dorset businesses. From £249 + VAT.",
  keywords: "web design Dorset, website design Dorset, web designers Dorset, website designers Dorset, professional web design services Dorset",
};

export default function WebDesignDorset() {
  return (
    <div className="bg-white">
      {/* Schema Markup for Local Web Design Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web Design Dorset",
            "description": "Expert web design services across Dorset. Local website designers creating stunning, mobile-responsive websites for Dorset businesses.",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://www.saunders-simmons.co.uk",
              "name": "Saunders Simmons Ltd",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "15 Oxford Road, Pen Mill Trading Estate",
                "addressLocality": "Yeovil",
                "addressRegion": "Somerset",
                "postalCode": "BA21 5HR",
                "addressCountry": "GB"
              },
              "telephone": "+44-330-043-6608",
              "email": "hello@saunders-simmons.co.uk",
              "url": "https://www.saunders-simmons.co.uk",
              "priceRange": "££",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "9"
              }
            },
            "areaServed": [
              {
                "@type": "Place",
                "name": "Dorset",
                "containedInPlace": {
                  "@type": "Country",
                  "name": "United Kingdom"
                }
              },
              {
                "@type": "Place", 
                "name": "Dorchester"
              },
              {
                "@type": "Place", 
                "name": "Weymouth"
              },
              {
                "@type": "Place", 
                "name": "Poole"
              },
              {
                "@type": "Place", 
                "name": "Bournemouth"
              }
            ],
            "serviceType": "Web Design",
            "offers": {
              "@type": "Offer",
              "price": "249",
              "priceCurrency": "GBP",
              "description": "Professional website build with ongoing support options"
            }
          })
        }}
      />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{backgroundColor: '#BFE4F1'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Web Design <span className="text-blue-600">Dorset</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional website design services across Dorset. We create stunning, 
              mobile-responsive websites that help local businesses from Weymouth to Dorchester succeed online.
            </p>
            
            {/* Google Rating */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 font-medium">5.0 Google Rating • Serving All of Dorset</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookCallButton className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg">
                Get Your Free Quote
              </BookCallButton>
              <Link 
                href="tel:03300436608"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 text-lg"
              >
                Call: 03300 436608
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Do for <span className="text-blue-600">Dorset Businesses</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web design services tailored to help businesses across Dorset succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Design & Development</h3>
              <p className="text-gray-600 mb-4">
                Custom-built websites designed specifically for Dorset businesses, optimised for performance and local SEO.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Responsive mobile design
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fast loading speeds
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Local Dorset SEO
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Support & Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Keep your Dorset business website running smoothly with our comprehensive support packages.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Regular security updates
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Content updates
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority technical support
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local SEO & Marketing</h3>
              <p className="text-gray-600 mb-4">
                Help your Dorset business get found online with targeted local SEO and digital marketing.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Google My Business optimisation
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Local keyword targeting
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Monthly performance reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Serving <span className="text-blue-600">Dorset Communities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to serve businesses across Dorset with professional web design services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Dorchester</h3>
              <p className="text-sm text-gray-600">Web Design Dorchester</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Weymouth</h3>
              <p className="text-sm text-gray-600">Web Design Weymouth</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Poole</h3>
              <p className="text-sm text-gray-600">Web Design Poole</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Bournemouth</h3>
              <p className="text-sm text-gray-600">Web Design Bournemouth</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Sherborne</h3>
              <p className="text-sm text-gray-600">Web Design Sherborne</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Blandford</h3>
              <p className="text-sm text-gray-600">Web Design Blandford</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Bridport</h3>
              <p className="text-sm text-gray-600">Web Design Bridport</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Swanage</h3>
              <p className="text-sm text-gray-600">Web Design Swanage</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your area? We serve businesses throughout Dorset and surrounding counties.
            </p>
            <BookCallButton className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Discuss Your Project
            </BookCallButton>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection 
        title="Affordable Web Design Packages for Dorset Businesses"
        subtitle="Transparent pricing with no hidden costs. Professional websites from just £249 + VAT."
        showProcessOverview={true}
        ctaText="Ready to Get Started?"
        ctaSubtext="Get your professional website built for just £249 with our affordable web design packages, then choose between our Basic Hosting or Continuous Growth support options."
      />

      {/* About Us Section */}
      <AboutUsSection 
        title="Meet Your Dorset Web Design Team"
        subtitle="Nick & Dan from Saunders Simmons Ltd - your dedicated local web design partners serving businesses across Dorset."
        showVideo={true}
        showCredentials={true}
      />

      {/* Customer Success Stories */}
      <CustomerSuccessSection 
        title="Dorset Client Success Stories"
        subtitle="Genuine testimonials from satisfied Dorset clients who chose Saunders Simmons for their web design needs."
        showVideoTestimonials={true}
        showMoreSuccessStories={true}
      />

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our web design services across Dorset
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you work with businesses throughout Dorset?
              </h3>
              <p className="text-gray-700">
                Yes! We serve businesses across all of Dorset, from Dorchester to Weymouth, Poole to Bournemouth. 
                We can work remotely or meet in person depending on your preference.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long does it take to build a website?
              </h3>
              <p className="text-gray-700">
                Most websites are completed within 2 weeks of receiving all content and requirements. 
                We pride ourselves on quick turnarounds while maintaining high quality standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you provide ongoing support after the website is built?
              </h3>
              <p className="text-gray-700">
                Yes! We offer two ongoing support options: Basic Hosting (£25/month + VAT) for essential maintenance, 
                or Continuous Growth (£250/month + VAT) for comprehensive support, SEO, and marketing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can you help with local SEO for Dorset businesses?
              </h3>
              <p className="text-gray-700">
                Absolutely! We specialise in local SEO for Dorset businesses. Every website includes basic SEO setup, 
                and our Continuous Growth package provides ongoing SEO improvements and monthly reporting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What makes you different from other web design agencies?
              </h3>
              <p className="text-gray-700">
                We understand the Dorset business landscape, work with local companies, and focus on building long-term partnerships. 
                Our transparent pricing, proven results, and 5-star Google rating set us apart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Dorset Business Online?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the 100+ local businesses across Dorset who trust Saunders Simmons for their web design needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookCallButton className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Get Your Free Quote
            </BookCallButton>
            <Link 
              href="tel:03300436608"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call: 03300 436608
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
