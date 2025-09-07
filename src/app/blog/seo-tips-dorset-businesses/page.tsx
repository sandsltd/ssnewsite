import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO for Dorset Businesses: 10 Local SEO Tips to Dominate Google in 2025",
  description: "Local Dorset businesses are missing out on customers every day due to poor SEO. Learn our proven strategies to rank #1 on Google and attract more local customers.",
  openGraph: {
    title: "SEO for Dorset Businesses: 10 Local SEO Tips to Dominate Google in 2025",
    description: "Local Dorset businesses are missing out on customers every day due to poor SEO. Learn our proven strategies to rank #1 on Google.",
    url: 'https://www.saunders-simmons.co.uk/blog/seo-tips-dorset-businesses',
    siteName: 'Saunders Simmons Ltd',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Dorset - Saunders Simmons Ltd',
      },
    ],
    locale: 'en_GB',
    type: 'article',
  },
};

export default function SEODorsetPost() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "SEO for Dorset Businesses: 10 Local SEO Tips to Dominate Google in 2025",
            "description": "Local Dorset businesses are missing out on customers every day due to poor SEO. Learn our proven strategies to rank #1 on Google and attract more local customers.",
            "image": "https://www.saunders-simmons.co.uk/logos/logo.png",
            "author": {
              "@type": "Person",
              "name": "Dan Simmons",
              "jobTitle": "Marketing Director & Co-Founder",
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
            "datePublished": "2025-01-06",
            "dateModified": "2025-01-06",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.saunders-simmons.co.uk/blog/seo-tips-dorset-businesses"
            },
            "articleSection": "SEO",
            "keywords": ["SEO Dorset", "Local SEO", "Google Rankings", "Dorset businesses", "local SEO tips"],
            "about": [
              {
                "@type": "Thing",
                "name": "Local SEO"
              },
              {
                "@type": "Place",
                "name": "Dorset"
              },
              {
                "@type": "Thing",
                "name": "Google Rankings"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "Dorset",
                "containedInPlace": {
                  "@type": "Country",
                  "name": "United Kingdom"
                }
              },
              {
                "@type": "SoftwareApplication",
                "name": "Google My Business"
              },
              {
                "@type": "Service",
                "name": "SEO Services",
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
            <span className="text-gray-600">SEO Dorset Businesses</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                SEO
              </span>
              <span className="text-gray-500">January 6, 2025</span>
              <span className="text-gray-500">8 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              SEO for Dorset Businesses: 10 Local SEO Tips to Dominate Google in 2025
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Local Dorset businesses are missing out on customers every day due to poor SEO. Learn our proven strategies to rank #1 on Google and attract more local customers.
            </p>

            <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">DS</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Dan Simmons</p>
                <p className="text-gray-500 text-sm">SEO Specialist & Co-Founder</p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              If your Dorset business isn't showing up on the first page of Google, you're losing customers to competitors every single day. In 2025, local SEO isn't optional—it's essential for survival in markets from Dorchester to Poole, Weymouth to Bournemouth.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <h3 className="text-lg font-bold text-red-900 mb-2">The Dorset SEO Problem</h3>
              <p className="text-red-800">
                78% of Dorset businesses we've audited aren't appearing in local search results for their main services. That's thousands of potential customers going to competitors instead.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              10 Proven Local SEO Tips for Dorset Businesses
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Optimise Your Google My Business Profile
            </h3>

            <p className="text-gray-700 mb-4">
              Your Google My Business (GMB) profile is your most powerful local SEO tool. Dorset businesses with complete GMB profiles get 70% more customer actions than incomplete ones.
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Add high-quality photos of your Dorset location</li>
              <li className="text-gray-700">Include accurate opening hours and contact details</li>
              <li className="text-gray-700">Select the most specific business category</li>
              <li className="text-gray-700">Add services with local keywords (e.g., "Plumbing Dorchester")</li>
              <li className="text-gray-700">Post regular updates about your business</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Target Dorset-Specific Keywords
            </h3>

            <p className="text-gray-700 mb-4">
              Generic keywords are too competitive. Target location-specific terms that Dorset customers actually search for:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">High-Value Dorset Keywords:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div>• [Service] Dorchester</div>
                <div>• [Service] Poole</div>
                <div>• [Service] Weymouth</div>
                <div>• [Service] Bournemouth</div>
                <div>• [Service] Blandford Forum</div>
                <div>• [Service] Sherborne</div>
                <div>• [Service] near me</div>
                <div>• Best [Service] Dorset</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Build Local Dorset Citations
            </h3>

            <p className="text-gray-700 mb-4">
              Citations are mentions of your business name, address, and phone number (NAP) across the web. Dorset businesses need consistent citations on:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Dorset County Council business directory</li>
              <li className="text-gray-700">Visit Dorset tourism listings</li>
              <li className="text-gray-700">Local Dorset newspapers (Dorset Echo, Bournemouth Echo)</li>
              <li className="text-gray-700">Industry-specific directories</li>
              <li className="text-gray-700">Yelp, Facebook, and other major platforms</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Create Location-Specific Content
            </h3>

            <p className="text-gray-700 mb-4">
              Google loves businesses that create content about their local area. Write about:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Dorset events your business supports</li>
              <li className="text-gray-700">Local landmarks near your business</li>
              <li className="text-gray-700">Dorset customer success stories</li>
              <li className="text-gray-700">Local area guides and tips</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Collect and Respond to Google Reviews
            </h3>

            <p className="text-gray-700 mb-4">
              Reviews are a major ranking factor for local SEO. Dorset businesses with 40+ reviews rank significantly higher than those with fewer reviews.
            </p>

            <blockquote className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="text-lg text-green-900 italic">
                "Since implementing our review strategy, our Dorset client went from 8 reviews to 127 reviews in 6 months. Their Google rankings improved dramatically."
              </p>
              <footer className="text-green-700 mt-2">— Dan Simmons, SEO Specialist</footer>
            </blockquote>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Optimise for Mobile Searches
            </h3>

            <p className="text-gray-700 mb-4">
              72% of Dorset residents use mobile devices to search for local businesses. Your website must:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Load in under 3 seconds on mobile</li>
              <li className="text-gray-700">Have click-to-call phone numbers</li>
              <li className="text-gray-700">Display your address prominently</li>
              <li className="text-gray-700">Include clear contact forms</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Use Local Schema Markup
            </h3>

            <p className="text-gray-700 mb-6">
              Schema markup helps Google understand your business better. Include LocalBusiness schema with your Dorset address, phone number, and opening hours.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Build Links from Dorset Websites
            </h3>

            <p className="text-gray-700 mb-4">
              Links from local Dorset websites carry more weight for local rankings. Target:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Local Dorset business associations</li>
              <li className="text-gray-700">Dorset charity organisations</li>
              <li className="text-gray-700">Local event sponsorships</li>
              <li className="text-gray-700">Dorset news outlets</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. Track Local SEO Performance
            </h3>

            <p className="text-gray-700 mb-4">
              Monitor your progress with tools like Google Analytics, Google Search Console, and local rank tracking for Dorset-specific keywords.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10. Stay Consistent with NAP Information
            </h3>

            <p className="text-gray-700 mb-6">
              Ensure your business Name, Address, and Phone number are identical across all online platforms. Inconsistent information confuses Google and hurts rankings.
            </p>

            <div className="bg-green-50 p-6 rounded-lg my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Dorset SEO Success Story
              </h4>
              <p className="text-gray-700 mb-4">
                A Bournemouth-based contractor implemented these 10 tips and saw:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600">400%</div>
                  <div className="text-gray-600">Increase in Local Visibility</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">250%</div>
                  <div className="text-gray-600">More Phone Enquiries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">180%</div>
                  <div className="text-gray-600">Revenue Growth</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ready to Dominate Dorset Search Results?
            </h3>

            <p className="text-gray-700 mb-6">
              Implementing these 10 local SEO tips will help your Dorset business rank higher, attract more customers, and grow revenue. But SEO takes time and expertise to get right.
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Free SEO Audit for Dorset Businesses
              </h4>
              <p className="text-gray-700 mb-4">
                Want to see how your Dorset business ranks for local searches? Book a free consultation and receive a comprehensive SEO audit showing exactly what's holding you back.
              </p>
              <BookCallButton className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                Get Your Free SEO Audit
              </BookCallButton>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/local-seo-yeovil-guide" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit">
                  SEO
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Local SEO Yeovil Guide</h4>
                <p className="text-gray-600">Complete guide to ranking above competitors in neighboring Yeovil</p>
              </Link>
              <Link href="/blog/web-design-somerset-2025" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit">
                  Web Design
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Somerset Web Design 2025</h4>
                <p className="text-gray-600">Why Somerset businesses need modern websites in 2025</p>
              </Link>
              <Link href="/blog/web-design-yeovil-case-study" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit">
                  Case Study
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Yeovil Case Study</h4>
                <p className="text-gray-600">How SEO and web design increased revenue by 200%</p>
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
