# Saunders Simmons SEO Agent — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Set up the full SEO agent pipeline for saunders-simmons.co.uk — market research, blog infrastructure, automated content generation, rankings tracking, and portal registration.

**Architecture:** Follows the PaperRoute MDX pattern exactly. SEO agent runs weekly via GitHub Actions, checking GSC rankings, generating/refreshing blog posts with Claude, adding internal links, tracking competitors, generating SEO recommendations, and emailing reports. All runs logged to Supabase.

**Tech Stack:** Next.js 16 (App Router), TypeScript, MDX (gray-matter + next-mdx-remote), Claude Sonnet 4.5, Google Search Console API, Resend, Supabase, GitHub Actions.

**Reference implementation:** `/Users/nick/Documents/code/paperroute_website/scripts/seo-agent/`

**Important note on slug:** The user requested `saunders-simmons` but Supabase table auto-discovery strips `_runs` suffix and uses the remainder as slug. The table `saunders_simmons_runs` produces slug `saunders_simmons`. Use `saunders_simmons` throughout for consistency. The display name is "Saunders Simmons".

---

### Task 1: Install Dependencies

**Files:**
- Modify: `/Users/nick/Documents/websites/sands/package.json`

**Step 1: Install production and dev dependencies**

Run:
```bash
cd /Users/nick/Documents/websites/sands && npm install next-mdx-remote @supabase/supabase-js resend googleapis && npm install -D @anthropic-ai/sdk tsx
```

`gray-matter` is already installed.

**Step 2: Verify installation**

Run: `cd /Users/nick/Documents/websites/sands && npm ls next-mdx-remote @supabase/supabase-js resend googleapis @anthropic-ai/sdk tsx`
Expected: All packages listed with versions, no errors.

