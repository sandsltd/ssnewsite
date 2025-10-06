import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile-First Web Design: Essential for Somerset & Dorset Businesses in 2025",
  description: "With 70% of local searches happening on mobile, your website must be mobile-first. Learn why responsive design is crucial for Somerset and Dorset businesses.",
  openGraph: {
    title: "Mobile-First Web Design: Essential for Somerset & Dorset Businesses in 2025",
    description: "With 70% of local searches happening on mobile, your website must be mobile-first. Learn why responsive design is crucial.",
    url: 'https://www.saunders-simmons.co.uk/blog/mobile-first-design-2025',
    siteName: 'Saunders Simmons Ltd',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mobile-First Design - Saunders Simmons Ltd',
      },
    ],
    locale: 'en_GB',
    type: 'article',
  },
};

export default function MobileFirstDesignPost() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Mobile-First Web Design: Essential for Somerset & Dorset Businesses in 2025",
            "description": "With 70% of local searches happening on mobile, your website must be mobile-first. Learn why responsive design is crucial for Somerset and Dorset businesses.",
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
            "datePublished": "2024-12-30",
            "dateModified": "2024-12-30",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.saunders-simmons.co.uk/blog/mobile-first-design-2025"
            },
            "articleSection": "Web Design",
            "keywords": ["Mobile Design", "Responsive Web Design", "User Experience", "mobile-first", "Somerset businesses"],
            "about": [
              {
                "@type": "Thing",
                "name": "Mobile-First Design"
              },
              {
                "@type": "Thing",
                "name": "Responsive Web Design"
              },
              {
                "@type": "Thing",
                "name": "User Experience"
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
                "name": "Mobile Web Design",
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
            <span className="text-gray-600">Mobile-First Design 2025</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Web Design
              </span>
              <span className="text-gray-500">December 30, 2024</span>
              <span className="text-gray-500">5 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Mobile-First Web Design: Essential for Somerset & Dorset Businesses in 2025
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              With 70% of local searches happening on mobile, your website must be mobile-first. Learn why responsive design is crucial for Somerset and Dorset businesses.
            </p>

            <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">DS</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Dan Simmons</p>
                <p className="text-gray-500 text-sm">Web Design Specialist</p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <h3 className="text-lg font-bold text-red-900 mb-2">The Mobile Reality</h3>
              <p className="text-red-800">
                73% of Somerset and Dorset residents use mobile devices to search for local businesses. If your website isn't mobile-optimised, you're losing 3 out of 4 potential customers.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Why Mobile-First Design Matters in 2025
            </h2>

            <p className="text-gray-700 mb-6">
              Mobile-first design means designing for mobile devices first, then scaling up to larger screens. This approach ensures your Somerset or Dorset business captures the growing mobile market.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Mobile Usage Statistics for Somerset & Dorset:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>📱 73% use mobile for local searches</div>
                  <div>⏰ 68% search on mobile during business hours</div>
                  <div>🏪 81% visit stores after mobile search</div>
                </div>
                <div className="space-y-3">
                  <div>💰 Mobile users spend 40% more</div>
                  <div>⚡ 3 seconds: max acceptable load time</div>
                  <div>📞 67% call businesses directly from mobile</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Key Elements of Mobile-First Design
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              1. Fast Loading Speeds
            </h3>
            <p className="text-gray-700 mb-4">
              Mobile users expect websites to load in under 3 seconds. Every additional second reduces conversions by 20%.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              2. Touch-Friendly Navigation
            </h3>
            <p className="text-gray-700 mb-4">
              Buttons and links must be large enough for fingers, with adequate spacing to prevent accidental clicks.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              3. Simplified Content Layout
            </h3>
            <p className="text-gray-700 mb-4">
              Mobile screens require concise, scannable content with clear hierarchy and prominent call-to-action buttons.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              4. Local Information Prominence
            </h3>
            <p className="text-gray-700 mb-6">
              Phone numbers, addresses, and opening hours should be immediately visible and clickable on mobile devices.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Ready for Mobile-First Success?
              </h4>
              <p className="text-gray-700 mb-4">
                Don't let your Somerset or Dorset business lose customers to mobile-optimised competitors. Book a free mobile audit today.
              </p>
              <BookCallButton className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Get Free Mobile Audit
              </BookCallButton>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/web-design-somerset-2025" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit">
                  Web Design
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Somerset Web Design 2025</h4>
                <p className="text-gray-600">Why Somerset businesses need professional websites in 2025</p>
              </Link>
              <Link href="/blog/web-design-yeovil-case-study" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit">
                  Case Study
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Mobile Success Story</h4>
                <p className="text-gray-600">How mobile-first design increased a Yeovil business revenue by 200%</p>
              </Link>
              <Link href="/blog/website-redesign-roi" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit">
                  Business Strategy
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Website Redesign ROI</h4>
                <p className="text-gray-600">Why mobile-first redesigns deliver 300% returns</p>
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
