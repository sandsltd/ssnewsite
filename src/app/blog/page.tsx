import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

const pillarLabels: Record<string, string> = {
  'web-design': 'Websites',
  'seo-marketing': 'Digital business',
  'software-development': 'Software',
};

const historicalPosts = [
  { slug: 'web-design-somerset-2025', title: 'Professional Web Design Somerset: Why Your Business Needs a Modern Website in 2025', date: '2025-01-08' },
  { slug: 'seo-tips-dorset-businesses', title: 'SEO for Dorset Businesses: 10 Local SEO Tips to Dominate Google in 2025', date: '2025-01-06' },
  { slug: 'web-design-yeovil-case-study', title: "Web Design Yeovil Case Study: How We Increased a Local Business's Revenue by 200%", date: '2025-01-04' },
  { slug: 'website-redesign-roi', title: 'The ROI of Website Redesign: Why Somerset & Dorset Businesses See 300% Returns', date: '2025-01-02' },
  { slug: 'local-seo-yeovil-guide', title: 'Complete Local SEO Guide for Yeovil Businesses: Rank Above Your Competitors', date: '2024-12-28' },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="ss-shell">
      <section className="ss-page-intro">
        <p className="ss-eyebrow">From the archive</p>
        <h1 className="ss-display">Ideas &amp;<br />perspectives.</h1>
        <p className="ss-intro-copy">Our writing on websites, software and running a business online. Earlier articles remain here as reference material.</p>
      </section>
      <section className="ss-section" aria-label="Articles">
        {posts.map((post) => (
          <article key={post.slug} className="ss-editorial-card" style={{ borderBottom: '1px solid #dededb', padding: '28px 0' }}>
            <p className="ss-eyebrow">{pillarLabels[post.pillar] || post.pillar} <span aria-hidden="true"> / </span> <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time></p>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 2rem)', lineHeight: 1.25, maxWidth: '900px', margin: '12px 0' }}><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p style={{ maxWidth: '850px', color: '#666', lineHeight: 1.7 }}>{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="ss-text-link">Read article <span aria-hidden="true">↗</span></Link>
          </article>
        ))}
      </section>
      <section className="ss-section">
        <p className="ss-eyebrow">Earlier writing</p>
        <h2 className="ss-section-heading">The original archive.</h2>
        {historicalPosts.map((post) => (
          <article key={post.slug} style={{ borderBottom: '1px solid #dededb', padding: '24px 0' }}>
            <p className="ss-eyebrow"><time dateTime={post.date}>{formatDate(post.date)}</time></p>
            <h3 style={{ fontSize: '1.3rem', marginTop: '12px' }}><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
          </article>
        ))}
      </section>
    </div>
  );
}
