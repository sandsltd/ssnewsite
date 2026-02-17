import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { CONFIG } from "./config";

export interface LinkingResult {
  total: number;
  details: { postTitle: string; linksAdded: number }[];
}

interface PostInfo {
  filename: string;
  title: string;
  slug: string;
  targetKeyword: string;
  description: string;
}

// Service and location pages to include as link targets
const SITE_PAGES = [
  { title: "Web Design Services", url: "/services/web-design" },
  { title: "SEO & Digital Marketing", url: "/services/seo" },
  { title: "Software Development", url: "/services/software" },
  { title: "Web Design Yeovil", url: "/web-design-yeovil" },
  { title: "Web Design Somerset", url: "/web-design-somerset" },
  { title: "Web Design Dorset", url: "/web-design-dorset" },
  { title: "WordPress Web Design Yeovil", url: "/wordpress-web-design-yeovil" },
  { title: "Portfolio", url: "/portfolio" },
  { title: "FAQ", url: "/faq" },
];

function getAllPosts(): PostInfo[] {
  const blogDir = path.join(process.cwd(), CONFIG.blogContentDir);
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  const posts: PostInfo[] = [];

  for (const filename of files) {
    const content = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) continue;

    const fm = frontmatterMatch[1];
    const title = fm.match(/title:\s*"([^"]+)"/)?.[1] || "";
    const slug = fm.match(/slug:\s*"([^"]+)"/)?.[1] || "";
    const targetKeyword = fm.match(/targetKeyword:\s*"([^"]+)"/)?.[1] || "";
    const description = fm.match(/description:\s*"([^"]+)"/)?.[1] || "";

    if (title && slug) {
      posts.push({ filename, title, slug, targetKeyword, description });
    }
  }

  return posts;
}

export async function addInternalLinks(): Promise<LinkingResult> {
  const posts = getAllPosts();
  const details: { postTitle: string; linksAdded: number }[] = [];

  if (posts.length < 2) {
    console.log("Not enough posts for internal linking.");
    return { total: 0, details };
  }

  const anthropic = new Anthropic();
  const blogDir = path.join(process.cwd(), CONFIG.blogContentDir);

  let totalLinksAdded = 0;

  for (const post of posts) {
    const filePath = path.join(blogDir, post.filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Split frontmatter and body
    const fmEnd = fileContent.indexOf("---", 4);
    if (fmEnd === -1) continue;
    const frontmatter = fileContent.slice(0, fmEnd + 3);
    const body = fileContent.slice(fmEnd + 3);

    // Check how many internal links already exist (blog + service + location)
    const existingBlogLinks = (body.match(/\[([^\]]+)\]\(\/blog\//g) || []).length;
    const existingServiceLinks = (body.match(/\[([^\]]+)\]\(\/(services|web-design-yeovil|web-design-somerset|web-design-dorset|wordpress-web-design-yeovil|portfolio|faq)/g) || []).length;
    const totalExisting = existingBlogLinks + existingServiceLinks;

    if (totalExisting >= 5) {
      continue;
    }

    // Get other posts (not this one)
    const otherPosts = posts.filter((p) => p.slug !== post.slug);
    if (otherPosts.length === 0) continue;

    const otherPostsList = otherPosts
      .map(
        (p) =>
          `- Title: "${p.title}" | URL: /blog/${p.slug} | Keyword: "${p.targetKeyword}"`
      )
      .join("\n");

    const sitePagesList = SITE_PAGES
      .map((p) => `- ${p.title}: ${p.url}`)
      .join("\n");

    const maxNewLinks = Math.max(1, 5 - totalExisting);

    const response = await anthropic.messages.create({
      model: CONFIG.contentModel,
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: `You are adding internal links to a blog post for Saunders Simmons, a web design and digital marketing agency. The goal is to naturally link to related content where it makes sense contextually.

## Current Post
Title: "${post.title}"
Target keyword: "${post.targetKeyword}"

## Post Body (MDX)
${body}

## Other Blog Posts Available to Link To
${otherPostsList}

## Service Pages Available to Link To
${sitePagesList}

## Existing Internal Links
This post already has ${totalExisting} internal links (${existingBlogLinks} blog, ${existingServiceLinks} service/page).

## Rules
- Add up to ${maxNewLinks} internal links where contextually relevant
- Prioritise service page links (e.g. /services/web-design, /services/seo) over blog-to-blog links
- Use natural anchor text that fits the sentence (not "click here" or the full title)
- Use markdown link format: [anchor text](/path)
- Only link where it genuinely makes sense — don't force links
- Do NOT change any other content — keep everything exactly the same
- Do NOT modify existing links
- Do NOT add links to external sites
- Return the COMPLETE post body with links added. No frontmatter, no code fences, no explanation.
- If no natural linking opportunities exist, return the body unchanged`,
        },
      ],
    });

    const newBody =
      response.content[0].type === "text" ? response.content[0].text : "";

    // Count new links added
    const newBlogLinks = (newBody.match(/\[([^\]]+)\]\(\/blog\//g) || []).length;
    const newServiceLinks = (newBody.match(/\[([^\]]+)\]\(\/(services|web-design-yeovil|web-design-somerset|web-design-dorset|wordpress-web-design-yeovil|portfolio|faq)/g) || []).length;
    const newTotal = newBlogLinks + newServiceLinks;
    const linksAdded = newTotal - totalExisting;

    if (linksAdded > 0) {
      fs.writeFileSync(filePath, frontmatter + "\n" + newBody.trim() + "\n");
      totalLinksAdded += linksAdded;
      details.push({ postTitle: post.title, linksAdded });
      console.log(
        `Added ${linksAdded} internal links to "${post.title}"`
      );
    }
  }

  return { total: totalLinksAdded, details };
}
