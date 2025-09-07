import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Yeovil Case Study: How We Increased a Local Business's Revenue by 200%",
  description: "See how our professional web design services helped a Yeovil business double their online revenue. Real results, real numbers, and the strategies that made it happen.",
  openGraph: {
    title: "Web Design Yeovil Case Study: How We Increased a Local Business's Revenue by 200%",
    description: "See how our professional web design services helped a Yeovil business double their online revenue. Real results, real numbers.",
    url: 'https://www.saunders-simmons.co.uk/blog/web-design-yeovil-case-study',
    siteName: 'Saunders Simmons Ltd',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Yeovil Case Study - Saunders Simmons Ltd',
      },
    ],
    locale: 'en_GB',
    type: 'article',
  },
};

export default function YeovilCaseStudyPost() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Web Design Yeovil Case Study: How We Increased a Local Business's Revenue by 200%",
            "description": "See how our professional web design services helped a Yeovil business double their online revenue. Real results, real numbers, and the strategies that made it happen.",
            "image": "https://www.saunders-simmons.co.uk/logos/logo.png",
            "author": {
              "@type": "Person",
              "name": "Nick Saunders",
              "jobTitle": "Web Design Specialist & Co-Founder",
              "worksFor": {
                "@type": "Organization",
                "name": "Saunders Simmons Ltd"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Saunders Simmons Ltd",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.saunders-simmons.co.uk/logos/logo.png"
              }
            },
            "datePublished": "2025-01-04",
            "dateModified": "2025-01-04",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.saunders-simmons.co.uk/blog/web-design-yeovil-case-study"
            },
            "articleSection": "Case Studies",
            "keywords": ["Web Design Yeovil", "Case Study", "Business Growth", "Yeovil web design", "200% revenue increase"],
            "about": [
              {
                "@type": "Thing",
                "name": "Web Design"
              },
              {
                "@type": "Place",
                "name": "Yeovil"
              },
              {
                "@type": "Thing",
                "name": "Business Growth"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "Yeovil",
                "addressRegion": "Somerset"
              },
              {
                "@type": "Service",
                "name": "Website Design",
                "provider": {
                  "@type": "Organization",
                  "name": "Saunders Simmons Ltd"
                }
              }
            ]
          })
        }}
      />
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Yeovil Case Study</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                Case Study
              </span>
              <span className="text-gray-500">January 4, 2025</span>
              <span className="text-gray-500">6 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Web Design Yeovil Case Study: How We Increased a Local Business's Revenue by 200%
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              See how our professional web design services helped a Yeovil business double their online revenue. Real results, real numbers, and the strategies that made it happen.
            </p>

            <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">NS</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Nick Saunders</p>
                <p className="text-gray-500 text-sm">Web Design Specialist & Co-Founder</p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Client Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
                <div><strong>Business:</strong> Local Home Services Company</div>
                <div><strong>Location:</strong> Yeovil, Somerset</div>
                <div><strong>Industry:</strong> Home Maintenance & Repairs</div>
                <div><strong>Employees:</strong> 8 staff members</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              The Challenge: Outdated Website Holding Back Growth
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              When this established Yeovil home services company approached us in early 2024, they were frustrated. Despite having excellent customer reviews and 15 years of experience, their online presence wasn't generating the leads they needed to grow.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Problems with Their Old Website:
            </h3>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700"><strong>Outdated Design:</strong> Built in 2018, looked unprofessional compared to competitors</li>
              <li className="text-gray-700"><strong>Poor Mobile Experience:</strong> Difficult to navigate on smartphones and tablets</li>
              <li className="text-gray-700"><strong>Slow Loading Speed:</strong> Taking 8+ seconds to load, losing potential customers</li>
              <li className="text-gray-700"><strong>No Local SEO:</strong> Not ranking for "Yeovil" + service searches</li>
              <li className="text-gray-700"><strong>Unclear Messaging:</strong> Visitors couldn't understand what services they offered</li>
              <li className="text-gray-700"><strong>No Clear Call-to-Actions:</strong> No obvious way for customers to get in touch</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <h4 className="text-lg font-bold text-red-900 mb-2">The Impact on Business</h4>
              <p className="text-red-800">
                "We were getting maybe 2-3 enquiries per month from our website. Most of our new customers came from word-of-mouth recommendations. We knew we were missing out on online opportunities."
              </p>
              <footer className="text-red-700 mt-2">— Business Owner</footer>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Our Web Design Solution for This Yeovil Business
            </h2>

            <p className="text-gray-700 mb-6">
              We took a comprehensive approach, rebuilding their website from the ground up with a focus on local Yeovil customers and mobile-first design.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Phase 1: Research & Strategy (Week 1-2)
            </h3>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Analysed local Yeovil competitor websites</li>
              <li className="text-gray-700">Researched what Yeovil customers search for online</li>
              <li className="text-gray-700">Identified key services to highlight</li>
              <li className="text-gray-700">Planned user journey from visitor to customer</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Phase 2: Design & Development (Week 3-6)
            </h3>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Created modern, professional design reflecting quality service</li>
              <li className="text-gray-700">Built mobile-first responsive website</li>
              <li className="text-gray-700">Optimised for fast loading speeds (under 2 seconds)</li>
              <li className="text-gray-700">Added clear service pages targeting Yeovil keywords</li>
              <li className="text-gray-700">Implemented prominent contact forms and phone numbers</li>
              <li className="text-gray-700">Added customer testimonials and before/after photos</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Phase 3: Local SEO Optimisation (Week 7-8)
            </h3>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Optimised all pages for "Yeovil + service" keywords</li>
              <li className="text-gray-700">Set up and optimised Google My Business profile</li>
              <li className="text-gray-700">Created location-specific landing pages</li>
              <li className="text-gray-700">Added local schema markup</li>
              <li className="text-gray-700">Built citations in local Yeovil directories</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Key Features of the New Yeovil Website:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div>✅ Mobile-optimised design</div>
                  <div>✅ Fast loading speed (1.8s)</div>
                  <div>✅ Clear service descriptions</div>
                  <div>✅ Prominent contact information</div>
                  <div>✅ Customer testimonials</div>
                </div>
                <div className="space-y-2">
                  <div>✅ Local Yeovil SEO optimisation</div>
                  <div>✅ Before/after photo galleries</div>
                  <div>✅ Easy quote request forms</div>
                  <div>✅ Service area maps</div>
                  <div>✅ Professional photography</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              The Results: Dramatic Growth in Just 6 Months
            </h2>

            <p className="text-gray-700 mb-6">
              The transformation was remarkable. Within 6 months of launching their new website, this Yeovil business saw unprecedented growth:
            </p>

            <div className="bg-green-50 p-6 rounded-lg my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                6-Month Results Summary
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-green-600 mb-2">200%</div>
                  <div className="text-gray-700 font-medium">Revenue Increase</div>
                  <div className="text-sm text-gray-500">From £15k to £45k monthly</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-blue-600 mb-2">850%</div>
                  <div className="text-gray-700 font-medium">Website Enquiries</div>
                  <div className="text-sm text-gray-500">From 3 to 28 per month</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-orange-600 mb-2">#1</div>
                  <div className="text-gray-700 font-medium">Google Rankings</div>
                  <div className="text-sm text-gray-500">Top 3 for main Yeovil searches</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Month-by-Month Progress:
            </h3>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h5 className="font-bold text-gray-900">Month 1-2:</h5>
                <p className="text-gray-700">Website launched, immediate improvement in user experience. Enquiries increased to 8 per month.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h5 className="font-bold text-gray-900">Month 3-4:</h5>
                <p className="text-gray-700">Local SEO started showing results. Ranking on page 1 for "home repairs Yeovil". Enquiries reached 15 per month.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h5 className="font-bold text-gray-900">Month 5-6:</h5>
                <p className="text-gray-700">Ranking #1 for multiple Yeovil searches. Word-of-mouth referrals increased due to online presence. 28 enquiries per month.</p>
              </div>
            </div>

            <blockquote className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="text-lg text-green-900 italic">
                "The new website has completely transformed our business. We've had to hire 3 additional staff members to handle all the new work coming in. Saunders Simmons didn't just build us a website—they built us a business growth machine."
              </p>
              <footer className="text-green-700 mt-2">— Business Owner, 6 months after launch</footer>
            </blockquote>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Key Success Factors for This Yeovil Project
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              1. Local Focus
            </h3>
            <p className="text-gray-700 mb-4">
              Every page was optimised for Yeovil-specific searches. We created dedicated pages for services in different areas around Yeovil.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              2. Mobile-First Design
            </h3>
            <p className="text-gray-700 mb-4">
              With 73% of their traffic coming from mobile devices, the mobile experience was prioritised from day one.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              3. Clear Value Proposition
            </h3>
            <p className="text-gray-700 mb-4">
              Visitors immediately understood what services were offered and why this company was the best choice in Yeovil.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              4. Social Proof
            </h3>
            <p className="text-gray-700 mb-4">
              Customer testimonials, before/after photos, and Google reviews were prominently featured throughout the site.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              5. Ongoing Optimisation
            </h3>
            <p className="text-gray-700 mb-6">
              We continuously monitored performance and made improvements based on user behaviour and search trends.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Could Your Yeovil Business Achieve Similar Results?
            </h2>

            <p className="text-gray-700 mb-6">
              This case study demonstrates what's possible when you invest in professional web design that's specifically tailored to your local market. Every Yeovil business has the potential to achieve similar growth with the right approach.
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Ready to Transform Your Yeovil Business?
              </h4>
              <p className="text-gray-700 mb-4">
                Book a free consultation to discover how professional web design could grow your Yeovil business. We'll analyse your current website and show you exactly what improvements could drive more customers to your door.
              </p>
              <BookCallButton className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                Get Your Free Website Analysis
              </BookCallButton>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/web-design-somerset-2025" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Web Design Somerset</h4>
                <p className="text-gray-600">Why your business needs a modern website in 2025</p>
              </Link>
              <Link href="/blog/website-redesign-roi" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Website Redesign ROI</h4>
                <p className="text-gray-600">Why businesses see 300% returns on web design</p>
              </Link>
            </div>
          </section>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
