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
  emailFrom: "Paige SEO <hello@saunders-simmons.co.uk>",
  emailSubjectPrefix: "Saunders Simmons SEO Report",

  // Site
  siteUrl: "https://www.saunders-simmons.co.uk",
  siteName: "Saunders Simmons",
};
