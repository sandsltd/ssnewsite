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
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
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
        
        // Use full filename as slug (just remove .md extension)
        const slug = file.replace('.md', '')
        
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

  // MDX blog posts from SEO agent
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

  return [...staticPages, ...blogPosts, ...mdxBlogPosts, ...oldBlogPosts]
}
