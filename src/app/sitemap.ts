import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.saunders-simmons.co.uk';
  const corporatePages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/services/software',
    '/services/web-design',
    '/portfolio',
    '/faq',
    '/blog',
    '/privacy',
    '/terms',
    '/cookies',
    '/ampra/support',
    '/ampra/privacy',
    '/ampra/terms',
  ];

  const staticPages: MetadataRoute.Sitemap = corporatePages.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === '/blog' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : route.startsWith('/ampra/') ? 0.3 : 0.7,
  }));

  const articles: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    ...(post.publishedAt && !Number.isNaN(Date.parse(post.publishedAt))
      ? { lastModified: post.publishedAt }
      : {}),
    changeFrequency: 'yearly',
    priority: 0.4,
  }));

  const historicalArticles: MetadataRoute.Sitemap = [
    'local-seo-yeovil-guide',
    'web-design-yeovil-case-study',
    'web-design-somerset-2025',
    'seo-tips-dorset-businesses',
    'website-redesign-roi',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: 'yearly',
    priority: 0.3,
  }));

  return [...staticPages, ...articles, ...historicalArticles];
}
