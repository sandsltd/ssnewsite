import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Local SEO Guide for Yeovil Businesses: Rank Above Your Competitors",
  description: "Dominate local search results in Yeovil with our comprehensive SEO guide. From Google My Business to local citations, everything you need to know.",
  openGraph: {
    title: "Complete Local SEO Guide for Yeovil Businesses: Rank Above Your Competitors",
    description: "Dominate local search results in Yeovil with our comprehensive SEO guide. From Google My Business to local citations.",
    url: 'https://www.saunders-simmons.co.uk/blog/local-seo-yeovil-guide',
    siteName: 'Saunders Simmons Ltd',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'Local SEO Yeovil Guide - Saunders Simmons Ltd',
      },
    ],
    locale: 'en_GB',
    type: 'article',
  },
};

export default function LocalSEOYeovilPost() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Complete Local SEO Guide for Yeovil Businesses: Rank Above Your Competitors",
            "description": "Dominate local search results in Yeovil with our comprehensive SEO guide. From Google My Business to local citations, everything you need to know.",
            "image": "https://www.saunders-simmons.co.uk/logos/logo.png",
            "author": {
              "@type": "Person",
              "name": "Nick Saunders",
              "jobTitle": "Local SEO Specialist",
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
            "datePublished": "2024-12-28",
            "dateModified": "2024-12-28",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.saunders-simmons.co.uk/blog/local-seo-yeovil-guide"
            },
            "articleSection": "SEO",
            "keywords": ["Local SEO Yeovil", "Yeovil businesses", "Google My Business", "local citations", "Yeovil SEO"],
            "about": [
              {
                "@type": "Thing",
                "name": "Local SEO"
              },
              {
                "@type": "Place",
                "name": "Yeovil"
              },
              {
                "@type": "Thing",
                "name": "Google My Business"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "Yeovil",
                "addressRegion": "Somerset"
              },
              {
                "@type": "SoftwareApplication",
                "name": "Google My Business"
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
            <span className="text-gray-600">Local SEO Yeovil Guide</span>
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
              <span className="text-gray-500">December 28, 2024</span>
              <span className="text-gray-500">10 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Complete Local SEO Guide for Yeovil Businesses: Rank Above Your Competitors
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Dominate local search results in Yeovil with our comprehensive SEO guide. From Google My Business to local citations, everything you need to know.
            </p>

            <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">NS</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Nick Saunders</p>
                <p className="text-gray-500 text-sm">Local SEO Specialist</p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Yeovil businesses have a unique opportunity to dominate local search results. With focused local SEO strategies, you can outrank competitors and capture more customers searching for your services in Yeovil and surrounding areas.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Chapter 1: Google My Business Optimisation for Yeovil
            </h2>

            <p className="text-gray-700 mb-4">
              Your Google My Business profile is your most powerful local SEO tool. Here's how to optimise it for maximum Yeovil visibility:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              Essential GMB Elements:
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Complete business information with Yeovil address</li>
              <li className="text-gray-700">High-quality photos of your Yeovil location</li>
              <li className="text-gray-700">Regular posts about local Yeovil events and news</li>
              <li className="text-gray-700">Accurate opening hours and contact details</li>
              <li className="text-gray-700">Services menu with local keywords</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Chapter 2: Yeovil-Specific Keyword Strategy
            </h2>

            <div className="bg-yellow-50 p-6 rounded-lg my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                High-Value Yeovil Keywords:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div>• [Service] Yeovil</div>
                <div>• [Service] near Yeovil</div>
                <div>• Best [Service] Yeovil</div>
                <div>• Yeovil [Service] company</div>
                <div>• [Service] South Somerset</div>
                <div>• Local [Service] Yeovil</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Chapter 3: Building Local Yeovil Citations
            </h2>

            <p className="text-gray-700 mb-4">
              Citations are mentions of your business across the web. For Yeovil businesses, focus on:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Somerset County Council directories</li>
              <li className="text-gray-700">Yeovil Town Council listings</li>
              <li className="text-gray-700">Local Yeovil newspapers and magazines</li>
              <li className="text-gray-700">Yeovil Chamber of Commerce</li>
              <li className="text-gray-700">Industry-specific directories</li>
            </ul>

            <blockquote className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="text-lg text-green-900 italic">
                "Our Yeovil client went from page 3 to position #1 for 'accountants Yeovil' in just 4 months using these local SEO strategies."
              </p>
              <footer className="text-green-700 mt-2">— Nick Saunders, Local SEO Specialist</footer>
            </blockquote>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Chapter 4: Content Strategy for Yeovil Businesses
            </h2>

            <p className="text-gray-700 mb-4">
              Create content that resonates with Yeovil residents and demonstrates local expertise:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Yeovil market and events coverage</li>
              <li className="text-gray-700">Local area guides and recommendations</li>
              <li className="text-gray-700">Customer success stories from Yeovil</li>
              <li className="text-gray-700">Local business partnerships and collaborations</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Ready to Dominate Yeovil Search Results?
              </h4>
              <p className="text-gray-700 mb-4">
                Implement these local SEO strategies and watch your Yeovil business climb to the top of search results. Need help getting started?
              </p>
              <BookCallButton className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                Get Yeovil SEO Help
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
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Yeovil Web Design Success</h4>
                <p className="text-gray-600">How we increased a Yeovil business's revenue by 200% with professional web design</p>
              </Link>
              <Link href="/blog/seo-tips-dorset-businesses" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit">
                  SEO
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">SEO Tips for Dorset</h4>
                <p className="text-gray-600">10 local SEO tips to dominate Google rankings in neighboring Dorset</p>
              </Link>
              <Link href="/blog/web-design-somerset-2025" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit">
                  Web Design
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Somerset Web Design 2025</h4>
                <p className="text-gray-600">Why Somerset businesses need professional websites in 2025</p>
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
