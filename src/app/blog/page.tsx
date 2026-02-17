import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

const pillarLabels: Record<string, string> = {
  "web-design": "Web Design",
  "seo-marketing": "SEO & Marketing",
  "software-development": "Software Development",
};

// Legacy static blog posts (pre-SEO-agent)
const legacyPosts = [
  {
    slug: "web-design-somerset-2025",
    title: "Professional Web Design Somerset: Why Your Business Needs a Modern Website in 2025",
    description: "Discover why Somerset businesses are investing in professional web design to stay competitive.",
    category: "Web Design",
    date: "2025-01-08",
  },
  {
    slug: "seo-tips-dorset-businesses",
    title: "SEO for Dorset Businesses: 10 Local SEO Tips to Dominate Google in 2025",
    description: "Local Dorset businesses are missing out on customers every day due to poor SEO.",
    category: "SEO",
    date: "2025-01-06",
  },
  {
    slug: "web-design-yeovil-case-study",
    title: "Web Design Yeovil Case Study: How We Increased a Local Business's Revenue by 200%",
    description: "See how our professional web design services helped a Yeovil business double their online revenue.",
    category: "Case Studies",
    date: "2025-01-04",
  },
  {
    slug: "website-redesign-roi",
    title: "The ROI of Website Redesign: Why Somerset & Dorset Businesses See 300% Returns",
    description: "Think a website redesign is expensive? Discover why businesses are seeing massive returns.",
    category: "Business Strategy",
    date: "2025-01-02",
  },
  {
    slug: "mobile-first-design-2025",
    title: "Mobile-First Web Design: Essential for Somerset & Dorset Businesses in 2025",
    description: "With 70% of local searches happening on mobile, your website must be mobile-first.",
    category: "Web Design",
    date: "2024-12-30",
  },
  {
    slug: "local-seo-yeovil-guide",
    title: "Complete Local SEO Guide for Yeovil Businesses: Rank Above Your Competitors",
    description: "Dominate local search results in Yeovil with our comprehensive SEO guide.",
    category: "SEO",
    date: "2024-12-28",
  },
];

export default function BlogPage() {
  const mdxPosts = getAllPosts();

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog</h1>
        <p className="text-gray-500 mb-12">
          Expert insights on web design, SEO, and software development — helping
          UK businesses succeed online.
        </p>

        <div className="space-y-8">
          {/* MDX blog posts (from SEO agent) */}
          {mdxPosts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8">
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex flex-col sm:flex-row gap-6">
                  {post.heroImage && (
                    <div className="relative w-full sm:w-48 h-36 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={post.heroImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full text-blue-700 bg-blue-100">
                        {pillarLabels[post.pillar] || post.pillar}
                      </span>
                      <time className="text-sm text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 mt-2">{post.description}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}

          {/* Legacy static blog posts */}
          {legacyPosts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8">
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full text-gray-700 bg-gray-100">
                      {post.category}
                    </span>
                    <time className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 mt-2">{post.description}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
