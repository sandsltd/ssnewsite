import { Metadata } from 'next'
import Link from 'next/link'
import BookCallButton from '@/components/BookCallButton'
import PricingSection from '@/components/PricingSection'
import AboutUsSection from '@/components/AboutUsSection'

export const metadata: Metadata = {
  title: 'WordPress Web Design Yeovil | Saunders Simmons Ltd',
  description: 'Professional WordPress web design and support in Yeovil. We can maintain your existing WordPress site or rebuild it with a new, custom-coded website.',
  keywords: [
    'WordPress web design Yeovil',
    'WordPress support Yeovil',
    'WordPress maintenance Somerset',
    'WordPress rebuild Yeovil',
    'custom WordPress Yeovil',
    'WordPress hosting Yeovil',
    'WordPress fixes Somerset',
    'WordPress updates Yeovil'
  ],
  openGraph: {
    title: 'WordPress Web Design Yeovil | Saunders Simmons Ltd',
    description: 'Professional WordPress web design and support in Yeovil. Maintain or rebuild your WordPress site with our expert team.',
    type: 'website',
  },
}

const faqs = [
  {
    question: "Can you fix problems on my existing WordPress site?",
    answer: "Absolutely! We provide comprehensive WordPress support including fixing broken functionality, resolving security issues, updating plugins, optimising performance, and troubleshooting any WordPress problems. Our team has extensive experience with WordPress sites for Yeovil and Somerset businesses, so we can quickly diagnose and resolve most issues."
  },
  {
    question: "Is it better to rebuild my WordPress website or maintain it?",
    answer: "It depends on your current site's condition. If your WordPress site is slow, outdated, or constantly having issues, rebuilding with a custom-coded solution often provides better long-term value. Custom sites are faster, more secure, easier to maintain, and better for SEO. However, if your WordPress site is relatively new and working well, ongoing maintenance might be more cost-effective. We'll assess your specific situation and recommend the best approach."
  },
  {
    question: "How much does a new WordPress website cost in Yeovil?",
    answer: "Our WordPress services vary by need: For maintaining an existing WordPress site, we offer support from £25/month for basic hosting and maintenance, or £250/month for comprehensive management. If rebuilding your WordPress site with a custom-coded solution, we charge £249 + VAT for the new website build, then choose from our ongoing support options. We provide transparent pricing for all Yeovil businesses with no hidden costs."
  }
]

