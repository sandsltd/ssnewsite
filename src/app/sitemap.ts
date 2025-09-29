import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.saunders-simmons.co.uk'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Dynamically load blog posts from the autoblogger
  let blogPosts: MetadataRoute.Sitemap = []
  
  try {
    const postsDirectory = path.join(process.cwd(), 'content', 'posts')
    
    if (fs.existsSync(postsDirectory)) {
      const files = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'))
      
      blogPosts = files.map(file => {
        const filePath = path.join(postsDirectory, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data } = matter(fileContent)
        
        // Extract slug from filename (remove date prefix and .md extension)
        const slug = file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace('.md', '').replace(/-\d+$/, '')
        
        return {
          url: `${baseUrl}/blogs/${slug}`,
          lastModified: data.date ? new Date(data.date) : new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }
      })
    }
  } catch (error) {
    console.error('Error reading blog posts for sitemap:', error)
  }

  // Old static blog posts (if they still exist)
  const oldBlogPosts = [
    {
      url: `${baseUrl}/blog/local-seo-yeovil-guide`,
      lastModified: new Date('2024-12-28'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/web-design-yeovil-case-study`,
      lastModified: new Date('2024-12-28'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/web-design-somerset-2025`,
      lastModified: new Date('2024-12-28'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/seo-tips-dorset-businesses`,
      lastModified: new Date('2024-12-28'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/website-redesign-roi`,
      lastModified: new Date('2024-12-28'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/mobile-first-design-2025`,
      lastModified: new Date('2024-12-28'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  return [...staticPages, ...blogPosts, ...oldBlogPosts]
}
