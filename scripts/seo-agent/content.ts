import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { CONFIG } from "./config";

// Image pool categorised by topic
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

const ALL_BLOG_IMAGES = Object.values(IMAGE_POOL).flat();

function getUsedImages(): Set<string> {
  const used = new Set<string>();
  const blogDir = path.join(process.cwd(), CONFIG.blogContentDir);
  if (!fs.existsSync(blogDir)) return used;

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  for (const file of files) {
    const content = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const match = content.match(/heroImage:\s*"([^"]+)"/);
    if (match) used.add(match[1]);
  }
  return used;
}

function pickImage(keyword: string): string {
  const usedImages = getUsedImages();
  const kw = keyword.toLowerCase();

  // Map keywords to categories
  const categoryMap: [RegExp, string][] = [
    [/web design|website|responsive|mobile-first|UI|UX|wireframe|layout|redesign/i, "design"],
    [/SEO|search engine|ranking|keyword|analytics|google|traffic|backlink/i, "analytics"],
    [/software|app|develop|code|program|API|cloud|automat/i, "coding"],
    [/server|host|infrastructure|cloud|devops|deploy/i, "infrastructure"],
    [/social media|instagram|facebook|marketing|content|brand/i, "devices"],
    [/business|client|consult|strategy|startup|small business|agency/i, "business"],
    [/team|meeting|collaborat|project|management/i, "meetings"],
    [/office|workspace|remote|productiv|freelanc/i, "workspace"],
    [/mobile|phone|responsive|device|tablet/i, "devices"],
    [/ecommerce|shop|online store|WooCommerce|Shopify/i, "workspace"],
  ];

  // Find matching category
  for (const [pattern, category] of categoryMap) {
    if (pattern.test(kw)) {
      const pool = IMAGE_POOL[category] || [];
      const available = pool.filter((img) => !usedImages.has(img));
      if (available.length > 0) {
        return available[Math.floor(Math.random() * available.length)];
      }
    }
  }

  // Fallback: any unused image
  const available = ALL_BLOG_IMAGES.filter((img) => !usedImages.has(img));
  if (available.length > 0) {
    return available[Math.floor(Math.random() * available.length)];
  }

  // All used — cycle through
  return ALL_BLOG_IMAGES[Math.floor(Math.random() * ALL_BLOG_IMAGES.length)];
}

interface RankingData {
  keyword: string;
  position: number | null;
  previousPosition: string;
}

interface GeneratedPost {
  filename: string;
  title: string;
  slug: string;
  targetKeyword: string;
  mdxContent: string;
  isRefresh: boolean;
  wordCount: number;
  refreshReason: string | null;
  heroImage: string;
}

function calculateWordCount(mdxContent: string): number {
  // Strip frontmatter
  const withoutFrontmatter = mdxContent.replace(/^---[\s\S]*?---/, "").trim();
  // Split on whitespace and filter empty strings
  return withoutFrontmatter.split(/\s+/).filter((w) => w.length > 0).length;
}

interface ExistingPost {
  filename: string;
  title: string;
  slug: string;
  targetKeyword: string;
  publishedAt: string;
}

function getExistingPosts(): {
  keywords: Set<string>;
  titles: string[];
  posts: ExistingPost[];
} {
  const blogDir = path.join(process.cwd(), CONFIG.blogContentDir);
  const keywords = new Set<string>();
  const titles: string[] = [];
  const posts: ExistingPost[] = [];

  if (!fs.existsSync(blogDir)) return { keywords, titles, posts };

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  for (const file of files) {
    const content = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const fm = frontmatterMatch[1];
      const kwMatch = fm.match(/targetKeyword:\s*"([^"]+)"/);
      if (kwMatch) keywords.add(kwMatch[1].toLowerCase());
      const titleMatch = fm.match(/title:\s*"([^"]+)"/);
      if (titleMatch) titles.push(titleMatch[1]);
      const slugMatch = fm.match(/slug:\s*"([^"]+)"/);
      const dateMatch = fm.match(/publishedAt:\s*"([^"]+)"/);

      posts.push({
        filename: file,
        title: titleMatch?.[1] || "",
        slug: slugMatch?.[1] || "",
        targetKeyword: kwMatch?.[1] || "",
        publishedAt: dateMatch?.[1] || "",
      });
    }
  }

  return { keywords, titles, posts };
}