**Step 3: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add package.json package-lock.json && git commit -m "chore: add SEO agent dependencies"
```

---

### Task 2: Copy Blog Images

**Step 1: Create directory and copy images**

```bash
mkdir -p /Users/nick/Documents/websites/sands/public/images/blog
cp /Users/nick/Documents/code/images/sands-digital-agency/webp/*.webp /Users/nick/Documents/websites/sands/public/images/blog/
```

**Step 2: Verify 50 images copied**

Run: `ls /Users/nick/Documents/websites/sands/public/images/blog/ | wc -l`
Expected: `50`

**Step 3: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add public/images/blog/ && git commit -m "chore: add 50 blog hero images"
```

---

### Task 3: Create Blog Library

**Files:**
- Create: `src/lib/blog.ts`

**Step 1: Create the blog library**

Create `src/lib/blog.ts` with this content:

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  targetKeyword: string;
  author: string;
  pillar: "web-design" | "seo-marketing" | "software-development";
  heroImage?: string;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: data.slug || filename.replace(".mdx", ""),
      title: data.title || "Untitled",
      description: data.description || "",
      keywords: data.keywords || [],
      publishedAt: data.publishedAt || "",
      targetKeyword: data.targetKeyword || "",
      author: data.author || "Saunders Simmons",
      pillar: data.pillar || "web-design",
      heroImage: data.heroImage || undefined,
    };
  });

  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPostWithContent | null {
  if (!fs.existsSync(blogDir)) return null;

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

  for (const filename of files) {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const postSlug = data.slug || filename.replace(".mdx", "");

    if (postSlug === slug) {
      return {
        slug: postSlug,
        title: data.title || "Untitled",
        description: data.description || "",
        keywords: data.keywords || [],
        publishedAt: data.publishedAt || "",
        targetKeyword: data.targetKeyword || "",
        author: data.author || "Saunders Simmons",
        pillar: data.pillar || "web-design",
        heroImage: data.heroImage || undefined,
        content,
      };
    }
  }

  return null;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getRelatedPosts(
  currentSlug: string,
  currentKeywords: string[],
  count: number = 3
): BlogPost[] {
  const allPosts = getAllPosts().filter((p) => p.slug !== currentSlug);
  if (allPosts.length === 0) return [];

  const currentKw = new Set(currentKeywords.map((k) => k.toLowerCase()));

  const scored = allPosts.map((post) => {
    const postKw = post.keywords.map((k) => k.toLowerCase());
    const overlap = postKw.filter((k) => currentKw.has(k)).length;
    const currentWords = new Set(
      currentKeywords.join(" ").toLowerCase().split(/\s+/)
    );
    const titleWords = post.title.toLowerCase().split(/\s+/);
    const titleOverlap = titleWords.filter((w) => currentWords.has(w)).length;
    return { post, score: overlap * 3 + titleOverlap };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.post);
}
```

**Step 2: Create content/blog directory**

```bash
mkdir -p /Users/nick/Documents/websites/sands/content/blog
```

**Step 3: Verify build**

Run: `cd /Users/nick/Documents/websites/sands && npx next build`
Expected: Build succeeds with no errors.

**Step 4: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add src/lib/blog.ts && git commit -m "feat: add MDX blog library"
```

---

### Task 4: Create Blog Listing Page

**Files:**
- Create: `src/app/blog/page.tsx`

**Step 1: Create the blog listing page**

The Sands site uses `Header` and `Footer` from the root layout — so blog pages DON'T need to import them. The layout wraps all children automatically.

Pillar labels for this site:
- `web-design` → "Web Design"
- `seo-marketing` → "SEO & Marketing"
- `software-development` → "Software Development"

Create `src/app/blog/page.tsx`:

```tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Saunders Simmons — Web Design & Digital Marketing Insights",
  description:
    "Expert guides on web design, SEO, digital marketing, and software development for UK businesses. Tips and strategies from Saunders Simmons Ltd.",
  keywords: [
    "web design blog",
    "SEO tips UK",
    "digital marketing blog",
    "software development insights",
  ],
  alternates: {
    canonical: "https://www.saunders-simmons.co.uk/blog",
  },
};

const pillarLabels: Record<string, string> = {
  "web-design": "Web Design",
  "seo-marketing": "SEO & Marketing",
  "software-development": "Software Development",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog</h1>
        <p className="text-gray-500 mb-12">
          Expert insights on web design, SEO, and software development — helping
          UK businesses succeed online.
        </p>

        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet. Check back soon.</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
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
          </div>
        )}
      </div>
    </section>
  );
}
```

**Step 2: Verify build**

Run: `cd /Users/nick/Documents/websites/sands && npx next build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add src/app/blog/page.tsx && git commit -m "feat: add blog listing page"
```

---

### Task 5: Create Blog Post Page

**Files:**
- Create: `src/app/blog/[slug]/page.tsx`

**Step 1: Create the blog post page**

Create `src/app/blog/[slug]/page.tsx`:

```tsx
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
```

**Step 2: Verify build**

Run: `cd /Users/nick/Documents/websites/sands && npx next build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add src/app/blog/[slug]/page.tsx && git commit -m "feat: add blog post page with hero image, schema, and related posts"
```

---

### Task 6: Update Sitemap

**Files:**
- Modify: `src/app/sitemap.ts`

**Step 1: Add MDX blog posts to sitemap**

Add a new section to `sitemap.ts` that reads from `content/blog/` (MDX files) alongside the existing `content/posts/` section. Add after the existing `blogPosts` try/catch block (around line 64):

```typescript
// New MDX blog posts from SEO agent
let mdxBlogPosts: MetadataRoute.Sitemap = []

try {
  const mdxDirectory = path.join(process.cwd(), 'content', 'blog')

  if (fs.existsSync(mdxDirectory)) {
    const files = fs.readdirSync(mdxDirectory).filter(file => file.endsWith('.mdx'))

    mdxBlogPosts = files.map(file => {
      const filePath = path.join(mdxDirectory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)

      const slug = data.slug || file.replace('.mdx', '')

      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: data.publishedAt ? new Date(data.publishedAt) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }
    })
  }
} catch (error) {
  console.error('Error reading MDX blog posts for sitemap:', error)
}
```

Also add a `/blog` listing page entry to `staticPages`:

```typescript
{
  url: `${baseUrl}/blog`,
  lastModified: new Date(),
  changeFrequency: 'weekly' as const,
  priority: 0.8,
},
```

Update the return to include `mdxBlogPosts`:

```typescript
return [...staticPages, ...blogPosts, ...mdxBlogPosts, ...oldBlogPosts]
```

**Step 2: Verify build**

Run: `cd /Users/nick/Documents/websites/sands && npx next build`

**Step 3: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add src/app/sitemap.ts && git commit -m "feat: add MDX blog posts to sitemap"
```

---

### Task 7: Market Research & Strategy Document

**Files:**
- Create: `docs/seo-strategy.md`

**Step 1: Research competitors and keywords**

Use web search to research:
- Top web design agencies in Yeovil/Somerset/Dorset
- SEO agencies in Somerset
- Software development companies in the area
- Their websites, title tags, services, blog presence

**Step 2: Create the strategy document**

Create `docs/seo-strategy.md` following the EXACT format from the playbook. Critical format requirements:
- Position column values MUST be `Position X.X` or `Not indexed yet`
- Table columns: `| # | Keyword | Current Position | Last Checked | Target Page | Notes |`
- Content Strategy list uses numbered items with quoted keywords: `1. "keyword": description`
- Competitor Watchlist table with sitemap URLs
- Session Log with instructions blockquote

The strategy doc must include:

**Tier 1 — Primary keywords** (6-8): Focus on location + service (e.g. "web design yeovil", "website design somerset", "SEO services yeovil")

**Tier 2 — Secondary keywords** (6-8): Service-specific (e.g. "wordpress web design somerset", "ecommerce website design", "local SEO services")

**Tier 3 — Long-tail / Blog targets** (6-8): Informational (e.g. "how much does a website cost UK", "best SEO strategies for small businesses")

**Content Strategy**: 15-20 blog topics with quoted keywords, ordered by priority.

**Competitor Watchlist**: 4-6 direct competitors with sitemap URLs.

**Step 3: Verify the document parses correctly**

Check that:
- Keyword tables have numeric first column
- Section headers match expected format (`## Keyword Rankings Tracker`, `## Competitor Watchlist`, `## Session Log`)
- Content priority list uses `"quoted keywords"`

**Step 4: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add docs/seo-strategy.md && git commit -m "docs: add SEO strategy document with keyword tiers and competitor watchlist"
```

---

### Task 8: SEO Agent — config.ts

**Files:**
- Create: `scripts/seo-agent/config.ts`

**Step 1: Create config**

```bash
mkdir -p /Users/nick/Documents/websites/sands/scripts/seo-agent
```

Create `scripts/seo-agent/config.ts`:

```typescript
export const CONFIG = {
  // Google Search Console
  gscSiteUrl: "sc-domain:saunders-simmons.co.uk",

  // File paths
  strategyDocPath: "docs/seo-strategy.md",
  blogContentDir: "content/blog",

  // Content generation
  contentModel: "claude-sonnet-4-5-20250929" as const,
  maxBlogWordCount: 1500,
  minBlogWordCount: 1000,

  // Email
  emailFrom: "noreply@saunders-simmons.co.uk",
  emailSubjectPrefix: "Saunders Simmons SEO Report",

  // Site
  siteUrl: "https://www.saunders-simmons.co.uk",
  siteName: "Saunders Simmons",
};
```

**Step 2: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add scripts/seo-agent/config.ts && git commit -m "feat(seo): add agent config"
```

---

### Task 9: SEO Agent — rankings.ts

**Files:**
- Create: `scripts/seo-agent/rankings.ts`

**Step 1: Create rankings module**

Copy from PaperRoute reference at `/Users/nick/Documents/code/paperroute_website/scripts/seo-agent/rankings.ts` — it's site-agnostic (uses CONFIG values). No changes needed.

Create `scripts/seo-agent/rankings.ts` with the exact same content as the PaperRoute version.

**Step 2: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add scripts/seo-agent/rankings.ts && git commit -m "feat(seo): add rankings module"
```

---

### Task 10: SEO Agent — content.ts

**Files:**
- Create: `scripts/seo-agent/content.ts`

**Step 1: Create content module**

Copy from PaperRoute reference and adapt:

1. **IMAGE_POOL** — Replace with Saunders Simmons image categories:

```typescript
const IMAGE_POOL: Record<string, string[]> = {
  coding: [
    "/images/blog/01-laptop-cpp-application.webp",
    "/images/blog/02-computer-coding-html.webp",
    "/images/blog/03-person-coding-macbook.webp",
    "/images/blog/04-developer-typing-laptop.webp",
    "/images/blog/05-dual-monitor-coding.webp",
  ],
  infrastructure: [
    "/images/blog/06-engineer-server-racks.webp",
    "/images/blog/46-server-racks-data-center.webp",
  ],
  workspace: [
    "/images/blog/07-laptop-monitor-desk.webp",
    "/images/blog/08-computer-workspace-setup.webp",
    "/images/blog/09-minimalist-workspace-coffee.webp",
    "/images/blog/10-laptop-coffee-books-desk.webp",
    "/images/blog/11-cozy-workspace-notebooks.webp",
    "/images/blog/12-laptop-desk-coffee-books.webp",
    "/images/blog/47-monitor-wooden-desk.webp",
    "/images/blog/50-laptop-notepad-coffee.webp",
  ],
  design: [
    "/images/blog/13-wireframe-design-paper.webp",
    "/images/blog/14-whiteboard-sticky-notes.webp",
    "/images/blog/15-sticky-notes-whiteboard.webp",
  ],
  meetings: [
    "/images/blog/16-people-meeting-laptops.webp",
    "/images/blog/17-creative-office-team.webp",
    "/images/blog/18-group-meeting-office.webp",
    "/images/blog/19-business-meeting.webp",
    "/images/blog/20-colleagues-meeting-office.webp",
    "/images/blog/21-two-men-business-laptops.webp",
    "/images/blog/22-two-people-table-talking.webp",
    "/images/blog/23-people-business-meeting.webp",
    "/images/blog/24-online-consultation.webp",
  ],
  analytics: [
    "/images/blog/25-laptop-showing-graphs.webp",
    "/images/blog/26-silver-laptop-analytics.webp",
    "/images/blog/27-person-using-laptop.webp",
    "/images/blog/28-laptop-screen-calendar.webp",
  ],
  devices: [
    "/images/blog/29-modern-desk-multiple-devices.webp",
    "/images/blog/30-office-workspace-smartphone.webp",
    "/images/blog/31-big-monitor-setup.webp",
    "/images/blog/32-dual-monitors-desk.webp",
    "/images/blog/33-phone-social-networks.webp",
    "/images/blog/34-phone-instagram-login.webp",
    "/images/blog/35-android-smartphone-apps.webp",
    "/images/blog/38-person-holding-smartphones.webp",
    "/images/blog/49-person-holding-phone.webp",
  ],
  business: [
    "/images/blog/36-cafe-owner-smiling.webp",
    "/images/blog/37-calendar-closeup.webp",
    "/images/blog/39-professional-handshake.webp",
    "/images/blog/40-people-handshake.webp",
    "/images/blog/41-handshake-closeup.webp",
    "/images/blog/42-person-typing-laptop.webp",
    "/images/blog/43-typing-computer-keyboard.webp",
    "/images/blog/44-person-typing-documents.webp",
    "/images/blog/45-typing-laptop-closeup.webp",
    "/images/blog/48-people-office-working.webp",
  ],
};
```

2. **categoryMap** — Replace keyword-to-category mappings:

```typescript
const categoryMap: [RegExp, string][] = [
  [/web design|website|responsive|mobile-first|UI|UX|wireframe|layout|redesign/, "design"],
  [/SEO|search engine|ranking|keyword|analytics|google|traffic|backlink/, "analytics"],
  [/software|app|develop|code|program|API|cloud|automat/, "coding"],
  [/server|host|infrastructure|cloud|devops|deploy/, "infrastructure"],
  [/social media|instagram|facebook|marketing|content|brand/, "devices"],
  [/business|client|consult|strategy|startup|small business|agency/, "business"],
  [/team|meeting|collaborat|project|management/, "meetings"],
  [/office|workspace|remote|productiv|freelanc/, "workspace"],
  [/mobile|phone|responsive|device|tablet/, "devices"],
  [/ecommerce|shop|online store|WooCommerce|Shopify/, "workspace"],
];
```

3. **Content generation prompt** — Replace business context:
- "Saunders Simmons (saunders-simmons.co.uk), a web design and digital marketing agency based in Yeovil, Somerset, serving UK businesses"
- Tone: "Professional but conversational. Write for small business owners and marketing managers, not developers."
- Pillar options: "web-design", "seo-marketing", or "software-development"
- Remove all PaperRoute/waste-specific references

4. **generateNewTopic prompt** — Replace with digital agency context

5. **Author** — "Saunders Simmons" instead of "PaperRoute"

All structural code (getExistingPosts, pickNextTopic, findPostToRefresh, refreshPost, calculateWordCount, pickImage, getUsedImages) stays identical.

**Step 2: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add scripts/seo-agent/content.ts && git commit -m "feat(seo): add content generation module with image pool"
```

---

### Task 11: SEO Agent — competitors.ts

**Files:**
- Create: `scripts/seo-agent/competitors.ts`

**Step 1: Create competitors module**

Copy from PaperRoute reference. Replace the `COMPETITORS` array with web design/SEO competitors identified in the strategy document (Task 7). Replace User-Agent string with `"SaundersSimmons-SEO-Agent/1.0"`.

**Step 2: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add scripts/seo-agent/competitors.ts && git commit -m "feat(seo): add competitor tracking module"
```

---

### Task 12: SEO Agent — linking.ts

**Files:**
- Create: `scripts/seo-agent/linking.ts`

**Step 1: Create linking module**

Copy from PaperRoute reference at `/Users/nick/Documents/code/paperroute_website/scripts/seo-agent/linking.ts` — it's site-agnostic (uses CONFIG values). No changes needed.

**Step 2: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add scripts/seo-agent/linking.ts && git commit -m "feat(seo): add internal linking module"
```

---

### Task 13: SEO Agent — strategy.ts

**Files:**
- Create: `scripts/seo-agent/strategy.ts`

**Step 1: Create strategy module**

Copy from PaperRoute reference. Replace the Claude prompt context:
- "saunders-simmons.co.uk, a web design and digital marketing agency targeting UK businesses"
- Remove waste/DWT-specific references
- Adjust recommendation categories for digital agency context

**Step 2: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add scripts/seo-agent/strategy.ts && git commit -m "feat(seo): add SEO strategy recommendations module"
```

---

### Task 14: SEO Agent — publish.ts

**Files:**
- Create: `scripts/seo-agent/publish.ts`

**Step 1: Create publish module**

Copy from PaperRoute reference — it's site-agnostic (uses CONFIG values). Change "Monthly" to "Weekly" in session log entry text:

```typescript
const newEntry = `### ${today} — Automated Weekly SEO Agent Run
- **What was done:** ${summary}
- **Run type:** Automated (GitHub Actions)
`;
```

And update commit message prefix:

```typescript
const commitMsg = blogTitle
  ? `chore(seo): weekly update — rankings + new blog post`
  : "chore(seo): weekly update — rankings check";
```

**Step 2: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add scripts/seo-agent/publish.ts && git commit -m "feat(seo): add git publish module"
```

---

### Task 15: SEO Agent — email.ts

**Files:**
- Create: `scripts/seo-agent/email.ts`

**Step 1: Create email module**

Copy from PaperRoute reference. Replace:
- Header background color: Use `#1e3a5f` (dark professional blue) or similar
- Header text: `"Saunders Simmons SEO Report — ${monthYear}"`
- Footer text: `"Saunders Simmons SEO Agent · Automated weekly report"`

**Step 2: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add scripts/seo-agent/email.ts && git commit -m "feat(seo): add email report module"
```

---

### Task 16: SEO Agent — supabase.ts

**Files:**
- Create: `scripts/seo-agent/supabase.ts`

**Step 1: Create supabase module**

Copy from PaperRoute reference. Change:
- `TABLE_NAME` = `"saunders_simmons_runs"`
- AI note prompt context: "SEO agent for Saunders Simmons (saunders-simmons.co.uk), a UK web design and digital marketing agency"

**Step 2: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add scripts/seo-agent/supabase.ts && git commit -m "feat(seo): add Supabase logging module"
```

---

### Task 17: SEO Agent — index.ts

**Files:**
- Create: `scripts/seo-agent/index.ts`

**Step 1: Create the pipeline orchestrator**

Copy from PaperRoute reference at `/Users/nick/Documents/code/paperroute_website/scripts/seo-agent/index.ts`. Replace:
- Banner text: `"=== Saunders Simmons Weekly SEO Agent ==="`

Everything else is site-agnostic — it imports from the other modules.

**Step 2: Verify TypeScript compiles**

Run: `cd /Users/nick/Documents/websites/sands && npx tsx --version`
Expected: tsx version output (confirms tsx is installed)

**Step 3: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add scripts/seo-agent/index.ts && git commit -m "feat(seo): add pipeline orchestrator"
```

---

### Task 18: GitHub Actions Workflow

**Files:**
- Create: `.github/workflows/seo-agent.yml`
- Delete: `.github/workflows/blog-generation.yml`

**Step 1: Create the SEO agent workflow**

```bash
mkdir -p /Users/nick/Documents/websites/sands/.github/workflows
```

Create `.github/workflows/seo-agent.yml`:

```yaml
name: Weekly SEO Agent

on:
  schedule:
    - cron: '0 9 * * 1' # Every Monday at 09:00 UTC
  workflow_dispatch: {} # Manual trigger for testing

permissions:
  contents: write
  pull-requests: write

jobs:
  seo-agent:
    runs-on: ubuntu-latest

    steps:
      - name: Random delay (09:00-15:00 window)
        if: github.event_name == 'schedule'
        run: |
          DELAY=$((RANDOM % 21600))
          echo "Sleeping for $((DELAY / 60)) minutes before starting..."
          sleep $DELAY

      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run SEO Agent
        run: npx tsx scripts/seo-agent/index.ts
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
          GOOGLE_SERVICE_ACCOUNT_KEY: ${{ secrets.GOOGLE_SERVICE_ACCOUNT_KEY }}
          RESEND_API_KEY: ${{ secrets.RESEND_API_KEY }}
          REPORT_EMAIL: ${{ secrets.REPORT_EMAIL }}
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_SERVICE_ROLE_KEY: ${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}
```

**Step 2: Remove the old autoblogger workflow**

```bash
rm /Users/nick/Documents/websites/sands/.github/workflows/blog-generation.yml
```

**Step 3: Commit**

```bash
cd /Users/nick/Documents/websites/sands && git add .github/workflows/seo-agent.yml && git rm .github/workflows/blog-generation.yml && git commit -m "feat(seo): add weekly SEO agent workflow, remove old autoblogger"
```

---

### Task 19: Create Supabase Table

**Step 1: Run SQL in Supabase dashboard**

Provide the user with this SQL to run in the Supabase SQL editor:

```sql
CREATE TABLE saunders_simmons_runs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  trigger_type TEXT,
  status TEXT,
  duration_seconds INTEGER,
  error_message TEXT,
  keywords_tracked INTEGER,
  avg_position NUMERIC,
  total_clicks INTEGER,
  total_impressions INTEGER,
  rankings_data JSONB,
  blog_post_title TEXT,
  blog_post_keyword TEXT,
  blog_post_slug TEXT,
  blog_post_is_refresh BOOLEAN,
  blog_post_refresh_reason TEXT,
  blog_post_word_count INTEGER,
  links_added INTEGER,
  linking_details JSONB,
  competitor_data JSONB,
  recommendations JSONB,
  session_summary TEXT,
  ai_note_to_self TEXT
);

CREATE INDEX idx_saunders_simmons_runs_created ON saunders_simmons_runs(created_at DESC);
```

Also ensure the `agent_triggers` table exists (should already exist from other sites).

**Step 2: Verify table created**

Check in Supabase dashboard that `saunders_simmons_runs` table exists with all columns.

---

### Task 20: Register in SEO Portal

**Files:**
- Modify: `/Users/nick/Documents/code/seo-admin/src/lib/sites.ts`
- Modify: `/Users/nick/Documents/code/seo-admin/src/app/api/strategy/route.ts`

**Step 1: Add to KNOWN_SITES**

In `/Users/nick/Documents/code/seo-admin/src/lib/sites.ts`, add after the `crosscut` entry in KNOWN_SITES:

```typescript
  saunders_simmons: { name: "Saunders Simmons", url: "saunders-simmons.co.uk", color: "#1e3a5f", repo: "sandsltd/ssnewsite", workflowFile: "seo-agent.yml" },
```

**Step 2: Add to SITE_REPOS**

In `/Users/nick/Documents/code/seo-admin/src/app/api/strategy/route.ts`, add after the `crosscut` entry:

```typescript
  saunders_simmons: "sandsltd/ssnewsite",
```

**Step 3: Commit and push portal changes**

```bash
cd /Users/nick/Documents/code/seo-admin && git add src/lib/sites.ts src/app/api/strategy/route.ts && git commit -m "feat: register Saunders Simmons in portal" && git push
```

---

### Task 21: Verify Build & Push

**Step 1: Full build verification**

Run: `cd /Users/nick/Documents/websites/sands && npx next build`
Expected: Build succeeds with no errors.

**Step 2: Push all changes**

```bash
cd /Users/nick/Documents/websites/sands && git push origin main
```

**Step 3: Configure GitHub secrets**

Provide the user with the list of secrets to configure in GitHub (Settings > Secrets and variables > Actions):
- `ANTHROPIC_API_KEY`
- `GOOGLE_SERVICE_ACCOUNT_KEY`
- `RESEND_API_KEY`
- `REPORT_EMAIL`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

**Step 4: Manual workflow trigger**

After secrets are configured, trigger the workflow manually from GitHub Actions to verify the full pipeline works end-to-end.
