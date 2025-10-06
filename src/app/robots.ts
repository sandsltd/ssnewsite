import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.saunders-simmons.co.uk'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',          // Block API routes
          '/_next/',        // Block Next.js internal files
          '/private/',      // Block any private directories
          '*.json',         // Block JSON files (like booking data)
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',      // Block OpenAI's GPTBot from scraping
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',      // Block ChatGPT user bot
      },
      {
        userAgent: 'CCBot',
        disallow: '/',      // Block Common Crawl bot
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',      // Block Anthropic's bot
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',      // Block Claude web bot
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
