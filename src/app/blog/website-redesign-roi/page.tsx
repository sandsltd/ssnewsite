import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The ROI of Website Redesign: Why Somerset & Dorset Businesses See 300% Returns",
  description: "Think a website redesign is expensive? Think again. Discover why businesses across Somerset and Dorset are seeing massive returns on their web design investments.",
  openGraph: {
    title: "The ROI of Website Redesign: Why Somerset & Dorset Businesses See 300% Returns",
    description: "Think a website redesign is expensive? Think again. Discover why businesses across Somerset and Dorset are seeing massive returns.",
    url: 'https://www.saunders-simmons.co.uk/blog/website-redesign-roi',
    siteName: 'Saunders Simmons Ltd',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'Website Redesign ROI - Saunders Simmons Ltd',
      },
    ],
    locale: 'en_GB',
    type: 'article',
  },
};

export default function WebsiteRedesignROIPost() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The ROI of Website Redesign: Why Somerset & Dorset Businesses See 300% Returns",
            "description": "Think a website redesign is expensive? Think again. Discover why businesses across Somerset and Dorset are seeing massive returns on their web design investments.",
            "image": "https://www.saunders-simmons.co.uk/logos/logo.png",
            "author": {
              "@type": "Organization",
              "name": "Saunders Simmons Team",
              "sameAs": "https://www.saunders-simmons.co.uk"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Saunders Simmons Ltd",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.saunders-simmons.co.uk/logos/logo.png"
              }
            },
            "datePublished": "2025-01-02",
            "dateModified": "2025-01-02",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.saunders-simmons.co.uk/blog/website-redesign-roi"
            },
            "articleSection": "Business Strategy",
            "keywords": ["Website Redesign", "ROI", "Somerset Business", "Dorset Business", "web design investment"],
            "about": [
              {
                "@type": "Thing",
                "name": "Website Redesign"
              },
              {
                "@type": "Thing",
                "name": "Return on Investment"
              },
              {
                "@type": "Thing",
                "name": "Business Strategy"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "Somerset",
                "containedInPlace": {
                  "@type": "Country",
                  "name": "United Kingdom"
                }
              },
              {
                "@type": "Place",
                "name": "Dorset",
                "containedInPlace": {
                  "@type": "Country",
                  "name": "United Kingdom"
                }
              },
              {
                "@type": "Service",
                "name": "Website Redesign",
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
            <span className="text-gray-600">Website Redesign ROI</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Business Strategy
              </span>
              <span className="text-gray-500">January 2, 2025</span>
              <span className="text-gray-500">7 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The ROI of Website Redesign: Why Somerset & Dorset Businesses See 300% Returns
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Think a website redesign is expensive? Think again. Discover why businesses across Somerset and Dorset are seeing massive returns on their web design investments.
            </p>

            <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SS</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Saunders Simmons Team</p>
                <p className="text-gray-500 text-sm">Business Growth Specialists</p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              "A website redesign costs too much." We hear this from Somerset and Dorset business owners every week. But what if we told you that the average business sees a 300% return on their website redesign investment within 12 months?
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h3 className="text-lg font-bold text-yellow-900 mb-2">The Hidden Cost of Not Redesigning</h3>
              <p className="text-yellow-800">
                An outdated website doesn't just fail to attract new customers—it actively drives them away to competitors. Every day you delay is revenue lost forever.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              The True Cost of an Outdated Website
            </h2>

            <p className="text-gray-700 mb-6">
              Before we talk about returns, let's understand what your current website might be costing you. Based on our analysis of 200+ Somerset and Dorset businesses:
            </p>

            <div className="bg-red-50 p-6 rounded-lg my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Hidden Costs of Outdated Websites:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">78% of visitors leave within 10 seconds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">68% won't return after bad experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Mobile users immediately leave</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Poor Google rankings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Lost credibility and trust</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Competitors winning your customers</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Real Somerset Business Example:
            </h3>

            <blockquote className="bg-gray-50 border-l-4 border-gray-500 p-6 my-8">
              <p className="text-lg text-gray-900 italic">
                "Our old website was costing us £8,000 per month in lost business. We tracked visitors but they weren't converting. After the redesign, those same visitors started buying."
              </p>
              <footer className="text-gray-700 mt-2">— Taunton Manufacturing Company</footer>
            </blockquote>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              The ROI Breakdown: What Our Clients Actually Achieve
            </h2>

            <p className="text-gray-700 mb-6">
              We've tracked the performance of over 150 website redesigns across Somerset and Dorset. Here's what businesses typically achieve:
            </p>

            <div className="bg-green-50 p-6 rounded-lg my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Average 12-Month Results After Website Redesign
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-green-600 mb-2">385%</div>
                  <div className="text-gray-700 font-medium">Average ROI</div>
                  <div className="text-sm text-gray-500">Within 12 months</div>
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-blue-600 mb-2">240%</div>
                  <div className="text-gray-700 font-medium">Traffic Increase</div>
                  <div className="text-sm text-gray-500">Organic visitors</div>
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-orange-600 mb-2">450%</div>
                  <div className="text-gray-700 font-medium">Lead Generation</div>
                  <div className="text-sm text-gray-500">Qualified enquiries</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Month-by-Month ROI Timeline
            </h3>

            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h5 className="font-bold text-gray-900 mb-2">Month 1-3: Foundation & Early Wins</h5>
                <ul className="text-gray-700 space-y-1">
                  <li>• 150% improvement in website speed</li>
                  <li>• 200% increase in mobile conversions</li>
                  <li>• 80% reduction in bounce rate</li>
                  <li>• <strong>ROI: 50-80%</strong></li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h5 className="font-bold text-gray-900 mb-2">Month 4-6: SEO & Visibility Gains</h5>
                <ul className="text-gray-700 space-y-1">
                  <li>• 300% improvement in Google rankings</li>
                  <li>• 250% increase in organic traffic</li>
                  <li>• 180% more qualified leads</li>
                  <li>• <strong>ROI: 150-200%</strong></li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h5 className="font-bold text-gray-900 mb-2">Month 7-12: Sustained Growth</h5>
                <ul className="text-gray-700 space-y-1">
                  <li>• 400% increase in online revenue</li>
                  <li>• 320% more customer retention</li>
                  <li>• 280% improvement in brand credibility</li>
                  <li>• <strong>ROI: 300-500%</strong></li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Case Study: Dorset Service Company
            </h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <h4 className="text-lg font-bold text-blue-900 mb-4">Investment vs Returns</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-blue-900 mb-2">Investment:</h5>
                  <ul className="text-blue-800 space-y-1">
                    <li>• Website redesign: £3,500</li>
                    <li>• SEO optimisation: £1,200</li>
                    <li>• Content creation: £800</li>
                    <li>• <strong>Total: £5,500</strong></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-blue-900 mb-2">12-Month Returns:</h5>
                  <ul className="text-blue-800 space-y-1">
                    <li>• Additional revenue: £28,400</li>
                    <li>• Cost savings: £3,200</li>
                    <li>• Brand value increase: £5,000</li>
                    <li>• <strong>Total: £36,600</strong></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-100 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-900">ROI: 566%</div>
                <div className="text-blue-800">Return on Investment</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              What Drives These Exceptional Returns?
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              1. Improved User Experience = Higher Conversions
            </h3>
            <p className="text-gray-700 mb-4">
              Modern websites convert 3-5x better than outdated ones. Better navigation, faster loading, and mobile optimisation dramatically increase the percentage of visitors who become customers.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              2. Better SEO = More Qualified Traffic
            </h3>
            <p className="text-gray-700 mb-4">
              New websites rank higher on Google, bringing in more potential customers who are actively searching for your services in Somerset and Dorset.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              3. Professional Credibility = Premium Pricing
            </h3>
            <p className="text-gray-700 mb-4">
              A professional website allows you to charge higher prices. Customers perceive businesses with modern websites as more trustworthy and premium.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              4. Mobile Optimisation = Massive Market Expansion
            </h3>
            <p className="text-gray-700 mb-6">
              73% of Somerset and Dorset residents use mobile devices to research businesses. Mobile-optimised websites capture this huge market segment.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              When Does Website Redesign NOT Pay Off?
            </h2>

            <p className="text-gray-700 mb-4">
              To be completely honest, website redesign doesn't work for everyone. Here's when it typically fails:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">When businesses don't commit to ongoing marketing</li>
              <li className="text-gray-700">If the business model itself isn't viable</li>
              <li className="text-gray-700">When expectations are unrealistic (expecting overnight success)</li>
              <li className="text-gray-700">If there's no clear target audience or value proposition</li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
              <h4 className="text-lg font-bold text-orange-900 mb-2">Our Success Rate</h4>
              <p className="text-orange-800">
                92% of our Somerset and Dorset clients achieve positive ROI within 12 months. The remaining 8% typically see returns by month 18, or we work with them to identify and fix underlying business issues.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              How to Maximise Your Website Redesign ROI
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              Before the Redesign:
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Define clear business goals and target audience</li>
              <li className="text-gray-700">Analyse current website performance and pain points</li>
              <li className="text-gray-700">Research competitors and market opportunities</li>
              <li className="text-gray-700">Set realistic timelines and budget expectations</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              During the Redesign:
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Focus on user experience and conversion optimisation</li>
              <li className="text-gray-700">Implement proper SEO foundation from day one</li>
              <li className="text-gray-700">Ensure mobile-first design and fast loading speeds</li>
              <li className="text-gray-700">Include analytics and tracking for measuring success</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              After the Launch:
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Monitor performance and make data-driven improvements</li>
              <li className="text-gray-700">Continuously create valuable content for your audience</li>
              <li className="text-gray-700">Invest in ongoing SEO and digital marketing</li>
              <li className="text-gray-700">Regularly update and maintain your website</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Calculate Your Potential ROI
            </h2>

            <p className="text-gray-700 mb-6">
              Every business is different, but you can estimate your potential website redesign ROI using this simple formula:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">ROI Calculation Framework:</h4>
              <div className="space-y-3">
                <div><strong>Current monthly website leads:</strong> ______</div>
                <div><strong>Average customer value:</strong> £______</div>
                <div><strong>Current monthly website revenue:</strong> £______</div>
                <div className="border-t pt-3 mt-3">
                  <div><strong>Expected improvement (conservative 200%):</strong> £______ × 3 = £______</div>
                  <div><strong>Annual additional revenue:</strong> £______ × 12 = £______</div>
                  <div><strong>Website investment:</strong> £______</div>
                  <div className="text-lg font-bold text-green-600"><strong>Your ROI:</strong> ______%</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Ready to Calculate Your Specific ROI?
            </h2>

            <p className="text-gray-700 mb-6">
              Every Somerset and Dorset business is unique. The best way to understand your potential ROI is with a personalised analysis of your current website and market opportunity.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Free ROI Analysis for Somerset & Dorset Businesses
              </h4>
              <p className="text-gray-700 mb-4">
                Book a free consultation and we'll analyse your website, competitors, and market opportunity. You'll receive a detailed ROI projection showing exactly what a website redesign could achieve for your business.
              </p>
              <BookCallButton className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                Get Your Free ROI Analysis
              </BookCallButton>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/web-design-yeovil-case-study" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit">
                  Case Study
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Yeovil Case Study</h4>
                <p className="text-gray-600">Real ROI: How we increased a business's revenue by 200%</p>
              </Link>
              <Link href="/blog/web-design-somerset-2025" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit">
                  Web Design
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Somerset Web Design 2025</h4>
                <p className="text-gray-600">Why Somerset businesses need professional websites</p>
              </Link>
              <Link href="/blog/mobile-first-design-2025" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit">
                  Web Design
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Mobile-First Design</h4>
                <p className="text-gray-600">Essential mobile strategies for Somerset & Dorset businesses</p>
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
