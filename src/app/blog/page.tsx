import Link from 'next/link';
import Image from 'next/image';
import BookCallButton from '@/components/BookCallButton';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'web-design-somerset-2025',
    title: 'Professional Web Design Somerset: Why Your Business Needs a Modern Website in 2025',
    excerpt: 'Discover why Somerset businesses are investing in professional web design to stay competitive. From increased conversions to better Google rankings, learn how a modern website can transform your business.',
    content: 'Full blog post content here...',
    author: 'Saunders Simmons Team',
    date: '2025-01-08',
    category: 'Web Design',
    tags: ['Web Design Somerset', 'Professional Websites', 'Business Growth'],
    image: '/logos/logo.png',
    readTime: '5 min read'
  },
  {
    id: 'seo-tips-dorset-businesses',
    title: 'SEO for Dorset Businesses: 10 Local SEO Tips to Dominate Google in 2025',
    excerpt: 'Local Dorset businesses are missing out on customers every day due to poor SEO. Learn our proven strategies to rank #1 on Google and attract more local customers.',
    content: 'Full blog post content here...',
    author: 'Dan Simmons',
    date: '2025-01-06',
    category: 'SEO',
    tags: ['SEO Dorset', 'Local SEO', 'Google Rankings'],
    image: '/logos/logo.png',
    readTime: '8 min read'
  },
  {
    id: 'web-design-yeovil-case-study',
    title: 'Web Design Yeovil Case Study: How We Increased a Local Business\'s Revenue by 200%',
    excerpt: 'See how our professional web design services helped a Yeovil business double their online revenue. Real results, real numbers, and the strategies that made it happen.',
    content: 'Full blog post content here...',
    author: 'Nick Saunders',
    date: '2025-01-04',
    category: 'Case Studies',
    tags: ['Web Design Yeovil', 'Case Study', 'Business Growth'],
    image: '/logos/logo.png',
    readTime: '6 min read'
  },
  {
    id: 'website-redesign-roi',
    title: 'The ROI of Website Redesign: Why Somerset & Dorset Businesses See 300% Returns',
    excerpt: 'Think a website redesign is expensive? Think again. Discover why businesses across Somerset and Dorset are seeing massive returns on their web design investments.',
    content: 'Full blog post content here...',
    author: 'Saunders Simmons Team',
    date: '2025-01-02',
    category: 'Business Strategy',
    tags: ['Website Redesign', 'ROI', 'Somerset Business', 'Dorset Business'],
    image: '/logos/logo.png',
    readTime: '7 min read'
  },
  {
    id: 'mobile-first-design-2025',
    title: 'Mobile-First Web Design: Essential for Somerset & Dorset Businesses in 2025',
    excerpt: 'With 70% of local searches happening on mobile, your website must be mobile-first. Learn why responsive design is crucial for Somerset and Dorset businesses.',
    content: 'Full blog post content here...',
    author: 'Dan Simmons',
    date: '2024-12-30',
    category: 'Web Design',
    tags: ['Mobile Design', 'Responsive Web Design', 'User Experience'],
    image: '/logos/logo.png',
    readTime: '5 min read'
  },
  {
    id: 'local-seo-yeovil-guide',
    title: 'Complete Local SEO Guide for Yeovil Businesses: Rank Above Your Competitors',
    excerpt: 'Dominate local search results in Yeovil with our comprehensive SEO guide. From Google My Business to local citations, everything you need to know.',
    content: 'Full blog post content here...',
    author: 'Nick Saunders',
    date: '2024-12-28',
    category: 'SEO',
    tags: ['Local SEO Yeovil', 'Google My Business', 'Local Rankings'],
    image: '/logos/logo.png',
    readTime: '10 min read'
  }
];

const categories = ['All', 'Web Design', 'SEO', 'Case Studies', 'Business Strategy'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Web Design & SEO Insights
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert insights on web design, SEO, and digital marketing to help Somerset, Dorset, and Yeovil businesses grow online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              Web Design Somerset
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              SEO Dorset
            </span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
              Web Design Yeovil
            </span>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center">
                    <Image
                      src={blogPosts[0].image}
                      alt="Featured post"
                      width={200}
                      height={200}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].id}`}
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={100}
                    height={100}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      post.category === 'Web Design' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'SEO' ? 'bg-green-100 text-green-800' :
                      post.category === 'Case Studies' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <p>{post.author}</p>
                      <p>{post.date}</p>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business Online?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're in Somerset, Dorset, or Yeovil, we're here to help your business succeed with professional web design and proven SEO strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookCallButton className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-lg shadow-lg">
              Book Your Free Consultation
            </BookCallButton>
            <Link
              href="/#pricing"
              className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 text-lg"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

