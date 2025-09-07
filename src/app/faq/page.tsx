import { Metadata } from 'next'
import Link from 'next/link'
import BookCallButton from '@/components/BookCallButton'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Web Design & SEO Services | Saunders Simmons Ltd',
  description: 'Get answers to common questions about our web design, SEO, and digital marketing services in Yeovil, Somerset. Professional website solutions for local businesses.',
  keywords: [
    'web design FAQ Yeovil',
    'website design questions Somerset',
    'SEO services FAQ Dorset',
    'web development pricing',
    'website maintenance costs',
    'local web designer Yeovil',
    'professional website Somerset'
  ],
  openGraph: {
    title: 'FAQ - Web Design & SEO Services | Saunders Simmons Ltd',
    description: 'Common questions about our web design and SEO services in Yeovil, Somerset',
    type: 'website',
  },
}

const faqs = [
  {
    question: "Do you work with businesses outside of Yeovil?",
    answer: "Yes! While we're based in Yeovil, Somerset, we work with businesses throughout the UK. We serve local clients across Somerset and Dorset, but also help businesses nationwide through video calls and remote collaboration. Our local focus gives us insight into the South West market, but our expertise extends much further.",
    category: "Service Area"
  },
  {
    question: "How much does a website cost?",
    answer: "Our website service has two parts: First, we build your professional website for £795 + VAT (one-time cost). This includes everything you need for a stunning online presence. Then, we provide ongoing support and growth for £250/month + VAT, which includes hosting, security, updates, and continuous optimization. This partnership approach ensures your website stays current and continues to drive results for your business.",
    category: "Pricing"
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most websites take 1-2 weeks to build once you provide us with the content and artwork we request. This fast turnaround is possible because we have a streamlined process and know exactly what we need from you upfront. If content creation is needed, or for more complex e-commerce sites, timelines may extend to 3-4 weeks. We'll give you a clear timeline and content requirements list during your initial consultation.",
    category: "Timeline"
  },
  {
    question: "Do you provide ongoing website maintenance?",
    answer: "Absolutely! We believe in long-term partnerships. Our ongoing support is £250/month + VAT and includes hosting, security updates, content updates, performance monitoring, backup management, technical support, and continuous optimization. This ensures your website stays secure, fast, and up-to-date while continuously improving your online results.",
    category: "Maintenance"
  },
  {
    question: "Can you help improve my existing website's SEO?",
    answer: "Yes, we specialise in SEO for Somerset and Dorset businesses. We can audit your current website, identify improvement opportunities, and implement local SEO strategies to help you rank higher in Google. Our SEO services include keyword research, on-page optimization, local SEO, and ongoing monitoring.",
    category: "SEO"
  },
  {
    question: "Do you work with small businesses in Somerset?",
    answer: "Definitely! We love working with small and medium businesses across Somerset, Dorset, and the South West. Many of our clients are local shops, restaurants, tradespeople, professional services, and growing businesses. We understand the local market and create websites that connect with your community.",
    category: "Small Business"
  },
  {
    question: "What's included in your web design service?",
    answer: "Our complete service includes strategy consultation, custom design, professional development, content creation assistance, SEO optimization, mobile responsiveness, security setup, performance optimization, training, and launch support. We handle everything so you can focus on running your business.",
    category: "Services"
  },
  {
    question: "Can you redesign my outdated website?",
    answer: "Absolutely! We specialise in website redesigns for Yeovil and Somerset businesses. We'll modernise your design, improve user experience, enhance mobile performance, boost SEO, and ensure your site reflects your current brand. We can often migrate your existing content and improve upon it.",
    category: "Redesign"
  },
  {
    question: "Do you build e-commerce websites?",
    answer: "Yes, we create professional e-commerce solutions for businesses wanting to sell online. We work with platforms like Shopify, WooCommerce, and custom solutions. Our e-commerce sites include payment processing, inventory management, order fulfillment, and marketing tools to help you grow your online sales.",
    category: "E-commerce"
  },
  {
    question: "What makes you different from other web designers in Somerset?",
    answer: "We focus on long-term partnerships, not just one-off projects. Our local knowledge of Somerset and Dorset markets, combined with our technical expertise, helps create websites that truly work for your business. We provide ongoing support, regular updates, and treat your success as our success. We're a fully registered company (Companies House number 15839557), VAT registered, and fully insured for your peace of mind.",
    category: "Why Choose Us"
  },
  {
    question: "Can you help with Google My Business and local listings?",
    answer: "Yes! Local SEO is crucial for Somerset businesses. We help optimize your Google My Business profile, manage local citations, and ensure your business appears in local search results. This is especially important for businesses serving Yeovil, Taunton, Bridgwater, Dorchester, and surrounding areas.",
    category: "Local SEO"
  },
  {
    question: "Do I need to learn how to update my website?",
    answer: "No! That's the beauty of our service - we handle all the updates for you. You don't need to learn anything technical or spend time on website maintenance. We manage everything so you can concentrate on running your business and serving your customers. Just send us your updates and we'll take care of the rest within our ongoing support package.",
    category: "Management"
  }
]

const categories = [...new Set(faqs.map(faq => faq.category))]

export default function FAQ() {
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
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need to know about our web design, SEO, and digital marketing services 
            for businesses in Yeovil, Somerset, and beyond.
          </p>
          <div className="flex justify-center">
            <BookCallButton className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
              Book a Free Consultation
            </BookCallButton>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Navigation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Navigation</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* FAQ by Category */}
          {categories.map((category) => (
            <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
                {category}
              </h3>
              <div className="space-y-6">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}

          {/* Cog Section Divider */}
          <div className="mt-16 py-8 flex justify-center items-center">
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

          {/* Contact CTA */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Can't find the answer you're looking for? We're here to help with any questions 
              about web design, SEO, or digital marketing for your Somerset business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookCallButton className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Book a Free Call
              </BookCallButton>
              <a
                href="mailto:hello@saunders-simmons.co.uk"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block border border-white"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Local Areas Served */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Areas We Serve
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Based in Yeovil, we provide web design and SEO services throughout:
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm mb-6">
              {[
                'Yeovil', 'Taunton', 'Bridgwater', 'Glastonbury', 'Street', 'Wells', 'Burnham-on-Sea',
                'Dorchester', 'Weymouth', 'Sherborne', 'Gillingham', 'Blandford Forum',
                'Somerset', 'Dorset', 'Devon', 'Wiltshire'
              ].map((area) => (
                <span
                  key={area}
                  className="bg-white text-gray-700 px-3 py-1 rounded border"
                >
                  {area}
                </span>
              ))}
            </div>
            
            {/* Professional Credentials */}
            <div className="pt-6 border-t border-gray-200 text-center">
              <h4 className="font-semibold text-gray-900 mb-3">Professional Credentials</h4>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Registered Company</span>
                </div>
                <div className="text-gray-500 hidden sm:block">•</div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.586-2H6a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-4.586a1 1 0 00-.293-.707l-2-2a1 1 0 00-.707-.293z" />
                  </svg>
                  <span>Fully Insured</span>
                </div>
                <div className="text-gray-500 hidden sm:block">•</div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>VAT Registered</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Companies House Number: 15839557
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
