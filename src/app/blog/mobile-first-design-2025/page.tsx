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
