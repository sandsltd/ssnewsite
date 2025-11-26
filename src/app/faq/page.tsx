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
    'professional website Somerset',
    'website cost Somerset',
    'web design vs web development',
    'how much does a website cost Somerset',
    'difference between web design and development'
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
    answer: "Our website service has two parts: First, we build your professional website for £795 ex VAT (one-time cost). This includes everything you need for a stunning online presence. Then, you can choose from our ongoing support options: Basic Hosting at £25/month + VAT for essential maintenance, or our Continuous Growth package at £250/month + VAT for comprehensive support, security, updates, and optimisation. This flexible approach lets you choose the level of support that fits your business needs.",
    category: "Pricing"
  },
  {
    question: "How much does a website cost in Somerset?",
    answer: "For Somerset businesses, our website costs are transparent and competitive: £795 ex VAT for professional website design and development, plus your choice of ongoing support - Basic Hosting at £25/month + VAT or Continuous Growth at £250/month + VAT. This pricing is the same whether you're in Yeovil, Taunton, Bridgwater, or anywhere across Somerset. We understand the local market and provide exceptional value for Somerset businesses wanting a professional online presence. Unlike some London agencies charging £3000+, we offer premium quality at fair prices that work for local businesses.",
    category: "Pricing"
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most websites take 1-2 weeks to build once you provide us with the content and artwork we request. This fast turnaround is possible because we have a streamlined process and know exactly what we need from you upfront. If content creation is needed, or for more complex e-commerce sites, timelines may extend to 3-4 weeks. We'll give you a clear timeline and content requirements list during your initial consultation.",
    category: "Timeline"
  },
  {
    question: "Do you provide ongoing website maintenance?",
    answer: "Absolutely! We believe in long-term partnerships and offer two ongoing support options: Basic Hosting at £25/month + VAT covers essential hosting, security, and basic maintenance. For comprehensive support, our Continuous Growth package at £250/month + VAT includes hosting, security updates, content updates, performance monitoring, backup management, technical support, and continuous optimisation. This ensures your website stays secure, fast, and up-to-date while continuously improving your online results.",
    category: "Maintenance"
  },
  {
    question: "Can you help improve my existing website's SEO?",
    answer: "Yes, we specialise in SEO for Somerset and Dorset businesses. We can audit your current website, identify improvement opportunities, and implement local SEO strategies to help you rank higher in Google. Our SEO services include keyword research, on-page optimisation, local SEO, and ongoing monitoring.",
    category: "SEO"
  },
  {
    question: "Do you work with small businesses in Somerset?",
    answer: "Definitely! We love working with small and medium businesses across Somerset, Dorset, and the South West. Many of our clients are local shops, restaurants, tradespeople, professional services, and growing businesses. We understand the local market and create websites that connect with your community.",
    category: "Small Business"
  },
  {
    question: "What's included in your web design service?",
    answer: "Our complete service includes strategy consultation, custom design, professional development, content creation assistance, SEO optimisation, mobile responsiveness, security setup, performance optimisation, training, and launch support. We handle everything so you can focus on running your business.",
    category: "Services"
  },
  {
    question: "What's the difference between web design and web development?",
    answer: "Web design focuses on the visual appearance, user experience, and layout of your website - the creative and aesthetic elements that users see and interact with. Web development is the technical coding that makes the design functional, including programming, databases, and behind-the-scenes functionality. At Saunders Simmons, we handle both web design and web development as part of our complete service, so you get a beautiful website that works perfectly. Many agencies specialise in just one area, but we provide the full package for Somerset businesses.",
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
    answer: "Yes! Local SEO is crucial for Somerset businesses. We help optimise your Google My Business profile, manage local citations, and ensure your business appears in local search results. This is especially important for businesses serving Yeovil, Taunton, Bridgwater, Dorchester, and surrounding areas.",
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
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 portfolio-hero-gradient relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6">
            <div className="w-2 h-2 rounded-full bg-[#51AACD] animate-pulse"></div>
            <span className="text-sm font-semibold">FAQ</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Frequently Asked <span className="text-[#51AACD]">Questions</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Everything you need to know about our web design, SEO, and digital marketing services 
            for businesses across the UK.
          </p>
          <div className="flex justify-center">
            <BookCallButton className="hero-cta-primary text-white px-8 py-4 rounded-xl font-bold text-base tracking-tight flex items-center justify-center gap-2.5 group">
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
      </section>

      {/* FAQ Content */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Category Navigation */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Quick Navigation</h2>
              <p className="text-gray-600">Jump to a specific category</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="faq-category-button px-5 py-2.5 rounded-xl text-sm font-semibold"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* FAQ by Category */}
          {categories.map((category) => (
            <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-16">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 pb-3 faq-category-header">
                {category}
              </h3>
              <div className="space-y-6">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq, index) => (
                    <div key={index} className="faq-card rounded-2xl p-6 lg:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] flex items-center justify-center flex-shrink-0 shadow-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 flex-1">
                          {faq.question}
                        </h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base ml-12">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}

          {/* Premium Divider */}
          <div className="relative py-12 sm:py-16 overflow-hidden mt-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#51AACD]/10 to-transparent"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#51AACD]/30 to-[#51AACD]/30"></div>
                <div className="w-3 h-3 rounded-full bg-[#51AACD] shadow-lg shadow-[#51AACD]/30"></div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#51AACD]/30 to-[#51AACD]/30"></div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 rounded-3xl p-10 lg:p-12 text-center text-white portfolio-cta-gradient shadow-xl">
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-5">
              Still Have Questions?
            </h3>
            <p className="text-lg sm:text-xl mb-8 text-[#C4E3EA] max-w-2xl mx-auto leading-relaxed font-medium">
              Can't find the answer you're looking for? We're here to help with any questions 
              about web design, SEO, or digital marketing for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
              <BookCallButton className="cta-button-primary text-[#51AACD] px-8 py-4 rounded-xl font-bold text-base tracking-tight flex items-center justify-center gap-2.5 group">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Book a Free Call</span>
                <svg className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </BookCallButton>
              <a
                href="mailto:hello@saunders-simmons.co.uk"
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-base tracking-tight flex items-center justify-center gap-2.5 group hover:bg-white hover:text-[#51AACD] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Us</span>
                <svg className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Local Areas Served */}
          <div className="mt-16 rounded-2xl p-8 lg:p-10 border-2 border-[#51AACD] mission-box">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
              Areas We Serve
            </h3>
            <p className="text-gray-700 text-center mb-6 text-lg font-medium">
              Based in Yeovil, we provide web design and SEO services throughout the UK:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                'Yeovil', 'Taunton', 'Bridgwater', 'Glastonbury', 'Street', 'Wells', 'Burnham-on-Sea',
                'Dorchester', 'Weymouth', 'Sherborne', 'Gillingham', 'Blandford Forum',
                'Somerset', 'Dorset', 'Devon', 'Wiltshire'
              ].map((area) => (
                <span
                  key={area}
                  className="faq-area-badge px-4 py-2 rounded-xl text-sm font-semibold"
                >
                  {area}
                </span>
              ))}
            </div>
            
            {/* Professional Credentials */}
            <div className="pt-8 text-center border-t-2 border-[#51AACD]">
              <h4 className="font-bold text-gray-900 mb-5 text-lg">Professional Credentials</h4>
              <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-semibold">Registered Company</span>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#51AACD] to-[#3E8BA8] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.586-2H6a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-4.586a1 1 0 00-.293-.707l-2-2a1 1 0 00-.707-.293z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-semibold">Fully Insured</span>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-semibold">VAT Registered</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 font-medium">
                Companies House Number: 15839557
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