function pickNextTopic(strategyContent: string): {
  keyword: string;
  context: string;
} | null {
  const { keywords: existingKeywords } = getExistingPosts();

  const contentPriorities: { keyword: string; context: string }[] = [];

  // First check the content priority list
  const prioritySection = strategyContent.match(
    /\*\*Content to create \(in priority order\):\*\*([\s\S]*?)(?=\n---|\n##)/
  );
  if (prioritySection) {
    const items = prioritySection[1].match(/\d+\.\s+(.+)/g);
    if (items) {
      for (const item of items) {
        const text = item.replace(/^\d+\.\s+/, "").trim();
        const quotedMatch = text.match(/"([^"]+)"/);
        const keyword = quotedMatch ? quotedMatch[1] : text.split(":")[0];
        contentPriorities.push({ keyword, context: text });
      }
    }
  }

  // Then check tier keywords that don't have posts yet
  const tierRegex =
    /### Tier \d+ — \w+.*?\n\n((?:\|.*\n)*)/g;
  let tierMatch;
  while ((tierMatch = tierRegex.exec(strategyContent)) !== null) {
    const rows = tierMatch[1].match(
      /\|\s*\d+\s*\|\s*([^|]+?)\s*\|[^|]*\|[^|]*\|([^|]*)\|([^|]*)\|/g
    );
    if (rows) {
      for (const row of rows) {
        const parts = row.split("|").filter((p) => p.trim());
        if (parts.length >= 5) {
          const keyword = parts[1].trim();
          const targetPage = parts[4].trim();
          if (
            keyword !== "Keyword" &&
            targetPage.toLowerCase().includes("blog")
          ) {
            contentPriorities.push({
              keyword,
              context: `Target page: ${targetPage}`,
            });
          }
        }
      }
    }
  }

  for (const topic of contentPriorities) {
    if (!existingKeywords.has(topic.keyword.toLowerCase())) {
      return topic;
    }
  }

  return null;
}

async function generateNewTopic(
  strategyContent: string
): Promise<{ keyword: string; context: string }> {
  const { titles } = getExistingPosts();
  const anthropic = new Anthropic();

  const response = await anthropic.messages.create({
    model: CONFIG.contentModel,
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `You are an SEO strategist for Saunders Simmons (saunders-simmons.co.uk), a web design and digital marketing agency based in Yeovil, Somerset, serving UK businesses.

## SEO Strategy
${strategyContent}

## Existing Blog Posts
${titles.length > 0 ? titles.map((t) => `- ${t}`).join("\n") : "None yet."}

## Your Task
Suggest ONE new blog post topic that would be valuable for SEO. Consider:
- Long-tail keywords small business owners and marketing managers might search for
- Practical problems businesses face (web presence, online visibility, branding, lead generation, digital marketing)
- Industry trends and best practices (responsive design, SEO, social media marketing, e-commerce)
- Topics that complement existing posts without duplicating them
- Seasonal or timely angles relevant to UK businesses

Respond in EXACTLY this JSON format, nothing else:
{"keyword": "the target keyword phrase", "context": "A 1-2 sentence description of the article angle and why it's valuable for SEO"}`,
      },
    ],
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";
  const parsed = JSON.parse(text);
  return { keyword: parsed.keyword, context: parsed.context };
}