export default function WordPressWebDesignYeovil() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#BFE4F1'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            WordPress Web Design <span className="text-blue-600">Yeovil</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional WordPress support and custom website rebuilds for businesses in Yeovil, Somerset. 
            Maintain your existing WordPress site or upgrade to a faster, more secure custom solution.
          </p>
          <div className="flex justify-center">
            <BookCallButton className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
              Get WordPress Help
            </BookCallButton>
          </div>
        </div>
      </section>

      {/* Support for Existing WordPress Websites */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Support for Existing WordPress Websites
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">WordPress Maintenance Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Plugin updates and security patches
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  WordPress core updates
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Daily backups and security monitoring
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Performance optimisation
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">WordPress Problem Solving</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fix broken functionality and errors
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Resolve security breaches and malware
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Speed up slow WordPress sites
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mobile responsiveness improvements
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">WordPress Hosting & Support Plans</h3>
            <p className="text-gray-700 mb-4">
              We provide reliable WordPress hosting and maintenance for businesses across Yeovil and Somerset. 
              Choose from our Basic Hosting at £25/month for essential maintenance, or our Continuous Growth 
              package at £250/month for comprehensive WordPress management including content updates, SEO optimisation, 
              and ongoing improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Cog Section Divider */}
      <div className="py-8 bg-gray-50 flex justify-center items-center">
        <div className="flex items-center gap-6">
          <svg className="w-8 h-8 text-blue-500 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l1.86-1.41c.2-.15.25-.42.13-.64l-1.86-3.23c-.12-.22-.39-.3-.61-.22l-2.14.91c-.47-.4-1-.72-1.58-.94l-.3-2.4c-.05-.24-.25-.42-.5-.42h-3.73c-.24 0-.45.18-.5.42l-.3 2.4c-.58.22-1.11.54-1.58.94l-2.14-.91c-.22-.08-.49 0-.61.22L2.74 8.87c-.12.22-.07.49.13.64L4.73 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-1.86 1.41c-.2.15-.25.42-.13.64l1.86 3.23c.12.22.39.3.61.22l2.14-.91c.47.4 1 .72 1.58.94l.3 2.4c.05.24.25.42.5.42h3.73c.24 0 .45-.18.5-.42l.3-2.4c.58-.22 1.11-.54 1.58-.94l2.14.91c.22.08.49 0 .61-.22l1.86-3.23c.12-.22.07-.49-.13-.64l-1.86-1.41z"/>
          </svg>
          <div className="h-px bg-gray-300 w-24"></div>
          <svg className="w-6 h-6 text-orange-500 animate-spin-reverse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l1.86-1.41c.2-.15.25-.42.13-.64l-1.86-3.23c-.12-.22-.39-.3-.61-.22l-2.14.91c-.47-.4-1-.72-1.58-.94l-.3-2.4c-.05-.24-.25-.42-.5-.42h-3.73c-.24 0-.45.18-.5.42l-.3 2.4c-.58.22-1.11.54-1.58.94l-2.14-.91c-.22-.08-.49 0-.61.22L2.74 8.87c-.12.22-.07.49.13.64L4.73 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-1.86 1.41c-.2.15-.25.42-.13.64l1.86 3.23c.12.22.39.3.61.22l2.14-.91c.47.4 1 .72 1.58.94l.3 2.4c.05.24.25.42.5.42h3.73c.24 0 .45-.18.5-.42l.3-2.4c.58-.22 1.11-.54 1.58-.94l2.14.91c.22.08.49 0 .61-.22l1.86-3.23c.12-.22.07-.49-.13-.64l-1.86-1.41z"/>
          </svg>
          <div className="h-px bg-gray-300 w-24"></div>
          <svg className="w-8 h-8 text-green-500 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l1.86-1.41c.2-.15.25-.42.13-.64l-1.86-3.23c-.12-.22-.39-.3-.61-.22l-2.14.91c-.47-.4-1-.72-1.58-.94l-.3-2.4c-.05-.24-.25-.42-.5-.42h-3.73c-.24 0-.45.18-.5.42l-.3 2.4c-.58.22-1.11.54-1.58.94l-2.14-.91c-.22-.08-.49 0-.61.22L2.74 8.87c-.12.22-.07.49.13.64L4.73 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-1.86 1.41c-.2.15-.25.42-.13.64l1.86 3.23c.12.22.39.3.61.22l2.14-.91c.47.4 1 .72 1.58.94l.3 2.4c.05.24.25.42.5.42h3.73c.24 0 .45-.18.5-.42l.3-2.4c.58-.22 1.11-.54 1.58-.94l2.14.91c.22.08.49 0 .61-.22l1.86-3.23c.12-.22.07-.49-.13-.64l-1.86-1.41z"/>
          </svg>
        </div>
      </div>

      {/* Rebuilding Old WordPress Sites */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Rebuilding Old WordPress Sites with Custom-Coded Solutions
          </h2>
          
          <div className="mb-12">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Rebuild Your WordPress Site?</h3>
              <p className="text-gray-700 text-lg mb-6">
                Many WordPress websites become slow, vulnerable, and difficult to maintain over time. Our custom-coded 
                rebuilds offer a modern alternative that's faster, more secure, and tailored specifically to your business needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Problems with Old WordPress Sites:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      Slow loading times affecting SEO
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      Security vulnerabilities from outdated plugins
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      Constant maintenance requirements
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      Limited customisation options
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits of Custom-Coded Rebuilds:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Lightning-fast performance (98%+ scores)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Enhanced security with no plugin vulnerabilities
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Minimal ongoing maintenance required
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Fully customised to your business needs
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Rebuild Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">1</div>
                  <h4 className="font-semibold mb-1">Content Migration</h4>
                  <p className="text-gray-600">We carefully migrate your existing content and preserve your SEO rankings</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">2</div>
                  <h4 className="font-semibold mb-1">Custom Development</h4>
                  <p className="text-gray-600">Build a fast, secure website using modern technology tailored to your needs</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">3</div>
                  <h4 className="font-semibold mb-1">Launch & Support</h4>
                  <p className="text-gray-600">Go live with ongoing support to ensure continued success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Saunders Simmons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Saunders Simmons for WordPress Web Design in Yeovil?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Yeovil Expertise</h3>
              <p className="text-gray-700 mb-4">
                Based in Yeovil, Somerset, we understand the local business landscape and work with companies 
                across Yeovil, Taunton, Bridgwater, and throughout Somerset and Dorset. Our local presence 
                means faster response times and a personal service you can trust.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Face-to-face meetings available</li>
                <li>• Local market knowledge</li>
                <li>• Quick response to urgent issues</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">WordPress & Custom Development</h3>
              <p className="text-gray-700 mb-4">
                Unlike many agencies that only work with WordPress or only build custom sites, we offer both 
                solutions. This means we can objectively advise whether maintaining your WordPress site or 
                rebuilding with custom code is the best choice for your business.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Unbiased recommendations</li>
                <li>• Expertise in both WordPress and custom development</li>
                <li>• Long-term partnership approach</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparent Pricing</h3>
              <p className="text-gray-700 mb-4">
                We believe in honest, upfront pricing with no hidden costs. Whether you need WordPress 
                maintenance or a complete rebuild, we'll give you clear options that fit your budget 
                and business goals.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Fixed pricing for website builds (£249 + VAT)</li>
                <li>• Flexible ongoing support options</li>
                <li>• No surprise charges or hidden fees</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Partnership</h3>
              <p className="text-gray-700 mb-4">
                We don't just build websites and disappear. Our team provides ongoing support, regular 
                updates, and continuous improvements to ensure your website keeps delivering results 
                for your Yeovil business long-term.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Monthly support packages available</li>
                <li>• Regular performance monitoring</li>
                <li>• Continuous SEO improvements</li>
              </ul>
            </div>
          </div>

          {/* Internal Links */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore Our Other Services</h3>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/web-design-yeovil" 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Web Design Yeovil
              </Link>
              <Link 
                href="/web-design-somerset" 
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Web Design Somerset
              </Link>
              <Link 
                href="/services" 
                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PricingSection 
        title="WordPress Web Design Pricing in Yeovil"
        subtitle="Transparent pricing for WordPress support and custom website rebuilds. Choose the option that best fits your business needs and budget."
        showProcessOverview={false}
        ctaText="Ready to Get Started?"
        ctaSubtext="Get your professional website built for just £249, or let us help maintain your existing WordPress site. All pricing includes VAT where applicable."
      />

      <AboutUsSection 
        title="Meet Nick & Dan"
        subtitle="The founders of Saunders Simmons Ltd, dedicated to helping businesses succeed online through professional websites and digital marketing."
        showVideo={true}
        showCredentials={true}
      />

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            WordPress Web Design FAQ
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Improve Your WordPress Website?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you need WordPress support or want to explore a custom rebuild, 
            our Yeovil-based team is here to help your business succeed online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookCallButton className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Book a Free Consultation
            </BookCallButton>
            <a
              href="mailto:hello@saunders-simmons.co.uk"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
            >
              Email Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
