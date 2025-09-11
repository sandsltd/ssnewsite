import Link from "next/link";
import { Metadata } from "next";
import BookCallButton from "../../components/BookCallButton";

export const metadata: Metadata = {
  title: "Web Design Somerset | Professional Website Design Services | Saunders Simmons",
  description: "Expert web design services across Somerset. Local website designers creating stunning, mobile-responsive websites for Somerset businesses. From £249 + VAT.",
  keywords: "web design Somerset, website design Somerset, web designers Somerset, website designers Somerset, professional web design services Somerset",
};

export default function WebDesignSomerset() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{backgroundColor: '#BFE4F1'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Web Design <span className="text-blue-600">Somerset</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional website design services across Somerset. We create stunning, 
              mobile-responsive websites that help local businesses from Yeovil to Taunton succeed online.
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
              <span className="text-gray-600 font-medium">5.0 Google Rating • Serving All of Somerset</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Web Design Services Across Somerset
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From Yeovil to Taunton, Bridgwater to Frome - we create custom websites that help Somerset businesses thrive online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Website Design</h3>
              <p className="text-gray-600">
                Bespoke website design tailored to your Somerset business needs and local market.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Somerset SEO</h3>
              <p className="text-gray-600">
                Optimized for local searches across Somerset towns and villages to help customers find you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile-First Design</h3>
              <p className="text-gray-600">
                Perfect on all devices - ensuring your Somerset customers have a great experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Somerset Areas We Serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Web Design Services Across Somerset
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide professional web design services to businesses throughout Somerset
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Yeovil', 'Taunton', 'Bridgwater', 'Frome',
              'Glastonbury', 'Wells', 'Burnham-on-Sea', 'Chard',
              'Crewkerne', 'Ilminster', 'Minehead', 'Weston-super-Mare',
              'Street', 'Shepton Mallet', 'Cheddar', 'Nailsea'
            ].map((town) => (
              <div key={town} className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="font-semibold text-gray-900">{town}</h3>
                <p className="text-sm text-gray-600">Web Design Services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Your Local <span className="text-blue-600">Somerset Web Design Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nick & Dan from Saunders Simmons Ltd - your dedicated local web design partners serving all of Somerset.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Section */}
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-gray-900 relative overflow-hidden rounded-2xl shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/TZvty_HAWCY?rel=0"
                  title="Meet Nick & Dan - Your Local Somerset Web Design Team"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  Meet Your Local Team
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nick Saunders & Dan Simmons</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Based in Somerset, Nick and Dan understand the local business landscape across the county. 
                    Their passion for helping Somerset businesses thrive online has made Saunders Simmons Ltd 
                    a trusted partner for companies from Taunton to Bridgwater, Frome to Burnham-on-Sea.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Nick Saunders</h4>
                    <p className="text-gray-600 text-sm">
                      Lead Developer & Co-Founder. Specialises in creating fast, modern websites that help Somerset businesses convert visitors into customers.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Dan Simmons</h4>
                    <p className="text-gray-600 text-sm">
                      Marketing Director & Co-Founder. Expert in local SEO and helping Somerset businesses grow their online presence across the county.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Local Somerset Expertise</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Working with a local Somerset web design team means understanding your market, from Yeovil's business district to Taunton's growing economy, 
                    and building lasting partnerships that help your business grow within the Somerset community.
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
                  <div className="text-gray-600">Somerset Based</div>
                </div>
                
                <div className="text-center">
                  <BookCallButton className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                    Meet Your Local Team
                  </BookCallButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Affordable Web Design Packages for Somerset Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden costs. Professional websites from just £249.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Website Build */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Website</h3>
                <p className="text-gray-600 mb-4">Perfect for Somerset businesses getting online</p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-sm text-gray-500 mr-2">One-time cost</span>
                  <span className="text-4xl font-bold text-blue-600">£249</span>
                  <span className="text-lg text-blue-600 ml-1">+ VAT</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>5 professionally designed pages</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Mobile-responsive design</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>SEO optimisation for Somerset searches</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Contact forms & lead capture</span>
                </li>
              </ul>
            </div>

            {/* Basic Hosting */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-100 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold">Best Value</span>
              </div>
              
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Hosting</h3>
                <p className="text-gray-600 mb-4">Keep your Somerset business online</p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-sm text-gray-500 mr-2">Monthly</span>
                  <span className="text-4xl font-bold text-purple-600">£25</span>
                  <span className="text-lg text-purple-600 ml-1">/month + VAT</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Reliable web hosting</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>SSL certificate maintenance</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>99.9% uptime guarantee</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Cancel anytime</span>
                </li>
              </ul>
            </div>

            {/* Continuous Growth */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-xs font-semibold">Best for Growth</span>
              </div>
              
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Continuous Growth</h3>
                <p className="text-gray-600 mb-4">Complete marketing for Somerset businesses</p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-sm text-gray-500 mr-2">Monthly</span>
                  <span className="text-4xl font-bold text-green-600">£250</span>
                  <span className="text-lg text-green-600 ml-1">/month + VAT</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Everything in Basic Hosting</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Local SEO for Somerset searches</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited content updates</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Priority IT support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Client <span className="text-blue-600">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Genuine testimonials from satisfied clients who chose Saunders Simmons for their web design needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 - Emily S. */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Forest School</h3>
                  <p className="text-blue-100">Creative & Thoughtful Design</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">"I'm so thrilled with the website!"</h4>
                <p className="text-gray-600 text-sm mb-4">
                  "I'm so thrilled with the website! Nick and Dan have been approachable, flexible, creative and thoughtful throughout. I cannot recommend them more highly!"
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Emily S. - Forest School
                </div>
              </div>
            </div>

            {/* Case Study 2 - Tracy Y. */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Cafe Owner</h3>
                  <p className="text-green-100">Simple & Stress-Free</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">"Made the whole process simple and stress-free"</h4>
                <p className="text-gray-600 text-sm mb-4">
                  "From Day 1 communication was so easy. Being a 'technophobe', they explained everything clearly and made the whole process simple and stress-free."
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Tracy Y. - Cafe Owner
                </div>
              </div>
            </div>

            {/* Case Study 3 - Jeannette H. */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Animal Rescue Centre</h3>
                  <p className="text-purple-100">Fast & Professional</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">"It was like magic"</h4>
                <p className="text-gray-600 text-sm mb-4">
                  "In just a few days I had a fantastic, well written and user friendly website. It was like magic. Dan and Nick make it all look so easy."
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Jeannette H. - Animal Rescue Centre
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <BookCallButton className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Start Your Success Story
            </BookCallButton>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Somerset Businesses <span className="text-blue-600">Trust Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Established local web design team with proven results and community commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trust Signal 1 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">5.0 Google Rating</h3>
              <p className="text-gray-600 text-sm">100+ verified reviews from satisfied clients</p>
            </div>

            {/* Trust Signal 2 */}
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Local Somerset Team</h3>
              <p className="text-gray-600 text-sm">Based locally, supporting the community</p>
            </div>

            {/* Trust Signal 3 */}
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Established 2020</h3>
              <p className="text-gray-600 text-sm">Years of experience serving Somerset businesses</p>
            </div>

            {/* Trust Signal 4 */}
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">100+ Projects</h3>
              <p className="text-gray-600 text-sm">Successful websites delivered across Somerset</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Web Design Somerset - Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions from Somerset businesses about our web design services
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Do you provide web design services across all of Somerset?
              </h3>
              <p className="text-gray-600">
                Yes! We provide professional web design services to businesses throughout Somerset, 
                including Yeovil, Taunton, Bridgwater, Frome, Wells, Glastonbury, and all surrounding areas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How much does web design cost for Somerset businesses?
              </h3>
              <p className="text-gray-600">
                Our professional website design starts from just £249 + VAT for a 5-page website. 
                This includes mobile-responsive design, SEO optimisation, and everything your Somerset 
                business needs to succeed online.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Do you understand the Somerset market?
              </h3>
              <p className="text-gray-600">
                Absolutely! We're based in Somerset and have worked with businesses across the county. 
                We understand the local market, customer behaviour, and what works for Somerset businesses online.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Can you help with SEO for Somerset businesses?
              </h3>
              <p className="text-gray-600">
                Yes! All our websites include SEO optimisation for Somerset searches. Our Continuous Growth 
                package includes comprehensive local SEO to help your business rank higher across Somerset.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Do you offer ongoing support after the website launch?
              </h3>
              <p className="text-gray-600">
                Yes! We offer Basic Hosting from £25/month or our Continuous Growth package at £250/month, 
                which includes hosting, SEO, unlimited updates, and priority support for Somerset businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Your Somerset Business Online?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of successful Somerset businesses with professional websites. 
            From Yeovil to Taunton, we help local businesses grow online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookCallButton className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg">
              Get Your Free Quote
            </BookCallButton>
            <Link 
              href="tel:03300436608"
              className="bg-blue-500 text-white border-2 border-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg"
            >
              Call Now: 07746 407024
            </Link>
          </div>

          <div className="mt-8 text-blue-100">
            <p className="text-sm">
              Serving All of Somerset • 5.0 Google Rating • No Long-term Contracts
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