function findPostToRefresh(
  rankings: RankingData[]
): { post: ExistingPost; reason: string } | null {
  const { posts } = getExistingPosts();
  if (posts.length === 0) return null;

  const now = new Date();

  for (const post of posts) {
    // Only consider posts older than 60 days
    const publishedDate = new Date(post.publishedAt);
    const ageInDays =
      (now.getTime() - publishedDate.getTime()) / (1000 * 60 * 60 * 24);
    if (ageInDays < 60) continue;

    const ranking = rankings.find(
      (r) => r.keyword.toLowerCase() === post.targetKeyword.toLowerCase()
    );
    if (!ranking) continue;

    // Detect declining rankings
    const prevMatch = ranking.previousPosition.match(/Position ([\d.]+)/);
    if (prevMatch && ranking.position !== null) {
      const prev = parseFloat(prevMatch[1]);
      const drop = ranking.position - prev;
      // Position increased by 5+ (dropped in rankings)
      if (drop >= 5) {
        return {
          post,
          reason: `Ranking dropped from #${prev} to #${ranking.position} for "${ranking.keyword}"`,
        };
      }
    }

    // Detect posts that were indexed but are now gone
    if (prevMatch && ranking.position === null) {
      return {
        post,
        reason: `Lost ranking for "${ranking.keyword}" (was Position ${prevMatch[1]}, now not indexed)`,
      };
    }

    // Detect posts older than 4 months that never ranked
    if (ageInDays > 120 && ranking.position === null) {
      return {
        post,
        reason: `Published ${Math.round(ageInDays)} days ago and still not ranking for "${ranking.keyword}"`,
      };
    }
  }

  return null;
}

export async function generateBlogPost(
  strategyContent: string,
  rankings: RankingData[] = []
): Promise<GeneratedPost | null> {
  // Check if any existing post needs refreshing first
  const refreshCandidate = findPostToRefresh(rankings);

  if (refreshCandidate) {
    console.log(
      `Refreshing post: "${refreshCandidate.post.title}" — ${refreshCandidate.reason}`
    );
    return await refreshPost(refreshCandidate.post, refreshCandidate.reason, strategyContent);
  }

  let topic = pickNextTopic(strategyContent);

  if (!topic) {
    console.log(
      "All planned topics covered. Generating a new topic with AI..."
    );
    topic = await generateNewTopic(strategyContent);
    console.log(`AI suggested topic: "${topic.keyword}"`);
  }

  console.log(`Generating blog post for keyword: "${topic.keyword}"`);

  const heroImage = pickImage(topic.keyword);
  console.log(`Selected hero image: ${heroImage}`);

  const anthropic = new Anthropic();

  const today = new Date().toISOString().split("T")[0];

  const prompt = `You are writing a blog post for Saunders Simmons (saunders-simmons.co.uk), a web design and digital marketing agency based in Yeovil, Somerset, serving UK businesses.

## SEO Strategy Context
${strategyContent}

## Your Task
Write a blog post targeting this keyword: "${topic.keyword}"
Context: ${topic.context}

## Requirements
- Length: ${CONFIG.minBlogWordCount}-${CONFIG.maxBlogWordCount} words
- Language: UK English (use "s" not "z" in words like "optimisation", "organisation")
- Tone: Professional but conversational. Write for small business owners and marketing managers, not developers.
- Include the target keyword naturally 3-5 times. Don't keyword-stuff.
- Include internal links to ${CONFIG.siteUrl} features where natural
- Structure with clear H2 and H3 headings
- Include a practical, actionable conclusion
- Determine the correct pillar for this topic: "web-design", "seo-marketing", or "software-development"

## Output Format
Return ONLY the MDX file content including frontmatter. No explanation, no code fences. Start with --- and end with the last line of content.

The frontmatter must include:
---
title: "Post Title Here"
slug: "url-friendly-slug"
description: "Meta description under 160 characters targeting the keyword"
keywords: ["${topic.keyword}", "related keyword 1", "related keyword 2"]
publishedAt: "${today}"
targetKeyword: "${topic.keyword}"
author: "Saunders Simmons"
pillar: "web-design|seo-marketing|software-development"
heroImage: "${heroImage}"
---`;

  const response = await anthropic.messages.create({
    model: CONFIG.contentModel,
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });

  const mdxContent =
    response.content[0].type === "text" ? response.content[0].text : "";

  const slugMatch = mdxContent.match(/slug:\s*"([^"]+)"/);
  const slug = slugMatch ? slugMatch[1] : topic.keyword.toLowerCase().replace(/\s+/g, "-");

  const titleMatch = mdxContent.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : topic.keyword;

  const datePrefix = today.slice(0, 7);
  const filename = `${datePrefix}-${slug}.mdx`;

  const blogDir = path.join(process.cwd(), CONFIG.blogContentDir);
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }
  fs.writeFileSync(path.join(blogDir, filename), mdxContent);

  console.log(`Blog post written: content/blog/${filename}`);

  return {
    filename,
    title,
    slug,
    targetKeyword: topic.keyword,
    mdxContent,
    isRefresh: false,
    wordCount: calculateWordCount(mdxContent),
    refreshReason: null,
    heroImage,
  };
}

