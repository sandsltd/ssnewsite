import Link from 'next/link';
import Image from 'next/image';
import BookCallButton from '@/components/BookCallButton';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Web Design Somerset: Why Your Business Needs a Modern Website in 2025",
  description: "Discover why Somerset businesses are investing in professional web design to stay competitive. From increased conversions to better Google rankings, learn how a modern website can transform your business.",
  openGraph: {
    title: "Professional Web Design Somerset: Why Your Business Needs a Modern Website in 2025",
    description: "Discover why Somerset businesses are investing in professional web design to stay competitive. From increased conversions to better Google rankings.",
    url: 'https://www.saunders-simmons.co.uk/blog/web-design-somerset-2025',
    siteName: 'Saunders Simmons Ltd',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Somerset - Saunders Simmons Ltd',
      },
    ],
    locale: 'en_GB',
    type: 'article',
  },
};

export default function WebDesignSomersetPost() {
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
            <span className="text-gray-600">Web Design Somerset 2025</span>
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
              <span className="text-gray-500">January 8, 2025</span>
              <span className="text-gray-500">5 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Web Design Somerset: Why Your Business Needs a Modern Website in 2025
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Discover why Somerset businesses are investing in professional web design to stay competitive. From increased conversions to better Google rankings, learn how a modern website can transform your business.
            </p>

            <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SS</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Saunders Simmons Team</p>
                <p className="text-gray-500 text-sm">Web Design & SEO Specialists</p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              In 2025, having a professional website isn't just an advantage for Somerset businesses—it's essential for survival. As more customers turn to online research before making purchasing decisions, your website has become your most important sales tool.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              The Somerset Business Landscape is Changing
            </h2>

            <p className="text-gray-700 mb-6">
              Somerset's business environment is more competitive than ever. From Taunton to Bridgwater, Burnham-on-Sea to Chard, local businesses are discovering that professional web design is the key to standing out in crowded markets.
            </p>

            <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="text-lg text-blue-900 italic">
                "Our new website designed by Saunders Simmons has transformed our business. We've seen a 200% increase in online enquiries since launching our professional website."
              </p>
              <footer className="text-blue-700 mt-2">— Local Somerset Business Owner</footer>
            </blockquote>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Somerset Businesses Choose Professional Web Design
            </h3>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">
                <strong>Increased Credibility:</strong> A professional website instantly builds trust with potential customers
              </li>
              <li className="text-gray-700">
                <strong>Better Google Rankings:</strong> Modern, fast websites rank higher in search results
              </li>
              <li className="text-gray-700">
                <strong>Mobile-First Design:</strong> Over 70% of Somerset residents browse on mobile devices
              </li>
              <li className="text-gray-700">
                <strong>Conversion Optimisation:</strong> Professional design converts visitors into customers
              </li>
              <li className="text-gray-700">
                <strong>Competitive Advantage:</strong> Stand out from competitors with outdated websites
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              The ROI of Professional Web Design in Somerset
            </h3>

            <p className="text-gray-700 mb-6">
              Somerset businesses investing in professional web design typically see returns within 6-12 months. Here's what our clients achieve:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Average Results for Somerset Businesses:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">300%</div>
                  <div className="text-gray-600">Increase in Online Enquiries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">250%</div>
                  <div className="text-gray-600">Boost in Search Rankings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">180%</div>
                  <div className="text-gray-600">Rise in Revenue</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              What Makes Somerset Web Design Different?
            </h3>

            <p className="text-gray-700 mb-6">
              At Saunders Simmons, we understand the unique challenges facing Somerset businesses. Whether you're targeting tourists visiting Glastonbury, serving the agricultural community, or running a high-street shop in Yeovil, we create websites that speak to your local audience.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Our Somerset Web Design Process:
            </h4>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li className="text-gray-700"><strong>Local Market Research:</strong> Understanding your Somerset customer base</li>
              <li className="text-gray-700"><strong>Competitor Analysis:</strong> Identifying opportunities to outrank local competitors</li>
              <li className="text-gray-700"><strong>Custom Design:</strong> Creating a unique website that reflects your brand</li>
              <li className="text-gray-700"><strong>Local SEO Integration:</strong> Ensuring you rank for "Somerset" searches</li>
              <li className="text-gray-700"><strong>Ongoing Support:</strong> Monthly updates and optimisation</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ready to Transform Your Somerset Business?
            </h3>

            <p className="text-gray-700 mb-6">
              Don't let outdated web design hold your Somerset business back. Professional web design is an investment that pays dividends through increased visibility, credibility, and revenue.
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Special Offer for Somerset Businesses
              </h4>
              <p className="text-gray-700 mb-4">
                Book a free consultation this month and receive a complimentary SEO audit worth £300. We'll show you exactly how professional web design can transform your business.
              </p>
              <BookCallButton className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                Claim Your Free Consultation
              </BookCallButton>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/seo-tips-dorset-businesses" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">SEO for Dorset Businesses</h4>
                <p className="text-gray-600">10 Local SEO tips to dominate Google in 2025</p>
              </Link>
              <Link href="/blog/web-design-yeovil-case-study" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Web Design Yeovil Case Study</h4>
                <p className="text-gray-600">How we increased a local business's revenue by 200%</p>
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
