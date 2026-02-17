import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/blog";

const pillarLabels: Record<string, string> = {
  "web-design": "Web Design",
  "seo-marketing": "SEO & Marketing",
  "software-development": "Software Development",
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Saunders Simmons Blog`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      url: `https://www.saunders-simmons.co.uk/blog/${slug}`,
      ...(post.heroImage ? { images: [post.heroImage] } : {}),
    },
    alternates: {
      canonical: `https://www.saunders-simmons.co.uk/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Saunders Simmons Ltd",
      url: "https://www.saunders-simmons.co.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "Saunders Simmons Ltd",
      url: "https://www.saunders-simmons.co.uk",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.saunders-simmons.co.uk/blog/${slug}`,
    },
    keywords: post.keywords?.join(", "),
  };

  const relatedPosts = getRelatedPosts(slug, post.keywords || []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8 block"
          >
            &larr; Back to blog
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-3">
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
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {post.title}
              </h1>
            </header>

            {post.heroImage && (
              <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden mb-8">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-base prose-p:leading-relaxed prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-ul:my-4 prose-ol:my-4">
              <MDXRemote source={post.content} />
            </div>
          </article>

          {/* CTA Section */}
          <div className="mt-12 rounded-lg bg-gray-900 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to grow your business online?
            </h2>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Saunders Simmons builds professional websites, runs effective SEO
              campaigns, and develops custom software — all tailored to your
              business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#contact"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="inline-block rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 border-t border-gray-200 pt-10">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Related Articles
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block rounded-lg border border-gray-200 p-5 hover:border-blue-500 hover:shadow-sm transition-all"
                  >
                    <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-semibold rounded-full text-blue-700 bg-blue-100 mb-2">
                      {pillarLabels[related.pillar] || related.pillar}
                    </span>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm leading-snug mb-2">
                      {related.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {related.description}
                    </p>
                    <time className="block mt-3 text-xs text-gray-500">
                      {new Date(related.publishedAt).toLocaleDateString(
                        "en-GB",
                        { day: "numeric", month: "short", year: "numeric" }
                      )}
                    </time>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