async function refreshPost(
  post: ExistingPost,
  reason: string,
  strategyContent: string
): Promise<GeneratedPost> {
  const anthropic = new Anthropic();
  const blogDir = path.join(process.cwd(), CONFIG.blogContentDir);
  const filePath = path.join(blogDir, post.filename);
  const existingContent = fs.readFileSync(filePath, "utf-8");
  const today = new Date().toISOString().split("T")[0];

  // Preserve existing hero image or pick a new one
  const existingImageMatch = existingContent.match(/heroImage:\s*"([^"]+)"/);
  const heroImage = existingImageMatch ? existingImageMatch[1] : pickImage(post.targetKeyword);

  const prompt = `You are refreshing/rewriting a blog post for Saunders Simmons (saunders-simmons.co.uk), a web design and digital marketing agency based in Yeovil, Somerset, serving UK businesses.

## Why This Post Needs Refreshing
${reason}

## SEO Strategy Context
${strategyContent}

## Current Post Content
${existingContent}

## Your Task
Rewrite and improve this blog post. The goal is to make it rank better for the target keyword: "${post.targetKeyword}"

## What To Improve
- Update any outdated information
- Improve the structure and readability
- Add more practical, actionable advice
- Strengthen the keyword targeting without stuffing
- Add more industry-specific terminology business owners would search for
- Make the introduction more compelling
- Ensure the content is comprehensive and answers searcher intent fully

## Requirements
- Length: ${CONFIG.minBlogWordCount}-${CONFIG.maxBlogWordCount} words
- Language: UK English (use "s" not "z" in words like "optimisation", "organisation")
- Tone: Professional but conversational. Write for small business owners and marketing managers, not developers.
- Include the target keyword naturally 3-5 times
- Include internal links to ${CONFIG.siteUrl} features where natural
- Keep the same slug, but you can update the title and description
- Structure with clear H2 and H3 headings
- Include the pillar field matching the original

## Output Format
Return ONLY the MDX file content including frontmatter. No explanation, no code fences. Start with --- and end with the last line of content.

The frontmatter must include:
---
title: "Updated Post Title"
slug: "${post.slug}"
description: "Updated meta description under 160 characters"
keywords: ["${post.targetKeyword}", "related keyword 1", "related keyword 2"]
publishedAt: "${post.publishedAt}"
updatedAt: "${today}"
targetKeyword: "${post.targetKeyword}"
author: "Saunders Simmons"
pillar: "web-design|seo-marketing|software-development"
heroImage: "${heroImage}"
---`;

  const response = await anthropic.messages.create({
    model: CONFIG.contentModel,
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });

  const mdxContent =
    response.content[0].type === "text" ? response.content[0].text : "";

  const titleMatch = mdxContent.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : post.title;

  // Overwrite existing file
  fs.writeFileSync(filePath, mdxContent);
  console.log(`Refreshed post: content/blog/${post.filename}`);

  return {
    filename: post.filename,
    title,
    slug: post.slug,
    targetKeyword: post.targetKeyword,
    mdxContent,
    isRefresh: true,
    wordCount: calculateWordCount(mdxContent),
    refreshReason: reason,
    heroImage,
  };
}
